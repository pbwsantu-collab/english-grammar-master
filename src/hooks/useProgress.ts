import { useState, useEffect, useCallback } from 'react';

export interface Progress {
  attempted: number;
  correct: number;
  mistakes: { questionId: string; topic: string; times: number }[];
  topicStats: Record<string, { attempted: number; correct: number }>;
  completedLessons: string[];
  streak: number;
  lastPracticeDate: string | null;
  name: string;
}

const STORAGE_KEY = 'egm-progress-v1';

const defaultProgress: Progress = {
  attempted: 0,
  correct: 0,
  mistakes: [],
  topicStats: {},
  completedLessons: [],
  streak: 0,
  lastPracticeDate: null,
  name: 'Student'
};

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...defaultProgress, ...JSON.parse(raw) };
    } catch {}
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  const recordAnswer = useCallback((questionId: string, topic: string, isCorrect: boolean) => {
    setProgress(prev => {
      const next = { ...prev };
      next.attempted += 1;
      if (isCorrect) next.correct += 1;

      if (!next.topicStats[topic]) next.topicStats[topic] = { attempted: 0, correct: 0 };
      next.topicStats[topic].attempted += 1;
      if (isCorrect) next.topicStats[topic].correct += 1;

      if (!isCorrect) {
        const existing = next.mistakes.find(m => m.questionId === questionId);
        if (existing) existing.times += 1;
        else next.mistakes.push({ questionId, topic, times: 1 });
        if (next.mistakes.length > 50) next.mistakes = next.mistakes.slice(-50);
      }

      const today = new Date().toISOString().slice(0, 10);
      if (next.lastPracticeDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStr = yesterday.toISOString().slice(0, 10);
        if (next.lastPracticeDate === yStr) next.streak += 1;
        else next.streak = 1;
        next.lastPracticeDate = today;
      }

      return next;
    });
  }, []);

  const markLessonComplete = useCallback((lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return { ...prev, completedLessons: [...prev.completedLessons, lessonId] };
    });
  }, []);

  const setName = useCallback((name: string) => {
    setProgress(prev => ({ ...prev, name }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const accuracy = progress.attempted > 0
    ? Math.round((progress.correct / progress.attempted) * 100)
    : 0;

  return {
    progress,
    accuracy,
    recordAnswer,
    markLessonComplete,
    setName,
    resetProgress
  };
}
