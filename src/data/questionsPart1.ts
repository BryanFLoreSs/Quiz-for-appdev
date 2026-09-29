import { Question } from '../types/quiz.ts';

export const questionsPart1: Question[] = [
  {
    id: 1,
    question: "Which item best illustrates skipping feedback loops during development?",
    type: "single",
    options: [
      { id: "a", text: "Holding cross-team alignment meetings weekly" },
      { id: "b", text: "Conducting iterative usability tests each sprint" },
      { id: "c", text: "Running performance tests before feature freeze" },
      { id: "d", text: "Releasing without prior user validation cycles" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Releasing without prior user validation cycles",
    explanation: "Feedback loops are vital mechanisms that validate assumptions against real user needs. Releasing software without user validation cycles bypasses vital feedback, dramatically increasing the risk of delivering an unfit or defective product.",
    topic: "SDLC Models"
  },
  {
    id: 2,
    question: "You inherit a project with uncertain requirements and high complexity. Which model choice and rationale best fit?",
    type: "single",
    options: [
      { id: "a", text: "Waterfall, for limited user involvement" },
      { id: "b", text: "Iterative, due to easier complexity control" },
      { id: "c", text: "Waterfall, due to single late release" },
      { id: "d", text: "Iterative, because testing occurs only at end" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Iterative, due to easier complexity control",
    explanation: "When requirements are volatile and complexity is high, the Iterative model breaks the system down into smaller manageable chunks, allowing teams to isolate complexity, learn incrementally, and adapt to emerging specifications.",
    topic: "SDLC Models"
  },
  {
    id: 3,
    question: "Fill in the blank: The staging area, also called the (a) ________, holds selected changes that are prepared before a commit is created.",
    type: "fill-in-the-blank",
    correctAnswer: "index",
    officialKeyDisplay: "index",
    explanation: "In Git architecture, the staging area is technically referred to as the 'index'. It acts as an intermediate cache where changes are reviewed and curated via 'git add' prior to being permanently committed into repository history.",
    topic: "Git & Version Control"
  },
  {
    id: 4,
    question: "Which set lists core principles of the Spiral model?",
    type: "multiple",
    options: [
      { id: "a", text: "Traceability between specs and test suites only" },
      { id: "b", text: "Risk-driven iteration across planning and evaluation" },
      { id: "c", text: "Continuous evaluation shaping subsequent spirals" },
      { id: "d", text: "Proactive risk mitigation early in each loop" }
    ],
    correctAnswer: ["b", "c", "d"],
    officialKeyDisplay: "b) Risk-driven iteration across planning and evaluation, c) Continuous evaluation shaping subsequent spirals, d) Proactive risk mitigation early in each loop",
    explanation: "Barry Boehm's Spiral model is fundamentally a risk-driven paradigm. Each quadrant progression combines iterative cycles with heavy emphasis on early risk discovery, prototype analysis, and continuous stakeholder evaluation to steer subsequent spirals.",
    topic: "SDLC Models"
  },
  {
    id: 5,
    question: "Which command shows the repository's commit history?",
    type: "single",
    options: [
      { id: "a", text: "git commits" },
      { id: "b", text: "git history" },
      { id: "c", text: "git trace" },
      { id: "d", text: "git log" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) git log",
    explanation: "'git log' displays the chronological history of committed snapshots, listing commit hashes, authors, timestamps, and commit messages.",
    topic: "Git & Version Control"
  },
  {
    id: 6,
    question: "Select all statements that describe the SPA decoupling model.",
    type: "multiple",
    options: [
      { id: "a", text: "Servers always send complete HTML for every interaction" },
      { id: "b", text: "Data fetching commonly uses REST or GraphQL" },
      { id: "c", text: "Backend services expose APIs returning JSON" },
      { id: "d", text: "Browsers route between views without full-page refresh" }
    ],
    correctAnswer: ["b", "c", "d"],
    officialKeyDisplay: "b) Data fetching commonly uses REST or GraphQL, c) Backend services expose APIs returning JSON, d) Browsers route between views without full-page refresh",
    explanation: "Decoupled Single-Page Applications (SPAs) separate the frontend presentation layer from backend business logic. The browser handles client-side routing and UI state without full-page refreshes, requesting raw JSON payload over REST or GraphQL APIs.",
    topic: "Architecture & Web"
  },
  {
    id: 7,
    question: "Fill in the blank: Continuous Integration (CI) automates builds and tests on (a) ________ to catch bugs early.",
    type: "fill-in-the-blank",
    correctAnswer: "code pushes",
    officialKeyDisplay: "code pushes",
    explanation: "Continuous Integration operates by automatically triggering compilation, linters, unit tests, and integration suites whenever developers push new code commits, providing rapid feedback.",
    topic: "DevOps & Security"
  },
  {
    id: 8,
    question: "Name the systems programming language used to implement Bun's core components for low-level memory control and speed.\n\n(a) ________",
    type: "fill-in-the-blank",
    correctAnswer: "Zig",
    officialKeyDisplay: "Zig",
    explanation: "Bun is written from scratch in Zig, a modern systems language providing manual memory control, zero hidden control flow, and compile-time execution (comptime), delivering exceptional startup and I/O performance.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 9,
    question: "Select all advantages commonly attributed to Agile SDLC models.",
    type: "multiple",
    options: [
      { id: "a", text: "High flexibility in fast-paced environments" },
      { id: "b", text: "Reduced test coverage by delaying QA" },
      { id: "c", text: "Predictable releases with high visibility" },
      { id: "d", text: "Superior quality via continuous integration" }
    ],
    correctAnswer: ["a", "c", "d"],
    officialKeyDisplay: "a) High flexibility in fast-paced environments, c) Predictable releases with high visibility, d) Superior quality via continuous integration",
    explanation: "Agile values adaptability, frequent cadence, high stakeholder transparency, and continuous QA integration. It specifically avoids delaying QA, advocating for testing within every sprint.",
    topic: "SDLC Models"
  },
  {
    id: 10,
    question: "Which command records a snapshot with a message?",
    type: "single",
    options: [
      { id: "a", text: 'git commit -m "msg"' },
      { id: "b", text: 'git snapshot "msg"' },
      { id: "c", text: 'git push -m "msg"' },
      { id: "d", text: 'git save -m "msg"' }
    ],
    correctAnswer: "a",
    officialKeyDisplay: 'a) git commit -m "msg"',
    explanation: "'git commit -m \"msg\"' captures staged changes into a permanent cryptographic snapshot accompanied by a descriptive message.",
    topic: "Git & Version Control"
  },
  {
    id: 11,
    question: "For a large, high-complexity system with significant risk exposure and a need for detailed documentation, which model best addresses risk while scaling?",
    type: "single",
    options: [
      { id: "a", text: "Iterative with light planning" },
      { id: "b", text: "Incremental with minimal docs" },
      { id: "c", text: "Agile with minimal upfront risk" },
      { id: "d", text: "Spiral with cyclical risk analysis" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Spiral with cyclical risk analysis",
    explanation: "The Spiral model was specifically designed for mission-critical, large-scale, high-risk aerospace and enterprise engineering systems where iterative risk assessment paired with formal documentation gates prevents catastrophic failures.",
    topic: "SDLC Models"
  },
  {
    id: 12,
    question: "A program is built in chunks by separate teams at the same time, then integrated. Which principle or advantage does this illustrate?",
    type: "single",
    options: [
      { id: "a", text: "Parallel builds enabling concurrent module development" },
      { id: "b", text: "Iterative cycles with late-stage redesign" },
      { id: "c", text: "Single pipeline preventing merge conflicts" },
      { id: "d", text: "Seamless integration after sequential coding" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Parallel builds enabling concurrent module development",
    explanation: "Modular decomposition allows independent teams to construct discrete components concurrently (parallel development), accelerating overall time-to-delivery prior to integration.",
    topic: "SDLC Models"
  },
  {
    id: 13,
    question: "Select ALL practices that strengthen a RAD approach.",
    type: "multiple",
    options: [
      { id: "a", text: "Define scope boundaries to limit creep" },
      { id: "b", text: "Maintain tight communication with users" },
      { id: "c", text: "Use modern UI prototyping tools" },
      { id: "d", text: "Delay usability testing until final release" }
    ],
    correctAnswer: ["a", "b", "c"],
    officialKeyDisplay: "a) Define scope boundaries to limit creep, b) Maintain tight communication with users, c) Use modern UI prototyping tools",
    explanation: "Rapid Application Development (RAD) relies on rapid prototyping, continuous user validation, and strict timeboxing with scope management. Delaying usability testing contradicts the foundational tenets of RAD.",
    topic: "SDLC Models"
  },
  {
    id: 14,
    question: "Fill in the blank: To stage all current changes in the directory, use (a) ________.",
    type: "fill-in-the-blank",
    correctAnswer: "git add .",
    officialKeyDisplay: "git add .",
    explanation: "The command 'git add .' stages all modified, newly created, and deleted files in the current directory and its subdirectories to the Git index.",
    topic: "Git & Version Control"
  },
  {
    id: 15,
    question: "Which practice best improves commit clarity for reviewers?",
    type: "single",
    options: [
      { id: "a", text: "Hide changes in large single commits" },
      { id: "b", text: "Use descriptive commit messages" },
      { id: "c", text: "Push directly to main often" },
      { id: "d", text: "Squash all commits without messages" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Use descriptive commit messages",
    explanation: "Clear, descriptive commit messages summarize what was changed and why, facilitating code reviews, bisecting bugs, and navigating historical changelogs.",
    topic: "Git & Version Control"
  },
  {
    id: 16,
    question: "Which runtime's initial release year is correctly matched?",
    type: "single",
    options: [
      { id: "a", text: "Bun – 2015 release year" },
      { id: "b", text: "Node.js – 2022 release year" },
      { id: "c", text: "Node.js – 2009 release year" },
      { id: "d", text: "Bun – 2009 release year" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Node.js — 2009 release year",
    explanation: "Node.js was initially created and released by Ryan Dahl in 2009. Bun was created by Jarred Sumner and publicly introduced in 2022.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 17,
    question: "Which engine underlies Bun's JavaScript execution to achieve faster startup and lower memory usage than V8?",
    type: "single",
    options: [
      { id: "a", text: "Hermes from React Native" },
      { id: "b", text: "SpiderMonkey from Firefox" },
      { id: "c", text: "JavaScriptCore from WebKit" },
      { id: "d", text: "ChakraCore from Edge" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) JavaScriptCore from WebKit",
    explanation: "Unlike Node.js and Deno which use Google's V8, Bun is built atop WebKit's JavaScriptCore (JSC) engine, which offers fast startup times and low memory footprints.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 18,
    question: "In the Waterfall model, which phase primarily validates the built system against documented requirements?",
    type: "single",
    options: [
      { id: "a", text: "Deployment phase validates production performance only" },
      { id: "b", text: "Testing phase validates full system against requirements" },
      { id: "c", text: "Design phase validates UI and hardware assumptions" },
      { id: "d", text: "Maintenance phase validates after all updates accumulate" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Testing phase validates full system against requirements",
    explanation: "In traditional Waterfall, verification and validation occur in the dedicated Testing phase immediately following Implementation/Coding, ensuring the end-to-end software satisfies the baseline specification.",
    topic: "SDLC Models"
  },
  {
    id: 19,
    question: "Which practice is most essential to keep Spiral iterations aligned with evolving project realities?",
    type: "single",
    options: [
      { id: "a", text: "Freeze scope early to minimize change" },
      { id: "b", text: "Skip reviews until final release" },
      { id: "c", text: "Centralize testing only after coding" },
      { id: "d", text: "Rigorous risk analysis prioritized every loop" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Rigorous risk analysis prioritized every loop",
    explanation: "The hallmark of each spiral revolution is identifying technical, operational, and financial risks, building prototypes or benchmarks to evaluate them, and adjusting the project path accordingly.",
    topic: "SDLC Models"
  },
  {
    id: 20,
    question: "Fill in the blank: A pull request is primarily used to request (a) ________ and integration before merging.",
    type: "fill-in-the-blank",
    correctAnswer: "code review",
    officialKeyDisplay: "code review",
    explanation: "Pull requests (or merge requests) provide a collaborative interface for peers to review diffs, run automated tests, discuss implementation details, and maintain high code quality before merging into protected branches.",
    topic: "Git & Version Control"
  },
  {
    id: 21,
    question: "Which pairing correctly matches tool and implementation language with the noted performance characteristic?",
    type: "single",
    options: [
      { id: "a", text: "esbuild in Rust with single-thread parsing" },
      { id: "b", text: "esbuild in Go with parallel thread parsing" },
      { id: "c", text: "SWC in Go with Babel compatibility" },
      { id: "d", text: "SWC in Python with dynamic dispatch" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) esbuild in Go with parallel thread parsing",
    explanation: "Evan Wallace created esbuild in Go to leverage efficient memory layouts and multi-threaded goroutines for parallel parsing and AST transformation. SWC is written in Rust.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 22,
    question: "In a modern web asset bundler pipeline, what is the role of the dependency graph stage?",
    type: "single",
    options: [
      { id: "a", text: "Compress raster and vector assets" },
      { id: "b", text: "Generate final HTML shell" },
      { id: "c", text: "Resolve and link module relationships" },
      { id: "d", text: "Minify and rename local variables" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Resolve and link module relationships",
    explanation: "The bundler starts at entry points and traverses import/export statements to build an abstract dependency graph, resolving paths and linking module relationships before tree-shaking and chunk generation.",
    topic: "Architecture & Web"
  },
  {
    id: 23,
    question: "A project has clear and stable requirements, minimal client involvement, and fixed time and budget. Which SDLC model is the best fit?",
    type: "single",
    options: [
      { id: "a", text: "Spiral model with risk-driven loops" },
      { id: "b", text: "Waterfall or V-Model with defined stages" },
      { id: "c", text: "Agile with continuous stakeholder input" },
      { id: "d", text: "DevOps with continuous delivery pipelines" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Waterfall or V-Model with defined stages",
    explanation: "Sequential linear models like Waterfall or V-Model excel when requirements are well understood upfront, scope is static, and client involvement is constrained by strict contractual boundaries.",
    topic: "SDLC Models"
  },
  {
    id: 24,
    question: "Which SDLC model is most widely adopted in the software industry?",
    type: "single",
    options: [
      { id: "a", text: "Waterfall with sequential phase gates" },
      { id: "b", text: "RAD focusing on rapid prototyping" },
      { id: "c", text: "V-Model emphasizing verification steps" },
      { id: "d", text: "Agile methodologies like Scrum and Kanban" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Agile methodologies like Scrum and Kanban",
    explanation: "Agile methodologies (such as Scrum and Kanban) dominate contemporary commercial software development due to their emphasis on adaptability, rapid time-to-market, and continuous customer feedback.",
    topic: "SDLC Models"
  },
  {
    id: 25,
    question: "Which statement about time-to-market contrasts the two models most accurately?",
    type: "single",
    options: [
      { id: "a", text: "Iterative waits for a single release at end" },
      { id: "b", text: "Waterfall delivers many small releases quickly" },
      { id: "c", text: "Both deliver identical incremental features" },
      { id: "d", text: "Iterative delivers gradual releases faster" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Iterative delivers gradual releases faster",
    explanation: "Iterative approaches release working increments early and evolve them through cycles, getting functional software to market much sooner than Waterfall, which postpones delivery until the very end.",
    topic: "SDLC Models"
  },
  {
    id: 26,
    question: "Which practice best supports predictable Agile releases?",
    type: "single",
    options: [
      { id: "a", text: "Ad-hoc tasks assigned during sprints" },
      { id: "b", text: "Prioritized backlogs based on business value" },
      { id: "c", text: "Lengthy upfront planning documents" },
      { id: "d", text: "Irregular deployment windows monthly" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Prioritized backlogs based on business value",
    explanation: "Maintaining a groomed, prioritized product backlog ensures teams focus on the highest business value items in each sprint, stabilizing velocity and enabling reliable release forecasting.",
    topic: "SDLC Models"
  },
  {
    id: 27,
    question: "From the summary matrix, which architecture primarily executes in the client browser and delivers a static HTML shell plus a JS bundle with JSON APIs?",
    type: "single",
    options: [
      { id: "a", text: "RSC & Streaming" },
      { id: "b", text: "Decoupled SPAs" },
      { id: "c", text: "Traditional Monoliths" },
      { id: "d", text: "Hybrid Frameworks" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Decoupled SPAs",
    explanation: "Decoupled Single-Page Applications deploy an empty or static HTML shell alongside a JavaScript bundle to the browser, fetching dynamic content asynchronously via JSON APIs.",
    topic: "Architecture & Web"
  },
  {
    id: 28,
    question: "In the Git Flow model, which branch holds production-ready release history?",
    type: "single",
    options: [
      { id: "a", text: "main" },
      { id: "b", text: "develop" },
      { id: "c", text: "release/*" },
      { id: "d", text: "feature/*" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) main",
    explanation: "In Vincent Driessen's Git Flow model, the 'main' (or 'master') branch strictly reflects production-ready state, where every commit corresponds to an actual release tag.",
    topic: "Git & Version Control"
  },
  {
    id: 29,
    question: "Which statement best captures a limitation of applying Spiral practices to a low-risk, well-defined project?",
    type: "single",
    options: [
      { id: "a", text: "Spiral requires discarding documentation throughout" },
      { id: "b", text: "Spiral cannot accommodate stakeholder feedback effectively" },
      { id: "c", text: "Spiral forbids systematic testing at each iteration" },
      { id: "d", text: "Spiral's continuous evaluation may add unnecessary overhead" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Spiral's continuous evaluation may add unnecessary overhead",
    explanation: "For straightforward projects with negligible uncertainty, the elaborate quadrant reviews, risk matrices, and prototyping phases of the Spiral model introduce unnecessary bureaucratic overhead and cost.",
    topic: "SDLC Models"
  },
  {
    id: 30,
    question: "Which development best characterizes the second major paradigm shift for server-side JavaScript?",
    type: "single",
    options: [
      { id: "a", text: "Modern runtimes addressing tooling fragmentation" },
      { id: "b", text: "Removal of Streams and fetch APIs" },
      { id: "c", text: "Move from single-threaded to multi-process models" },
      { id: "d", text: "Adoption of CommonJS-only packaging" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Modern runtimes addressing tooling fragmentation",
    explanation: "The second wave of server-side JavaScript (pioneered by Deno and Bun) focuses on consolidating fragmented toolchains (bundlers, package managers, test runners, transpilers) into cohesive all-in-one runtimes aligned with web standards.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 31,
    question: "Which statement best describes a key goal of modern runtimes like Bun introduced in the 2020s?",
    type: "single",
    options: [
      { id: "a", text: "Replace web standards with proprietary APIs" },
      { id: "b", text: "Return to synchronous multi-threaded servers" },
      { id: "c", text: "Eliminate package managers entirely" },
      { id: "d", text: "Align server runtimes with web standards natively" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Align server runtimes with web standards natively",
    explanation: "Bun natively implements standard Web APIs (such as Fetch, Request, Response, WebSocket, and Web Streams) directly in the global scope, bridging the gap between browser and server environments.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 32,
    question: "For which project profile is Waterfall most appropriate?",
    type: "single",
    options: [
      { id: "a", text: "High-variability startups seeking pivot options" },
      { id: "b", text: "Stable scope with clear, static requirements" },
      { id: "c", text: "Highly experimental research with undefined goals" },
      { id: "d", text: "Rapidly evolving scope with uncertain requirements" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Stable scope with clear, static requirements",
    explanation: "Waterfall requires that specifications be thoroughly understood and locked down before engineering begins, making it suited for projects with stable scope and static requirements.",
    topic: "SDLC Models"
  },
  {
    id: 33,
    question: "Select all characteristics that align with iterative flexibility and risk posture.",
    type: "multiple",
    options: [
      { id: "a", text: "High flexibility with ongoing changes" },
      { id: "b", text: "Low flexibility after initial phases" },
      { id: "c", text: "Proactive risk handling across iterations" },
      { id: "d", text: "Reactive risk handling near project end" }
    ],
    correctAnswer: ["a", "c"],
    officialKeyDisplay: "a) High flexibility with ongoing changes, c) Proactive risk handling across iterations",
    explanation: "Iterative models maintain flexibility throughout the lifecycle by accepting changes across cycles and proactively discovering risks through repeated builds and evaluations.",
    topic: "SDLC Models"
  },
  {
    id: 34,
    question: "Fill in the blank: Node.js popularized an (a) ________ architecture to handle many connections with minimal memory on a single thread.",
    type: "fill-in-the-blank",
    correctAnswer: "event-driven, non-blocking I/O",
    officialKeyDisplay: "event-driven, non-blocking I/O",
    explanation: "Node.js revolutionized backend computing by pairing Google's V8 with an event-driven, non-blocking I/O model (via libuv), allowing a single OS thread to handle thousands of concurrent network connections.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 35,
    question: "Identify two common problems that version control aims to solve when teams rename folders like project-final and project-v2.",
    type: "multiple",
    options: [
      { id: "a", text: "Automatic code optimization failures" },
      { id: "b", text: "Accidental overwriting of files" },
      { id: "c", text: "Inability to collaborate effectively" },
      { id: "d", text: "Loss of change tracking across edits" }
    ],
    correctAnswer: ["b", "c", "d"],
    officialKeyDisplay: "b) Accidental overwriting of files, c) Inability to collaborate effectively, d) Loss of change tracking across edits",
    explanation: "Manual folder duplication leads to file overwrites, unresolvable merge confusion between teammates, and the inability to trace who changed what and when. VCS solves all three.",
    topic: "Git & Version Control"
  },
  {
    id: 36,
    question: "Which Git command initializes a new local repository?",
    type: "single",
    options: [
      { id: "a", text: "git start" },
      { id: "b", text: "git begin" },
      { id: "c", text: "git init" },
      { id: "d", text: "git create" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) git init",
    explanation: "'git init' sets up a new Git repository by creating the hidden '.git' directory containing object databases, refs, and configuration.",
    topic: "Git & Version Control"
  },
  {
    id: 37,
    question: "Which model generally yields the longest time-to-market given its structure and testing timing?",
    type: "single",
    options: [
      { id: "a", text: "Incremental with staged delivery" },
      { id: "b", text: "Agile with continuous testing" },
      { id: "c", text: "Waterfall with post-implementation testing" },
      { id: "d", text: "Iterative with early feedback" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Waterfall with post-implementation testing",
    explanation: "Because Waterfall strictly fences all deployment and customer delivery until the conclusion of design, implementation, and post-implementation testing, its time-to-market is the longest.",
    topic: "SDLC Models"
  },
  {
    id: 38,
    question: "What is the primary purpose of regular retrospectives in Agile teams?",
    type: "single",
    options: [
      { id: "a", text: "Document final requirements for next release" },
      { id: "b", text: "Measure server utilization for deployments" },
      { id: "c", text: "Approve budgets for upcoming sprints" },
      { id: "d", text: "Refine workflow by reflecting on team dynamics" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Refine workflow by reflecting on team dynamics",
    explanation: "Sprint retrospectives provide a dedicated forum for the cross-functional team to inspect their process, celebrate wins, identify bottlenecks, and commit to continuous operational improvements.",
    topic: "SDLC Models"
  },
  {
    id: 39,
    question: "Which advantage is most directly linked to RAD's rapid prototyping?",
    type: "single",
    options: [
      { id: "a", text: "Better compiler optimization at build time" },
      { id: "b", text: "Improved security through formal verification proofs" },
      { id: "c", text: "Guaranteed zero defects by first deployment" },
      { id: "d", text: "Cost efficiency via reduced requirement overheads" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Cost efficiency via reduced requirement overheads",
    explanation: "By developing quick interactive prototypes that stakeholders can test directly, RAD cuts down on thousands of hours of speculative requirement documentation and upfront specification churn.",
    topic: "SDLC Models"
  },
  {
    id: 40,
    question: "Which statement best describes integrating security via DevSecOps within the SDLC?",
    type: "single",
    options: [
      { id: "a", text: "Security is added mainly during late testing phases" },
      { id: "b", text: "Security checks occur after final deployment only" },
      { id: "c", text: "Security ownership is limited to the operations team" },
      { id: "d", text: "Security is embedded across all phases with automation" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Security is embedded across all phases with automation",
    explanation: "DevSecOps shifts security left, embedding automated vulnerability scans, SAST/DAST, dependency auditing, and compliance checks across planning, coding, building, and deployment.",
    topic: "DevOps & Security"
  }
];
