// 本棚のデザイン：飾り方（ひたすら並べる／陳列にこだわる）・スタイル・区画と札・段の端の支え方・色と素材。店内（壁・天井）は固定
// 小物（飾り）は、背表紙のリアルさに見合う質にできないので置かない（2026-10-31 決定）
import { getState, setShelf, setPrefs, addSection, updateSection, removeSection, moveSection } from './store.js';

export const WOODS = {
  oak: { name: 'オーク', frame: '#c89b65', inner: '#b5854f' },
  walnut: { name: 'ウォールナット無垢', frame: '#5a3a22', inner: '#4a2f1b' },
  ebony: { name: '黒檀', frame: '#231a15', inner: '#2b201a' },
};
export const PRESETS = {
  mine: { name: 'わたしの本棚', mat: 'paint', frame: '#f7f6f2', inner: '#f2cf1d', top: 'same', brass: false },
  oak: { name: 'オーク', mat: 'oak', top: 'same', brass: false },
  white: { name: '白い棚', mat: 'paint', frame: '#ffffff', inner: '#e9e5dd', top: 'same', brass: false },
  steel: { name: '黒いスチール', mat: 'steel', frame: '#151515', inner: '#3d3d3d', top: 'same', brass: false },
  walbrass: { name: 'ウォールナット×真鍮', mat: 'walnut', top: 'same', brass: true },
  ebmarble: { name: '黒檀×大理石', mat: 'ebony', top: 'marble', brass: true },
  library: { name: '図書館', mat: 'walnut', top: 'marble', brass: false },
  navy: { name: 'ネイビー×真鍮', mat: 'paint', frame: '#23395b', inner: '#1b2c47', top: 'same', brass: true },
};
// 本棚のスタイル：棚の色・素材と、区画の仕切り方をまとめて選ぶ
export const STYLES = {
  shoten: { name: '明るい木の書店', sub: '区画つき・あたたかい光', cols: 2, wide: 1, shelf: { mat: 'oak', top: 'same', brass: false } },
  koshoten: { name: '古書店', sub: '濃い木・落ち着いた光', cols: 1, wide: 1, shelf: { mat: 'walnut', top: 'same', brass: true } },
  white: { name: '白い棚', sub: 'シンプル・ギャラリー風', cols: 3, wide: 1, shelf: { mat: 'paint', frame: '#ffffff', inner: '#f3f1ec', top: 'same', brass: false } },
  wall: { name: '壁一面', sub: '本棚を何台も横に並べる', cols: 3, wide: 1.8, shelf: { mat: 'paint', frame: '#2a2622', inner: '#c9a678', top: 'same', brass: false } },
};
const ENDS = [['bookend', '本立て'], ['flat', '平積み'], ['lean', '寄りかからせる'], ['none', 'なし']];
const KINDS = [['steel', '銀'], ['brass', '真鍮'], ['black', '黒'], ['wood', '木']];
const MAXFLAT = 6;
const MATS = { paint: 'つるっと塗装', oak: 'オーク', walnut: 'ウォールナット無垢', ebony: '黒檀', steel: 'スチール' };
const FRAME_COLORS = ['#ffffff', '#f7f6f2', '#e9e1d2', '#c9b79c', '#8a8f86', '#23395b', '#2f4f3e', '#7a2e2e', '#151515'];
const INNER_COLORS = [null, '#f2cf1d', '#c0392b', '#8ecae6', '#f3f1ec', '#3a2414', '#2f6b4f', '#262626'];

export function colorsOf(sh) { return WOODS[sh.mat] || { frame: sh.frame, inner: sh.inner || sh.frame }; }
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16), f = v => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  return '#' + [n >> 16, n >> 8 & 255, n & 255].map(v => f(v).toString(16).padStart(2, '0')).join('');
}
function lum(hex) { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255; }

// 本棚の素材・色を、本棚の要素に当てる
export function styleCase(c, sh) {
  const { frame, inner } = colorsOf(sh);
  c.style.setProperty('--frame', frame);
  c.style.setProperty('--inner', inner);
  c.style.setProperty('--edge', sh.brass ? '#c9a24a' : (lum(inner) > 0.5 ? shade(inner, 0.1) : shade(inner, -0.1)));
  c.classList.toggle('grain', !!WOODS[sh.mat]);
  c.classList.toggle('steel', sh.mat === 'steel');
  c.classList.toggle('top-marble', sh.top === 'marble');
  c.classList.toggle('brass', !!sh.brass);
}

function swatchStyle(sh) {
  const { frame, inner } = colorsOf(sh);
  const shelf = sh.brass ? '#c9a24a' : shade(inner, -0.08);
  return `background:linear-gradient(${sh.top === 'marble' ? '#ece8e1' : frame} 12%,${inner} 12%,${inner} 46%,${shelf} 46%,${shelf} 52%,${inner} 52%);border:5px solid ${frame};border-top:none`;
}

