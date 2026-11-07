import React, { useState } from 'react';
import { X, Award, Download, Upload, RotateCcw, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Question, QuestionTopic } from '../types/quiz.ts';
import { QuizProgress } from '../types/quiz.ts';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: QuizProgress;
  onReset: () => void;
  onJumpToQuestion: (id: number) => void;
  questions?: Question[];
  quizId?: string;
  onImportProgress: (progress: QuizProgress) => void;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  onClose,
  progress,
  onReset,
  onJumpToQuestion,
  questions = [],
  quizId = 'quiz',
  onImportProgress,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  if (!isOpen) return null;

  const total = questions.length;
  const attempts = progress.attempts;
  const attemptedKeys = Object.keys(attempts);
  const attemptedCount = attemptedKeys.length;

  let correctCount = 0;
  let incorrectCount = 0;
  const incorrectIds: number[] = [];

  attemptedKeys.forEach((key) => {
    const numKey = Number(key);
    const a = attempts[numKey];
    if (a?.isCorrect) {
      correctCount++;
    } else if (a) {
      incorrectCount++;
      incorrectIds.push(numKey);
    }
  });

  const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
  const completionRate = Math.round((attemptedCount / total) * 100);
  const confidenceCounts = attemptedKeys.reduce(
    (counts, key) => {
      const confidence = attempts[Number(key)]?.confidence ?? 'medium';
      counts[confidence]++;
      return counts;
    },
    { low: 0, medium: 0, high: 0 }
  );

  const exportProgress = () => {
    const payload = {
      app: 'Study Library',
      quizId,
      exportedAt: new Date().toISOString(),
      progress,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${quizId}-progress-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importProgress = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const restored = parsed?.progress;
      if (parsed?.app !== 'Study Library' || parsed?.quizId !== quizId || !restored || typeof restored !== 'object') {
        throw new Error('Invalid progress backup');
      }
      if (!restored.attempts || !Array.isArray(restored.bookmarks)) throw new Error('Invalid progress backup');
      onImportProgress(restored as QuizProgress);
    } catch {
      window.alert('That file is not a valid backup for this quiz.');
    }
  };

  // Topic breakdown
  const topicStats = [...new Set(questions.map((q) => q.topic))].map((topic: QuestionTopic) => {
    const questionsInTopic = questions.filter((q) => q.topic === topic);
    const topicTotal = questionsInTopic.length;
    let topicAttempted = 0;
    let topicCorrect = 0;

    questionsInTopic.forEach((q) => {
      const a = attempts[q.id];
      if (a) {
        topicAttempted++;
        if (a.isCorrect) topicCorrect++;
      }
    });

    const topicAccuracy = topicAttempted > 0 ? Math.round((topicCorrect / topicAttempted) * 100) : 0;
    return {
      topic,
      total: topicTotal,
      attempted: topicAttempted,
      correct: topicCorrect,
      accuracy: topicAccuracy,
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs transition-opacity">
      <div className="w-full max-w-xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Performance & Study Progress
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {total} Questions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Primary Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">
                Completed
              </span>
              <span className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                {attemptedCount} <span className="text-xs font-normal text-slate-400">/ {total}</span>
              </span>
              <div className="text-[11px] text-indigo-600 dark:text-indigo-400 mt-0.5">
                {completionRate}% progress
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">
                Accuracy
              </span>
              <span className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                {accuracy}%
              </span>
              <div className="text-[11px] text-slate-400 mt-0.5">
                current pass rate
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/30 dark:bg-emerald-950/20">
              <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 block mb-1">
                Correct
              </span>
              <span className="text-lg font-bold font-mono text-emerald-700 dark:text-emerald-300 tabular-nums">
                {correctCount}
              </span>
              <div className="text-[11px] text-emerald-600/70 mt-0.5">
                questions passed
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 bg-rose-50/30 dark:bg-rose-950/20">
              <span className="text-[11px] font-medium text-rose-600 dark:text-rose-400 block mb-1">
                Incorrect
              </span>
              <span className="text-lg font-bold font-mono text-rose-700 dark:text-rose-300 tabular-nums">
                {incorrectCount}
              </span>
              <div className="text-[11px] text-rose-600/70 mt-0.5">
                need revision
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={exportProgress} className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"><Download className="w-3.5 h-3.5" />Export progress backup</button>
            <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:underline cursor-pointer"><Upload className="w-3.5 h-3.5" />Import backup<input type="file" accept="application/json,.json" onChange={importProgress} className="sr-only" /></label>
          </div>

          <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Answer confidence</h4>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg bg-rose-50 dark:bg-rose-950/30 px-2 py-2"><div className="font-bold text-rose-700 dark:text-rose-300">{confidenceCounts.low}</div><div className="mt-0.5 text-rose-600/80 dark:text-rose-400">Low</div></div>
              <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 px-2 py-2"><div className="font-bold text-amber-700 dark:text-amber-300">{confidenceCounts.medium}</div><div className="mt-0.5 text-amber-600/80 dark:text-amber-400">Medium</div></div>
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 px-2 py-2"><div className="font-bold text-emerald-700 dark:text-emerald-300">{confidenceCounts.high}</div><div className="mt-0.5 text-emerald-600/80 dark:text-emerald-400">High</div></div>
            </div>
          </div>

          {/* Quick Review Incorrect CTA */}
          {incorrectIds.length > 0 && (
            <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800/40 bg-amber-50/50 dark:bg-amber-950/20 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold text-amber-900 dark:text-amber-200">
                  {incorrectIds.length} missed question{incorrectIds.length > 1 ? 's' : ''} to review
                </h4>
                <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-0.5">
                  Review mistakes to reinforce correct principles before exams.
                </p>
              </div>
              <button
                onClick={() => {
                  onJumpToQuestion(incorrectIds[0]);
                  onClose();
                }}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-white shrink-0 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Jump to First</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Breakdown by Topic */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Performance by Topic
            </h4>
            <div className="space-y-2.5">
              {topicStats.map((item) => (
                <div
                  key={item.topic}
                  className="p-3 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {item.topic}
                    </span>
                    <span className="font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                      {item.correct} / {item.attempted} ({item.accuracy}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${item.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reset Progress Section */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            {!showConfirmReset ? (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all quiz attempts & bookmarks</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-900 dark:text-rose-200">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Are you sure you want to clear all progress?</span>
                </div>
                <p className="text-[11px] text-rose-700 dark:text-rose-300">
                  This will erase all recorded answers, scores, and bookmarks from local storage.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => {
                      onReset();
                      setShowConfirmReset(false);
                      onClose();
                    }}
                    className="px-3 py-1 text-xs font-semibold bg-rose-600 text-white rounded-lg hover:bg-rose-500 cursor-pointer"
                  >
                    Yes, reset all
                  </button>
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
