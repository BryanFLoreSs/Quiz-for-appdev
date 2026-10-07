import React, { useEffect, useState } from 'react';
import { useQuizState } from './hooks/useQuizState.ts';
import { TopBar } from './components/TopBar.tsx';
import { QuestionCard } from './components/QuestionCard.tsx';
import { QuestionGridModal } from './components/QuestionGridModal.tsx';
import { SummaryModal } from './components/SummaryModal.tsx';
import { WorksheetViewModal } from './components/WorksheetViewModal.tsx';
import { ALL_QUESTIONS } from './data/questions.ts';
import { FIAS_QUESTIONS } from './data/questionsFIAS.ts';
import { SWRE_MODULES_1_TO_10_QUESTIONS } from './data/questionsSWRE1to10.ts';
import { ArrowRight, BookOpen, Keyboard, ShieldCheck } from 'lucide-react';

const QUIZZES = [
  { id: 'sdlc', title: 'Introduction to SDLC and Security Assessment', shortTitle: 'SDLC & Security', description: 'Software development models, Git, web architecture, DevOps, and security assessment.', questions: ALL_QUESTIONS },
  { id: 'fias', title: 'Fundamentals of Information Assurance and Security', shortTitle: 'FIAS', description: 'Information security, the CIA triad, threats and controls, and STRIDE threat modeling.', questions: FIAS_QUESTIONS },
  { id: 'swre-modules-1-10', title: 'Switching, Routing, Wireless Essentials', shortTitle: 'SRWE · Modules 1–10', description: 'All 233 questions from the ten supplied module quizzes, with answer choices and explanations.', questions: SWRE_MODULES_1_TO_10_QUESTIONS },
];

export default function App() {
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('sdlc_quiz_theme') === 'dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('sdlc_quiz_theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  const toggleTheme = () => setIsDarkMode((current) => !current);
  if (!activeQuizId) return <QuizLibrary isDarkMode={isDarkMode} onToggleTheme={toggleTheme} onSelect={setActiveQuizId} />;
  const quiz = QUIZZES.find((item) => item.id === activeQuizId) ?? QUIZZES[0];
  return <QuizScreen key={quiz.id} quiz={quiz} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} onHome={() => setActiveQuizId(null)} />;
}

function QuizLibrary({ isDarkMode, onToggleTheme, onSelect }: { isDarkMode: boolean; onToggleTheme: () => void; onSelect: (id: string) => void }) {
  return <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased">
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90"><div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between"><a href="/" className="font-bold tracking-tight">Study Library</a><button onClick={onToggleTheme} className="text-sm px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">{isDarkMode ? 'Light mode' : 'Dark mode'}</button></div></header>
    <main className="max-w-6xl mx-auto px-5 py-14 sm:py-20"><p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Your quizzes</p><h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Choose what to study.</h1><p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl">Pick up where you left off. Answers and bookmarks are saved separately for each quiz.</p>
      <div className="grid sm:grid-cols-2 gap-5 mt-10">{QUIZZES.map((quiz, index) => { const Icon = index === 0 ? BookOpen : ShieldCheck; return <button key={quiz.id} onClick={() => onSelect(quiz.id)} className="group text-left p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all"><div className="flex items-start justify-between"><span className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 grid place-items-center"><Icon className="w-6 h-6" /></span><span className="text-xs font-medium text-slate-500">{quiz.questions.length} questions</span></div><h2 className="mt-7 text-xl font-bold">{quiz.shortTitle}</h2><p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{quiz.title}</p><p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{quiz.description}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">Open quiz <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></button>; })}</div>
    </main>
  </div>;
}

function QuizScreen({ quiz, isDarkMode, onToggleTheme, onHome }: { quiz: typeof QUIZZES[number]; isDarkMode: boolean; onToggleTheme: () => void; onHome: () => void }) {
  const { currentQuestion, currentAttempt, isBookmarked, goToQuestion, nextQuestion, prevQuestion, toggleBookmark, submitAnswer, resetAllProgress, stats, progress } = useQuizState(quiz.id, quiz.questions);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isWorksheetOpen, setIsWorksheetOpen] = useState(false);
  return <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors antialiased selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300">
    <TopBar quizTitle={quiz.shortTitle} onHome={onHome} currentQuestionId={currentQuestion.id} totalQuestions={stats.total} attemptedCount={stats.attemptedCount} correctCount={stats.correctCount} accuracy={stats.accuracy} isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} onOpenGrid={() => setIsGridOpen(true)} onOpenStats={() => setIsStatsOpen(true)} onOpenWorksheet={() => setIsWorksheetOpen(true)} onReset={resetAllProgress} />
    <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col justify-center"><QuestionCard question={currentQuestion} attempt={currentAttempt} isBookmarked={isBookmarked} onToggleBookmark={() => toggleBookmark(currentQuestion.id)} onSubmitAnswer={submitAnswer} onNext={nextQuestion} onPrev={prevQuestion} totalQuestions={stats.total} />
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500 max-w-3xl mx-auto w-full px-2"><div className="flex items-center gap-2"><Keyboard className="w-3.5 h-3.5" /><span>Shortcuts: A-D to answer · ← / → to navigate · B to bookmark</span></div><div className="flex items-center gap-3"><button onClick={() => setIsGridOpen(true)} className="hover:text-slate-700 dark:hover:text-slate-300">{stats.total}-Question Grid</button>{quiz.id === 'sdlc' && <><span>·</span><button onClick={() => setIsWorksheetOpen(true)} className="hover:text-slate-700 dark:hover:text-slate-300">Worksheet View</button></>}</div></div>
    </main>
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 py-4 text-center text-xs text-slate-400 dark:text-slate-500"><div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2"><span>{quiz.title} ({quiz.questions.length} Questions)</span><span className="font-mono tabular-nums text-[11px]">{stats.attemptedCount} of {stats.total} completed ({stats.completionRate}%)</span></div></footer>
    <QuestionGridModal isOpen={isGridOpen} onClose={() => setIsGridOpen(false)} currentQuestionId={currentQuestion.id} attempts={progress.attempts} bookmarks={progress.bookmarks} onSelectQuestion={goToQuestion} questions={quiz.questions} />
    <SummaryModal isOpen={isStatsOpen} onClose={() => setIsStatsOpen(false)} progress={progress} onReset={resetAllProgress} onJumpToQuestion={goToQuestion} questions={quiz.questions} />
    {quiz.id === 'sdlc' && <WorksheetViewModal isOpen={isWorksheetOpen} onClose={() => setIsWorksheetOpen(false)} onJumpToQuestion={goToQuestion} />}
  </div>;
}
