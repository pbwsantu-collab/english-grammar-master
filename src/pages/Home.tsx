import { Link } from 'react-router-dom';
import { Progress } from '../hooks/useProgress';
import { questions } from '../../questions';
import { lessons } from '../../lessons';

interface Props {
  progress: Progress;
  accuracy: number;
  lang: 'en' | 'bn';
  setName: (n: string) => void;
}

export default function Home({ progress, accuracy, lang, setName }: Props) {
  return (
    <div>
      <div className="card" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)', color: 'white', border: 'none' }}>
        <h2 style={{ color: 'white', marginBottom: 4 }}>
          {lang === 'en' ? `Hello, ${progress.name}!` : `নমস্কার, ${progress.name}!`}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
          {lang === 'en'
            ? 'Master Prepositions, Conjunctions & Sentence Connectors'
            : 'Preposition, Conjunction ও Sentence Connector আয়ত্ত করো'}
        </p>
        <input
          type="text"
          placeholder={lang === 'en' ? 'Your name' : 'তোমার নাম'}
          defaultValue={progress.name === 'Student' ? '' : progress.name}
          onBlur={e => e.target.value && setName(e.target.value)}
          style={{
            marginTop: 12,
            padding: '8px 12px',
            borderRadius: 8,
            border: 'none',
            width: '100%',
            maxWidth: 240,
            fontSize: '0.9rem'
          }}
        />
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="value">{progress.attempted}</div>
          <div className="label">{lang === 'en' ? 'Attempted' : 'চেষ্টা'}</div>
        </div>
        <div className="stat-card">
          <div className="value">{accuracy}%</div>
          <div className="label">{lang === 'en' ? 'Accuracy' : 'সঠিকতা'}</div>
        </div>
        <div className="stat-card">
          <div className="value">{progress.streak}</div>
          <div className="label">{lang === 'en' ? 'Day Streak' : 'দিনের ধারা'}</div>
        </div>
        <div className="stat-card">
          <div className="value">{progress.completedLessons.length}/{lessons.length}</div>
          <div className="label">{lang === 'en' ? 'Lessons' : 'পাঠ'}</div>
        </div>
      </div>

      <div className="card">
        <h3>{lang === 'en' ? 'Quick Start' : 'দ্রুত শুরু'}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          <Link to="/lessons" className="btn btn-primary btn-block">
            {lang === 'en' ? '📚 Start Lessons' : '📚 পাঠ শুরু করো'}
          </Link>
          <Link to="/quiz" className="btn btn-outline btn-block">
            {lang === 'en' ? `🎯 Practice Quiz (${questions.length} questions)` : `🎯 অনুশীলন (${questions.length} প্রশ্ন)`}
          </Link>
          <Link to="/formulas" className="btn btn-outline btn-block">
            {lang === 'en' ? '🧠 Memory Formulas' : '🧠 মেমোরি ফর্মুলা'}
          </Link>
        </div>
      </div>

      <div className="card">
        <h3>{lang === 'en' ? 'About this app' : 'এই অ্যাপ সম্পর্কে'}</h3>
        <p style={{ marginTop: 8 }}>
          {lang === 'en'
            ? 'Based on "A Text-Book of Higher English Grammar" (Chapters XXII–XXIII). Offline-first PWA for West Bengal Board students (Classes VIII–XII). All content works without internet after first load.'
            : 'A Text-Book of Higher English Grammar (Chapter XXII–XXIII) ভিত্তিক। অফলাইন-প্রথম PWA। প্রথম লোডের পর ইন্টারনেট ছাড়াই সবকিছু কাজ করে।'}
        </p>
      </div>
    </div>
  );
}
