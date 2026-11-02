// 店内の本棚：本を実寸で段と区画に流し込み、画面のまん中に1台だけ置く（上に名札が下がる）
import { FORMATS, SHELF, thickness, getState, moveBook } from './store.js';
import { styleCase, endKind } from './design.js';
import { imageUrl } from './images.js';

const GAP = 0.6; // 本と本のすき間（mm）
const LEAN = 9; // 段の端の本が、左の本に寄りかかる角度（度）

// 本ごとに決まった小さなゆらぎ（-1〜1）。同じ本はいつも同じ値になる
function wobble(id) {
  let h = 0;
  for (const ch of String(id)) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return ((h >>> 0) % 1000) / 500 - 1;
}

function ink(hex) {
  const n = parseInt(hex.slice(1), 16);
  return (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255 > 0.62 ? '#2a2118' : '#fff';
}

function spineEl(b, s) {
  const f = FORMATS[b.format] || FORMATS.shiroku;
  // 同じ判型でも、出版社や刷りで高さがほんの少しちがう（文庫は±1.5mm、ほかは±4mm）
  const w = thickness(b) * s, h = (b.h || f.h + wobble(b.id) * (b.format === 'bunko' ? 1.5 : 4)) * s;
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'bk';
  el.dataset.id = b.id;
  el.setAttribute('aria-label', b.title ? `${b.title}（${b.author || '作者不明'}）` : '題名がまだの本');
  el.style.cssText = `width:${w}px;height:${h}px;background-color:${b.color || '#e9e4d8'};color:${ink(b.color || '#e9e4d8')};--w:${w}px;--lm:${h * Math.sin(LEAN * Math.PI / 180)}px`;
  const fs = Math.max(3, Math.min(w * 0.5, 14));
  el.innerHTML = `<i class="no"></i><span class="t" style="font-size:${fs}px"></span><span class="a" style="font-size:${fs * 0.62}px"></span><i class="pub"></i>`;
  el.querySelector('.t').textContent = b.title;
  el.querySelector('.a').textContent = b.author || '';
  // 撮った本は、写真から切り出した背表紙を貼る（描き直しは次の段階）
  if (b.img) {
    el.classList.add('photo');
    el.innerHTML = '';
    imageUrl(b.id).then(u => { if (u) { const im = new Image(); im.src = u; im.alt = ''; el.appendChild(im); } });
  }
  return el;
}


// ---- 並べ方 ----
// 本棚は「段」×「区画」のます目。ひたすら並べるときは、本を左上から順に流し込む。
// 陳列にこだわるときは、区画（見出しの札）ごとに新しいますから始め、入りきらなければ次のますへ続く
const DIV = 18;    // 区画どうしの仕切り板（mm）
const PLATE = 22;  // 見出しの札のぶん、段を高くする（mm）
const MAXFLAT = 6; // 平積みは6冊まで
const fmt = b => FORMATS[b.format] || FORMATS.shiroku;
const tall = b => b.h || fmt(b).h;
const widthOf = (b, curate) => curate && b.face ? fmt(b).w + 8 : thickness(b) + GAP;

// 色順：色相（虹の順）→ 明るさ
function hue(hex) {
  const n = parseInt((hex || '#e9e4d8').slice(1), 16), r = (n >> 16) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  if (d < 0.08) return 400 + (1 - mx) * 10;   // 白・灰・黒は最後に、明るい順
  const h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return (h * 60 + 360) % 360;
}
function sorted(books, sort) {
  if (sort === 'author') return [...books].sort((a, b) => (a.author || '～').localeCompare(b.author || '～', 'ja'));
  if (sort === 'color') return [...books].sort((a, b) => hue(a.color) - hue(b.color));
  return books;
}

// 区画ごとの本のまとまり
function groups(st) {
  if (st.display !== 'curate') return [{ title: '', end: null, flat: [], books: sorted(st.books, st.sort) }];
  const secs = st.sections || [];
  const gs = secs.map(s => ({ id: s.id, title: s.title, end: s.end, flat: s.flat || [], books: st.books.filter(b => b.sec === s.id) }));
  const loose = st.books.filter(b => !secs.some(s => s.id === b.sec));
  if (loose.length || !gs.length) gs.push({ id: null, title: '', end: st.looseEnd, flat: st.looseFlat || [], books: loose });
  return gs;
}

// 1つのまとまりを、横幅 W のますに流し込む。平積みはいちばん最後のますの右はしに置く
function cellsOf(g, W, curate) {
  let lying = curate && g.end && g.end.mode === 'flat'
    ? g.flat.map(id => g.books.find(b => b.id === id)).filter(Boolean).slice(0, MAXFLAT) : [];
  if (lying.length >= g.books.length) lying = lying.slice(0, Math.max(0, g.books.length - 1));
  const standing = g.books.filter(b => !lying.includes(b));
  const flatW = lying.length ? Math.max(...lying.map(tall)) + 3 : 0;
  const cells = [];
  let cur = [], w = 0;
  for (const b of standing) {
    const t = widthOf(b, curate);
    if (w + t > W && cur.length) { cells.push({ items: cur, used: w }); cur = []; w = 0; }
    cur.push(b); w += t;
  }
  // 平積みが入りきらないときは、最後の1冊もいっしょに次のますへ（平積みがいつも立てた本に寄りかかれるように）
  if (flatW && w + flatW > W && cur.length) {
    const moved = cur.pop();
    if (cur.length) cells.push({ items: cur, used: w - widthOf(moved, curate) });
    cur = [moved]; w = widthOf(moved, curate);
  }
  cells.push({ items: cur, used: w + flatW });
  return cells.map((c, i) => ({ ...c, g, plate: i === 0 ? g.title : '', flat: i === cells.length - 1 ? lying : [], last: i === cells.length - 1, free: W - c.used }));
}

// 本棚全体のます目を決める
export function layout(st) {
  const curate = st.display === 'curate';
  const cols = Math.max(1, st.cols || 1), IW = SHELF.inner * (st.wide || 1);
  const W = (IW - (cols - 1) * DIV) / cols;
  let cells = [];
  if (curate) groups(st).forEach(g => { cells = cells.concat(cellsOf(g, W, true)); });
  else cells = cellsOf(groups(st)[0], W, false);
  if (!curate && !cells[cells.length - 1].items.length) cells.pop();
  const rows = [];
  for (let i = 0; i < cells.length; i += cols) rows.push(cells.slice(i, i + cols));
  const minRows = st.minRows ?? SHELF.minRows;
  while (rows.length < minRows) rows.push([]);
  rows.forEach(r => { while (r.length < cols) r.push({ items: [], flat: [], plate: '', free: W, empty: true }); });
  const heights = rows.map(r => {
    const h = Math.max(0, ...r.flatMap(c => [...c.items.map(tall), c.flat.reduce((a, b) => a + thickness(b), 0)]));
    return Math.max(SHELF.rowH, h + 12) + (r.some(c => c.plate) ? PLATE : 0);
  });
  return { rows, heights, W, IW, cols, curate };
}

function coverEl(b, s) {
  const f = fmt(b), c = b.color || '#e9e4d8';
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'bk face';
  el.dataset.id = b.id;
  el.setAttribute('aria-label', `${b.title || '題名がまだの本'}（表紙を見せて飾っています）`);
  el.style.cssText = `width:${f.w * s}px;height:${tall(b) * s}px;background-color:${c};color:${ink(c)}`;
  const fs = Math.max(4, Math.min(f.w * s * 0.13, 15));
  el.innerHTML = `<span class="ct" style="font-size:${fs}px"></span><span class="ca" style="font-size:${fs * 0.6}px"></span>`;
  el.querySelector('.ct').textContent = b.title || '';
  el.querySelector('.ca').textContent = b.author || '';
  return el;
}
function flatEl(b, s, k) {
  const c = b.color || '#e9e4d8', w = (tall(b) + (k % 2 ? 2 : 0)) * s, h = thickness(b) * s;
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'bk flat';
  el.dataset.id = b.id;
  el.setAttribute('aria-label', `${b.title || '題名がまだの本'}（平積み）`);
  el.style.cssText = `width:${w}px;height:${h}px;background-color:${c};color:${ink(c)};font-size:${Math.max(3, Math.min(h * 0.6, 12))}px`;
  el.innerHTML = '<span class="t"></span><span class="a"></span><i class="pub"></i>';
  el.querySelector('.t').textContent = b.title || '';
  el.querySelector('.a').textContent = b.author || '';
  return el;
}

// 1つのますを描く（札・本・表紙・紹介カード・端の支え方）
function cellEl(cell, s, rowH, ri, curate) {
  const el = document.createElement('div');
  el.className = 'shelfRow' + (cell.empty ? ' blank' : '');
  el.style.height = rowH * s + 'px';
  el.style.width = cell.W * s + 'px';
  if (cell.plate) {
    const p = document.createElement('div');
    p.className = 'plate';
    p.textContent = cell.plate;
    el.appendChild(p);
  }
  const spines = [];
  cell.items.forEach(b => {
    if (curate && b.face) {
      const wrap = document.createElement('div');
      wrap.className = 'faceWrap';
      wrap.appendChild(coverEl(b, s));
      if (b.pop) {
        const pop = document.createElement('div');
        pop.className = 'pop';
        pop.style.fontSize = Math.max(3.5, 9 * s) + 'px';
        pop.style.width = 70 * s + 'px';
        pop.textContent = b.pop;
        wrap.appendChild(pop);
      }
      el.appendChild(wrap);
    } else { const sp = spineEl(b, s); spines.push(sp); el.appendChild(sp); }
  });
  // 端の支え方。選んでいなければ、すき間のある段で「寄りかかる」と「本立て」を交互に
  const end = curate && cell.g && cell.g.end ? cell.g.end : null;
  const mode = !cell.last && cell.items.length ? 'none' : end ? end.mode : (cell.free > 30 && cell.items.length > 2 ? (ri % 2 ? 'bookend' : 'lean') : 'none');
  const last = el.lastElementChild;
  if (mode === 'lean' && spines.length && last === spines[spines.length - 1] && cell.free > 20) {
    const a = spines[spines.length - 1], b = spines[spines.length - 2];
    if (b && !b.classList.contains('photo') && cell.free > 45 && el.children[el.children.length - 2] === b) { b.classList.add('lean', 'l1'); a.classList.add('lean', 'l2'); }
    else a.classList.add('lean', 'l1');
  }
  if (mode === 'bookend' && cell.items.length) el.insertAdjacentHTML('beforeend', `<i class="bookend ${endKind(end && end.kind)}" aria-hidden="true"></i>`);
  if (cell.flat.length) {
    const st = document.createElement('div');
    st.className = 'stack';
    cell.flat.forEach((b, k) => st.appendChild(flatEl(b, s, k)));
    el.appendChild(st);
  }
  return el;
}

// 画面の大きさに合わせて、本棚全体が店内に収まる倍率を決める
// data を渡すと、その棚（ほかの人の棚）を描く。渡さなければ自分の棚
export function render(piece, area, data) {
  const st = data || { ...getState(), name: 'わたしの棚' };
  const L = layout(st);
  const fwMm = 18, bhMm = 16;
  const totalH = L.heights.reduce((a, h) => a + h + bhMm, 0) + fwMm * 3;
  // 最初から本棚全体が大きく映る大きさ（天井・名札・下の「近づいて見る」の分をあける）
  const s = Math.min((area.w - 24) / (L.IW + fwMm * 2), (area.h - 200) / totalH);
  const fw = fwMm * s;
  piece.innerHTML = '';
  const sign = document.createElement('div');
  sign.className = 'sign';
  sign.textContent = st.name;
  if (st.sampleShelf) sign.insertAdjacentHTML('beforeend', '<small>見本</small>');
  piece.appendChild(sign);
  const c = document.createElement('div');
  c.className = 'case' + (st.style === 'wall' ? ' wall' : '');
  c.style.cssText = `--fw:${fw}px;--bh:${Math.max(3, bhMm * s)}px;--div:${DIV * s}px;width:${L.IW * s + fw * 2}px`;
  styleCase(c, st.shelf);
  c.innerHTML = '<div class="crown"></div>';
  L.rows.forEach((r, i) => {
    const row = document.createElement('div');
    row.className = 'gridRow';
    r.forEach(cell => row.appendChild(cellEl({ ...cell, W: L.W }, s, L.heights[i], i, L.curate)));
    c.appendChild(row);
    c.insertAdjacentHTML('beforeend', '<div class="board"></div>');
  });
  c.insertAdjacentHTML('beforeend', '<div class="plinth"></div>');
  piece.appendChild(c);
  // ダウンライトが届くのは1〜3段目まで：3段目の下までの高さを測っておく
  const rs = c.querySelectorAll('.gridRow'), third = rs[Math.min(2, rs.length - 1)];
  if (third) c.style.setProperty('--lit', third.offsetTop + third.offsetHeight + fw * 0.5 + 'px');
  return { rows: L.rows.filter(r => r.some(x => x.items.length)).length, count: st.books.length };
}

// ---- 展示替え：本を長押しして持ち上げ、指で動かして置く ----
export function enableRehang(stage, isOn) {
  let press = null, drag = null;
  const LONG = 350;
  stage.addEventListener('pointerdown', e => {
    if (!isOn()) return;
    const bk = e.target.closest('.bk');
    if (!bk) return;
    press = { id: bk.dataset.id, el: bk, x: e.clientX, y: e.clientY, t: setTimeout(() => lift(e), LONG) };
  });
  function lift(e) {
    if (!press) return;
    const r = press.el.getBoundingClientRect();
    const ghost = press.el.cloneNode(true);
    ghost.classList.add('ghost');
    ghost.style.width = r.width + 'px'; ghost.style.height = r.height + 'px';
    document.body.appendChild(ghost);
    press.el.classList.add('lifting');
    drag = { id: press.id, el: press.el, ghost };
    move(press.x, press.y);
    if (navigator.vibrate) navigator.vibrate(10);
  }
  function move(x, y) {
    if (!drag) return;
    drag.ghost.style.left = x + 'px'; drag.ghost.style.top = y + 'px';
    document.querySelectorAll('.bk.tgt').forEach(b => b.classList.remove('tgt', 'after'));
    const under = document.elementsFromPoint(x, y).find(el => el.classList && el.classList.contains('bk') && !el.classList.contains('ghost'));
    if (under && under !== drag.el) {
      const r = under.getBoundingClientRect();
      under.classList.add('tgt');
      under.classList.toggle('after', x > r.left + r.width / 2);
    }
  }
  stage.addEventListener('pointermove', e => {
    if (press && !drag && Math.hypot(e.clientX - press.x, e.clientY - press.y) > 8) { clearTimeout(press.t); press = null; }
    if (drag) { e.preventDefault(); move(e.clientX, e.clientY); }
  });
  const end = () => {
    if (press) clearTimeout(press.t);
    if (drag) {
      const tgt = document.querySelector('.bk.tgt');
      drag.ghost.remove(); drag.el.classList.remove('lifting');
      if (tgt) moveBook(drag.id, tgt.dataset.id, tgt.classList.contains('after'));
      document.querySelectorAll('.bk.tgt').forEach(b => b.classList.remove('tgt', 'after'));
      stage.dataset.justDragged = '1';
      setTimeout(() => delete stage.dataset.justDragged, 50);
    }
    press = null; drag = null;
  };
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);
}
