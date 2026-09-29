# Introduction to SDLC and Security - Interactive Quiz App

An interactive practice quiz application containing all 113 questions from the "Introduction to SDLC and Security" assessment with exact verbatim wording, precise answer key validation, rich conceptual explanations, and an intuitive question navigation grid.

### User Review & Critical Decisions

> [!IMPORTANT]
> The application is tailored based on confirmed user choices:
> - **Mode**: Practice mode with instant answers and educational explanations upon submitting each question.
> - **Navigation**: Interactive question cards with step-by-step navigation alongside a complete 113-question jump grid with status indicators (Unanswered, Correct, Incorrect, Bookmarked).
> - **Aesthetic**: Clean, modern educational study interface with seamless light and dark mode support, adhering strictly to anti-slop typography and zero-pill metadata discipline.
> - **Content Fidelity**: Exact verbatim wording for all 113 questions, choices, fill-in-the-blank items, and answer keys directly derived from the Wayground / Quizizz source document.

---

### 1. Overview & Core Concept

- **What It Does**: Provides a dedicated, distraction-free study environment for mastering Software Development Life Cycle (SDLC) models (Waterfall, Agile, V-Model, Spiral, RAD, Incremental), Git workflow commands, modern JavaScript runtimes & bundlers (Node.js, Bun, esbuild, SWC), web rendering architectures (SPA, SSR, CSR, RSC, Hybrid), and DevOps/DevSecOps practices.
- **Target Audience / Persona**: Computer science and software engineering students, educators, and developers preparing for examinations or technical certifications on SDLC and software security principles.
- **Key Value**: 100% fidelity to the provided test questions, zero ambiguity in terminology, instant corrective feedback with domain-accurate explanations, and persistent local study tracking.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Landing & Session Resume**:
   - The user opens the quiz and immediately sees their progress (e.g., `Question 1 of 113`, completed count, accuracy rate).
   - Saved progress (answers, bookmarks, results) is persisted in `localStorage`, allowing seamless resumption at any time.
2. **Interactive Question Card**:
   - Displays the current question number, question text, and interactive response elements:
     - **Single-choice Multiple Choice**: Clean selection rows with keyboard shortcuts `(A, B, C, D)`.
     - **Multi-select Multiple Choice**: Multi-option checkboxes with a "Submit Answer" button.
     - **Fill-in-the-blank**: Input field with case-insensitive / trimmed matching, "Submit", and "Reveal Answer" options.
   - Once submitted, immediate feedback appears with:
     - Status badge (Correct / Incorrect with accessible icon and text).
     - Official answer key matching pages 14–17 of the document.
     - In-depth technical explanation detailing the conceptual rationale.
3. **113-Question Jump Matrix & Filtering**:
   - An accessible drawer or side panel grid showing numbers `1` through `113`.
   - Dynamic coloring reflects status: Neutral (unattempted), Emerald (correct), Rose (incorrect), and Amber bookmark flag.
   - Quick filters allow viewing "All", "Incorrect Only", "Bookmarked Only", or searching questions by keyword (e.g., "Bun", "Spiral", "Git").
4. **Summary & Study Review**:
   - Live score tally, percentage accuracy, and ability to reset session progress or review all missed questions.

#### Visual Identity & Theme
- **Aesthetic Direction**: Modern technical study interface. Restrained, purposeful, and distraction-free.
- **Color Palette & Contrast**:
  - Dominant Canvas: Clean off-white (`#F8FAFC` slate-50) in light mode; deep slate (`#0B0F19` slate-950) in dark mode.
  - Structural Surfaces: Pure white (`#FFFFFF`) / dark surface (`#111827` gray-900) cards with hairline borders (`border-slate-200` / `border-slate-800`).
  - Accent & Semantic Tones:
    - Primary Action / Active: Vibrant Indigo (`#4F46E5` / `#6366F1`)
    - Correct: Emerald (`#059669` / `#10B981`)
    - Incorrect: Rose / Coral (`#E11D48` / `#F43F5E`)
    - Bookmarked: Amber (`#D97706` / `#F59E0B`)
- **Typography & Hierarchy**:
  - Headings: `Plus Jakarta Sans` or modern sans-serif with balanced line wrapping.
  - Body & Options: High-legibility sans-serif with comfortable line height (`1.6`).
  - Monospace: `font-mono tabular-nums` for code snippets (Git commands, Bun commands, terminal syntax) and question numbering.
  - Zero-pill metadata: Question metadata (e.g., `Question 1 of 113 · Single Choice · SDLC Models`) rendered as clean inline unboxed text with `·` separators.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Exact Verbatim Question Bank**:
  - *Chosen Approach*: Embed all 113 questions with the exact verbatim phrasing from pages 1 to 12 and the official answers from pages 14 to 17.
  - *Why*: Strict adherence to the provided test document avoids discrepancies with classroom or test grading standards.
