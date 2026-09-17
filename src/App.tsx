import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useProgress } from './hooks/useProgress';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import Formulas from './pages/Formulas';
import Quiz from './pages/Quiz';
import ProgressPage from './pages/Progress';
import PrintPage from './pages/PrintPage';

export default function App() {
  const { progress, accuracy, recordAnswer, markLessonComplete, setName, resetProgress } = useProgress();
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const location = useLocation();

  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Grammar Master</h1>
        <div className="header-actions">
          {!isOnline && <span className="offline-badge">Offline</span>}
          <button
            className="lang-toggle"
            onClick={() => setLang(l => l === 'en' ? 'bn' : 'en')}
          >
            {lang === 'en' ? 'বাংলা' : 'English'}
          </button>
        </div>
      </header>

      <nav className="nav no-print">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/lessons" className={({ isActive }) => isActive ? 'active' : ''}>
          Lessons
        </NavLink>
        <NavLink to="/formulas" className={({ isActive }) => isActive ? 'active' : ''}>
          Formulas
        </NavLink>
        <NavLink to="/quiz" className={({ isActive }) => isActive ? 'active' : ''}>
          Quiz
        </NavLink>
        <NavLink to="/progress" className={({ isActive }) => isActive ? 'active' : ''}>
          Progress
        </NavLink>
        <NavLink to="/print" className={({ isActive }) => isActive ? 'active' : ''}>
          Print
        </NavLink>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={
            <Home progress={progress} accuracy={accuracy} lang={lang} setName={setName} />
          } />
          <Route path="/lessons" element={<Lessons lang={lang} />} />
          <Route path="/lessons/:id" element={
            <LessonDetail lang={lang} markComplete={markLessonComplete} />
          } />
          <Route path="/formulas" element={<Formulas lang={lang} />} />
          <Route path="/quiz" element={
            <Quiz lang={lang} recordAnswer={recordAnswer} />
          } />
          <Route path="/progress" element={
            <ProgressPage progress={progress} accuracy={accuracy} resetProgress={resetProgress} lang={lang} />
          } />
          <Route path="/print" element={<PrintPage lang={lang} />} />
        </Routes>
      </main>
    </div>
  );
}
