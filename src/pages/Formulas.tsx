import { memoryFormulas } from '../../lessons';

interface Props {
  lang: 'en' | 'bn';
}

export default function Formulas({ lang }: Props) {
  return (
    <div>
      <h2 style={{ marginBottom: 8 }}>
        {lang === 'en' ? '🧠 Grammar Memory Lab' : '🧠 ব্যাকরণ মেমোরি ল্যাব'}
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '0.9rem' }}>
        {lang === 'en'
          ? 'Quick formulas to remember key rules. Review these regularly.'
          : 'মূল নিয়ম মনে রাখার সহজ ফর্মুলা। নিয়মিত রিভিউ করো।'}
      </p>

      <div className="formula-grid">
        {memoryFormulas.map(f => (
          <div key={f.id} className="formula-card">
            <h3>{lang === 'en' ? f.title : f.titleBn}</h3>
            <div className="formula-text">{f.formula}</div>
            <p style={{ fontSize: '0.85rem', marginTop: 6 }}>
              💡 {lang === 'en' ? f.tip : f.tipBn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
