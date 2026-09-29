export type QuestionType = 'single' | 'multiple' | 'fill-in-the-blank';

export type QuestionTopic =
  | 'SDLC Models'
  | 'Git & Version Control'
  | 'JavaScript & Bun/Node'
  | 'Architecture & Web'
  | 'DevOps & Security';

export interface Option {
  id: string; // e.g. 'a', 'b', 'c', 'd'
  text: string;
}

export interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: Option[];
  correctAnswer: string | string[]; // Single ID (e.g. 'd'), array (e.g. ['b', 'c', 'd']), or string for fill-in-the-blank
  officialKeyDisplay: string; // Text exactly shown in the PDF answer key (e.g., "d) Releasing without prior user validation cycles")
  explanation: string;
  topic: QuestionTopic;
}

export interface QuestionAttempt {
  userAnswer: string | string[];
  isCorrect: boolean;
  answeredAt: string;
}

export interface QuizProgress {
  attempts: Record<number, QuestionAttempt>;
  bookmarks: number[];
  currentQuestionId: number;
}
