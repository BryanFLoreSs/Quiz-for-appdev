import { useState, useEffect, useMemo, useCallback } from 'react';
import { ALL_QUESTIONS, checkAnswer } from '../data/questions.ts';
import { QuestionAttempt, QuizProgress } from '../types/quiz.ts';

const STORAGE_KEY = 'sdlc_security_quiz_state_v1';
const THEME_KEY = 'sdlc_quiz_theme';

export function useQuizState() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem(THEME_KEY, 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem(THEME_KEY, 'light');
      }
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  // Quiz state
  const [progress, setProgress] = useState<QuizProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          attempts: parsed.attempts || {},
          bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
          currentQuestionId: typeof parsed.currentQuestionId === 'number' ? parsed.currentQuestionId : 1,
          optionOrder: parsed.optionOrder && typeof parsed.optionOrder === 'object' ? parsed.optionOrder : {},
        };
      }
    } catch {
      // fallback
    }
    return {
      attempts: {},
      bookmarks: [],
      currentQuestionId: 1,
    };
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  const currentQuestion = useMemo(() => {
    const q = ALL_QUESTIONS.find((item) => item.id === progress.currentQuestionId);
    const question = q || ALL_QUESTIONS[0];
    const order = progress.optionOrder?.[question.id];
    if (!question.options || !order) return question;

    const optionsById = new Map(question.options.map((option) => [option.id, option]));
    const shuffledChoices = order.map((id) => optionsById.get(id));
    if (shuffledChoices.length !== question.options.length || shuffledChoices.some((choice) => !choice)) {
      return question;
    }

    // Keep each displayed letter in its original position and move only the choice text.
    const sourceToDisplayedId = new Map<string, string>();
    const options = question.options.map((slot, index) => {
      const shuffledChoice = shuffledChoices[index]!;
      sourceToDisplayedId.set(shuffledChoice.id, slot.id);
      return { ...slot, text: shuffledChoice.text };
    });

    const correctAnswer = Array.isArray(question.correctAnswer)
      ? question.correctAnswer.map((id) => sourceToDisplayedId.get(id) ?? id)
      : sourceToDisplayedId.get(question.correctAnswer) ?? question.correctAnswer;

    const officialKeyDisplay = Array.isArray(correctAnswer)
      ? correctAnswer
          .map((id) => {
            const option = options.find((item) => item.id === id);
            return option ? `${option.id}) ${option.text}` : id;
          })
          .join(', ')
      : typeof question.correctAnswer === 'string' && question.type !== 'fill-in-the-blank'
        ? (() => {
            const option = options.find((item) => item.id === correctAnswer);
            return option ? `${option.id}) ${option.text}` : question.officialKeyDisplay;
          })()
        : question.officialKeyDisplay;

    return { ...question, options, correctAnswer, officialKeyDisplay };
  }, [progress.currentQuestionId, progress.optionOrder]);

  const currentAttempt = useMemo(() => {
    return progress.attempts[currentQuestion.id];
  }, [progress.attempts, currentQuestion.id]);

  const isBookmarked = useMemo(() => {
    return progress.bookmarks.includes(currentQuestion.id);
  }, [progress.bookmarks, currentQuestion.id]);

  // Actions
  const goToQuestion = useCallback((id: number) => {
    if (id >= 1 && id <= ALL_QUESTIONS.length) {
      setProgress((prev) => ({ ...prev, currentQuestionId: id }));
    }
  }, []);

  const nextQuestion = useCallback(() => {
    setProgress((prev) => {
      const nextId = prev.currentQuestionId < ALL_QUESTIONS.length ? prev.currentQuestionId + 1 : 1;
      return { ...prev, currentQuestionId: nextId };
    });
  }, []);

  const prevQuestion = useCallback(() => {
    setProgress((prev) => {
      const prevId = prev.currentQuestionId > 1 ? prev.currentQuestionId - 1 : ALL_QUESTIONS.length;
      return { ...prev, currentQuestionId: prevId };
    });
  }, []);

  const toggleBookmark = useCallback((id?: number) => {
    const targetId = id ?? currentQuestion.id;
    setProgress((prev) => {
      const exists = prev.bookmarks.includes(targetId);
      const updated = exists ? prev.bookmarks.filter((b) => b !== targetId) : [...prev.bookmarks, targetId];
      return { ...prev, bookmarks: updated };
    });
  }, [currentQuestion.id]);

  const submitAnswer = useCallback(
    (userAnswer: string | string[]) => {
      const isCorrect = checkAnswer(currentQuestion, userAnswer);
      const attempt: QuestionAttempt = {
        userAnswer,
        isCorrect,
        answeredAt: new Date().toISOString(),
      };
      setProgress((prev) => ({
        ...prev,
        attempts: {
          ...prev.attempts,
          [currentQuestion.id]: attempt,
        },
      }));
      return isCorrect;
    },
    [currentQuestion]
  );

  const resetAllProgress = useCallback(() => {
    const optionOrder: Record<number, string[]> = {};
    ALL_QUESTIONS.forEach((question) => {
      if (!question.options) return;
      const ids = question.options.map((option) => option.id);
      for (let index = ids.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [ids[index], ids[randomIndex]] = [ids[randomIndex], ids[index]];
      }
      optionOrder[question.id] = ids;
    });

    setProgress({
      attempts: {},
      bookmarks: [],
      currentQuestionId: 1,
      optionOrder,
    });
  }, []);

  const stats = useMemo(() => {
    const total = ALL_QUESTIONS.length;
    const attemptedKeys = Object.keys(progress.attempts);
    const attemptedCount = attemptedKeys.length;
    let correctCount = 0;
    let incorrectCount = 0;

    attemptedKeys.forEach((key) => {
      const a = progress.attempts[Number(key)];
      if (a?.isCorrect) correctCount++;
      else if (a) incorrectCount++;
    });

    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const completionRate = Math.round((attemptedCount / total) * 100);

    return {
      total,
      attemptedCount,
      correctCount,
      incorrectCount,
      accuracy,
      completionRate,
      bookmarkedCount: progress.bookmarks.length,
    };
  }, [progress]);

  return {
    isDarkMode,
    setIsDarkMode,
    currentQuestion,
    currentAttempt,
    isBookmarked,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    toggleBookmark,
    submitAnswer,
    resetAllProgress,
    stats,
    progress,
  };
}
