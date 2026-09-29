import React from 'react';
import { CheckCircle2, XCircle, Info, BookOpen } from 'lucide-react';
import { Question } from '../types/quiz.ts';

interface ExplanationBoxProps {
  question: Question;
  isCorrect: boolean;
}

export const ExplanationBox: React.FC<ExplanationBoxProps> = ({ question, isCorrect }) => {
  return (
    <div
      className={`mt-6 p-5 rounded-xl border transition-all duration-200 ${
        isCorrect
          ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40 text-emerald-950 dark:text-emerald-100'
          : 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/40 text-rose-950 dark:text-rose-100'
      }`}
    >
      {/* Header status */}
      <div className="flex items-center gap-2 mb-3">
        {isCorrect ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
        )}
        <span className="font-semibold text-sm">
          {isCorrect ? 'Correct Answer!' : 'Incorrect'}
        </span>
      </div>

      {/* Official Answer Key from the PDF */}
      <div className="mb-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
        <div className="text-slate-500 dark:text-slate-400 font-medium mb-1 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
          <span>Official Answer Key (Wayground):</span>
        </div>
        <div className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white/70 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50 select-text">
          {question.officialKeyDisplay}
        </div>
      </div>

      {/* Pedagogical Explanation */}
      <div className="pt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium mb-1">
          <Info className="w-3.5 h-3.5 text-indigo-500" />
          <span>Explanation & Core Concept:</span>
        </div>
        <p className="text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
          {question.explanation}
        </p>
      </div>
    </div>
  );
};
