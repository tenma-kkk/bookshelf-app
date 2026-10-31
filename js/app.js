// 全体のつなぎ：展示室・照明・近づく・館内案内・作品解説
import { getState, onChange, setLight, addSamples } from './store.js';
import { render, enableRehang } from './shelf.js';
import { openWork, closeWork, openAdd, closeAdd, initAdd } from './sheets.js';
import { noteOf, applyRoom, openDesign, closeDesign, initDesign } from './design.js';

const $ = s => document.querySelector(s);
const app = $('#app'), stage = $('#stage'), piece = $('#piece');
let zoom = false, rehang = false;

function draw() {
  const st = getState();
  app.classList.toggle('night', st.light === 'night');
  applyRoom(app, st.room);
  const { rows, count } = render(piece, { w: app.clientWidth, h: app.clientHeight });
  $('#pNo').textContent = `作品 No.${st.no}`;
  $('#pTitle').textContent = st.shelf.name;
  $('#pMat').textContent = `${noteOf(st.shelf)}　横幅 56cm`;
  $('#pFacts').textContent = `${count}冊　${Math.max(rows, 1)}段　${st.since}年から`;
  $('#mark').innerHTML = `<b>No.${st.no}</b>　の本棚`;
  $('#empty').hidden = count > 0;
  $('#plaque').hidden = count === 0;
}

function setZoom(on, x, y) {
  zoom = on;
  if (on) { stage.style.transformOrigin = `${x}px ${y}px`; stage.style.transform = 'scale(2.6)'; }
  else stage.style.transform = '';
  app.classList.toggle('zoomed', on);
  $('#hint').textContent = rehang ? '本を長押しして、置きたい所まで動かします'
    : on ? '本をタップすると作品解説。外をタップで離れます' : '本棚をタップすると近づきます';
}

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
$('#design').addEventListener('click', e => { if (e.target.id === 'design') closeDesign(); });
$('#emptyAdd').onclick = openAdd;
$('#emptySample').onclick = () => { addSamples(); toast('見本の本を並べました。本棚から外すこともできます'); };
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!$('#add').hidden) { closeAdd(); return; }
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
