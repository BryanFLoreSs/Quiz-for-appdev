import React, { useState } from 'react';
import { useQuizState } from './hooks/useQuizState.ts';
import { TopBar } from './components/TopBar.tsx';
import { QuestionCard } from './components/QuestionCard.tsx';
import { QuestionGridModal } from './components/QuestionGridModal.tsx';
import { SummaryModal } from './components/SummaryModal.tsx';
import { WorksheetViewModal } from './components/WorksheetViewModal.tsx';
import { ALL_QUESTIONS } from './data/questions.ts';
import { Keyboard, BookOpen, CheckCircle, HelpCircle } from 'lucide-react';

export default function App() {
  const {
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
  } = useQuizState();

  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isWorksheetOpen, setIsWorksheetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors antialiased selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300">
      {/* 3-zone Header */}
      <TopBar
        currentQuestionId={currentQuestion.id}
        totalQuestions={stats.total}
        attemptedCount={stats.attemptedCount}
        correctCount={stats.correctCount}
        accuracy={stats.accuracy}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onOpenGrid={() => setIsGridOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        onOpenWorksheet={() => setIsWorksheetOpen(true)}
        onReset={resetAllProgress}
      />

      {/* Main Focus Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col justify-center">
        {/* Active Question Card */}
        <QuestionCard
          question={currentQuestion}
          attempt={currentAttempt}
          isBookmarked={isBookmarked}
          onToggleBookmark={() => toggleBookmark(currentQuestion.id)}
          onSubmitAnswer={submitAnswer}
          onNext={nextQuestion}
          onPrev={prevQuestion}
          totalQuestions={stats.total}
        />

        {/* Quiet unboxed study helper indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500 max-w-3xl mx-auto w-full px-2">
          <div className="flex items-center gap-2">
            <Keyboard className="w-3.5 h-3.5" />
            <span>Shortcuts: A-D to answer · ← / → to navigate · B to bookmark</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsGridOpen(true)}
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
            >
              113-Question Grid
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsWorksheetOpen(true)}
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
            >
              Worksheet View
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 py-4 text-center text-xs text-slate-400 dark:text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Introduction to SDLC and Security Assessment (113 Questions)</span>
          <span className="font-mono tabular-nums text-[11px]">
            {stats.attemptedCount} of {stats.total} completed ({stats.completionRate}%)
          </span>
        </div>
      </footer>

      {/* 113-Question Jump Matrix Modal */}
      <QuestionGridModal
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        currentQuestionId={currentQuestion.id}
        attempts={progress.attempts}
        bookmarks={progress.bookmarks}
        onSelectQuestion={(id) => goToQuestion(id)}
      />

      {/* Stats Summary Modal */}
      <SummaryModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        progress={progress}
        onReset={resetAllProgress}
        onJumpToQuestion={(id) => goToQuestion(id)}
      />

      {/* Full PDF Worksheet View Modal */}
      <WorksheetViewModal
        isOpen={isWorksheetOpen}
        onClose={() => setIsWorksheetOpen(false)}
        onJumpToQuestion={(id) => goToQuestion(id)}
      />
    </div>
  );
}