- **Decision 2: Immediate Feedback with Rich Explanations**:
  - *Chosen Approach*: When an option is selected (or submitted for multi-select/fill-in-the-blank), the correct answer is immediately highlighted with an explanation.
  - *Why*: Aligns with the user's preference for "Practice mode only with instant answers and explanations", optimizing active recall and retention.
- **Decision 3: Multi-Format Question Support**:
  - *Chosen Approach*: Support single-choice, multiple-choice ("Select all..."), and fill-in-the-blank inputs naturally rather than forcing all 113 into standard radio buttons.
  - *Why*: Preserves the exact nature of questions like Question 3 (`index`), Question 8 (`Zig`), Question 14 (`git add .`), Question 34 (`event-driven, non-blocking I/O`), and multi-selects like Question 6, 9, 13, 33, 61, 71, etc.
- **Decision 4: Client-Side Persistence (localStorage)**:
  - *Chosen Approach*: Persist answered questions, chosen options, correctness status, and bookmarks directly in `localStorage`.
  - *Why*: Zero-latency interactions, instant page reloads without data loss, and complete privacy without requiring an external database setup.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          App Container                                 │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ TopBar: Brand Title, Progress Bar, Stats, Theme Toggle, Grid CTA │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌───────────────────────────────┐  ┌───────────────────────────────┐  │
│  │       Question Card View      │  │    113-Question Grid Drawer   │  │
│  │ ┌───────────────────────────┐ │  │ ┌───────────────────────────┐ │  │
│  │ │ Metadata & Bookmark Flag  │ │  │ │ Filter: All/Wrong/Saved   │ │  │
│  │ ├───────────────────────────┤ │  │ ├───────────────────────────┤ │  │
│  │ │ Exact Question Text       │ │  │ │ Matrix buttons [1]..[113] │ │  │
│  │ ├───────────────────────────┤ │  │ │ Live status color indicators│ │  │
│  │ │ Interactive Option List   │ │  │ └───────────────────────────┘ │  │
│  │ │ (Single / Multi / Text)   │ │  │                               │  │
│  │ ├───────────────────────────┤ │  │                               │  │
│  │ │ Instant Answer & Review   │ │  │                               │  │
│  │ │ - Official Answer Key     │ │  │                               │  │
│  │ │ - Pedagogical Explanation │ │  │                               │  │
│  │ ├───────────────────────────┤ │  │                               │  │
│  │ │ Nav Controls (Prev/Next)  │ │  │                               │  │
│  └───────────────────────────┘ │  │                               │  │
│  └───────────────────────────────┘  └───────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ LocalStorage Service: Session State (Answers, Scores, Bookmarks) │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

#### Core Data Structures
- **Question Schema**:
  ```typescript
  export type QuestionType = 'single' | 'multiple' | 'fill-in-the-blank';

  export interface Question {
    id: number;
    question: string;
    type: QuestionType;
    options?: { id: string; text: string }[];
    correctAnswer: string | string[]; // Single ID (e.g. 'd'), array (e.g. ['b', 'c', 'd']), or string for fill-in-the-blank
    explanation: string;
    topic: 'SDLC Models' | 'Git & Version Control' | 'JavaScript & Bun/Node' | 'Architecture & Web' | 'DevOps & Security';
  }
  ```
- **User Progress Schema**:
  ```typescript
  export interface UserProgress {
    [questionId: number]: {
      userAnswer: string | string[];
      isCorrect: boolean;
      answeredAt: string;
    };
  }
  ```

#### Component Plan
1. `src/data/questions.ts`: The comprehensive, verified 113-question dataset with exact verbatim questions, options, official answers from the answer key, and clear explanations.
2. `src/components/TopBar.tsx`: Responsive navigation header with progress statistics, theme toggle, and grid opener.
3. `src/components/QuestionCard.tsx`: Focused interactive question container handling single choice, multi-select, and fill-in-the-blank answering with instant feedback.
4. `src/components/QuestionGrid.tsx`: 113-button jump matrix with search, filters (All, Incorrect, Bookmarked), and status counts.
5. `src/components/ExplanationBox.tsx`: High-clarity feedback callout showing correct answer and concise concept explanation.
6. `src/components/SummaryModal.tsx`: Performance breakdown (Score, Accuracy %, Questions attempted) with reset controls.
