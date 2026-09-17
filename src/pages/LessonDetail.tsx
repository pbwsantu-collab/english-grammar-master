import { useParams, Link } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useEffect } from 'react';

interface Props {
  lang: 'en' | 'bn';
  markComplete: (id: string) => void;
}

export default function LessonDetail({ lang, markComplete }: Props) {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === id);

  useEffect(() => {
    if (lesson) markComplete(lesson.id);
  }, [lesson, markComplete]);

  if (!lesson) {
    return (
      <div className="card">
        <p>Lesson not found.</p>
        <Link to="/lessons" className="btn btn-primary" style={{ marginTop: 12 }}>
          Back to Lessons
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/lessons" style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none' }}>
        ← {lang === 'en' ? 'All Lessons' : 'সব পাঠ'}
      </Link>
      <h2 style={{ margin: '12px 0 4px' }}>
        {lang === 'en' ? lesson.title : lesson.titleBn}
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '0.9rem' }}>
        {lesson.chapter}
      </p>

      {lesson.sections.map(section => (
        <div key={section.id} className="card">
          <h3>{lang === 'en' ? section.title : section.titleBn}</h3>
          <p style={{ margin: '10px 0', lineHeight: 1.7 }}>
            {lang === 'en' ? section.content : section.contentBn}
          </p>

          {section.examples.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>
                {lang === 'en' ? 'Examples' : 'উদাহরণ'}
              </strong>
              <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                {section.examples.map((ex, i) => (
                  <li key={i} style={{ marginBottom: 4, fontSize: '0.9rem' }}>
                    {ex.en}
                    {lang === 'bn' && ex.bn && (
                      <span className="bn" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        {ex.bn}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {section.notes && section.notes.length > 0 && (
            <div style={{ marginTop: 12, background: '#fffbeb', padding: 10, borderRadius: 8, border: '1px solid #fde68a' }}>
              <strong style={{ fontSize: '0.85rem' }}>Notes</strong>
              <ul style={{ marginTop: 4, paddingLeft: 18, fontSize: '0.85rem' }}>
                {section.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          )}

          {section.memoryTip && (
            <div style={{ marginTop: 12, background: '#ecfdf5', padding: 10, borderRadius: 8, border: '1px solid #a7f3d0' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--success)' }}>
                💡 {lang === 'en' ? 'Memory Tip' : 'মেমোরি টিপ'}
              </strong>
              <p style={{ marginTop: 4, fontSize: '0.9rem' }}>
                {lang === 'en' ? section.memoryTip : (section.memoryTipBn || section.memoryTip)}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
