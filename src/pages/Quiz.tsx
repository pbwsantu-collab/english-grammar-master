import { useState } from 'react';
import { questions, Question } from '../../questions';

interface Props {
  lang: 'en' | 'bn';
  recordAnswer: (id: string, topic: string, correct: boolean) => void;
}

type Mode = 'menu' | 'quiz' | 'result';

export default function Quiz({ lang, recordAnswer }: Props) {
  const [mode, setMode] = useState<Mode>('menu');
  const [pool, setPool] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<{ q: Question; correct: boolean; chosen: string }[]>([]);

  const current = pool[index];

  const startQuiz = (count: number | 'all', chapter?: string) => {
    let list = [...questions];
    if (chapter) list = list.filter(q => q.chapter === chapter);
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    if (count !== 'all') list = list.slice(0, count);
    setPool(list);
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setResults([]);
    setMode('quiz');
  };

  const handleSelect = (opt: string) => {
    if (answered) return;
    setSelected(opt);
  };

  const handleSubmit = () => {
    if (!selected || !current) return;
    const isCorrect = selected === current.answer;
    if (isCorrect) setScore(s => s + 1);
    recordAnswer(current.id, current.topic, isCorrect);
    setResults(r => [...r, { q: current, correct: isCorrect, chosen: selected }]);
    setAnswered(true);
  };

  const handleNext = () => {
    if (index + 1 >= pool.length) {
      setMode('result');
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  if (mode === 'menu') {
    return (
      <div>
        <h2 style={{ marginBottom: 16 }}>
          {lang === 'en' ? 'Practice Quiz' : 'অনুশীলন কুইজ'}
        </h2>
        <div className="card">
          <p style={{ marginBottom: 16 }}>
            {lang === 'en'
              ? `Total questions available: ${questions.length}`
              : `মোট প্রশ্ন: ${questions.length}`}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button className="btn btn-primary btn-block" onClick={() => startQuiz(20)}>
              {lang === 'en' ? 'Random 20 Questions' : 'র‍্যান্ডম ২০ প্রশ্ন'}
            </button>
            <button className="btn btn-outline btn-block" onClick={() => startQuiz(10, 'Prepositions')}>
              {lang === 'en' ? 'Prepositions (10)' : 'Prepositions (১০)'}
            </button>
            <button className="btn btn-outline btn-block" onClick={() => startQuiz(10, 'Conjunctions')}>
              {lang === 'en' ? 'Conjunctions (10)' : 'Conjunctions (১০)'}
            </button>
            <button className="btn btn-outline btn-block" onClick={() => startQuiz(10, 'Sentence Connectors')}>
              {lang === 'en' ? 'Sentence Connectors (10)' : 'Sentence Connectors (১০)'}
            </button>
            <button className="btn btn-outline btn-block" onClick={() => startQuiz('all')}>
              {lang === 'en' ? `Full Challenge (${questions.length})` : `পূর্ণ চ্যালেঞ্জ (${questions.length})`}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'result') {
    const pct = Math.round((score / pool.length) * 100);
    return (
      <div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>{lang === 'en' ? 'Results' : 'ফলাফল'}</h2>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', margin: '12px 0' }}>
            {score}/{pool.length}
          </div>
          <p>{pct}% {lang === 'en' ? 'correct' : 'সঠিক'}</p>
          <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => setMode('menu')}>
            {lang === 'en' ? 'Back to Menu' : 'মেনুতে ফিরে যাও'}
          </button>
        </div>

        <h3 style={{ margin: '20px 0 12px' }}>
          {lang === 'en' ? 'Review' : 'রিভিউ'}
        </h3>
        {results.map((r, i) => (
          <div key={i} className="card" style={{ borderLeft: `4px solid ${r.correct ? 'var(--success)' : 'var(--danger)'}` }}>
            <p style={{ fontWeight: 600, marginBottom: 6 }}>{i + 1}. {r.q.question}</p>
            <p style={{ fontSize: '0.9rem' }}>
              {lang === 'en' ? 'Your answer' : 'তোমার উত্তর'}: <strong>{r.chosen}</strong>
              {!r.correct && (
                <span style={{ color: 'var(--success)', marginLeft: 8 }}>
                  → {r.q.answer}
                </span>
              )}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 6 }}>
              {r.q.explanation}
            </p>
          </div>
        ))}
      </div>
    );
  }

  const progressPct = ((index + (answered ? 1 : 0)) / pool.length) * 100;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {index + 1} / {pool.length}
        </span>
        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
          Score: {score}
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="card">
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8 }}>
          {current.chapter} · {current.topic} · {current.difficulty}
        </div>
        <h3 style={{ marginBottom: 16, lineHeight: 1.5 }}>{current.question}</h3>

        {current.options?.map(opt => {
          let cls = 'quiz-option';
          if (answered) {
            if (opt === current.answer) cls += ' correct';
            else if (opt === selected) cls += ' wrong';
          } else if (opt === selected) {
            cls += ' selected';
          }
          return (
            <button
              key={opt}
              className={cls}
              onClick={() => handleSelect(opt)}
              disabled={answered}
            >
              {opt}
            </button>
          );
        })}

        {answered && (
          <div className="explanation">
            <strong>{lang === 'en' ? 'Explanation' : 'ব্যাখ্যা'}:</strong> {current.explanation}
            {current.memoryTip && (
              <p style={{ marginTop: 6 }}>💡 {current.memoryTip}</p>
            )}
            {lang === 'bn' && current.bengaliMeaning && (
              <p className="bn" style={{ marginTop: 6 }}>{current.bengaliMeaning}</p>
            )}
          </div>
        )}

        <div style={{ marginTop: 16 }}>
          {!answered ? (
            <button
              className="btn btn-primary btn-block"
              onClick={handleSubmit}
              disabled={!selected}
            >
              {lang === 'en' ? 'Check Answer' : 'উত্তর যাচাই'}
            </button>
          ) : (
            <button className="btn btn-success btn-block" onClick={handleNext}>
              {index + 1 >= pool.length
                ? (lang === 'en' ? 'See Results' : 'ফলাফল দেখো')
                : (lang === 'en' ? 'Next Question' : 'পরের প্রশ্ন')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
