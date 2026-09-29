import React from 'react';
import { Sun, Moon, Grid3X3, RotateCcw, BarChart2, FileText } from 'lucide-react';

interface TopBarProps {
  currentQuestionId: number;
  totalQuestions: number;
  attemptedCount: number;
  correctCount: number;
  accuracy: number;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenGrid: () => void;
  onOpenStats: () => void;
  onOpenWorksheet: () => void;
  onReset: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentQuestionId,
  totalQuestions,
  attemptedCount,
  correctCount,
  accuracy,
  isDarkMode,
  onToggleTheme,
  onOpenGrid,
  onOpenStats,
  onOpenWorksheet,
  onReset,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-sm sm:text-lg font-bold tracking-tight whitespace-nowrap text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span className="sm:hidden">SDLC Quiz</span>
            <span className="hidden sm:inline">SDLC &amp; Security Quiz</span>
          </a>
        </div>

        {/* Zone 2: Progress & live stats unboxed with typographic separators */}
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 font-mono tabular-nums">
          <span>Question {currentQuestionId} / {totalQuestions}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>{attemptedCount} answered</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>{correctCount} correct</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{accuracy}% accuracy</span>
        </div>

        {/* Zone 3: Primary interactive controls */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Reset quiz progress */}
          <button
            onClick={() => {
              if (window.confirm('Reset all quiz progress? Your answered count and score will return to 0, and bookmarks will be cleared.')) {
                onReset();
              }
            }}
            className="flex items-center gap-1.5 px-2 sm:px-3 py-2 sm:py-1.5 text-xs font-medium rounded-lg text-rose-700 dark:text-rose-300 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/70 transition-colors cursor-pointer"
            title="Reset quiz progress"
            aria-label="Reset quiz progress"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* 113 Grid Jump matrix button */}
          <button
            onClick={onOpenGrid}
            className="flex items-center gap-1.5 px-2 sm:px-3 py-2 sm:py-1.5 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Open 113-Question Navigation Matrix"
            aria-label="Open 113-Question Navigation Matrix"
          >
            <Grid3X3 className="w-3.5 h-3.5 text-indigo-500" />
            <span className="hidden sm:inline">Questions</span>
            <span className="hidden sm:inline text-slate-400 font-mono text-[11px] tabular-nums">({totalQuestions})</span>
          </button>

          {/* Worksheet full view */}
          <button
            onClick={onOpenWorksheet}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="View Complete PDF Worksheet"
            aria-label="View Complete PDF Worksheet"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Sheet View</span>
          </button>

          {/* Stats Dialog Trigger */}
          <button
            onClick={onOpenStats}
            className="flex items-center gap-1.5 px-2 sm:px-3 py-2 sm:py-1.5 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Review Score & Accuracy"
            aria-label="Review Score & Accuracy"
          >
            <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Stats</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>
      </div>

      {/* Mobile progress hairline indicator */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1">
        <div
          className="bg-indigo-600 dark:bg-indigo-500 h-1 transition-all duration-300"
          style={{ width: `${(attemptedCount / totalQuestions) * 100}%` }}
        />
      </div>
    </header>
  );
};
