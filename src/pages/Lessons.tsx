import { Link } from 'react-router-dom';
import { lessons } from '../../lessons';

interface Props {
  lang: 'en' | 'bn';
}

const icons: Record<string, string> = {
  'prep-intro': 'P',
  'prep-uses': 'U',
  'conj-intro': 'C',
  'connectors': 'S'
};

export default function Lessons({ lang }: Props) {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>
        {lang === 'en' ? 'Lessons' : 'পাঠসমূহ'}
      </h2>
      <div className="lesson-list">
        {lessons.map(lesson => (
          <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="lesson-item">
            <div className="lesson-icon">{icons[lesson.id] || 'L'}</div>
            <div className="lesson-info">
              <h3>{lang === 'en' ? lesson.title : lesson.titleBn}</h3>
              <p>{lesson.chapter} · {lesson.sections.length} sections</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
