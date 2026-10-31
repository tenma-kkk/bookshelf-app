// 全体のつなぎ：展示室・照明・近づく・館内案内・作品解説
import { getState, onChange, setLight, addSamples } from './store.js';
import { render, enableRehang } from './shelf.js';
import { openWork, closeWork, openAdd, closeAdd, initAdd } from './sheets.js';
import { openDesign, closeDesign, initDesign } from './design.js';
import { openCatalog, closeCatalog, initCatalog } from './catalog.js';

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

// 近づいたあとは、指でなぞって左右・上下に動かせる（本棚がまん中から外れきらない範囲で）
let drag = null;
stage.addEventListener('pointerdown', e => {
  if (!zoom) return;
  drag = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y, moved: false, id: e.pointerId };
});
stage.addEventListener('pointermove', e => {
  if (!drag || e.pointerId !== drag.id || document.querySelector('.ghost')) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (!drag.moved && Math.hypot(dx, dy) < 8) return;
  if (!drag.moved) { drag.moved = true; stage.classList.add('panning'); try { stage.setPointerCapture(e.pointerId); } catch (err) { /* 捕まえられなくても動かせる */ } }
  const next = { x: drag.px + dx, y: drag.py + dy };
  // 本棚の端が画面のまん中を越えないように止める
  const c = piece.querySelector('.case').getBoundingClientRect(), a = app.getBoundingClientRect();
  const cx = a.left + a.width / 2, cy = a.top + a.height / 2, ddx = next.x - pan.x, ddy = next.y - pan.y;
  if (c.left + ddx > cx || c.right + ddx < cx) next.x = pan.x;
  if (c.top + ddy > cy || c.bottom + ddy < cy) next.y = pan.y;
  pan = next;
  applyZoom();
});
const endDrag = () => {
  if (drag && drag.moved) { stage.dataset.justDragged = '1'; setTimeout(() => delete stage.dataset.justDragged, 60); }
  stage.classList.remove('panning');
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
