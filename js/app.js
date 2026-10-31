// 全体のつなぎ：展示室・照明・近づく・館内案内・作品解説
import { getState, onChange, setLight, addSamples } from './store.js';
import { render, enableRehang } from './shelf.js';
import { openWork, closeWork, openAdd, closeAdd, initAdd } from './sheets.js';
import { openDesign, closeDesign, initDesign } from './design.js';
import { openCatalog, closeCatalog, initCatalog } from './catalog.js';
import { openCapture, initCapture } from './capture.js';

const $ = s => document.querySelector(s);
const app = $('#app'), stage = $('#stage'), piece = $('#piece');
let zoom = false, rehang = false;

function draw() {
  const st = getState();
  app.classList.toggle('night', st.light === 'night');
  const { count } = render(piece, { w: app.clientWidth, h: app.clientHeight });
  $('#mark').innerHTML = `<b>No.${st.no}</b>　の本棚`;
  $('#empty').hidden = count > 0;
}

const SCALE = 2.6;
let pan = { x: 0, y: 0 };
function applyZoom() { stage.style.transform = zoom ? `translate(${pan.x}px,${pan.y}px) scale(${SCALE})` : ''; }
function setZoom(on, x, y) {
  cancelAnimationFrame(glide);
  stage.classList.remove('panning');
  zoom = on;
  pan = { x: 0, y: 0 };
  if (on && x !== undefined) stage.style.transformOrigin = `${x}px ${y}px`;
  applyZoom();
  app.classList.toggle('zoomed', on);
  $('#hint').textContent = rehang ? '本を長押しして、置きたい所まで動かします'
    : on ? '指でなぞると動かせます。本をタップすると作品解説' : '本棚をタップしても近づけます';
  $('#zoomLabel').textContent = on ? '離れる' : '近づいて見る';
  $('#zoomPlus').setAttribute('d', on ? 'M7.5 10.5h6' : 'M10.5 7.5v6M7.5 10.5h6');
}

// 近づいたあとは、指でなぞって左右・上下に動かせる
// なめらかにするため：動かせる範囲はなぞり始めに1回だけ測る／画面の書きかえは1コマに1回／
// 指を離すと少し滑ってから止まる／端を越えたら、ゴムのようにやわらかく引き戻す
let drag = null, glide = 0, frame = 0;
function paint() { if (frame) return; frame = requestAnimationFrame(() => { frame = 0; applyZoom(); }); }
function bounds() {
  // 本棚の端が画面のまん中を越えない範囲（いまの位置からの動かせる量）
  const c = piece.querySelector('.case').getBoundingClientRect(), a = app.getBoundingClientRect();
  const cx = a.left + a.width / 2, cy = a.top + a.height / 2;
  return { minX: pan.x + (cx - c.right), maxX: pan.x + (cx - c.left), minY: pan.y + (cy - c.bottom), maxY: pan.y + (cy - c.top) };
}
const rubber = (v, min, max) => v < min ? min - (min - v) * 0.35 : v > max ? max + (v - max) * 0.35 : v;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
stage.addEventListener('pointerdown', e => {
  if (!zoom) return;
  cancelAnimationFrame(glide);
  drag = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y, moved: false, id: e.pointerId, b: bounds(), vx: 0, vy: 0, t: performance.now(), lx: e.clientX, ly: e.clientY };
});
stage.addEventListener('pointermove', e => {
  if (!drag || e.pointerId !== drag.id || document.querySelector('.ghost')) return;
  if (!drag.moved) {
    if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6) return;
    // 動き出した位置から数える（最初にカクッと跳ばないように）
    drag.moved = true; drag.x = e.clientX; drag.y = e.clientY;
    stage.classList.add('panning');
    try { stage.setPointerCapture(e.pointerId); } catch (err) { /* 捕まえられなくても動かせる */ }
  }
  const now = performance.now(), dt = Math.max(1, now - drag.t);
  drag.vx = 0.8 * ((e.clientX - drag.lx) / dt) + 0.2 * drag.vx;
  drag.vy = 0.8 * ((e.clientY - drag.ly) / dt) + 0.2 * drag.vy;
  drag.t = now; drag.lx = e.clientX; drag.ly = e.clientY;
  const b = drag.b;
  pan = { x: rubber(drag.px + e.clientX - drag.x, b.minX, b.maxX), y: rubber(drag.py + e.clientY - drag.y, b.minY, b.maxY) };
  paint();
});
const endDrag = () => {
  if (drag && drag.moved) {
    stage.dataset.justDragged = '1'; setTimeout(() => delete stage.dataset.justDragged, 60);
    // 指を離したら、そのときの勢いで少し滑って止まる。端を越えていたら、やわらかく戻す
    const b = drag.b;
    let vx = drag.vx * 16, vy = drag.vy * 16;
    if (performance.now() - drag.t > 80) { vx = 0; vy = 0; }
    const step = () => {
      vx *= 0.92; vy *= 0.92;
      let x = pan.x + vx, y = pan.y + vy;
      const tx = clamp(x, b.minX, b.maxX), ty = clamp(y, b.minY, b.maxY);
      x += (tx - x) * 0.25; y += (ty - y) * 0.25;
      if (x !== tx) vx *= 0.6;
      if (y !== ty) vy *= 0.6;
      pan = { x, y }; applyZoom();
      if (Math.abs(vx) + Math.abs(vy) > 0.2 || Math.abs(tx - x) + Math.abs(ty - y) > 0.5) glide = requestAnimationFrame(step);
      else { pan = { x: tx, y: ty }; applyZoom(); stage.classList.remove('panning'); }
    };
    glide = requestAnimationFrame(step);
  } else stage.classList.remove('panning');
  drag = null;
};
stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointercancel', endDrag);