// ---- 設えの札 ----
const $ = s => document.querySelector(s);
const open = new Set();   // 開いている区画（描き直しても開いたまま）
export function openDesign() { draw(); $('#design').hidden = false; $('#app').classList.add('designing'); }
export function closeDesign() { $('#design').hidden = true; $('#app').classList.remove('designing'); }

function chip(label, on, onClick, style) {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'chip'; b.setAttribute('aria-pressed', !!on);
  if (style) { b.className = 'sw2'; b.innerHTML = `<i style="${style}"></i><span></span>`; b.querySelector('span').textContent = label; }
  else b.textContent = label;
  b.onclick = onClick;
  return b;
}
function group(title, kids, cls) {
  const g = document.createElement('div');
  g.className = 'dgroup';
  g.innerHTML = `<div class="dt"></div><div class="${cls || 'chips'}"></div>`;
  g.querySelector('.dt').textContent = title;
  kids.forEach(k => g.lastElementChild.appendChild(k));
  return g;
}
function colorRow(list, cur, onPick, allowSame) {
  return list.map(c => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sw';
    if (c === null) { b.textContent = 'わくと同じ'; b.classList.add('same'); }
    else b.style.background = c;
    b.setAttribute('aria-label', c === null ? 'わくと同じ色' : '色 ' + c);
    b.setAttribute('aria-pressed', c === cur || (c === null && allowSame && cur == null));
    b.onclick = () => onPick(c);
    return b;
  });
}

function styleSwatch(k) {
  const y = STYLES[k], { frame, inner } = colorsOf(y.shelf);
  const cells = Array.from({ length: y.cols * 2 }, () => `<i style="background:${inner}"></i>`).join('');
  return `<span class="stPv" style="background:${frame};grid-template-columns:repeat(${y.cols},1fr)">${cells}</span>`;
}

// 区画（または、区画に入れていない本）の「段の端の支え方」
function endBox(g) {
  const st = getState(), box = document.createElement('div');
  box.className = 'endBox';
  const e = g.end || { mode: 'auto', kind: 'steel' };
  const set = patch => { updateSection(g.id, { end: { ...e, ...patch } }); draw(); };
  box.appendChild(group('端の支え方', [chip('おまかせ', e.mode === 'auto', () => { updateSection(g.id, { end: null }); draw(); }),
    ...ENDS.map(([v, n]) => chip(n, e.mode === v, () => set({ mode: v })))]));
  if (e.mode === 'bookend') box.appendChild(group('本立ての種類', KINDS.map(([v, n]) => chip(n, (e.kind || 'steel') === v, () => set({ kind: v })))));
  if (e.mode === 'flat') {
    const books = st.books.filter(b => g.id ? b.sec === g.id : !st.sections.some(x => x.id === b.sec));
    const flat = (g.flat || []).filter(id => books.some(b => b.id === id));
    const kids = books.map(b => {
      const i = flat.indexOf(b.id);
      return chip((i >= 0 ? `${i + 1}. ` : '') + (b.title || '題名がまだの本'), i >= 0, () => {
        const next = i >= 0 ? flat.filter(x => x !== b.id) : flat.length < MAXFLAT && flat.length < books.length - 1 ? [...flat, b.id] : flat;
        updateSection(g.id, { flat: next }); draw();
      });
    });
    const gr = group(`平積みにする本（タップした順に下から重なります。${MAXFLAT}冊まで）`, kids.length ? kids : [Object.assign(document.createElement('p'), { className: 'soon', textContent: 'この区画にはまだ本がありません' })]);
    gr.classList.add('flatPick');
    box.appendChild(gr);
  }
  return box;
}

