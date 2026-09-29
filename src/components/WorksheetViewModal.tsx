import React, { useState } from 'react';
import { X, Printer, Search, Eye, EyeOff } from 'lucide-react';
import { ALL_QUESTIONS } from '../data/questions.ts';

interface WorksheetViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToQuestion: (id: number) => void;
}

export const WorksheetViewModal: React.FC<WorksheetViewModalProps> = ({
  isOpen,
  onClose,
  onJumpToQuestion,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  if (!isOpen) return null;

  const filtered = ALL_QUESTIONS.filter((q) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      q.id.toString() === term ||
      q.question.toLowerCase().includes(term) ||
      q.officialKeyDisplay.toLowerCase().includes(term) ||
      q.options?.some((o) => o.text.toLowerCase().includes(term))
    );
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/70 backdrop-blur-xs transition-opacity">
      <div className="w-full max-w-5xl h-[92vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Topbar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-white dark:bg-slate-900">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Complete Worksheet & Study Guide
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Introduction to SDLC and Security · Total questions: 113 · Worksheet time: 59mins
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAllAnswers(!showAllAnswers)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              {showAllAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showAllAnswers ? 'Hide Answers' : 'Show All Answers'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Worksheet</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search header */}
        <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search in questions or answers..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            />
          </div>
          <span className="text-xs text-slate-500 font-mono tabular-nums">
            Showing {filtered.length} of {ALL_QUESTIONS.length}
          </span>
        </div>

        {/* Continuous scroll list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 print:p-0 print:space-y-4">
          {filtered.map((q) => (
            <div
              key={q.id}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-left transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  {q.id}.
                </span>
                <h4 className="flex-1 text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.question}
                </h4>
                <button
                  onClick={() => {
                    onJumpToQuestion(q.id);
                    onClose();
                  }}
                  className="text-[11px] text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium shrink-0 cursor-pointer print:hidden"
                >
                  Practice this #
                </button>
              </div>

              {/* Options */}
              {q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pl-5 text-xs">
                  {q.options.map((opt) => (
                    <div
                      key={opt.id}
                      className="p-2 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300"
                    >
                      <span className="font-mono font-semibold uppercase text-slate-400 mr-1.5">
                        {opt.id})
                      </span>
                      <span>{opt.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Expandable or shown answer */}
              {showAllAnswers && (
                <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs space-y-1">
                  <div className="text-emerald-700 dark:text-emerald-400 font-semibold font-mono">
                    Answer: {q.officialKeyDisplay}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    {q.explanation}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
