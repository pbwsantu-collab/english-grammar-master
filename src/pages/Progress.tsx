import { Progress } from '../hooks/useProgress';

interface Props {
  progress: Progress;
  accuracy: number;
  resetProgress: () => void;
  lang: 'en' | 'bn';
}

export default function ProgressPage({ progress, accuracy, resetProgress, lang }: Props) {
  const weakTopics = Object.entries(progress.topicStats)
    .filter(([, s]) => s.attempted >= 3)
    .map(([topic, s]) => ({
      topic,
      accuracy: Math.round((s.correct / s.attempted) * 100)
    }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 5);

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>
        {lang === 'en' ? 'Your Progress' : 'তোমার অগ্রগতি'}
      </h2>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="value">{progress.attempted}</div>
          <div className="label">{lang === 'en' ? 'Total Attempted' : 'মোট চেষ্টা'}</div>
        </div>
        <div className="stat-card">
          <div className="value">{progress.correct}</div>
          <div className="label">{lang === 'en' ? 'Correct' : 'সঠিক'}</div>
        </div>
        <div className="stat-card">
          <div className="value">{accuracy}%</div>
          <div className="label">{lang === 'en' ? 'Accuracy' : 'সঠিকতা'}</div>
        </div>
        <div className="stat-card">
          <div className="value">{progress.streak}</div>
          <div className="label">{lang === 'en' ? 'Streak' : 'ধারা'}</div>
        </div>
      </div>

      {weakTopics.length > 0 && (
        <div className="card">
          <h3>{lang === 'en' ? 'Topics to Revise' : 'রিভিশনের বিষয়'}</h3>
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            {weakTopics.map(t => (
              <li key={t.topic} style={{ marginBottom: 6 }}>
                {t.topic} — <strong style={{ color: t.accuracy < 60 ? 'var(--danger)' : 'var(--warning)' }}>
                  {t.accuracy}%
                </strong>
              </li>
            ))}
          </ul>
        </div>
      )}

      {progress.mistakes.length > 0 && (
        <div className="card">
          <h3>{lang === 'en' ? 'Recent Mistakes' : 'সাম্প্রতিক ভুল'}</h3>
          <ul style={{ marginTop: 10, paddingLeft: 18, fontSize: '0.9rem' }}>
            {progress.mistakes.slice(-8).reverse().map((m, i) => (
              <li key={i} style={{ marginBottom: 4 }}>
                {m.topic} (×{m.times})
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="card no-print">
        <h3>{lang === 'en' ? 'Reset' : 'রিসেট'}</h3>
        <p style={{ fontSize: '0.85rem', margin: '8px 0 12px' }}>
          {lang === 'en'
            ? 'This will clear all your progress data.'
            : 'এতে তোমার সব অগ্রগতি মুছে যাবে।'}
        </p>
        <button className="btn btn-danger" onClick={() => {
          if (confirm(lang === 'en' ? 'Reset all progress?' : 'সব অগ্রগতি মুছে ফেলবে?')) {
            resetProgress();
          }
        }}>
          {lang === 'en' ? 'Reset Progress' : 'অগ্রগতি রিসেট'}
        </button>
      </div>
    </div>
  );
}
