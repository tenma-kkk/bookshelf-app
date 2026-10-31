// 背表紙の画像は数が多いので、localStorage ではなく IndexedDB（スマホの中のもう少し大きい保管場所）に置く
const DB = 'bookshelf-images', STORE = 'spines';
let dbp = null;
function db() {
  if (!dbp) dbp = new Promise((ok, ng) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => ok(r.result);
    r.onerror = () => ng(r.error);
  });
  return dbp;
}
async function tx(mode, fn) {
  const d = await db();
  return new Promise((ok, ng) => {
    const t = d.transaction(STORE, mode), st = t.objectStore(STORE), req = fn(st);
    t.oncomplete = () => ok(req && req.result);
    t.onerror = () => ng(t.error);
  });
}
export const putImage = (id, blob) => {
  // 撮り直したときは、前の画像のアドレスを捨てて、新しい画像を出す
  if (urls.has(id)) { URL.revokeObjectURL(urls.get(id)); urls.delete(id); }
  return tx('readwrite', st => st.put(blob, id));
};
export const delImage = id => tx('readwrite', st => st.delete(id));
const urls = new Map();
// 画面に出すためのアドレス（同じ画像は1回だけ読み出す）
export async function imageUrl(id) {
  if (urls.has(id)) return urls.get(id);
  const blob = await tx('readonly', st => st.get(id));
  if (!blob) return null;
  const u = URL.createObjectURL(blob);
  urls.set(id, u);
  return u;
}
