// 画面の部品（3Dの上に重ねる）：名前・左右の矢印・素材の選択・見本の本・案内
import { useEffect, useRef, useState } from 'react';
import * as store from '../../js/store.js';
import { PRESETS } from '../../js/design.js';
import { NEIGHBORS } from '../../js/neighbors.js';
import type { ShelfIn } from './shelf';
import { World } from './world';

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
          <p>本の登録は、今の本屋の画面からできます。<br />まずは見本の本で試すこともできます。</p>
          <button className="primary" onClick={samples} disabled={busy}>見本の本を並べてみる</button>
          <a className="secondary" href="../">今の本屋で本を登録する</a>
        </section>
      )}

      <section className="dock" aria-label={name}>
        {own ? (
          <>
            <div className="chips" role="group" aria-label="本棚の素材">
              {Object.entries(PRESETS as Record<string, any>).map(([k, p]) => (
                <button key={k} aria-pressed={preset === k} onClick={() => choose(k)} disabled={busy}>{p.name}</button>
              ))}
            </div>
            <p className="hint">{sort === 'manual'
              ? '本を長押しして動かすと、並べ替えられます。左右にスワイプすると、となりの棚へ。'
              : '並べる順が「作家順」「色順」のときは、並べ替えできません。左右にスワイプすると、となりの棚へ。'}</p>
          </>
        ) : (
          <p className="hint">{name}（見本）です。左右にスワイプすると、となりの棚へ。</p>
        )}
      </section>
      {busy && <div className="busy">準備しています</div>}
      {!ready && <div className="wait">本を並べています</div>}
    </>
  );
}
