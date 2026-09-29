import React, { useState, useMemo } from 'react';
import { X, Search, Filter, Bookmark, Check, AlertCircle, HelpCircle } from 'lucide-react';
import { ALL_QUESTIONS, ALL_TOPICS } from '../data/questions.ts';
import { QuestionTopic } from '../types/quiz.ts';

interface QuestionGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuestionId: number;
  attempts: Record<number, { isCorrect: boolean }>;
  bookmarks: number[];
  onSelectQuestion: (id: number) => void;
}

type StatusFilter = 'all' | 'unanswered' | 'correct' | 'incorrect' | 'bookmarked';

export const QuestionGridModal: React.FC<QuestionGridModalProps> = ({
  isOpen,
  onClose,
  currentQuestionId,
  attempts,
  bookmarks,
  onSelectQuestion,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  // Filter questions based on search and filters
  const filteredQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      // Topic match
      if (selectedTopic !== 'all' && q.topic !== selectedTopic) {
        return false;
      }

      // Status match
      const attempt = attempts[q.id];
      const isBookmarked = bookmarks.includes(q.id);

      if (statusFilter === 'unanswered' && attempt) return false;
      if (statusFilter === 'correct' && (!attempt || !attempt.isCorrect)) return false;
      if (statusFilter === 'incorrect' && (!attempt || attempt.isCorrect)) return false;
      if (statusFilter === 'bookmarked' && !isBookmarked) return false;

      // Search match
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesQuestion = q.question.toLowerCase().includes(term);
        const matchesTopic = q.topic.toLowerCase().includes(term);
        const matchesOptions = q.options?.some((opt) => opt.text.toLowerCase().includes(term));
        const matchesKey = q.officialKeyDisplay.toLowerCase().includes(term);
        return matchesQuestion || matchesTopic || matchesOptions || matchesKey;
      }

      return true;
    });
  }, [selectedTopic, statusFilter, searchTerm, attempts, bookmarks]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-xs transition-opacity">
      <div className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              113-Question Navigation Matrix
            </h3>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Jump directly to any question or filter by status and topic.
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 space-y-3">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search in 113 questions (e.g. Bun, Git Flow, Spiral, Next.js)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Tabs and Topic Selector */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            {/* Status Segmented Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg text-xs">
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'unanswered', label: 'Unanswered' },
                  { id: 'correct', label: 'Correct' },
                  { id: 'incorrect', label: 'Incorrect' },
                  { id: 'bookmarked', label: 'Bookmarked' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-2.5 py-1 font-medium rounded-md transition-colors cursor-pointer ${
                    statusFilter === tab.id
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Topic Filter Dropdown */}
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">All Topics (5)</option>
              {ALL_TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Legend */}
        <div className="px-5 py-2 text-[11px] text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
            <span>Unanswered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-emerald-500 text-white" />
            <span>Correct</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-rose-500 text-white" />
            <span>Incorrect</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Bookmarked</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md ring-2 ring-indigo-500" />
            <span>Current Question</span>
          </div>
        </div>

        {/* 113 Grid Matrix Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredQuestions.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              No questions found matching your filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
              {filteredQuestions.map((q) => {
                const isCurrent = q.id === currentQuestionId;
                const attempt = attempts[q.id];
                const isBookmarked = bookmarks.includes(q.id);

                let btnClass = 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700';

                if (attempt) {
                  if (attempt.isCorrect) {
                    btnClass = 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600 font-semibold';
                  } else {
                    btnClass = 'bg-rose-500 text-white border-rose-600 hover:bg-rose-600 font-semibold';
                  }
                }

                if (isCurrent) {
                  btnClass += ' ring-2 ring-indigo-600 ring-offset-2 dark:ring-offset-slate-900 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(q.id);
                      onClose();
                    }}
                    className={`relative h-11 rounded-xl border flex flex-col items-center justify-center text-xs transition-transform active:scale-95 cursor-pointer ${btnClass}`}
                    title={`Question ${q.id}: ${q.question.slice(0, 60)}...`}
                  >
                    <span className="font-mono tabular-nums leading-none">{q.id}</span>
                    {isBookmarked && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400 ring-1 ring-white dark:ring-slate-900" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 px-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>
            Showing {filteredQuestions.length} of {ALL_QUESTIONS.length} questions
          </span>
          <span className="hidden sm:inline">
            Click any box to jump directly to that question
          </span>
        </div>
      </div>
    </div>
  );
};
