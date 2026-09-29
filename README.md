# SDLC & Security Quiz

An interactive study companion for the **Introduction to SDLC and Security Assessment**. Work through 113 questions, get immediate feedback, and keep track of your progress as you study.

**Created by Bryan Flores**

## What You Can Do

- Practice single-choice, multiple-select, and fill-in-the-blank questions.
- See whether an answer is correct and review its explanation.
- Jump between questions with the question grid or browse them in worksheet view.
- Bookmark questions to revisit later.
- Track attempts, accuracy, and completion in the progress summary.
- Switch between light and dark themes.
- Pick up where you left off: progress, bookmarks, and theme are saved in your browser.

## Run Locally

You’ll need [Node.js](https://nodejs.org/) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal (by default, `http://localhost:3000`).

## Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `A`–`D` | Answer a single-choice question |
| `←` / `→` | Move to the previous or next question |
| `B` | Bookmark or unbookmark the current question |
| `Enter` | Submit a fill-in-the-blank answer |

## Project Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the TypeScript compiler without emitting files |

## Built With

React, TypeScript, Vite, Tailwind CSS, and Lucide icons.

## Project Layout

```text
src/
  components/  Quiz interface, dialogs, and study views
  data/        Question bank
  hooks/       Quiz progress and theme state
  types/       Shared TypeScript types
```