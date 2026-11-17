// 本を足す（バーコード・背表紙・頑張れ私）と、棚の本をタップしたときの札
import { useEffect, useMemo, useRef, useState } from 'react';
import * as store from '../../js/store.js';
import { lookup, normalizeIsbn } from '../../js/lookup.js';
import { startScan } from '../../js/scan.js';
import { putImage, delImage } from '../../js/images.js';

const FORMATS = store.FORMATS as Record<string, { name: string }>;
const books = () => (store.getState() as any).books as any[];
const onShelf = (isbn?: string, title?: string, author?: string) =>
  books().some(b => (isbn && b.isbn === isbn) || (!!title && b.title === title && (b.author || '') === (author || '')));

// ---- 足し方を選ぶ ----
export function AddMenu({ onPick, onClose }: { onPick: (k: 'scan' | 'spine' | 'import') => void; onClose: () => void }) {
  return (
    <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="addHead" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="card">
        <div className="cardTop"><h2 id="addHead">本を足す</h2><button className="x" aria-label="閉じる" onClick={onClose}>×</button></div>
        <p className="lead">持っている紙の本だけを並べます。</p>
        <button className="way" onClick={() => onPick('scan')}><b>バーコードを撮る</b><small>1冊ずつ。題名・作者・ページ数が自動で入ります</small></button>
        <button className="way" onClick={() => onPick('spine')}><b>背表紙を撮る</b><small>実物の棚を1段ずつ、まとめて取り込みます</small></button>
        <button className="way" onClick={() => onPick('import')}><b>頑張れ私から読み込む</b><small>書き出したファイルから、持っている本を選びます</small></button>
      </div>
    </div>
  );
}

