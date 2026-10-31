// 収蔵品目録：自分の本棚を探す・書店で「持ってる？」を確かめる・ほしい本・保管と引き継ぎ
import { getState, addWish, removeWish, exportData, importData } from './store.js';
import { lookup, normalizeIsbn } from './lookup.js';
import { startScan } from './scan.js';

const $ = s => document.querySelector(s);
let tab = 'find', stopScan = null, onJump = () => {};
const norm = s => String(s || '').normalize('NFKC').toLowerCase().replace(/\s+/g, '');

// シリーズ名と巻数：題名の終わりの数字を巻数とみなす（例「ドラゴンボール 12」）
function series(title) {
  const m = String(title || '').normalize('NFKC').match(/^(.*?)[\s　]*(?:第)?(\d{1,3})(?:巻)?$/);
  return m ? { name: m[1].trim(), vol: +m[2] } : null;
}
function seriesInfo(name) {
  const vols = getState().books.map(b => series(b.title)).filter(x => x && norm(x.name) === norm(name)).map(x => x.vol).sort((a, b) => a - b);
  if (!vols.length) return null;
  const max = vols[vols.length - 1], have = new Set(vols), missing = [];
  for (let v = 1; v < max; v++) if (!have.has(v)) missing.push(v);
  return { count: vols.length, max, missing, next: max + 1 };
}

export function openCatalog(t) { tab = t || 'find'; draw(); $('#catalog').hidden = false; }
export function closeCatalog() { endScan(); $('#catalog').hidden = true; }
export function initCatalog(jump) {
  onJump = jump;
  document.querySelectorAll('#catalog .tabs button').forEach(b => b.onclick = () => { tab = b.dataset.t; draw(); });
  $('#cClose').onclick = closeCatalog;
  $('#catalog').addEventListener('click', e => { if (e.target.id === 'catalog') closeCatalog(); });
}
function endScan() { if (stopScan) { stopScan(); stopScan = null; } }

