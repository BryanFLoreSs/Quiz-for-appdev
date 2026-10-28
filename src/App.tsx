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
import { ArrowRight, BookOpen, Eye, EyeOff, Keyboard, LogOut, ShieldCheck } from 'lucide-react';

const QUIZZES = [
  { id: 'sdlc', title: 'Introduction to SDLC and Security Assessment', shortTitle: 'SDLC & Security', description: 'Software development models, Git, web architecture, DevOps, and security assessment.', questions: ALL_QUESTIONS },
  { id: 'fias', title: 'Fundamentals of Information Assurance and Security', shortTitle: 'FIAS', description: 'Information security, the CIA triad, threats and controls, and STRIDE threat modeling.', questions: FIAS_QUESTIONS },
  { id: 'swre-modules-1-10', title: 'Switching, Routing, Wireless Essentials', shortTitle: 'SRWE · Modules 1–10', description: 'All 233 questions from the ten supplied module quizzes, with answer choices and explanations.', questions: SWRE_MODULES_1_TO_10_QUESTIONS },
];

export default function App() {
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem('study_library_user') ?? '');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('sdlc_quiz_theme') === 'dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('sdlc_quiz_theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  const toggleTheme = () => setIsDarkMode((current) => !current);
  const handleLogin = (email: string) => {
    localStorage.setItem('study_library_user', email);
    setUserEmail(email);
  };
  const handleLogout = () => {
    localStorage.removeItem('study_library_user');
    setActiveQuizId(null);
    setUserEmail('');
  };
  if (!userEmail) return <LoginScreen isDarkMode={isDarkMode} onToggleTheme={toggleTheme} onLogin={handleLogin} />;
  if (!activeQuizId) return <QuizLibrary userEmail={userEmail} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} onSelect={setActiveQuizId} onLogout={handleLogout} />;
  const quiz = QUIZZES.find((item) => item.id === activeQuizId) ?? QUIZZES[0];
  return <QuizScreen key={quiz.id} quiz={quiz} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} onHome={() => setActiveQuizId(null)} />;
}

function LoginScreen({ isDarkMode, onToggleTheme, onLogin }: { isDarkMode: boolean; onToggleTheme: () => void; onLogin: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !password) {
      setError('Enter your email and password to continue.');
      return;
    }
    onLogin(email.trim().toLowerCase());
  };

  return <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased flex items-center justify-center px-5 py-10">
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-8"><span className="font-bold tracking-tight">Study Library</span><button onClick={onToggleTheme} className="text-sm px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">{isDarkMode ? 'Light mode' : 'Dark mode'}</button></div>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 sm:p-9 shadow-sm">
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Welcome back</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Sign in to study.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">Your quiz progress is saved in this browser.</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div><label htmlFor="login-email" className="block text-sm font-medium mb-2">Email</label><input id="login-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" placeholder="you@example.com" /></div>
          <div><label htmlFor="login-password" className="block text-sm font-medium mb-2">Password</label><div className="relative"><input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 pr-12 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" placeholder="••••••••" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute inset-y-0 right-0 px-3 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200" aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button></div></div>
          {error && <p role="alert" className="text-sm text-rose-600 dark:text-rose-400">{error}</p>}
          <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700 transition-colors">Sign in</button>
        </form>
      </div>
    </div>
  </div>;
}

function QuizLibrary({ userEmail, isDarkMode, onToggleTheme, onSelect, onLogout }: { userEmail: string; isDarkMode: boolean; onToggleTheme: () => void; onSelect: (id: string) => void; onLogout: () => void }) {
  const progressFor = (quizId: string) => {
    try {
      const saved = localStorage.getItem(`quiz_state_v2_${quizId}`);
      const attempts = saved ? JSON.parse(saved).attempts : {};
      const entries = Object.values(attempts ?? {}) as Array<{ isCorrect?: boolean }>;
      const attempted = entries.length;
      const correct = entries.filter((attempt) => attempt.isCorrect).length;
      return { attempted, accuracy: attempted ? Math.round((correct / attempted) * 100) : 0 };
    } catch {
      return { attempted: 0, accuracy: 0 };
    }
  };

  return <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased">
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90"><div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4"><span className="font-bold tracking-tight">Study Library</span><div className="flex items-center gap-2"><span className="hidden sm:inline text-sm text-slate-500 dark:text-slate-400">{userEmail}</span><button onClick={onToggleTheme} className="text-sm px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">{isDarkMode ? 'Light mode' : 'Dark mode'}</button><button onClick={onLogout} className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Sign out"><LogOut className="w-4 h-4" /><span className="hidden sm:inline">Sign out</span></button></div></div></header>
    <main className="max-w-6xl mx-auto px-5 py-14 sm:py-20"><p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Your quizzes</p><h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Choose what to study.</h1><p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl">Pick up where you left off. Answers and bookmarks are saved separately for each quiz.</p>
      <div className="grid sm:grid-cols-2 gap-5 mt-10">{QUIZZES.map((quiz, index) => { const Icon = index === 0 ? BookOpen : ShieldCheck; const progress = progressFor(quiz.id); const completion = Math.min(100, Math.round((progress.attempted / quiz.questions.length) * 100)); return <button key={quiz.id} onClick={() => onSelect(quiz.id)} className="group text-left p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all"><div className="flex items-start justify-between"><span className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 grid place-items-center"><Icon className="w-6 h-6" /></span><span className="text-xs font-medium text-slate-500">{quiz.questions.length} questions</span></div><h2 className="mt-7 text-xl font-bold">{quiz.shortTitle}</h2><p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{quiz.title}</p><p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{quiz.description}</p><div className="mt-6 flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400"><span>{progress.attempted ? `${progress.attempted} answered` : 'Not started'}</span>{progress.attempted > 0 && <><span aria-hidden="true">·</span><span>{progress.accuracy}% accuracy</span></>}</div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800" role="progressbar" aria-label={`${quiz.shortTitle} completion`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={completion}><div className="h-full rounded-full bg-indigo-600 dark:bg-indigo-500 transition-all" style={{ width: `${completion}%` }} /></div><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">Open quiz <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></button>; })}</div>
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
