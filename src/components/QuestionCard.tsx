import React, { useState, useEffect, useRef } from 'react';
import { Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, Check, X, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { Question, QuestionAttempt } from '../types/quiz.ts';
import { ExplanationBox } from './ExplanationBox.tsx';

interface QuestionCardProps {
  question: Question;
  attempt?: QuestionAttempt;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onSubmitAnswer: (answer: string | string[]) => boolean;
  onNext: () => void;
  onPrev: () => void;
  totalQuestions: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  attempt,
  isBookmarked,
  onToggleBookmark,
  onSubmitAnswer,
  onNext,
  onPrev,
  totalQuestions,
}) => {
  // Local state for multiple choice selections before submitting
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);
  // Local state for fill in the blank text
  const [fillBlankInput, setFillBlankInput] = useState<string>('');
  const textInputRef = useRef<HTMLInputElement>(null);

  // Sync local inputs when changing question or when an attempt already exists
  useEffect(() => {
    if (attempt) {
      if (Array.isArray(attempt.userAnswer)) {
        setSelectedMulti(attempt.userAnswer);
      } else {
        setFillBlankInput(attempt.userAnswer);
      }
    } else {
      setSelectedMulti([]);
      setFillBlankInput('');
    }
  }, [question.id, attempt]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in the input box
      if (document.activeElement === textInputRef.current) {
        if (e.key === 'Enter' && !attempt) {
          e.preventDefault();
          if (fillBlankInput.trim()) {
            onSubmitAnswer(fillBlankInput.trim());
          }
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'b' || e.key === 'B') {
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          onToggleBookmark();
        }
      } else if (question.type === 'single' && !attempt) {
        const key = e.key.toLowerCase();
        if (['a', 'b', 'c', 'd'].includes(key)) {
          const match = question.options?.find((opt) => opt.id === key);
          if (match) {
            e.preventDefault();
            onSubmitAnswer(key);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question, attempt, fillBlankInput, onNext, onPrev, onToggleBookmark, onSubmitAnswer]);

  const handleToggleMulti = (id: string) => {
    if (attempt) return; // already locked
    setSelectedMulti((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleMultiSubmit = () => {
    if (selectedMulti.length === 0) return;
    onSubmitAnswer(selectedMulti);
  };

  const handleFillBlankSubmit = () => {
    if (!fillBlankInput.trim()) return;
    onSubmitAnswer(fillBlankInput.trim());
  };

  const handleRevealAnswer = () => {
    if (attempt) return;
    onSubmitAnswer(question.correctAnswer);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs transition-colors p-6 sm:p-8">
      {/* Top Metadata Header with Zero-Pill rule */}
      <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span className="font-mono tabular-nums text-slate-900 dark:text-slate-200 font-semibold">
            Question {question.id} of {totalQuestions}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>{question.topic}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="capitalize">
            {question.type === 'single'
              ? 'Single Choice'
              : question.type === 'multiple'
              ? 'Multiple Select'
              : 'Fill in the Blank'}
          </span>
        </div>

        {/* Bookmark toggle */}
        <button
          onClick={onToggleBookmark}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
            isBookmarked
              ? 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          title="Bookmark question (press B)"
        >
          {isBookmarked ? (
            <>
              <BookmarkCheck className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Bookmarked</span>
            </>
          ) : (
            <>
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bookmark</span>
            </>
          )}
        </button>
      </div>

      {/* Exact Verbatim Question Text */}
      <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 leading-relaxed mb-6">
        {question.question}
      </h2>

      {/* Response Section */}
      <div className="space-y-3">
        {/* Single Choice Mode */}
        {question.type === 'single' && question.options && (
          <div className="space-y-2.5">
            {question.options.map((opt) => {
              const isSelected = attempt?.userAnswer === opt.id;
              const isTargetCorrect = question.correctAnswer === opt.id;

              let buttonStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/60 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200';
              let badgeStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';

              if (attempt) {
                if (isTargetCorrect) {
                  // Official correct answer
                  buttonStyle = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 font-medium ring-1 ring-emerald-500/20';
                  badgeStyle = 'bg-emerald-600 text-white font-bold';
                } else if (isSelected && !attempt.isCorrect) {
                  // User selected wrong answer
                  buttonStyle = 'border-rose-400 bg-rose-50/80 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100 ring-1 ring-rose-400/20';
                  badgeStyle = 'bg-rose-600 text-white font-bold';
                } else {
                  // Unselected non-answer
                  buttonStyle = 'opacity-60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
                  badgeStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={Boolean(attempt)}
                  onClick={() => onSubmitAnswer(opt.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3.5 transition-all text-sm sm:text-[15px] leading-relaxed cursor-pointer disabled:cursor-default ${buttonStyle}`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs uppercase font-semibold transition-colors ${badgeStyle}`}
                  >
                    {opt.id}
                  </span>
                  <span className="flex-1 pt-0.5">{opt.text}</span>
                  {attempt && isTargetCorrect && (
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 self-center" />
                  )}
                  {attempt && isSelected && !attempt.isCorrect && (
                    <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 self-center" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Multiple Choice (Check all that apply) Mode */}
        {question.type === 'multiple' && question.options && (
          <div className="space-y-3">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Select all options that apply:
            </div>
            <div className="space-y-2.5">
              {question.options.map((opt) => {
                const isChecked = selectedMulti.includes(opt.id);
                const isTargetCorrect = Array.isArray(question.correctAnswer) && question.correctAnswer.includes(opt.id);

                let cardStyle = 'border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200';
                if (!attempt) {
                  cardStyle = isChecked
                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-950 dark:text-indigo-100 ring-1 ring-indigo-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/60 dark:hover:bg-slate-800/50';
                } else {
                  if (isTargetCorrect) {
                    cardStyle = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 font-medium ring-1 ring-emerald-500/20';
                  } else if (isChecked && !isTargetCorrect) {
                    cardStyle = 'border-rose-400 bg-rose-50/80 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100 ring-1 ring-rose-400/20';
                  } else {
                    cardStyle = 'opacity-60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
                  }
                }

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleToggleMulti(opt.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border flex items-start gap-3.5 transition-all text-sm sm:text-[15px] leading-relaxed select-none ${
                      attempt ? 'cursor-default' : 'cursor-pointer'
                    } ${cardStyle}`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 border transition-colors ${
                        isChecked
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className="font-mono text-xs uppercase font-semibold text-slate-400 mt-0.5">
                      {opt.id})
                    </span>
                    <span className="flex-1">{opt.text}</span>
                    {attempt && isTargetCorrect && (
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 shrink-0 self-center">
                        Correct
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit Multi-Select Button */}
            {!attempt && (
              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedMulti.length} selected
                </span>
                <button
                  onClick={handleMultiSubmit}
                  disabled={selectedMulti.length === 0}
                  className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Submit Answer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Fill in the Blank Mode */}
        {question.type === 'fill-in-the-blank' && (
          <div className="space-y-4 pt-1">
            <div className="space-y-2">
              <label
                htmlFor="blank-input"
                className="block text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Type the exact missing term or phrase:
              </label>
              <div className="flex items-center gap-2">
                <input
                  ref={textInputRef}
                  id="blank-input"
                  type="text"
                  disabled={Boolean(attempt)}
                  value={fillBlankInput}
                  onChange={(e) => setFillBlankInput(e.target.value)}
                  placeholder="e.g. index, code pushes, Zig..."
                  autoFocus
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm disabled:opacity-80"
                />
                {!attempt && (
                  <button
                    onClick={handleFillBlankSubmit}
                    disabled={!fillBlankInput.trim()}
                    className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                  >
                    <span>Check</span>
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {!attempt && (
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Press Enter to check your answer</span>
                <button
                  onClick={handleRevealAnswer}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Reveal Answer</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Immediate Educational Explanation Box */}
      {attempt && (
        <ExplanationBox question={question} isCorrect={attempt.isCorrect} />
      )}

      {/* Card Footer Navigation */}
      <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={onPrev}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <span className="text-xs font-mono text-slate-400 tabular-nums">
          {question.id} / {totalQuestions}
        </span>

        <button
          onClick={onNext}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