function draw() {
  endScan();
  document.querySelectorAll('#catalog .tabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.t === tab));
  const body = $('#cBody');
  body.innerHTML = '';
  if (tab === 'find') drawFind(body);
  if (tab === 'check') drawCheck(body);
  if (tab === 'wish') drawWish(body);
  if (tab === 'keep') drawKeep(body);
}

// ---- 探す ----
function drawFind(body) {
  body.innerHTML = `<div class="fields"><label>題名・作者で探す<input id="cq" type="search" autocomplete="off" placeholder="例：藤本タツキ"></label></div><div class="hits" id="hits"></div>`;
  const q = $('#cq'), hits = $('#hits');
  const run = () => {
    const k = norm(q.value), books = getState().books;
    hits.innerHTML = '';
    if (!k) { hits.innerHTML = `<p class="soon">本棚には ${books.length}冊 あります。</p>`; return; }
    const found = books.filter(b => norm(b.title).includes(k) || norm(b.author).includes(k));
    const head = document.createElement('p');
    head.className = 'soon';
    const authors = new Set(found.map(b => b.author).filter(a => norm(a).includes(k)));
    const s = found.length && series(found[0].title) ? seriesInfo(series(found[0].title).name) : null;
    head.textContent = found.length ? `${found.length}冊 見つかりました。` + (authors.size === 1 ? `${[...authors][0]}の本は ${books.filter(b => b.author === [...authors][0]).length}冊。` : '')
      + (s ? `「${series(found[0].title).name}」は ${s.count}冊 持っています（${s.missing.length ? '抜けている巻：' + s.missing.join('・') + '。' : ''}次は ${s.next}巻）。` : '')
      : '本棚にはありませんでした。';
    hits.appendChild(head);
    found.slice(0, 60).forEach(b => {
      const r = document.createElement('button');
      r.type = 'button'; r.className = 'hit';
      r.innerHTML = '<i></i><span><b></b><small></small></span><em>本棚へ</em>';
      r.querySelector('i').style.background = b.color || '#e9e4d8';
      r.querySelector('b').textContent = b.title;
      r.querySelector('small').textContent = [b.author, b.record && b.record.gone ? '手放した本' : ''].filter(Boolean).join('　');
      r.onclick = () => { closeCatalog(); onJump(b.id); };
      hits.appendChild(r);
    });
  };
  q.oninput = run;
  run();
  q.focus();
}

// ---- 持ってる？（書店でバーコードを読む） ----
function drawCheck(body) {
  body.innerHTML = `<div class="scanbox"><video id="cVideo" playsinline muted></video><div class="scanline"></div></div>
    <div class="fields" style="margin-top:8px"><label>ISBN を入力してもOK<input id="cIsbn" inputmode="numeric" autocomplete="off" placeholder="9784..."></label></div>
    <div class="answer" id="answer" aria-live="polite"><p class="soon">本の裏のバーコード（978 から始まる方）を読むと、持っているか確かめます。</p></div>`;
  const begin = async () => {
    endScan();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    try { stopScan = await startScan($('#cVideo'), code => { stopScan = null; check(code); }); }
    catch (e) { $('#answer').innerHTML = '<p class="soon">カメラを使えませんでした。ISBN を入力して確かめられます。</p>'; }
  };
  $('#cIsbn').addEventListener('change', e => check(e.target.value));
  begin();
  async function check(raw) {
    const isbn = normalizeIsbn(raw), ans = $('#answer');
    if (!isbn) { ans.innerHTML = '<p class="soon">ISBN の番号が正しくないようです。</p>'; return; }
    const st = getState(), mine = st.books.find(b => b.isbn === isbn);
    let info = null;
    if (!mine) { ans.innerHTML = '<p class="soon">しらべています…</p>'; try { info = await lookup(isbn); } catch (e) { /* つながらなくても答えは出す */ } }
    const title = mine ? mine.title : info ? info.title : `ISBN ${isbn}`;
    const author = mine ? mine.author : info ? info.author : '';
    const r = mine && mine.record || {};
    let html;
    if (mine && !r.gone) html = `<div class="verdict ok"><b>✅ もう持っています</b><span>${esc(title)}</span><small>${[r.bought && '買った日：' + esc(r.bought), r.place && '場所：' + esc(r.place)].filter(Boolean).join('　') || ''}</small></div>`;
    else if (mine) html = `<div class="verdict was"><b>🔖 以前持っていた本です</b><span>${esc(title)}</span><small>${r.gone && r.gone !== '手放した本' ? '手放した日：' + esc(r.gone) : ''}${r.memo ? '<br>' + esc(r.memo) : ''}</small></div>`;
    else {
      const s = series(title), si = s && seriesInfo(s.name);
      const hint = si ? (s.vol === si.next ? '次の巻です。' : si.missing.includes(s.vol) ? '抜けていた巻です。' : s.vol > si.next ? `あいだの巻（${si.next}〜${s.vol - 1}巻）も、まだ持っていません。` : '') : '';
      const sameAuthor = author ? st.books.filter(b => b.author && norm(b.author) === norm(author)).length : 0;
      html = `<div class="verdict new"><b>🆕 まだ持っていません</b><span>${esc(title)}</span><small>${esc(author)}${hint ? '<br>' + hint : ''}${sameAuthor ? `<br>この作者の本は ${sameAuthor}冊 持っています。` : ''}</small>
        <button type="button" class="pill" id="wishBtn">♡ ほしい本に入れる</button></div>`;
    }
    ans.innerHTML = html + '<button type="button" class="chip" id="againBtn">次の本を読む</button>';
    const w = $('#wishBtn');
    if (w) w.onclick = () => { addWish({ isbn, title, author }); w.textContent = '♡ ほしい本に入れました'; w.disabled = true; };
    $('#againBtn').onclick = () => { $('#cIsbn').value = ''; ans.innerHTML = '<p class="soon">本の裏のバーコードを読んでください。</p>'; begin(); };
  }
}
function esc(s) { return String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

// ---- ほしい本（自分だけ） ----
function drawWish(body) {
  const list = getState().wish;
  body.innerHTML = `<p class="soon">♡ を付けた本です。自分だけに見えます。</p><div class="hits" id="wl"></div>`;
  const wl = $('#wl');
  if (!list.length) { wl.innerHTML = '<p class="soon">まだありません。「持ってる？」で、まだ持っていない本に ♡ を付けられます。</p>'; return; }
  list.slice().reverse().forEach(w => {
    const r = document.createElement('div');
    r.className = 'hit';
    r.innerHTML = '<i style="background:#f2e6e6">♡</i><span><b></b><small></small></span>';
    r.querySelector('b').textContent = w.title;
    r.querySelector('small').textContent = w.author || '';
    const x = document.createElement('button');
    x.type = 'button'; x.className = 'chip'; x.textContent = '外す';
    x.onclick = () => { removeWish(w.isbn); draw(); };
    r.appendChild(x);
    wl.appendChild(r);
  });
}

// ---- 保管と引き継ぎ（バックアップ） ----
function drawKeep(body) {
  const n = getState().books.length;
  body.innerHTML = `<p class="soon">本棚・記録・ほしい本は、このスマホの中だけに保存されています。機種変更やもしものときのために、ファイルに書き出しておけます。</p>
    <div class="btns" style="margin-top:10px"><button type="button" class="go" id="expBtn">ファイルに書き出す（${n}冊）</button></div>
    <div class="fields" style="margin-top:14px"><label>書き出したファイルを読み込む<input type="file" id="impFile" accept="application/json,.json"></label></div>
    <p class="soon" id="impMsg" hidden></p>`;
  $('#expBtn').onclick = () => {
    const blob = new Blob([exportData()], { type: 'application/json' });
    const a = document.createElement('a');
    const d = new Date();
    a.href = URL.createObjectURL(blob);
    a.download = `本棚のバックアップ-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  };
  let pending = null;
  $('#impFile').onchange = async e => {
    const f = e.target.files[0], msg = $('#impMsg');
    if (!f) return;
    pending = await f.text();
    msg.hidden = false;
    msg.innerHTML = '読み込むと、いまの本棚は<b>このファイルの中身に置きかわります</b>。<button type="button" class="chip" id="impGo">置きかえる</button>';
    $('#impGo').onclick = () => {
      try { const k = importData(pending); msg.textContent = `読み込みました（${k}冊）。`; }
      catch (err) { msg.textContent = 'このファイルは読み込めませんでした。本棚アプリで書き出したファイルか確かめてください。'; }
    };
  };
}
