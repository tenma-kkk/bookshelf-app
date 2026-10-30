// 本の情報を openBD（無料・申し込み不要）から ISBN でもらう
// タイトルでの検索は、openBD にはないので、AI 用のサーバー（Step 3）と一緒に用意する

// ISBN-10 を ISBN-13 に直し、正しい番号かを確かめる
export function normalizeIsbn(raw) {
  const s = String(raw).replace(/[^0-9Xx]/g, '').toUpperCase();
  if (s.length === 13 && /^97[89]/.test(s)) {
    const sum = [...s.slice(0, 12)].reduce((a, c, i) => a + (+c) * (i % 2 ? 3 : 1), 0);
    return (10 - sum % 10) % 10 === +s[12] ? s : null;
  }
  if (s.length === 10) {
    const core = '978' + s.slice(0, 9);
    const sum = [...core].reduce((a, c, i) => a + (+c) * (i % 2 ? 3 : 1), 0);
    return core + ((10 - sum % 10) % 10);
  }
  return null;
}

// 書籍の C コードの2けた目（形態）から、本の種類を推測する
function formatFromCcode(c) {
  const d = String(c || '').replace(/^C/, '')[1];
  return { 1: 'bunko', 2: 'shinsho', 9: 'comic' }[d] || null;
}

export async function lookup(isbn) {
  const res = await fetch(`https://api.openbd.jp/v1/get?isbn=${isbn}`);
  if (!res.ok) throw new Error('network');
  const [d] = await res.json();
  if (!d) return null;
  const sum = d.summary || {};
  const dd = (d.onix && d.onix.DescriptiveDetail) || {};
  const ext = [].concat(dd.Extent || []).find(e => e.ExtentType === '11' || e.ExtentValue);
  const subj = [].concat(dd.Subject || []).find(x => x.SubjectSchemeIdentifier === '78');
  const title = [sum.title, sum.volume].filter(Boolean).join(' ').trim();
  const author = (sum.author || '').replace(/,/g, '').replace(/\s*\d{4}-(\d{4})?/g, '').trim();
  let format = subj ? formatFromCcode(subj.SubjectCode) : null;
  if (!format && /文庫/.test(sum.series + title)) format = 'bunko';
  if (!format && /新書/.test(sum.series + title)) format = 'shinsho';
  if (!format && /コミック|COMICS/i.test(sum.series || '')) format = 'comic';
  return {
    isbn, title, author, publisher: sum.publisher || '', cover: sum.cover || '',
    pages: ext ? parseInt(ext.ExtentValue, 10) || null : null,
    format: format || 'shiroku', formatGuessed: !format,
  };
}
