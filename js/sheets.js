// 作品解説（本をタップ）・わたしの記録（自分だけ）・収蔵品を加える（手で入力）
import { FORMATS, thickness, getState, updateRecord, removeBook, addBook } from './store.js';

const $ = s => document.querySelector(s);

// ---- 作品解説 ----
export function openWork(id) {
  const st = getState();
  const i = st.books.findIndex(x => x.id === id);
  const b = st.books[i];
  if (!b) return;
  const f = FORMATS[b.format] || FORMATS.shiroku;
  $('#wNo').textContent = `収蔵品 No.${String(i + 1).padStart(3, '0')}`;
  $('#wTitle').textContent = b.title;
  $('#wAuthor').textContent = [b.author, b.publisher].filter(Boolean).join('　');
  $('#wFmt').textContent = f.name;
  $('#wSize').textContent = `高さ ${f.h / 10}cm ・ 厚さ ${(thickness(b) / 10).toFixed(1)}cm`;
  const cv = $('#wCover');
  cv.style.background = b.color || '#e9e4d8';
  cv.style.color = ink(b.color || '#e9e4d8');
  cv.textContent = b.title;
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

// ---- 収蔵品を加える（いまは手で入力。バーコード・タイトル検索は次の段階で） ----
const COLORS = ['#f4f1e8', '#efe6d0', '#f6d34a', '#f08a24', '#d8452f', '#e2338a', '#7a4b8c', '#4f7fc0', '#2f6f86', '#2e7d32', '#1f3348', '#1d1d1d'];
let pick = COLORS[0];
export function openAdd() {
  const f = $('#addForm');
  f.reset();
  pick = COLORS[0];
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
  $('#add').hidden = false;
  $('#aTitle').focus();
}
export function initAdd(onAdded) {
  const sel = $('#aFormat');
  sel.innerHTML = Object.entries(FORMATS).map(([k, v]) => `<option value="${k}">${v.name}</option>`).join('');
  sel.value = 'shiroku';
  $('#addForm').addEventListener('submit', e => {
    e.preventDefault();
    const title = $('#aTitle').value.trim();
    if (!title) { $('#aTitle').focus(); return; }
    const pages = parseInt($('#aPages').value, 10);
    addBook({
      title, author: $('#aAuthor').value.trim(), publisher: $('#aPub').value.trim(),
      format: sel.value, pages: Number.isFinite(pages) && pages > 0 ? pages : null, color: pick,
    });
    $('#add').hidden = true;
    onAdded(title);
  });
}
