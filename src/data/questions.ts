import { Question, QuestionTopic } from '../types/quiz.ts';
import { questionsPart1 } from './questionsPart1.ts';
import { questionsPart2 } from './questionsPart2.ts';
import { questionsPart3 } from './questionsPart3.ts';

export const ALL_QUESTIONS: Question[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
];

export const TOTAL_QUESTIONS = ALL_QUESTIONS.length;

export const ALL_TOPICS: QuestionTopic[] = [
  'SDLC Models',
  'Git & Version Control',
  'JavaScript & Bun/Node',
  'Architecture & Web',
  'DevOps & Security',
];

/**
 * Normalizes text for comparison in fill-in-the-blank questions:
 * - Lowercases text
 * - Strips extra punctuation or spaces
 * - Trims edges
 */
export function normalizeAnswer(ans: string): string {
  return ans
    .toLowerCase()
    .trim()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, ' ');
}

/**
 * Evaluates whether a user's answer matches the question's correct answer.
 */
export function checkAnswer(question: Question, userAnswer: string | string[]): boolean {
  if (question.type === 'single') {
    if (typeof userAnswer !== 'string') return false;
    return userAnswer.trim().toLowerCase() === (question.correctAnswer as string).trim().toLowerCase();
  }

  if (question.type === 'multiple') {
    if (!Array.isArray(userAnswer)) return false;
    const correctArr = question.correctAnswer as string[];
    if (userAnswer.length !== correctArr.length) return false;
    const sortedUser = [...userAnswer].sort();
    const sortedCorrect = [...correctArr].sort();
    return sortedUser.every((val, idx) => val.toLowerCase() === sortedCorrect[idx].toLowerCase());
  }

  if (question.type === 'fill-in-the-blank') {
    if (typeof userAnswer !== 'string') return false;
    const normUser = normalizeAnswer(userAnswer);
    const correct = question.correctAnswer as string;
    const normCorrect = normalizeAnswer(correct);

    if (normUser === normCorrect) return true;

    // Handle acceptable variations for special technical phrases
    if (correct.toLowerCase().includes('infrastructure as code') && (normUser === 'iac' || normUser === 'infrastructure as code')) {
      return true;
    }
    if (correct.toLowerCase().includes('event-driven') && (normUser.includes('event driven') || normUser.includes('non blocking'))) {
      return true;
    }
    if (correct.toLowerCase().includes('esm & commonjs') && normUser.includes('esm') && normUser.includes('commonjs')) {
      return true;
    }

    return false;
  }

  return false;
}
