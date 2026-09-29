import { Question } from '../types/quiz.ts';

export const questionsPart3: Question[] = [
  {
    id: 81,
    question: "What is the primary benefit of planning QA activities in parallel with design in the V-Model?",
    type: "single",
    options: [
      { id: "a", text: "It uncovers design errors early via parallel planning" },
      { id: "b", text: "It allows skipping system testing in later phases" },
      { id: "c", text: "It replaces the need for architecture documentation" },
      { id: "d", text: "It eliminates coding rework entirely across projects" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) It uncovers design errors early via parallel planning",
    explanation: "In the V-Model, test plans are authored simultaneously alongside their corresponding specification phases (e.g. system test plan during system design), uncovering ambiguities and design flaws before any code is written.",
    topic: "SDLC Models"
  },
  {
    id: 82,
    question: "Which statement best describes Git in modern software practice?",
    type: "single",
    options: [
      { id: "a", text: "A cloud website that hosts team chat rooms" },
      { id: "b", text: "A file compression tool for packaging source code" },
      { id: "c", text: "A distributed version control system for tracking changes" },
      { id: "d", text: "A centralized backup utility for single-user projects" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) A distributed version control system for tracking changes",
    explanation: "Git is a distributed version control system (DVCS) where every developer possesses a complete clone of the repository history, enabling offline commits, branching, and cryptographically verified tracking.",
    topic: "Git & Version Control"
  },
  {
    id: 83,
    question: "Which statement best characterizes Rapid Application Development (RAD)?",
    type: "single",
    options: [
      { id: "a", text: "Emphasizes exhaustive upfront planning and documents" },
      { id: "b", text: "Requires sequential phases with no overlap" },
      { id: "c", text: "Focuses on single final release without user testing" },
      { id: "d", text: "Prioritizes fast prototyping with continuous user feedback" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Prioritizes fast prototyping with continuous user feedback",
    explanation: "RAD prioritizes rapid interactive prototyping and user workshops over exhaustive planning, iteratively refining working software based on direct stakeholder input.",
    topic: "SDLC Models"
  },
  {
    id: 84,
    question: "Which SDLC model most explicitly structures work into sprints with review and retrospective each cycle?",
    type: "single",
    options: [
      { id: "a", text: "Waterfall process with milestones" },
      { id: "b", text: "Agile process with sprint cadence" },
      { id: "c", text: "V-Model with parallel testing" },
      { id: "d", text: "Incremental model with releases" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Agile process with sprint cadence",
    explanation: "Agile frameworks (especially Scrum) divide work into fixed time-boxes called sprints (typically 1–4 weeks), concluding each with a sprint review (demo) and sprint retrospective.",
    topic: "SDLC Models"
  },
  {
    id: 85,
    question: "In a banking app SDLC, match each phase to an example deliverable.",
    type: "single",
    options: [
      { id: "a", text: "Testing: execute functional and compliance audits" },
      { id: "b", text: "Development: implement microservices and integrations" },
      { id: "c", text: "Design: finalize UI layouts and system architecture" },
      { id: "d", text: "Planning & Analysis: define features and security standards" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Planning & Analysis: define features and security standards",
    explanation: "During the foundational Planning & Analysis phase of financial systems, security compliance requirements (PCI-DSS, encryption, RBAC) and core business features are formally defined.",
    topic: "SDLC Models"
  },
  {
    id: 86,
    question: "In Single-Page Applications, what primarily executes in the browser to render the UI dynamically?",
    type: "single",
    options: [
      { id: "a", text: "Database cursors returning HTML rows to client" },
      { id: "b", text: "Server templates compiling EJS or PHP on demand" },
      { id: "c", text: "JavaScript fetching JSON via REST or GraphQL" },
      { id: "d", text: "Web server streaming prebuilt HTML fragments" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) JavaScript fetching JSON via REST or GraphQL",
    explanation: "Single-Page Applications run JavaScript client-side (e.g. React, Vue, Angular) which queries REST/GraphQL endpoints for JSON data and dynamically mutates the DOM without full page reloads.",
    topic: "Architecture & Web"
  },
  {
    id: 87,
    question: "State the default module system approach for Bun in one phrase.\n\n(a) ________",
    type: "fill-in-the-blank",
    correctAnswer: "ESM & CommonJS auto-resolution",
    officialKeyDisplay: "ESM & CommonJS auto-resolution",
    explanation: "Bun seamlessly unifies the JavaScript module ecosystem by supporting both ES Modules (import/export) and CommonJS (require/module.exports) interoperably within the same file without requiring special flags or file extensions.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 88,
    question: "In Git Flow, new features typically branch off from which branch?",
    type: "single",
    options: [
      { id: "a", text: "develop" },
      { id: "b", text: "hotfix/*" },
      { id: "c", text: "main" },
      { id: "d", text: "release/*" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) develop",
    explanation: "Under the Git Flow model, feature branches always diverge from the 'develop' integration branch and merge back into 'develop' once finished.",
    topic: "Git & Version Control"
  },
  {
    id: 89,
    question: "Which action is performed by git push?",
    type: "single",
    options: [
      { id: "a", text: "Uploads local commits to remote" },
      { id: "b", text: "Downloads and merges remote changes" },
      { id: "c", text: "Creates a new local branch" },
      { id: "d", text: "Resets commits to a prior state" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Uploads local commits to remote",
    explanation: "'git push' transfers local commit objects and ref updates to the designated remote repository (e.g. GitHub or GitLab).",
    topic: "Git & Version Control"
  },
  {
    id: 90,
    question: "Which Agile principle emphasizes delivering usable software in short cycles?",
    type: "single",
    options: [
      { id: "a", text: "Iterative increments with short delivery cycles" },
      { id: "b", text: "Customer collaboration across project phases" },
      { id: "c", text: "Embracing change at any development stage" },
      { id: "d", text: "Cross-functional teams sharing ownership" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Iterative increments with short delivery cycles",
    explanation: "The Agile Manifesto stresses delivering working software frequently, from a couple of weeks to a couple of months, favoring shorter timescales to validate value and gather feedback.",
    topic: "SDLC Models"
  },
  {
    id: 91,
    question: "Which combination best describes the DevOps bridge between development and operations?",
    type: "single",
    options: [
      { id: "a", text: "Weekly meetings with formal sign-offs" },
      { id: "b", text: "Separate handoffs with strict stage gates" },
      { id: "c", text: "Automated pipelines with shared cultural responsibility" },
      { id: "d", text: "Manual deployments with isolated teams" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Automated pipelines with shared cultural responsibility",
    explanation: "DevOps eliminates operational silos by pairing automated CI/CD and monitoring pipelines with a culture of shared accountability for software availability and performance.",
    topic: "DevOps & Security"
  },
  {
    id: 92,
    question: "In the traditional SPA + API setup, where does the initial application bundle execute?",
    type: "single",
    options: [
      { id: "a", text: "On the API server rendering HTML" },
      { id: "b", text: "On the client browser using a SPA bundle" },
      { id: "c", text: "On the CDN using edge workers only" },
      { id: "d", text: "On the database using stored procedures" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) On the client browser using a SPA bundle",
    explanation: "In a standard SPA architecture, the browser downloads the bundled JavaScript payload from a static file host/CDN and executes it client-side to mount the UI component tree.",
    topic: "Architecture & Web"
  },
  {
    id: 93,
    question: "An organization has a less experienced team and needs strong guidance with clear checkpoints. Choose the most appropriate model.",
    type: "single",
    options: [
      { id: "a", text: "Spiral emphasizing elaborate risk analysis" },
      { id: "b", text: "V-Model emphasizing structured verification" },
      { id: "c", text: "RAD emphasizing rapid user prototyping" },
      { id: "d", text: "Agile emphasizing autonomous cross-functional teams" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) V-Model emphasizing structured verification",
    explanation: "The V-Model provides rigorous structure, well-defined stage gates, and explicit mapping between each engineering document and its verification criteria, making it ideal for teams needing structured governance.",
    topic: "SDLC Models"
  },
  {
    id: 94,
    question: "Which statement best describes React Server Components (RSC) as shown?",
    type: "single",
    options: [
      { id: "a", text: "They replace both SSR and SSG entirely in production" },
      { id: "b", text: "They require disabling server actions for mutations" },
      { id: "c", text: "They bundle all logic for execution only in the browser" },
      { id: "d", text: "They execute on the server to access backend resources" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) They execute on the server to access backend resources",
    explanation: "React Server Components (RSC) execute exclusively on the server, allowing components to query databases, microservices, and internal caches directly without adding their dependencies to the client JS bundle.",
    topic: "Architecture & Web"
  },
  {
    id: 95,
    question: "What is the defining delivery pattern of the Incremental SDLC model?",
    type: "single",
    options: [
      { id: "a", text: "Complete system delivered in one release" },
      { id: "b", text: "Partial functionality delivered step-by-step" },
      { id: "c", text: "Prototype only without deployment" },
      { id: "d", text: "Maintenance occurs before any testing" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Partial functionality delivered step-by-step",
    explanation: "Incremental development decomposes the system into a succession of working increments, delivering functional slices of the application step-by-step over time.",
    topic: "SDLC Models"
  },
  {
    id: 96,
    question: "A developer edits three files but wants only two to be part of the next snapshot. Which Git component enables this selective inclusion before committing?",
    type: "single",
    options: [
      { id: "a", text: "Working directory files" },
      { id: "b", text: "Remote repository on GitHub" },
      { id: "c", text: "Staging area (index)" },
      { id: "d", text: "Local repository history" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Staging area (index)",
    explanation: "The Git staging area (index) allows developers to selectively stage specific files (or even hunk diffs) using 'git add', separating work in progress from the committed snapshot.",
    topic: "Git & Version Control"
  },
  {
    id: 97,
    question: "Which statement best characterizes the Waterfall SDLC model?",
    type: "single",
    options: [
      { id: "a", text: "Randomized ordering to maximize creative freedom" },
      { id: "b", text: "Linear sequence where each phase completes before next" },
      { id: "c", text: "Parallel streams where all phases run simultaneously" },
      { id: "d", text: "Cyclical loop where phases repeat with new scope" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Linear sequence where each phase completes before next",
    explanation: "Waterfall enforces a strictly linear cascade of stages (Requirements -> Architecture -> Coding -> Testing -> Release) with strict exit criteria for each phase before subsequent work begins.",
    topic: "SDLC Models"
  },
  {
    id: 98,
    question: "In the V-Model, which testing activity most directly maps to requirement analysis through traceability?",
    type: "single",
    options: [
      { id: "a", text: "Acceptance testing traces to requirement analysis expectations" },
      { id: "b", text: "Integration testing validates requirement analysis user flows" },
      { id: "c", text: "Unit testing aligns with requirement analysis artifacts" },
      { id: "d", text: "System testing traces to requirement analysis specifications" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Acceptance testing traces to requirement analysis expectations",
    explanation: "In the V-Model traceability matrix, Acceptance Testing directly mirrors the initial User Requirements Analysis to verify that customer business objectives are fulfilled.",
    topic: "SDLC Models"
  },
  {
    id: 99,
    question: "Select the pair that correctly combines testing strategy and model.",
    type: "multiple",
    options: [
      { id: "a", text: "Waterfall: integrated testing in cycles" },
      { id: "b", text: "Agile: continuous testing and review" },
      { id: "c", text: "Spiral: integrated testing through the spiral" },
      { id: "d", text: "V-Model: testing only after deployment" }
    ],
    correctAnswer: ["b", "c"],
    officialKeyDisplay: "b) Agile: continuous testing and review, c) Spiral: integrated testing through the spiral",
    explanation: "Agile continuously tests within each sprint iteration, and the Spiral model embeds testing and prototyping into each loop. Waterfall postpones testing until after development, and V-Model plans testing during design.",
    topic: "SDLC Models"
  },
  {
    id: 100,
    question: "Which issues most directly contributed to high cold-start latency in serverless environments using Node.js?",
    type: "multiple",
    options: [
      { id: "a", text: "Engine initialization overhead" },
      { id: "b", text: "Resolution and dependency scale" },
      { id: "c", text: "Lack of any npm registry" },
      { id: "d", text: "Blocking I/O by default" }
    ],
    correctAnswer: ["a", "b"],
    officialKeyDisplay: "a) Engine initialization overhead, b) Resolution and dependency scale",
    explanation: "Serverless cold starts in Node.js suffer from the overhead of launching the V8 runtime and resolving large, deeply nested node_modules dependency graphs on disk.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 101,
    question: "Select all processes typically handled by plugins in modern bundlers as shown:",
    type: "multiple",
    options: [
      { id: "a", text: "Optimization passes for size and speed" },
      { id: "b", text: "Tree-shaking of unused exports" },
      { id: "c", text: "Code splitting into chunks" },
      { id: "d", text: "Transpiling SCSS into CSS" }
    ],
    correctAnswer: ["a", "b", "c", "d"],
    officialKeyDisplay: "a) Optimization passes for size and speed, b) Tree-shaking of unused exports, c) Code splitting into chunks, d) Transpiling SCSS into CSS",
    explanation: "Bundler plugins and transform pipelines intercept the module graph to perform SCSS/CSS preprocessing, dead-code elimination (tree-shaking), chunk optimization, and minification passes.",
    topic: "Architecture & Web"
  },
  {
    id: 102,
    question: "Which benefits are typical outcomes of adopting CI/CD pipelines in a software project?",
    type: "multiple",
    options: [
      { id: "a", text: "Guaranteed zero defects in production" },
      { id: "b", text: "Reduced overhead from repetitive release tasks" },
      { id: "c", text: "Higher quality via consistent checks" },
      { id: "d", text: "Faster feedback on integration issues" }
    ],
    correctAnswer: ["b", "c", "d"],
    officialKeyDisplay: "b) Reduced overhead from repetitive release tasks, c) Higher quality via consistent checks, d) Faster feedback on integration issues",
    explanation: "CI/CD automates manual release chores, provides instantaneous feedback on broken commits, and ensures consistent quality gates. (No testing system can guarantee zero defects).",
    topic: "DevOps & Security"
  },
  {
    id: 103,
    question: "Which phrase best describes the development flow in an Iterative model compared to Waterfall?",
    type: "single",
    options: [
      { id: "a", text: "Cyclical and incremental progression" },
      { id: "b", text: "Strictly linear and sequential" },
      { id: "c", text: "Linear with occasional loops" },
      { id: "d", text: "Parallel phases without sequence" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Cyclical and incremental progression",
    explanation: "Rather than a one-time linear path, the Iterative model progresses through repetitive cyclical loops, progressively refining and expanding functionality in increments.",
    topic: "SDLC Models"
  },
  {
    id: 104,
    question: "Complete the blank: Iterative SDLC emphasizes (a) ________ progress with repeated cycles to refine functionality.",
    type: "fill-in-the-blank",
    correctAnswer: "incremental",
    officialKeyDisplay: "incremental",
    explanation: "Iterative development couples cyclical repetition with incremental delivery of working software at the end of each iteration.",
    topic: "SDLC Models"
  },
  {
    id: 105,
    question: "Select all items that are part of Bun's built-in tooling set.",
    type: "multiple",
    options: [
      { id: "a", text: "Official test runner built in" },
      { id: "b", text: "Package manager included by default" },
      { id: "c", text: "Core runtime only without extras" },
      { id: "d", text: "Integrated bundler alongside runtime" }
    ],
    correctAnswer: ["a", "b", "d"],
    officialKeyDisplay: "a) Official test runner built in, b) Package manager included by default, d) Integrated bundler alongside runtime",
    explanation: "Bun is an all-in-one JavaScript toolkit that ships with a native package manager (bun install), a high-speed bundler (bun build), and a Jest-compatible test runner (bun test).",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 106,
    question: "Select ALL commands that operate on branches rather than files.",
    type: "multiple",
    options: [
      { id: "a", text: "git merge" },
      { id: "b", text: "git add ." },
      { id: "c", text: "git branch" },
      { id: "d", text: "git switch" }
    ],
    correctAnswer: ["a", "c", "d"],
    officialKeyDisplay: "c) git branch, d) git switch, a) git merge",
    explanation: "'git branch' inspects or creates branches, 'git switch' switches working branches, and 'git merge' combines branches. 'git add .' operates on filesystem files.",
    topic: "Git & Version Control"
  },
  {
    id: 107,
    question: "Which pairing correctly matches an Iterative principle with its benefit?",
    type: "single",
    options: [
      { id: "a", text: "Incremental progress – delivers the entire system at once" },
      { id: "b", text: "Proactive risk management – defers risk resolution to late QA" },
      { id: "c", text: "High adaptability – locks requirements early to avoid drift" },
      { id: "d", text: "Continuous QA – prevents bug accumulation across cycles" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Continuous QA — prevents bug accumulation across cycles",
    explanation: "By verifying software quality during every iteration, continuous QA prevents defects from compounding into insurmountable technical debt.",
    topic: "SDLC Models"
  },
  {
    id: 108,
    question: "In the V-Model, testing activities are aligned primarily with what?",
    type: "single",
    options: [
      { id: "a", text: "Corresponding development phases" },
      { id: "b", text: "User acceptance sessions" },
      { id: "c", text: "Budget checkpoints across sprints" },
      { id: "d", text: "Deployment rollbacks and hotfixes" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Corresponding development phases",
    explanation: "The hallmark of the V-Model is the horizontal pairing between verification stages on the left descending arm (Requirements, High-Level Design, Low-Level Design) and validation testing phases on the right ascending arm (Acceptance, System, Integration, Unit).",
    topic: "SDLC Models"
  },
  {
    id: 109,
    question: "Which model is recommended for medium to large projects that value traceability and phase-aligned verification?",
    type: "single",
    options: [
      { id: "a", text: "Agile emphasizing sprints" },
      { id: "b", text: "V-Model emphasizing alignment" },
      { id: "c", text: "Iterative emphasizing loops" },
      { id: "d", text: "Waterfall emphasizing sequence" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) V-Model emphasizing alignment",
    explanation: "The V-Model provides rigorous bidirectional requirements-to-test traceability matrices and phase-aligned verification, making it the industry standard for compliance-heavy, high-integrity systems.",
    topic: "SDLC Models"
  },
  {
    id: 110,
    question: "Which step in the traditional SPA + API diagram represents data retrieval from persistence?",
    type: "single",
    options: [
      { id: "a", text: "Standalone API server queries database" },
      { id: "b", text: "Browser streams async chunks" },
      { id: "c", text: "Client requests HTML/JS bundle" },
      { id: "d", text: "Unified routing resolves route" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Standalone API server queries database",
    explanation: "In decoupled SPA architecture, persistence retrieval occurs when the standalone API server handles incoming HTTP endpoints by querying the database storage tier.",
    topic: "Architecture & Web"
  },
  {
    id: 111,
    question: "Which statement best describes TypeScript execution differences between Node.js and Bun?",
    type: "single",
    options: [
      { id: "a", text: "Bun executes TypeScript natively while Node.js needs compilation or ts-node" },
      { id: "b", text: "Both require external compilers for TypeScript" },
      { id: "c", text: "Bun requires ts-node for TypeScript execution" },
      { id: "d", text: "Node.js runs TypeScript natively out of the box" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Bun executes TypeScript natively while Node.js needs compilation or ts-node",
    explanation: "Bun features an integrated TypeScript transpiler that executes .ts files directly with zero setup, whereas standard Node.js requires an external compilation step (tsc) or runtime loaders (tsx, ts-node).",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 112,
    question: "Which GitHub feature is primarily used to propose and review code changes before merging into a base branch?",
    type: "single",
    options: [
      { id: "a", text: "Actions for automated workflows" },
      { id: "b", text: "Repositories for storing code and history" },
      { id: "c", text: "Pull Requests for review and discussion" },
      { id: "d", text: "Issues and Discussions for tracking bugs and ideas" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Pull Requests for review and discussion",
    explanation: "Pull Requests (PRs) let developers notify team members about completed features, compare visual diffs, review code changes, and discuss modifications prior to merging.",
    topic: "Git & Version Control"
  },
  {
    id: 113,
    question: "Select all advantages commonly associated with the V-Model.",
    type: "multiple",
    options: [
      { id: "a", text: "Flexible scope that welcomes late feature changes easily" },
      { id: "b", text: "High process control providing progress predictability" },
      { id: "c", text: "Early risk reduction through early lifecycle prevention" },
      { id: "d", text: "Structured discipline with clear milestones and deliverables" }
    ],
    correctAnswer: ["b", "c", "d"],
    officialKeyDisplay: "b) High process control providing progress predictability, c) Early risk reduction through early lifecycle prevention, d) Structured discipline with clear milestones and deliverables",
    explanation: "The V-Model provides exceptional milestone discipline, predictable phase progress, and early defect prevention through proactive test planning. It intentionally restricts late requirement changes.",
    topic: "SDLC Models"
  }
];