function draw() {
  const st = getState(), sh = st.shelf, body = $('#dBody');
  body.innerHTML = '';
  {
    // どう飾るか
    const modes = [['auto', 'ひたすら並べる', '並べる順を選ぶだけ。コレクションを飾る'], ['curate', '陳列にこだわる', '区画・見出しの札・表紙を見せる本・紹介カード・端の支え方を自分で']];
    body.appendChild(group('どう飾りますか？', modes.map(([k, n, sub]) => {
      const b = chip(n, (st.display || 'auto') === k, () => { setPrefs({ display: k }); draw(); });
      b.classList.add('modeCard'); b.insertAdjacentHTML('beforeend', `<small>${sub}</small>`);
      return b;
    }), 'modes'));
    if ((st.display || 'auto') === 'auto') {
      body.appendChild(group('並べる順', [['manual', '並び替えた順'], ['author', '作家順'], ['color', '色順']].map(([k, n]) =>
        chip(n, (st.sort || 'manual') === k, () => { setPrefs({ sort: k }); draw(); }))));
    }
    // 本棚のスタイル
    body.appendChild(group('本棚のスタイル', Object.entries(STYLES).map(([k, y]) => {
      const b = chip(y.name, st.style === k && sh.preset === 'style', () => { setPrefs({ style: k, cols: y.cols, wide: y.wide }); setShelf({ ...y.shelf, name: sh.name, preset: 'style' }); draw(); });
      b.classList.add('styleCard'); b.insertAdjacentHTML('afterbegin', styleSwatch(k)); b.insertAdjacentHTML('beforeend', `<small>${y.sub}</small>`);
      return b;
    }), 'styles'));
    // 区画と見出しの札（陳列にこだわるときだけ）
    if (st.display === 'curate') {
      const sec = document.createElement('div');
      sec.className = 'dgroup secs';
      sec.innerHTML = '<div class="dt">区画と見出しの札</div><p class="soon">本をどの区画に入れるかは、本をタップした画面で選べます。</p>';
      st.sections.forEach((x, i) => {
        const d = document.createElement('details');
        d.className = 'secItem';
        d.innerHTML = '<summary></summary><div class="secRow"><input autocomplete="off" maxlength="16" aria-label="札の文字"><button type="button" class="chip" data-d="-1" aria-label="前へ">↑</button><button type="button" class="chip" data-d="1" aria-label="後ろへ">↓</button><button type="button" class="chip del">外す</button></div>';
        d.querySelector('summary').textContent = `${x.title}（${st.books.filter(b => b.sec === x.id).length}冊）`;
        const inp = d.querySelector('input');
        inp.value = x.title;
        inp.onchange = () => { updateSection(x.id, { title: inp.value.trim() || x.title }); draw(); };
        d.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { moveSection(x.id, +b.dataset.d); draw(); });
        const del = d.querySelector('.del');
        del.onclick = () => {
          if (del.dataset.step !== '1') { del.dataset.step = '1'; del.textContent = 'もう一度で外す（本は残ります）'; return; }
          removeSection(x.id); draw();
        };
        d.appendChild(endBox({ id: x.id, end: x.end, flat: x.flat }));
        d.open = open.has(x.id);
        d.ontoggle = () => { d.open ? open.add(x.id) : open.delete(x.id); };
        sec.appendChild(d);
      });
      const loose = document.createElement('details');
      loose.className = 'secItem';
      loose.innerHTML = '<summary>区画に入れていない本</summary>';
      loose.appendChild(endBox({ id: null, end: st.looseEnd, flat: st.looseFlat }));
      loose.open = open.has('loose');
      loose.ontoggle = () => { loose.open ? open.add('loose') : open.delete('loose'); };
      sec.appendChild(loose);
      const add = document.createElement('div');
      add.className = 'secRow';
      add.innerHTML = '<input id="newSec" autocomplete="off" maxlength="16" placeholder="例：伊坂幸太郎の棚"><button type="button" class="chip">＋ 札をつくる</button>';
      add.querySelector('button').onclick = () => {
        const v = add.querySelector('input').value.trim();
        if (!v) { add.querySelector('input').focus(); return; }
        open.add(addSection(v)); draw();
      };
      sec.appendChild(add);
      body.appendChild(sec);
    }
    body.appendChild(group('棚の色・素材から選ぶ', Object.entries(PRESETS).map(([k, p]) =>
      chip(p.name, sh.preset === k, () => { setShelf({ ...p, name: sh.name, preset: k }); draw(); }, swatchStyle(p))), 'swgrid'));
    const mk = [];
    mk.push(group('素材', Object.entries(MATS).map(([k, n]) => chip(n, sh.mat === k, () => {
      const base = WOODS[k] ? {} : { frame: sh.frame || '#f7f6f2', inner: sh.inner };
      setShelf({ ...base, mat: k, preset: 'custom' }); draw();
    }))));
    if (!WOODS[sh.mat]) {
      mk.push(group('わくの色', colorRow(FRAME_COLORS, sh.frame, c => { setShelf({ frame: c, preset: 'custom' }); draw(); }), 'pal'));
      mk.push(group('中の色（背板と棚板）', colorRow(INNER_COLORS, sh.inner === sh.frame ? null : sh.inner, c => { setShelf({ inner: c || sh.frame, preset: 'custom' }); draw(); }, true), 'pal'));
    }
    mk.push(group('天板', [chip('本体と同じ', sh.top !== 'marble', () => { setShelf({ top: 'same', preset: 'custom' }); draw(); }), chip('大理石', sh.top === 'marble', () => { setShelf({ top: 'marble', preset: 'custom' }); draw(); })]));
    mk.push(group('区画の仕切り（1段を左右いくつに分けるか）', [1, 2, 3].map(n => chip(n === 1 ? '仕切りなし' : `${n}つ`, (st.cols || 1) === n, () => { setPrefs({ cols: n, style: null, wide: 1 }); draw(); }))));
    mk.push(group('金具', [chip('なし', !sh.brass, () => { setShelf({ brass: false, preset: 'custom' }); draw(); }), chip('真鍮', !!sh.brass, () => { setShelf({ brass: true, preset: 'custom' }); draw(); })]));
    const d = document.createElement('details');
    d.className = 'maker';
    d.open = sh.preset === 'custom';
    d.innerHTML = '<summary>自分で作る</summary>';
    mk.forEach(x => d.appendChild(x));
    body.appendChild(d);
  }
}
export function initDesign() {
  $('#dClose').onclick = closeDesign;
}