// 本棚をタップで近づく（もう一度で離れる）。近づいた状態で本をタップすると作品解説
stage.addEventListener('click', e => {
  if (stage.dataset.justDragged) return;
  const bk = e.target.closest('.bk');
  if (rehang) { if (!zoom) { const r = stage.getBoundingClientRect(); setZoom(true, e.clientX - r.left, e.clientY - r.top); } return; }
  if (bk && zoom) { openWork(bk.dataset.id); return; }
  if (!e.target.closest('.case') && !zoom) return;
  const r = stage.getBoundingClientRect();
  setZoom(!zoom, e.clientX - r.left, e.clientY - r.top);
});
enableRehang(stage, () => rehang);
// 近づいて見る／離れる ボタン（近づくのは、いちばん上の段のまん中）
$('#zoomBtn').onclick = () => {
  if (zoom) { setZoom(false); return; }
  const row = piece.querySelector('.shelfRow'), r = stage.getBoundingClientRect();
  const b = (row || piece).getBoundingClientRect();
  setZoom(true, b.left + b.width / 2 - r.left, b.top + b.height / 2 - r.top);
};

// 照明（昼の展示室／夜の展示室）
$('#lightBtn').onclick = () => setLight(getState().light === 'night' ? 'day' : 'night');

// 館内案内
const menu = $('#menu');
$('#menuBtn').onclick = () => { menu.hidden = false; $('#mClose').focus(); };
$('#mClose').onclick = () => { menu.hidden = true; };
menu.addEventListener('click', e => {
  const go = e.target.closest('[data-go]');
  if (!go) return;
  menu.hidden = true;
  if (go.dataset.go === 'rehang') toggleRehang(true);
  if (go.dataset.go === 'add') openAdd();
  if (go.dataset.go === 'design') openDesign();
  if (go.dataset.go === 'catalog') openCatalog('find');
  if (go.dataset.go === 'keep') openCatalog('keep');
  if (go.dataset.go === 'soon') toast('この部屋は、まだ準備中です');
});
function toggleRehang(on) {
  rehang = on;
  app.classList.toggle('rehang', on);
  $('#rehangBar').hidden = !on;
  setZoom(zoom);
}
$('#rehangDone').onclick = () => toggleRehang(false);

// 作品解説・収蔵品を加える
$('#wClose').onclick = closeWork;
$('#work').addEventListener('click', e => { if (e.target.id === 'work') closeWork(); });
$('#aClose').onclick = closeAdd;
$('#add').addEventListener('click', e => { if (e.target.id === 'add') closeAdd(); });
initAdd(title => toast(`「${title}」を本棚に加えました`));
initDesign();
initCapture();
$('#aShoot').onclick = () => { closeAdd(); openCapture(n => { if (n) toast(`撮った本 ${n}冊を本棚に入れました`); }); };
// 目録で選んだ本まで近づいて、光らせる
initCatalog(id => {
  setZoom(false);
  requestAnimationFrame(() => {
    const el = piece.querySelector(`.bk[data-id="${id}"]`);
    if (!el) return;
    const r = stage.getBoundingClientRect(), b = el.getBoundingClientRect();
    setZoom(true, b.left + b.width / 2 - r.left, b.top + b.height / 2 - r.top);
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 2200);
  });
});
$('#design').addEventListener('click', e => { if (e.target.id === 'design') closeDesign(); });
$('#emptyAdd').onclick = openAdd;
$('#emptySample').onclick = () => { addSamples(); toast('見本の本を並べました。本棚から外すこともできます'); };
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!$('#add').hidden) { closeAdd(); return; }
  if (!$('#catalog').hidden) { closeCatalog(); return; }
  for (const id of ['work', 'menu', 'design']) if (!$('#' + id).hidden) { $('#' + id).hidden = true; return; }
  if (zoom) setZoom(false);
});

let tt;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.classList.add('on');
  clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2600);
}

onChange(draw);
addEventListener('resize', draw);
draw();
setZoom(false);
