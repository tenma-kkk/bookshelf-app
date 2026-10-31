// 展示室の本棚：本を実寸で段に流し込み、画面のまん中に1台だけ置く
import { FORMATS, SHELF, thickness, getState, moveBook } from './store.js';
import { styleCase } from './design.js';

const GAP = 0.6; // 本と本のすき間（mm）

function ink(hex) {
  const n = parseInt(hex.slice(1), 16);
  return (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255 > 0.62 ? '#2a2118' : '#fff';
}

// 段に流し込む（入りきらなければ次の段へ。段は下にどこまでも増える）
export function layout(books) {
  const rows = [];
  let cur = [], w = 0;
  for (const b of books) {
    const t = thickness(b) + GAP;
    if (w + t > SHELF.inner && cur.length) { rows.push(cur); cur = []; w = 0; }
    cur.push(b); w += t;
  }
  if (cur.length) rows.push(cur);
  while (rows.length < SHELF.minRows) rows.push([]);
  return rows;
}

function spineEl(b, s) {
  const f = FORMATS[b.format] || FORMATS.shiroku;
  const w = thickness(b) * s, h = f.h * s;
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'bk';
  el.dataset.id = b.id;
  el.setAttribute('aria-label', `${b.title}（${b.author || '作者不明'}）`);
  el.style.cssText = `width:${w}px;height:${h}px;background:${b.color || '#e9e4d8'};color:${ink(b.color || '#e9e4d8')}`;
  const fs = Math.max(3, Math.min(w * 0.5, 14));
  el.innerHTML = `<span class="t" style="font-size:${fs}px"></span><span class="a" style="font-size:${fs * 0.62}px"></span>`;
  el.querySelector('.t').textContent = b.title;
  el.querySelector('.a').textContent = b.author || '';
  return el;
}

// 画面の大きさに合わせて、本棚全体が展示室に収まる倍率を決める
export function render(piece, area) {
  const st = getState();
  const rows = layout(st.books);
  const fwMm = 18, bhMm = 16;
  const totalH = rows.length * (SHELF.rowH + bhMm) + fwMm * 3;
  const s = Math.min((area.w - 48) / (SHELF.inner + fwMm * 2), (area.h * 0.64) / totalH);
  const fw = fwMm * s;
  piece.innerHTML = '';
  const c = document.createElement('div');
  c.className = 'case';
  c.style.cssText = `--fw:${fw}px;--bh:${Math.max(3, bhMm * s)}px;width:${SHELF.inner * s + fw * 2}px`;
  styleCase(c, st.shelf);
  c.innerHTML = '<div class="crown"></div>';

  rows.forEach(r => {
    const row = document.createElement('div');
    row.className = 'shelfRow';
    row.style.height = SHELF.rowH * s + 'px';
    r.forEach(b => row.appendChild(spineEl(b, s)));
    c.appendChild(row);
  });
  c.insertAdjacentHTML('beforeend', '<div class="plinth"></div>');
  piece.appendChild(c);
  return { rows: rows.filter(r => r.length).length, count: st.books.length };
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