// ---- バーコードを撮る ----
type Found = { isbn: string; title: string; author: string; publisher: string; format: string; pages: number | null; formatGuessed?: boolean };
export function ScanSheet({ onAdded, onClose }: { onAdded: () => void; onClose: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const stop = useRef<null | (() => void)>(null);
  const [msg, setMsg] = useState('本の裏のバーコード（978 から始まる方）を、枠の中に入れてください。');
  const [found, setFound] = useState<Found | null>(null);
  const [dup, setDup] = useState(false);
  const [added, setAdded] = useState(0);
  const [round, setRound] = useState(0);

  useEffect(() => {
    if (found) return;
    let alive = true;
    if (!navigator.mediaDevices?.getUserMedia) { setMsg('この画面ではカメラが使えません。'); return; }
    startScan(video.current!, async (raw: string) => {
      stop.current = null;
      const isbn = normalizeIsbn(raw);
      if (!isbn || !alive) return;
      setMsg('本の情報をさがしています…');
      try {
        const info = await lookup(isbn);
        if (!alive) return;
        const f: Found = info || { isbn, title: '', author: '', publisher: '', format: 'shiroku', pages: null, formatGuessed: true };
        setDup(onShelf(isbn)); setFound(f);
        setMsg(info ? '' : 'この本のデータは見つかりませんでした。題名を入れると棚に置けます。');
      } catch { if (alive) { setMsg('インターネットにつながらないようです。つながってから、もう一度ためしてください。'); setRound(r => r + 1); } }
    }).then((s: () => void) => { if (alive) stop.current = s; else s(); })
      .catch(() => setMsg('カメラを使えませんでした。カメラの使用を許可してから、もう一度開いてください。'));
    return () => { alive = false; stop.current?.(); stop.current = null; };
  }, [found, round]);

  const next = () => { setFound(null); setDup(false); setMsg('次の本のバーコードを、枠の中に入れてください。'); };
  const place = () => {
    if (!found || !found.title.trim()) return;
    store.removeSamples();
    store.addBook({ title: found.title.trim(), author: found.author, publisher: found.publisher, isbn: found.isbn, format: found.format, pages: found.pages });
    setAdded(n => n + 1); onAdded(); next();
  };

  return (
    <div className="sheet full" role="dialog" aria-modal="true" aria-label="バーコードを撮る">
      <div className="scan">
        <video ref={video} playsInline muted autoPlay />
        <div className="scanFrame" aria-hidden="true" />
        <div className="scanTop"><span>{added ? `${added}冊 置きました` : 'バーコードを撮る'}</span><button className="done" onClick={onClose}>終わる</button></div>
        {msg && !found && <p className="scanMsg" role="status">{msg}</p>}
      </div>
      {found && (
        <div className="found card">
          {msg && <p className="note">{msg}</p>}
          {dup && <p className="note">この本は、もう棚にあります。</p>}
          <label className="field"><span>題名（ちがうときは直せます）</span>
            <input value={found.title} onChange={e => setFound({ ...found, title: e.target.value })} /></label>
          <dl className="meta">
            <div><dt>作者</dt><dd>{found.author || '—'}</dd></div>
            <div><dt>判型</dt><dd>
              <select value={found.format} onChange={e => setFound({ ...found, format: e.target.value, formatGuessed: false })}>
                {Object.entries(FORMATS).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
              </select>{found.formatGuessed && <small>　確かめてください</small>}</dd></div>
            <div><dt>ページ</dt><dd>{found.pages ? `${found.pages}ページ` : '—'}</dd></div>
          </dl>
          <button className="primary" onClick={place} disabled={dup || !found.title.trim()}>棚に置く</button>
          <button className="secondary" onClick={next}>{dup ? '次の本を撮る' : 'ちがう本'}</button>
        </div>
      )}
    </div>
  );
}

// ---- 頑張れ私から読み込む ----
// ファイルの形：{ app: "ganbare-watashi", kind: "books", version: 1, books: [{ id, title, author, genre, status, isbn, pages, spine }] }
// spine は背表紙の写真（data: で始まる画像。なくてもよい）
type GBook = { key: string; title: string; author: string; genre: string; status: string; isbn?: string; pages: number | null; spine?: string; has: boolean };
function parseGanbare(text: string): GBook[] {
  const j = JSON.parse(text);
  const list: any[] = Array.isArray(j) ? j : Array.isArray(j?.books) ? j.books : [];
  if (!list.length) throw new Error('empty');
  return list.filter(b => b && b.title).map((b, i) => {
    const isbn = b.isbn ? normalizeIsbn(b.isbn) || undefined : undefined;
    const title = String(b.title).trim(), author = String(b.author || '').trim();
    return {
      key: String(b.id ?? i), title, author, genre: String(b.genre || ''), status: String(b.status || 'そのほか'), isbn,
      pages: Number.isFinite(+b.pages) && +b.pages > 0 ? Math.round(+b.pages) : null,
      spine: typeof b.spine === 'string' && b.spine.startsWith('data:image/') ? b.spine : undefined,
      has: onShelf(isbn, title, author),
    };
  });
}
export function ImportSheet({ onAdded, onClose }: { onAdded: (n: number) => void; onClose: () => void }) {
  const [list, setList] = useState<GBook[] | null>(null);
  const [err, setErr] = useState('');
  const [pick, setPick] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState('すべて');
  const [busy, setBusy] = useState(false);
  const statuses = useMemo(() => ['すべて', ...new Set((list || []).map(b => b.status))], [list]);
  const shown = (list || []).filter(b => status === 'すべて' || b.status === status);

  const read = async (f?: File) => {
    if (!f) return;
    setErr('');
    try { setList(parseGanbare(await f.text())); setPick(new Set()); setStatus('すべて'); }
    catch { setErr('頑張れ私の本のファイルとして読めませんでした。頑張れ私の「本を書き出す」で作ったファイルを選んでください。'); }
  };
  const toggle = (k: string) => setPick(p => { const n = new Set(p); n.has(k) ? n.delete(k) : n.add(k); return n; });
  const place = async () => {
    if (!list) return;
    setBusy(true);
    store.removeSamples();
    let n = 0;
    for (const b of list) {
      if (!pick.has(b.key) || b.has) continue;
      let blob: Blob | null = null;
      if (b.spine) { try { blob = await (await fetch(b.spine)).blob(); } catch { blob = null; } }
      const id = store.addBook({ title: b.title, author: b.author, isbn: b.isbn, pages: b.pages, format: 'shiroku', genre: b.genre || undefined, img: !!blob, from: 'ganbare' });
      if (blob) { await putImage(id + '#photo', blob); await putImage(id, blob); }
      n++;
    }
    setBusy(false); onAdded(n);
  };

  return (
    <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="impHead" onClick={e => e.target === e.currentTarget && !busy && onClose()}>
      <div className="card tall">
        <div className="cardTop"><h2 id="impHead">頑張れ私から読み込む</h2><button className="x" aria-label="閉じる" onClick={onClose} disabled={busy}>×</button></div>
        {!list ? (
          <>
            <p className="lead">頑張れ私で「本を書き出す」をして、できたファイルを選んでください。ファイルはこのスマホの中だけで読みます。</p>
            <label className="primary file">ファイルを選ぶ<input type="file" accept=".json,application/json" onChange={e => read(e.target.files?.[0])} /></label>
            {err && <p className="note">{err}</p>}
          </>
        ) : (
          <>
            <p className="lead">持っている紙の本だけを選んでください（電子書籍・借りた本は選ばない）。すでに棚にある本は選べません。</p>
            <div className="chips light" role="group" aria-label="読んだ状態でしぼる">
              {statuses.map(s => <button key={s} aria-pressed={status === s} onClick={() => setStatus(s)}>{s}</button>)}
            </div>
            <ul className="picks">
              {shown.map(b => (
                <li key={b.key}>
                  <label className={b.has ? 'has' : ''}>
                    <input type="checkbox" checked={b.has || pick.has(b.key)} disabled={b.has} onChange={() => toggle(b.key)} />
                    <span><b>{b.title}</b><small>{[b.author, b.status, b.has ? 'もう棚にあります' : '', b.spine ? '背表紙の写真あり' : ''].filter(Boolean).join('・')}</small></span>
                  </label>
                </li>
              ))}
              {!shown.length && <li className="none">この状態の本はありません</li>}
            </ul>
            <button className="primary" onClick={place} disabled={!pick.size || busy}>{busy ? '置いています…' : `${pick.size}冊を棚に置く`}</button>
          </>
        )}
      </div>
    </div>
  );
}

// ---- 棚の本をタップしたとき ----
export function BookCard({ id, onChanged, onClose }: { id: string; onChanged: () => void; onClose: () => void }) {
  const b = books().find(x => x.id === id);
  const [title, setTitle] = useState(b?.title || '');
  const [gone, setGone] = useState(false);
  if (!b) return null;
  const was = !!b.record?.gone;
  const save = () => { store.updateBook(id, { title: title.trim() }); onChanged(); onClose(); };
  const remove = async () => {
    store.removeBook(id);
    try { await delImage(id); await delImage(id + '#photo'); } catch { /* 画像がなくても続ける */ }
    onChanged(); onClose();
  };
  const keep = () => { store.updateBook(id, { record: { ...(b.record || {}), gone: '手放した本' } }); onChanged(); onClose(); };
  const back = () => { const r = { ...(b.record || {}) }; delete r.gone; store.updateBook(id, { record: r }); onChanged(); onClose(); };

  return (
    <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="bkHead" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="card">
        <div className="cardTop"><h2 id="bkHead">{b.title || '題名なし'}</h2><button className="x" aria-label="閉じる" onClick={onClose}>×</button></div>
        <p className="lead">{[b.author, FORMATS[b.format]?.name, was ? '手放した本（思い出）' : ''].filter(Boolean).join('・') || '撮った背表紙の本'}</p>
        {!gone ? (
          <>
            <label className="field"><span>題名{b.title ? '（ちがうときは直せます）' : '（入れておくと、あとで探せます）'}</span>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="題名" /></label>
            {title.trim() !== (b.title || '') && <button className="primary" onClick={save}>題名を直す</button>}
            {was ? <button className="secondary" onClick={back}>手元にもどった</button>
              : <button className="secondary" onClick={() => setGone(true)}>手放した</button>}
          </>
        ) : (
          <>
            <p className="lead">手放した本をどうしますか？</p>
            <button className="way" onClick={remove}><b>棚から外す</b><small>この本を棚から消します</small></button>
            {b.img
              ? <button className="way" onClick={keep}><b>思い出として棚に残す</b><small>撮った背表紙のまま、少し暗くして並べておきます</small></button>
              : <p className="note">思い出として残せるのは、背表紙を撮った本だけです。</p>}
            <button className="secondary" onClick={() => setGone(false)}>もどる</button>
          </>
        )}
      </div>
    </div>
  );
}
