// 画面の部品（3Dの上に重ねる）：名前・左右の矢印・素材の選択・見本の本・案内
import { useEffect, useRef, useState } from 'react';
import * as store from '../../js/store.js';
import { PRESETS } from '../../js/design.js';
import { NEIGHBORS } from '../../js/neighbors.js';
import type { ShelfIn } from './shelf';
import { World } from './world';
import { openCapture, initCapture } from '../../js/capture.js';
import { AddMenu, BookCard, ImportSheet, ScanSheet } from './sheets';
import './capture.css';

const OWN_NAME = 'わたしの棚';

function ownShelf(): ShelfIn {
  const st: any = store.getState();
  return {
    key: 'own', name: OWN_NAME, sample: false, own: true, books: st.books, shelf: st.shelf,
    minRows: store.SHELF.minRows, wide: st.wide || 1, sort: st.sort,
  };
}
function neighborShelf(n: any): ShelfIn {
  return { key: n.name, name: n.name.replace(/の棚$/, '') + 'の棚', sample: true, own: false, books: n.books, shelf: n.shelf, minRows: n.minRows ?? 2, wide: n.wide || 1 };
}
// 左から ナツメ ／ わたし ／ ハルカ ／ ミナト
const LIST = [...NEIGHBORS.filter((n: any) => n.at < 0).map(neighborShelf), null, ...NEIGHBORS.filter((n: any) => n.at > 0).map(neighborShelf)];
const OWN = LIST.indexOf(null);

