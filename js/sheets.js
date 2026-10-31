// 作品解説（本をタップ）・わたしの記録（自分だけ）・収蔵品を加える（手で入力）
import { FORMATS, thickness, getState, updateRecord, removeBook, addBook, updateBook } from './store.js';
import { imageUrl, delImage } from './images.js';
import { lookup, normalizeIsbn } from './lookup.js';
import { startScan } from './scan.js';

const $ = s => document.querySelector(s);

// ---- 作品解説 ----
export function openWork(id) {
  const st = getState();
  const i = st.books.findIndex(x => x.id === id);
  const b = st.books[i];
  if (!b) return;
  const f = FORMATS[b.format] || FORMATS.shiroku;
  $('#wNo').textContent = `収蔵品 No.${String(i + 1).padStart(3, '0')}`;
  $('#wTitle').textContent = b.title || '（題名はまだ）';
  $('#wAuthor').textContent = [b.author, b.publisher].filter(Boolean).join('　');
  $('#wFmt').textContent = b.img ? '撮った本' : f.name;
  $('#wSize').textContent = `高さ ${(b.h || f.h) / 10}cm ・ 厚さ ${(thickness(b) / 10).toFixed(1)}cm`;
  const cv = $('#wCover');
  cv.style.background = b.color || '#e9e4d8';
  cv.style.color = ink(b.color || '#e9e4d8');
  cv.textContent = b.img ? '' : b.title;
  cv.classList.toggle('spineView', !!b.img);
  if (b.img) imageUrl(b.id).then(u => { if (u) cv.innerHTML = `<img src="${u}" alt="">`; });
  // 撮った本は、題名と作者をあとから入れられる（Step 3 では AI が入れる）
  const nm = $('#wName');
  nm.hidden = !b.img;
  if (b.img) {
    $('#n_title').value = b.title || ''; $('#n_author').value = b.author || '';
    $('#n_title').onchange = () => { updateBook(id, { title: $('#n_title').value.trim() }); $('#wTitle').textContent = $('#n_title').value.trim() || '（題名はまだ）'; };
    $('#n_author').onchange = () => updateBook(id, { author: $('#n_author').value.trim() });
  }
  // わたしの記録（自分の本棚のときだけ出る。ほかの人の本棚には入口ごと出さない）
  const r = b.record || {};
  $('#wMine').open = false;
  for (const k of ['bought', 'place', 'gone', 'memo']) {
    const el = $('#r_' + k);
    el.value = r[k] || '';
    el.oninput = () => updateRecord(id, { [k]: el.value });
  }
  const del = $('#wDelete');
  del.dataset.step = '0';
  del.textContent = 'この本を本棚から外す';
  del.onclick = () => {
    if (del.dataset.step === '0') { del.dataset.step = '1'; del.textContent = 'もう一度押すと外します（記録も消えます）'; return; }
    if (b.img) delImage(id).catch(() => {});
    removeBook(id); closeWork();
  };
  $('#work').hidden = false;
  $('#wClose').focus();
}
export function closeWork() { $('#work').hidden = true; }

