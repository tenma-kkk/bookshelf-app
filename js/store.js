// データはスマホの中（ブラウザの localStorage）に保存する。サーバーには送らない。
const KEY = 'bookshelf.v1';

// 本の種類ごとの標準の大きさ（mm）。h=高さ、w=表紙の横幅
export const FORMATS = {
  bunko:   { name: '文庫',            h: 148, w: 105 },
  shinsho: { name: '新書',            h: 182, w: 103 },
  comic:   { name: '漫画（新書判）',  h: 174, w: 112 },
  b6:      { name: '漫画（B6）',      h: 182, w: 128 },
  shiroku: { name: '単行本（四六判）', h: 188, w: 127 },
  a5:      { name: '大きめの本（A5）', h: 210, w: 148 },
};

// 厚さはページ数から計算する（表紙の厚み＋1ページあたり）。わからない本は種類ごとの標準
const STD_PAGES = { bunko: 280, shinsho: 220, comic: 192, b6: 192, shiroku: 300, a5: 160 };
export function thickness(book) {
  if (book.w) return book.w;   // 写真から測った厚さ
  const pages = book.pages || STD_PAGES[book.format] || 250;
  return Math.round((2.2 + pages * 0.065) * 10) / 10;
}

export const SHELF = { inner: 560, rowH: 236, minRows: 5 };

function empty() {
  return {
    no: 1,
    since: new Date().getFullYear(),
    shelf: { name: 'わたしの本棚', preset: 'mine', mat: 'paint', frame: '#f7f6f2', inner: '#f2cf1d', top: 'same', brass: false },
    room: { wall: 'gallery', floor: 'gallery' },
    wish: [],
    light: 'day',
    lamp: 1,       // ダウンライトの明るさ（0＝消す〜1.6＝強い）
    books: [],
  };
}

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) { const d = JSON.parse(raw), e = empty(); return { ...e, ...d, shelf: { ...e.shelf, ...d.shelf }, room: { ...e.room, ...d.room } }; }
  } catch (e) { /* 保存できない環境でも、空の本棚で動かす */ }
  return empty();
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* 保存できなくても画面は動かす */ }
}

const listeners = new Set();
export function onChange(fn) { listeners.add(fn); }
function changed() { save(); listeners.forEach(fn => fn(state)); }

export function getState() { return state; }

export function setLight(light) { state.light = light; changed(); }
// 明るさはつまみを動かすたびに変わるので、本棚は描き直さずに保存だけする
export function setLamp(v) { state.lamp = v; save(); }
export function setShelf(patch) { state.shelf = { ...state.shelf, ...patch }; changed(); }
export function setRoom(patch) { state.room = { ...state.room, ...patch }; changed(); }

// ほしい本（本人だけが見られる）
export function addWish(item) { if (!state.wish.some(w => w.isbn === item.isbn)) { state.wish.push({ ...item, at: Date.now() }); changed(); } }
export function removeWish(isbn) { state.wish = state.wish.filter(w => w.isbn !== isbn); changed(); }

// バックアップ：書き出し・読み込み（読み込むと、いまの中身を置きかえる）
export function exportData() { return JSON.stringify({ app: 'bookshelf', version: 1, savedAt: new Date().toISOString(), data: state }, null, 1); }
export function importData(text) {
  const j = JSON.parse(text);
  const d = j && j.app === 'bookshelf' ? j.data : null;
  if (!d || !Array.isArray(d.books)) throw new Error('format');
  const e = empty();
  state = { ...e, ...d, shelf: { ...e.shelf, ...d.shelf }, room: { ...e.room, ...d.room }, wish: d.wish || [] };
  changed();
  return state.books.length;
}

export function addBook(book) {
  const id = 'b' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  state.books.push({ id, record: {}, ...book });
  changed();
  return id;
}

export function updateRecord(id, patch) {
  const b = state.books.find(x => x.id === id);
  if (!b) return;
  b.record = { ...b.record, ...patch };
  save(); // 記録の入力中は描き直さない（入力が途切れないように）
}

export function removeBook(id) {
  state.books = state.books.filter(x => x.id !== id);
  changed();
}
// 見本の本をまとめて外す（自分の本だけにする）。外した冊数を返す
export function removeSamples() {
  const n = state.books.filter(b => b.sample).length;
  if (n) { state.books = state.books.filter(b => !b.sample); changed(); }
  return n;
}
export function updateBook(id, patch) {
  const b = state.books.find(x => x.id === id);
  if (b) { Object.assign(b, patch); changed(); }
}

// 展示替え：from の本を、to の本の前（after=true なら後ろ）に動かす
export function moveBook(fromId, toId, after) {
  const list = state.books;
  const from = list.findIndex(x => x.id === fromId);
  if (from < 0 || fromId === toId) return;
  const [b] = list.splice(from, 1);
  let to = list.findIndex(x => x.id === toId);
  if (to < 0) to = list.length; else if (after) to += 1;
  list.splice(to, 0, b);
  changed();
}

// 見本の本（はじめて開いたときに試せるように）
export function addSamples() {
  const S = [
    ['カレーライスの丸かじり', '東海林さだお', 'bunko', 224, '#f1ece0', '文春文庫'],
    ['さよなら絵梨', '藤本タツキ', 'comic', 200, '#d8452f', 'ジャンプコミックス+'],
    ['ブランクスペース 1', '熊倉献', 'b6', 192, '#f6f1d0', 'ヒーローズ'],
    ['ロンリのちから', '野矢茂樹 ほか', 'shiroku', 200, '#f5f2ea', '三笠書房'],
    ['理系なテニス', '田中信弥・松尾衛', 'shiroku', 224, '#4f7fc0', '日本文芸社'],
    ['エレファントヘッド', '白井智之', 'shiroku', 432, '#f4f1e8', '角川書店'],
    ['歪曲済アイラービュ', '住野よる', 'shiroku', 320, '#f7f2ee', '新潮社'],
    ['GOAT', '小学館', 'a5', 300, '#1d1d1d', '小学館'],
    ['殺し屋の営業術', '野宮有', 'shiroku', 336, '#e2338a', '講談社'],
    ['青天', '若林正恭', 'shiroku', 288, '#2f6f86', '文藝春秋'],
    ['モリアーティ', 'アンソニー・ホロヴィッツ', 'bunko', 480, '#1f3348', '角川文庫'],
    ['小説の小説', '似鳥鶏', 'bunko', 280, '#efe6d0', '角川文庫'],
    ['俺ではない炎上', '浅倉秋成', 'bunko', 400, '#f3f0e8', '双葉文庫'],
  ];
  S.forEach(([title, author, format, pages, color, publisher]) =>
    state.books.push({ id: 'b' + Math.random().toString(36).slice(2, 10), title, author, format, pages, color, publisher, sample: true, record: {} }));
  for (let i = 1; i <= 42; i++) state.books.push({ id: 'db' + i, title: 'ドラゴンボール ' + i, author: '鳥山明', format: 'comic', pages: 192, color: '#f08a24', publisher: 'ジャンプコミックス', sample: true, record: {} });
  changed();
}