export function App() {
  const world = useRef<World | null>(null);
  const [ready, setReady] = useState(false);
  const [cur, setCur] = useState(OWN);
  const [fps, setFps] = useState('');
  const [count, setCount] = useState(() => (store.getState() as any).books.length);
  const [preset, setPreset] = useState<string>(() => (store.getState() as any).shelf.preset || 'mine');
  const [busy, setBusy] = useState(false);
  const quiet = useRef(false);
  const [sheet, setSheet] = useState<null | 'menu' | 'scan' | 'import' | { book: string }>(null);
  const [toast, setToast] = useState('');
  const pending = useRef(false);
  const sort = (store.getState() as any).sort || 'manual';

  useEffect(() => {
    let alive = true;
    (async () => {
      // 背表紙に使う字体を先に読み込む（3秒待っても来なければ、手元の字体で描く）
      const st: any = store.getState();
      const text = [...st.books, ...NEIGHBORS.flatMap((n: any) => n.books)].map((b: any) => (b.title || '') + (b.author || '')).join('') + 'の棚見本ー';
      try {
        await Promise.race([Promise.all(['800 40px "Shippori Mincho"', '600 40px "Shippori Mincho"', '700 40px "Zen Kaku Gothic New"', '500 40px "Zen Kaku Gothic New"']
          .map(f => document.fonts.load(f, text))), new Promise(r => setTimeout(r, 3000))]);
      } catch { /* 字体が読めなくても続ける */ }
      const w = new World(document.getElementById('stage') as HTMLCanvasElement, {
        shelf: i => setCur(i),
        fps: t => setFps(t),
        tap: b => setSheet({ book: b.id }),
        moved: (s, held) => {
          // 並べ替えた結果を、今のアプリと同じ保存場所に書く
          const order = s.order, i = order.indexOf(held);
          quiet.current = true;
          if (i > 0) store.moveBook(held.b.id, order[i - 1].b.id, true);
          else if (order.length > 1) store.moveBook(held.b.id, order[1].b.id, false);
          quiet.current = false;
        },
      });
      w.canReorder = sort === 'manual';
      await w.setShelves(LIST.map(c => c || ownShelf()), OWN);
      if (!alive) return;
      world.current = w; setReady(true);
    })().catch(e => { console.error(e); setFps('3Dを表示できませんでした'); });
    initCapture();
    store.onChange(() => { if (!quiet.current) setCount((store.getState() as any).books.length); });
    return () => { alive = false; };
  }, []);

  const choose = (k: string) => {
    const p = (PRESETS as any)[k]; if (!p || !world.current) return;
    setPreset(k); setBusy(true);
    setTimeout(() => {
      quiet.current = true;
      store.setShelf({ preset: k, ...p, name: (store.getState() as any).shelf.name });
      quiet.current = false;
      world.current!.styleShelf(OWN, (store.getState() as any).shelf);
      setBusy(false);
    }, 30);
  };
  const samples = async () => {
    if (!world.current) return;
    setBusy(true);
    quiet.current = true; store.addSamples(); quiet.current = false;
    await world.current.replaceShelf(OWN, ownShelf());
    setCount((store.getState() as any).books.length); setBusy(false);
  };

  // 棚の本が変わったら、自分の棚だけ組み立て直す
  const refresh = async (note?: string) => {
    pending.current = false;
    if (!world.current) return;
    setBusy(true);
    try { await world.current.replaceShelf(OWN, ownShelf()); } finally { setBusy(false); }
    setCount((store.getState() as any).books.length);
    if (note) { setToast(note); setTimeout(() => setToast(''), 3200); }
  };
  const pickWay = (k: 'scan' | 'spine' | 'import') => {
    if (k === 'spine') { setSheet(null); openCapture((added: number) => { if (added) refresh(`${added}冊を棚に置きました`); }); return; }
    setSheet(k);
  };

  const own = cur === OWN;
  const name = cur === OWN ? OWN_NAME : (LIST[cur] as ShelfIn | null)?.name;
  return (
    <>
      <header className="top">
        <h1>本屋</h1>
        <div className="topR">
          {fps && <span className="fps">{fps}</span>}
          <a className="old" href="../">今の本屋へ</a>
        </div>
      </header>
      {ready && cur > 0 && <button className="arrow l" aria-label="左の棚へ" onClick={() => world.current?.goTo(cur - 1)}>‹</button>}
      {ready && cur < LIST.length - 1 && <button className="arrow r" aria-label="右の棚へ" onClick={() => world.current?.goTo(cur + 1)}>›</button>}

      {ready && own && count === 0 && (
        <section className="empty">
          <h2>まだ本がありません</h2>
          <p>持っている紙の本を、バーコードか背表紙を撮って並べましょう。<br />まずは見本の本で試すこともできます。</p>
          <button className="primary" onClick={() => setSheet('menu')} disabled={busy}>本を足す</button>
          <button className="secondary" onClick={samples} disabled={busy}>見本の本を並べてみる</button>
        </section>
      )}

      <section className="dock" aria-label={name}>
        {own ? (
          <>
            <div className="dockRow">
            <button className="add" onClick={() => setSheet('menu')} disabled={!ready || busy}>＋ 本を足す</button>
            <div className="chips" role="group" aria-label="本棚の素材">
              {Object.entries(PRESETS as Record<string, any>).map(([k, p]) => (
                <button key={k} aria-pressed={preset === k} onClick={() => choose(k)} disabled={busy}>{p.name}</button>
              ))}
            </div>
            </div>
            <p className="hint">{sort === 'manual'
              ? '本をタップすると題名を直したり「手放した」にでき、長押しで並べ替えられます。左右にスワイプすると、となりの棚へ。'
              : '並べる順が「作家順」「色順」のときは、並べ替えできません。左右にスワイプすると、となりの棚へ。'}</p>
          </>
        ) : (
          <p className="hint">{name}（見本）です。左右にスワイプすると、となりの棚へ。</p>
        )}
      </section>
      {sheet === 'menu' && <AddMenu onPick={pickWay} onClose={() => setSheet(null)} />}
      {sheet === 'scan' && <ScanSheet onAdded={() => { pending.current = true; }}
        onClose={() => { setSheet(null); if (pending.current) refresh(); }} />}
      {sheet === 'import' && <ImportSheet onAdded={n => { setSheet(null); if (n) refresh(`${n}冊を棚に置きました`); }} onClose={() => setSheet(null)} />}
      {sheet && typeof sheet === 'object' && <BookCard id={sheet.book} onChanged={() => refresh()} onClose={() => setSheet(null)} />}
      {toast && <div className="toast" role="status">{toast}</div>}
      {busy && <div className="busy">準備しています</div>}
      {!ready && <div className="wait">本を並べています</div>}
    </>
  );
}