function ink(hex) {
  const n = parseInt(hex.slice(1), 16);
  return (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255 > 0.62 ? '#2a2118' : '#fff';
}

// ---- 収蔵品を加える（バーコード・ISBN・手で入力） ----
const COLORS = ['#f4f1e8', '#efe6d0', '#f6d34a', '#f08a24', '#d8452f', '#e2338a', '#7a4b8c', '#4f7fc0', '#2f6f86', '#2e7d32', '#1f3348', '#1d1d1d'];
let pick = COLORS[0], stopScan = null, foundIsbn = '';

function palette() {
  const pal = $('#aColors');
  pal.innerHTML = '';
  COLORS.forEach(c => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sw'; b.style.background = c;
    b.setAttribute('aria-label', '背表紙の色 ' + c);
    b.setAttribute('aria-pressed', c === pick);
    b.onclick = () => { pick = c; pal.querySelectorAll('.sw').forEach(x => x.setAttribute('aria-pressed', x === b)); };
    pal.appendChild(b);
  });
}
function tab(t) {
  document.querySelectorAll('#add .tabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.t === t));
  $('#tpScan').hidden = t !== 'scan';
  $('#tpIsbn').hidden = t !== 'isbn';
  if (t === 'scan') beginScan(); else endScan();
  if (t === 'hand') $('#aTitle').focus();
  if (t === 'isbn') $('#aIsbn').focus();
}
async function beginScan() {
  endScan();
  const msg = $('#scanMsg');
  msg.textContent = '本の裏のバーコード（978 から始まる方）を、枠の中に入れてください。';
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { msg.textContent = 'この画面ではカメラが使えません。「ISBN を入力」か「手で入力」を使ってください。'; return; }
  try { stopScan = await startScan($('#scanVideo'), code => { stopScan = null; found(code); }); }
  catch (e) { msg.textContent = 'カメラを使えませんでした。カメラの使用を許可するか、「ISBN を入力」を使ってください。'; }
}
function endScan() { if (stopScan) { stopScan(); stopScan = null; } }

async function found(raw) {
  const isbn = normalizeIsbn(raw);
  const msg = $('#foundMsg');
  $('#found').hidden = false;
  if (!isbn) { msg.textContent = 'ISBN の番号が正しくないようです。もう一度確かめてください。'; return; }
  if (getState().books.some(b => b.isbn === isbn)) { msg.textContent = 'この本は、もう本棚にあります。'; }
  else msg.textContent = '本の情報をさがしています…';
  try {
    const info = await lookup(isbn);
    if (!info) { msg.textContent = `ISBN ${isbn} の本は、データが見つかりませんでした。下に手で入力してください。`; foundIsbn = isbn; return; }
    foundIsbn = isbn;
    $('#aTitle').value = info.title; $('#aAuthor').value = info.author; $('#aPub').value = info.publisher;
    $('#aFormat').value = info.format; $('#aPages').value = info.pages || '';
    const dup = getState().books.some(b => b.isbn === isbn);
    msg.textContent = (dup ? 'この本は、もう本棚にあります。' : '見つかりました。') + (info.formatGuessed ? '種類（文庫・単行本など）を確かめてください。' : '内容を確かめて、背表紙の色を選んでください。');
  } catch (e) { msg.textContent = 'インターネットにつながらないようです。つながってから、もう一度ためしてください。'; }
}

export function openAdd() {
  $('#addForm').reset();
  pick = COLORS[0]; foundIsbn = '';
  palette();
  $('#found').hidden = true;
  $('#add').hidden = false;
  tab('scan');
}
export function closeAdd() { endScan(); $('#add').hidden = true; }
export function initAdd(onAdded) {
  const sel = $('#aFormat');
  sel.innerHTML = Object.entries(FORMATS).map(([k, v]) => `<option value="${k}">${v.name}</option>`).join('');
  sel.value = 'shiroku';
  document.querySelectorAll('#add .tabs button').forEach(b => b.onclick = () => tab(b.dataset.t));
  $('#isbnGo').onclick = () => found($('#aIsbn').value);
  $('#rescan').onclick = () => {
    for (const id of ['aTitle', 'aAuthor', 'aPub', 'aPages', 'aIsbn']) $('#' + id).value = '';
    $('#aFormat').value = 'shiroku'; $('#aGone').checked = false; foundIsbn = '';
    $('#found').hidden = true;
    const t = document.querySelector('#add .tabs [aria-selected="true"]').dataset.t;
    tab(t === 'hand' ? 'scan' : t);
  };
  $('#aIsbn').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); found($('#aIsbn').value); } });
  $('#addForm').addEventListener('submit', e => {
    e.preventDefault();
    const title = $('#aTitle').value.trim();
    if (!title) { $('#found').hidden = false; $('#foundMsg').textContent = '題名を入れてください。'; $('#aTitle').focus(); return; }
    const pages = parseInt($('#aPages').value, 10);
    addBook({
      title, author: $('#aAuthor').value.trim(), publisher: $('#aPub').value.trim(), isbn: foundIsbn || undefined,
      format: sel.value, pages: Number.isFinite(pages) && pages > 0 ? pages : null, color: pick,
      record: $('#aGone').checked ? { gone: '手放した本' } : {},
    });
    closeAdd();
    onAdded(title);
  });
}
