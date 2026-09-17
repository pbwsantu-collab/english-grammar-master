import { questions } from '../data/questions';
import { memoryFormulas } from '../data/lessons';

interface Props {
  lang: 'en' | 'bn';
}

export default function PrintPage({ lang }: Props) {
  const handlePrint = () => window.print();
  const paperQs = questions.slice(0, 30);

  return (
    <div>
      <div className="no-print" style={{ marginBottom: 16 }}>
        <h2>{lang === 'en' ? 'Print / Question Paper' : 'প্রিন্ট / প্রশ্নপত্র'}</h2>
        <p style={{ color: 'var(--text-muted)', margin: '8px 0 12px', fontSize: '0.9rem' }}>
          {lang === 'en'
            ? 'Use your browser Print → Save as PDF. Navigation and buttons are hidden when printing.'
            : 'ব্রাউজারের Print → Save as PDF ব্যবহার করো। প্রিন্টের সময় নেভিগেশন লুকানো থাকে।'}
        </p>
        <button className="btn btn-primary" onClick={handlePrint}>
          {lang === 'en' ? '🖨️ Print / Save PDF' : '🖨️ প্রিন্ট / PDF সংরক্ষণ'}
        </button>
      </div>

      <div className="card">
        <div style={{ textAlign: 'center', marginBottom: 20, borderBottom: '2px solid #333', paddingBottom: 12 }}>
          <h2 style={{ margin: 0 }}>English Grammar Master</h2>
          <p style={{ margin: '4px 0', fontSize: '0.95rem' }}>
            Prepositions, Conjunctions & Sentence Connectors
          </p>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
            Practice Paper · {paperQs.length} Questions · Based on Textbook Chapters XXII–XXIII
          </p>
        </div>

        <ol style={{ paddingLeft: 20 }}>
          {paperQs.map((q, i) => (
            <li key={q.id} style={{ marginBottom: 16, breakInside: 'avoid' }}>
              <p style={{ fontWeight: 500, marginBottom: 6 }}>{q.question}</p>
              {q.options && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, paddingLeft: 8, fontSize: '0.9rem' }}>
                  {q.options.map((opt, j) => (
                    <div key={j}>({String.fromCharCode(97 + j)}) {opt}</div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: 8 }}>Answer Key</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 6, marginTop: 12, fontSize: '0.85rem' }}>
          {paperQs.map((q, i) => (
            <div key={q.id}>{i + 1}. {q.answer}</div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: 8 }}>Quick Memory Formulas</h3>
        {memoryFormulas.slice(0, 6).map(f => (
          <div key={f.id} style={{ marginTop: 10, fontSize: '0.9rem' }}>
            <strong>{f.title}:</strong> {f.formula.replace(/\n/g, ' · ')}
          </div>
        ))}
      </div>
    </div>
  );
}
