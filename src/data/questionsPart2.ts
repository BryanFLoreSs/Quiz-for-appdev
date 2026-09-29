import { Question } from '../types/quiz.ts';

export const questionsPart2: Question[] = [
  {
    id: 41,
    question: "Which SDLC model uses a strictly linear sequence of phases with low flexibility and late risk mitigation?",
    type: "single",
    options: [
      { id: "a", text: "Waterfall model with linear phases" },
      { id: "b", text: "Iterative model with cyclic loops" },
      { id: "c", text: "Spiral model with risk loops" },
      { id: "d", text: "Agile model with sprint cycles" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Waterfall model with linear phases",
    explanation: "Waterfall organizes development into a strictly sequential flow (Requirements -> Design -> Implementation -> Verification -> Maintenance) where each phase must finish before the next begins.",
    topic: "SDLC Models"
  },
  {
    id: 42,
    question: "A product team must optimize SEO for dynamic product pages while keeping interactive cart widgets snappy. Which hybrid approach is most appropriate?",
    type: "single",
    options: [
      { id: "a", text: "Static Site Generation for every request dynamically" },
      { id: "b", text: "Monolithic server rendering with full page refreshes" },
      { id: "c", text: "Server-Side Rendering for product routes, CSR for cart widgets" },
      { id: "d", text: "Pure CSR for all routes and widgets" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Server-Side Rendering for product routes, CSR for cart widgets",
    explanation: "Server-Side Rendering (SSR) delivers fully rendered markup for search engine crawlers on product catalog routes, while Client-Side Rendering (CSR) provides instantaneous responsiveness for dynamic cart widgets.",
    topic: "Architecture & Web"
  },
  {
    id: 43,
    question: "Which JavaScript engine powered the first wave of server-side JavaScript with Node.js?",
    type: "single",
    options: [
      { id: "a", text: "SpiderMonkey from Mozilla" },
      { id: "b", text: "V8 from Google" },
      { id: "c", text: "JavaScriptCore from WebKit" },
      { id: "d", text: "Chakra from Microsoft" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) V8 from Google",
    explanation: "Ryan Dahl built Node.js around Google Chrome's high-performance V8 engine, which compiles JavaScript directly into native machine code using JIT compilation.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 44,
    question: "Fill the blank: Waterfall typically involves (a) ________ user involvement until the testing phase.",
    type: "fill-in-the-blank",
    correctAnswer: "limited",
    officialKeyDisplay: "limited",
    explanation: "In classic Waterfall implementations, client interaction occurs predominantly during initial requirements gathering and sign-off, remaining minimal until user acceptance testing near the project's conclusion.",
    topic: "SDLC Models"
  },
  {
    id: 45,
    question: "What is the primary purpose of a hotfix/* branch in Git Flow?",
    type: "single",
    options: [
      { id: "a", text: "Urgent production patches from main" },
      { id: "b", text: "Pre-release test staging changes" },
      { id: "c", text: "Long-lived integration of features" },
      { id: "d", text: "Early research and prototyping" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Urgent production patches from main",
    explanation: "Hotfix branches diverge directly from 'main' to swiftly address critical bugs in production without waiting for the next scheduled release cycle, subsequently merging back to both main and develop.",
    topic: "Git & Version Control"
  },
  {
    id: 46,
    question: "In the Spiral model, what core activity is emphasized in every cycle to handle uncertainty?",
    type: "single",
    options: [
      { id: "a", text: "Detailed upfront design documentation" },
      { id: "b", text: "Continuous risk assessment and mitigation" },
      { id: "c", text: "Strict change-free requirements" },
      { id: "d", text: "Single final integration testing" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Continuous risk assessment and mitigation",
    explanation: "The defining hallmark of each iteration in the Spiral SDLC model is evaluating and addressing technical and business risks before advancing to solution prototyping and engineering.",
    topic: "SDLC Models"
  },
  {
    id: 47,
    question: "A team wants faster releases and fewer production errors. Which DevOps principles most directly address this goal?",
    type: "single",
    options: [
      { id: "a", text: "Detailed design documents and reviews" },
      { id: "b", text: "Monthly deployment windows with QA" },
      { id: "c", text: "Manual builds and scripted rollbacks" },
      { id: "d", text: "CI/CD automation and automated checks" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) CI/CD automation and automated checks",
    explanation: "Automated Continuous Integration and Continuous Delivery (CI/CD) pipelines run unit tests, security scans, and deployment scripts automatically, minimizing human error and accelerating time-to-market.",
    topic: "DevOps & Security"
  },
  {
    id: 48,
    question: "Which statement compares testing emphasis between the two models most accurately?",
    type: "single",
    options: [
      { id: "a", text: "Waterfall concentrates testing after full development; Iterative embeds testing in every cycle" },
      { id: "b", text: "Waterfall performs only unit tests; Iterative performs only system tests" },
      { id: "c", text: "Iterative delays testing until final iteration to reduce churn" },
      { id: "d", text: "Both models avoid formal testing to accelerate delivery" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Waterfall concentrates testing after full development; Iterative embeds testing in every cycle",
    explanation: "In Waterfall, testing forms a distinct phase occurring late in the timeline. By contrast, the Iterative model embeds verification, automated testing, and evaluation into every incremental loop.",
    topic: "SDLC Models"
  },
  {
    id: 49,
    question: "Which practice best strengthens traceability within a V-Model implementation?",
    type: "single",
    options: [
      { id: "a", text: "Delay test design until after coding completes" },
      { id: "b", text: "Rely on exploratory testing without test cases" },
      { id: "c", text: "Use informal notes to reference requirement sources" },
      { id: "d", text: "Automate verification suites to link tests with specs" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Automate verification suites to link tests with specs",
    explanation: "Traceability ensures that every system requirement links directly to an automated verification test case, validating bidirectional compliance across specification and verification branches of the V-Model.",
    topic: "SDLC Models"
  },
  {
    id: 50,
    question: "In the Iterative approach, which set lists the commonly repeated phase cycle?",
    type: "single",
    options: [
      { id: "a", text: "Requirements, design, implementation, testing" },
      { id: "b", text: "Planning, design, coding, testing, evaluation" },
      { id: "c", text: "Design, deployment, maintenance, retirement" },
      { id: "d", text: "Analysis, prototyping, procurement, disposal" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Planning, design, coding, testing, evaluation",
    explanation: "Each iteration in an iterative development loop repeats the micro-lifecycle: planning the iteration scope, designing the solution, coding, executing test suites, and evaluating results to steer the next cycle.",
    topic: "SDLC Models"
  },
  {
    id: 51,
    question: "Which statement best describes Bun's approach to Node.js ecosystem compatibility?",
    type: "single",
    options: [
      { id: "a", text: "Drops Node modules for ES modules only" },
      { id: "b", text: "Blocks fs and http for security" },
      { id: "c", text: "Requires polyfills for all core modules" },
      { id: "d", text: "Supports Node built-ins to run npm packages" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Supports Node built-ins to run npm packages",
    explanation: "Bun achieves drop-in compatibility with the npm ecosystem by implementing Node.js built-in modules (e.g. node:fs, node:path, node:http, node:crypto) natively in fast Zig code.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 52,
    question: "Fill in the blank: Hybrid frameworks like (a) ________ allow configuring per-route rendering strategies within one codebase.",
    type: "fill-in-the-blank",
    correctAnswer: "Next.js",
    officialKeyDisplay: "Next.js",
    explanation: "Next.js pioneered modern hybrid web rendering, giving developers the granular choice of Static Site Generation (SSG), Incremental Static Regeneration (ISR), Server-Side Rendering (SSR), or Client-Side Rendering (CSR) on a per-route basis.",
    topic: "Architecture & Web"
  },
  {
    id: 53,
    question: "Fill in the blank: For projects with high risk profiles, the recommended SDLC model is (a) ________.",
    type: "fill-in-the-blank",
    correctAnswer: "Spiral",
    officialKeyDisplay: "Spiral",
    explanation: "The Spiral model is specifically structured to identify, assess, and mitigate risks early in each cycle, making it the premier choice for high-uncertainty, high-risk systems.",
    topic: "SDLC Models"
  },
  {
    id: 54,
    question: "A project has stable requirements, low risk tolerance, and a fixed budget with extensive documentation needs. Which model fits best?",
    type: "single",
    options: [
      { id: "a", text: "Spiral with risk-focused cycles" },
      { id: "b", text: "Waterfall with predictable control" },
      { id: "c", text: "Incremental with flexible scope" },
      { id: "d", text: "Agile with evolving backlog" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Waterfall with predictable control",
    explanation: "Waterfall's structured stage gates and comprehensive documentation suit low-risk, fixed-price contracts where requirements are well-established and changes are strictly controlled.",
    topic: "SDLC Models"
  },
  {
    id: 55,
    question: "Bun's native TypeScript support primarily eliminates the need for which separate tool during development?",
    type: "single",
    options: [
      { id: "a", text: "Database migration engine" },
      { id: "b", text: "External tsc compilation step" },
      { id: "c", text: "Standalone HTML templating" },
      { id: "d", text: "Dedicated CSS preprocessor" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) External tsc compilation step",
    explanation: "Bun directly transpiles and executes TypeScript (.ts, .tsx) files in memory at runtime without requiring an external 'tsc' compilation step or ts-node loader.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 56,
    question: "Which statement best describes monolithic server rendering in early web apps?",
    type: "single",
    options: [
      { id: "a", text: "Tightly coupled servers generated full HTML pages per request" },
      { id: "b", text: "Browsers rendered HTML from cached templates without servers" },
      { id: "c", text: "Clients streamed partial JSON while servers built minimal shells" },
      { id: "d", text: "Independent microservices pushed HTML directly to the database" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Tightly coupled servers generated full HTML pages per request",
    explanation: "Classic monolithic applications (e.g. PHP, Django, Rails) generated complete HTML documents on the server for each HTTP request, sending full markup over the wire to the browser.",
    topic: "Architecture & Web"
  },
  {
    id: 57,
    question: "Fill in the blank: The Spiral model centers iterations around continuous (a) ________.",
    type: "fill-in-the-blank",
    correctAnswer: "risk assessment",
    officialKeyDisplay: "risk assessment",
    explanation: "Every loop of the Spiral lifecycle begins with objective definition and directly centers around rigorous risk identification and assessment.",
    topic: "SDLC Models"
  },
  {
    id: 58,
    question: "What primary JavaScript engine does Bun use?",
    type: "single",
    options: [
      { id: "a", text: "Chakra from Microsoft Edge" },
      { id: "b", text: "JavaScriptCore from WebKit" },
      { id: "c", text: "SpiderMonkey from Firefox" },
      { id: "d", text: "V8 from Google Chrome" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) JavaScriptCore from WebKit",
    explanation: "Bun is powered by Apple's WebKit JavaScriptCore (JSC) engine, prized for its blazing startup time and compact memory overhead compared to V8.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 59,
    question: "Which models list high adaptability to changes across the lifecycle?",
    type: "multiple",
    options: [
      { id: "a", text: "Waterfall lifecycle flow" },
      { id: "b", text: "Agile sprint cadence" },
      { id: "c", text: "Incremental staged releases" },
      { id: "d", text: "Iterative lifecycle cycles" }
    ],
    correctAnswer: ["b", "c", "d"],
    officialKeyDisplay: "b) Agile sprint cadence, c) Incremental staged releases, d) Iterative lifecycle cycles",
    explanation: "Agile, Incremental, and Iterative models all support adaptive change during the project lifecycle, whereas Waterfall resists changes once initial requirements are locked.",
    topic: "SDLC Models"
  },
  {
    id: 60,
    question: "Which routes are best suited for Client-Side Rendering (CSR) in a hybrid app?",
    type: "single",
    options: [
      { id: "a", text: "Data-heavy dashboards needing server caching" },
      { id: "b", text: "Content pages updated only during scheduled builds" },
      { id: "c", text: "Highly interactive views with minimal SEO needs" },
      { id: "d", text: "Static marketing pages requiring fast first paint" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Highly interactive views with minimal SEO needs",
    explanation: "CSR excels for authenticated user portals, rich interactive dashboards, and application workspaces that do not require search engine indexing.",
    topic: "Architecture & Web"
  },
  {
    id: 61,
    question: "Choose ALL practices that reduce risk on the main branch.",
    type: "multiple",
    options: [
      { id: "a", text: "Skip code reviews to move fast" },
      { id: "b", text: "Hide secrets with .gitignore" },
      { id: "c", text: "Use feature branches for changes" },
      { id: "d", text: "Commit directly to main often" }
    ],
    correctAnswer: ["b", "c"],
    officialKeyDisplay: "b) Hide secrets with .gitignore, c) Use feature branches for changes",
    explanation: "Excluding sensitive environment secrets via .gitignore prevents accidental token leaks, while isolating work in dedicated feature branches prevents unreviewed or broken code from degrading main.",
    topic: "Git & Version Control"
  },
  {
    id: 62,
    question: "Select ALL characteristics that typically favor choosing an Iterative model over Waterfall.",
    type: "multiple",
    options: [
      { id: "a", text: "Desire to surface and resolve risks early" },
      { id: "b", text: "Evolving requirements needing adaptation" },
      { id: "c", text: "Strict compliance requiring complete spec logs up front" },
      { id: "d", text: "Need for early stakeholder feedback loops" }
    ],
    correctAnswer: ["a", "b", "d"],
    officialKeyDisplay: "a) Desire to surface and resolve risks early, b) Evolving requirements needing adaptation, d) Need for early stakeholder feedback loops",
    explanation: "Iterative development is favored when teams need early risk reduction, must accommodate changing requirements, and require frequent stakeholder evaluation. Upfront complete spec compliance favors Waterfall.",
    topic: "SDLC Models"
  },
  {
    id: 63,
    question: "Which option best captures adaptability differences to changing requirements?",
    type: "single",
    options: [
      { id: "a", text: "Waterfall is more adaptable after design" },
      { id: "b", text: "Neither model addresses change management" },
      { id: "c", text: "Both are equally adaptable throughout" },
      { id: "d", text: "Iterative is highly adaptable; Waterfall is less adaptable" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Iterative is highly adaptable; Waterfall is less adaptable",
    explanation: "Iterative processes incorporate feedback into future cycles seamlessly. Waterfall treats late requirement changes as costly scope anomalies requiring formal renegotiation.",
    topic: "SDLC Models"
  },
  {
    id: 64,
    question: "Which is a common SDLC mistake when deadlines are tight?",
    type: "single",
    options: [
      { id: "a", text: "Truncating QA leading to production defects" },
      { id: "b", text: "Extending QA to gather more evidence" },
      { id: "c", text: "Delaying releases until all feedback loops close" },
      { id: "d", text: "Separating security from development ownership" }
    ],
    correctAnswer: "a",
    officialKeyDisplay: "a) Truncating QA leading to production defects",
    explanation: "Under schedule pressure, teams often succumb to cutting testing cycles and quality assurance, causing undiscovered defects to escape directly into production.",
    topic: "SDLC Models"
  },
  {
    id: 65,
    question: "A startup expects requirements to change frequently, needs fast releases, and supports high client involvement. Choose the most suitable model.",
    type: "single",
    options: [
      { id: "a", text: "Spiral with heavy documentation" },
      { id: "b", text: "V-Model with strict mapping" },
      { id: "c", text: "Waterfall with fixed scope" },
      { id: "d", text: "Agile with high collaboration" }
    ],
    correctAnswer: "d",
    officialKeyDisplay: "d) Agile with high collaboration",
    explanation: "Startups facing market uncertainty require rapid sprint cadence, continuous customer feedback, and flexible scope evolution, precisely what Agile delivers.",
    topic: "SDLC Models"
  },
  {
    id: 66,
    question: "Why did next-generation tools like esbuild and SWC achieve significant build speedups over Webpack?",
    type: "single",
    options: [
      { id: "a", text: "More verbose configuration files" },
      { id: "b", text: "Compiled languages and parallel parsing" },
      { id: "c", text: "Exclusive support for AMD modules" },
      { id: "d", text: "Disabling source maps by default" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Compiled languages and parallel parsing",
    explanation: "esbuild (Go) and SWC (Rust) are compiled to native machine code and parallelize AST parsing across multiple CPU cores, executing 10x-100x faster than JavaScript-interpreted bundlers.",
    topic: "Architecture & Web"
  },
  {
    id: 67,
    question: "Which pair correctly contrasts Git and GitHub?",
    type: "single",
    options: [
      { id: "a", text: "Git is a cloud service; GitHub is a terminal command set" },
      { id: "b", text: "Git manages issues; GitHub compiles and runs code" },
      { id: "c", text: "Git is a local VCS tool; GitHub is a hosting platform" },
      { id: "d", text: "Git is only for backups; GitHub is only for branching" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Git is a local VCS tool; GitHub is a hosting platform",
    explanation: "Git is a decentralized command-line version control system that runs locally on your machine. GitHub is a cloud-based web platform that hosts remote Git repositories and collaboration features.",
    topic: "Git & Version Control"
  },
  {
    id: 68,
    question: "Which option correctly contrasts the standard API surface exposed by Bun versus Node.js?",
    type: "single",
    options: [
      { id: "a", text: "Node.js exposes Web Standards plus Node APIs, while Bun is Node-only" },
      { id: "b", text: "Both expose only Node-specific modules" },
      { id: "c", text: "Bun exposes Web Standards plus Node APIs, while Node focuses on Node-specific modules" },
      { id: "d", text: "Neither exposes fetch, Streams, or Response" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Bun exposes Web Standards plus Node APIs, while Node focuses on Node-specific modules",
    explanation: "Bun was architected from day one to natively implement standard W3C Web APIs (Fetch, Request, Response, WebSocket) alongside Node compatibility modules.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 69,
    question: "Which combination reflects premature complexity in software projects?",
    type: "multiple",
    options: [
      { id: "a", text: "Running security scans continuously in CI/CD" },
      { id: "b", text: "Delaying user testing until after public launch" },
      { id: "c", text: "Overengineering prior to proving basic functionality" },
      { id: "d", text: "Adding elaborate features before core validation" }
    ],
    correctAnswer: ["c", "d"],
    officialKeyDisplay: "c) Overengineering prior to proving basic functionality, d) Adding elaborate features before core validation",
    explanation: "Premature optimization and building complex, unvalidated abstractions before confirming that the core value proposition works represent classical antipatterns in software engineering.",
    topic: "SDLC Models"
  },
  {
    id: 70,
    question: "Which combination correctly pairs runtime and engine?",
    type: "single",
    options: [
      { id: "a", text: "Bun – Google V8 engine" },
      { id: "b", text: "Bun – WebKit's JavaScriptCore engine" },
      { id: "c", text: "Node.js – JavaScriptCore engine" },
      { id: "d", text: "Node.js – libuv execution engine" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Bun — WebKit's JavaScriptCore engine",
    explanation: "Bun uses Apple's JavaScriptCore (JSC) engine from WebKit, while Node.js uses Google's V8 engine.",
    topic: "JavaScript & Bun/Node"
  },
  {
    id: 71,
    question: "Identify two capabilities provided by the unified hybrid framework server in the diagram.",
    type: "multiple",
    options: [
      { id: "a", text: "Static generation with ISR support" },
      { id: "b", text: "Only client-side rendering pipelines" },
      { id: "c", text: "Unified routing across routes" },
      { id: "d", text: "Direct database access via server handlers" }
    ],
    correctAnswer: ["a", "c", "d"],
    officialKeyDisplay: "a) Static generation with ISR support, c) Unified routing across routes, d) Direct database access via server handlers",
    explanation: "Modern full-stack hybrid servers integrate filesystem-based routing across all pages, support ISR/SSG static generation, and provide direct database queries inside server actions and API handlers.",
    topic: "Architecture & Web"
  },
  {
    id: 72,
    question: "Which statement best distinguishes verification from validation in SDLC quality activities?",
    type: "single",
    options: [
      { id: "a", text: "Validation confirms developer intent aligns with architectural diagrams" },
      { id: "b", text: "Verification ensures the product is built right to specifications" },
      { id: "c", text: "Validation guarantees code style matches organizational conventions" },
      { id: "d", text: "Verification checks if the right product meets user needs" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Verification ensures the product is built right to specifications",
    explanation: "Verification evaluates whether software meets defined technical specifications ('Are we building the product right?'). Validation evaluates whether the software meets customer needs ('Are we building the right product?').",
    topic: "SDLC Models"
  },
  {
    id: 73,
    question: "Which options are core advantages typically associated with Agile?",
    type: "multiple",
    options: [
      { id: "a", text: "Minimal client involvement throughout" },
      { id: "b", text: "Iterative progress with milestone visibility" },
      { id: "c", text: "High adaptability to changing scope" },
      { id: "d", text: "Proactive risk management via continuous testing" }
    ],
    correctAnswer: ["b", "c", "d"],
    officialKeyDisplay: "b) Iterative progress with milestone visibility, c) High adaptability to changing scope, d) Proactive risk management via continuous testing",
    explanation: "Agile provides high stakeholder visibility through frequent sprints, embraces scope adaptability, and mitigates quality risks through continuous automated testing.",
    topic: "SDLC Models"
  },
  {
    id: 74,
    question: "User involvement is described as limited in one model and continuous in another. Match the correct pairing by selecting the correct option.",
    type: "single",
    options: [
      { id: "a", text: "Limited in Spiral, continuous in V-Model" },
      { id: "b", text: "Limited in Agile, continuous in Waterfall" },
      { id: "c", text: "Limited in Waterfall, continuous in Iterative" },
      { id: "d", text: "Limited in Incremental, continuous in Spiral" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Limited in Waterfall, continuous in Iterative",
    explanation: "In Waterfall, user interaction is largely confined to requirements sign-off and final UAT. In Iterative models, stakeholders evaluate software increments continuously at the end of each cycle.",
    topic: "SDLC Models"
  },
  {
    id: 75,
    question: "A team wants to ensure no code merges into the main branch unless tests pass. Which mechanism best enforces this policy?",
    type: "single",
    options: [
      { id: "a", text: "Manual approvals after deployments finish" },
      { id: "b", text: "Opening more Issues and Discussions" },
      { id: "c", text: "Branch protection with required status checks" },
      { id: "d", text: "Using repositories with larger storage" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Branch protection with required status checks",
    explanation: "Branch protection rules in GitHub or GitLab can require that automated CI status checks (tests, linters) pass green before pull requests can be merged into production branches.",
    topic: "Git & Version Control"
  },
  {
    id: 76,
    question: "A team wants faster time-to-market than Waterfall but still prefers staged deliveries and continuous testing across increments. Which model suits this?",
    type: "single",
    options: [
      { id: "a", text: "Pure Waterfall sequence" },
      { id: "b", text: "Incremental with staged releases" },
      { id: "c", text: "Spiral with risk loops" },
      { id: "d", text: "V-Model with paired tests" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Incremental with staged releases",
    explanation: "The Incremental SDLC model delivers functional slices of the application in successive staged releases, delivering business value faster while verifying each increment along the way.",
    topic: "SDLC Models"
  },
  {
    id: 77,
    question: "What does git status primarily display?",
    type: "single",
    options: [
      { id: "a", text: "Only remote branch differences" },
      { id: "b", text: "Untracked files count only" },
      { id: "c", text: "Working tree and staged file status" },
      { id: "d", text: "Commit messages history only" }
    ],
    correctAnswer: "c",
    officialKeyDisplay: "c) Working tree and staged file status",
    explanation: "'git status' displays the state of the working directory and staging area (index), highlighting untracked, modified, and staged files ready for commit.",
    topic: "Git & Version Control"
  },
  {
    id: 78,
    question: "Which quadrant activity in the Spiral model focuses on discovering and addressing potential threats before building solutions?",
    type: "single",
    options: [
      { id: "a", text: "Review and plan for the next phase spiral iteration" },
      { id: "b", text: "Identifying and resolving risks through analysis actions" },
      { id: "c", text: "Determining objectives and alternate solutions for features" },
      { id: "d", text: "Develop and test prototypes for candidate solutions" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Identifying and resolving risks through analysis actions",
    explanation: "Quadrant 2 of the Spiral model is dedicated to identifying and resolving risks, evaluating alternatives, and testing prototypes before embarking on full construction.",
    topic: "SDLC Models"
  },
  {
    id: 79,
    question: "Name the DevOps practice that provisions and manages infrastructure programmatically.\n\n(a) ________",
    type: "fill-in-the-blank",
    correctAnswer: "Infrastructure as Code (IaC)",
    officialKeyDisplay: "Infrastructure as Code (IaC)",
    explanation: "Infrastructure as Code (IaC) defines compute, network, and storage configurations using machine-readable definition files (e.g. Terraform, CloudFormation) rather than manual console configuration.",
    topic: "DevOps & Security"
  },
  {
    id: 80,
    question: "Identify the correct pairing of implementation languages for each runtime.",
    type: "single",
    options: [
      { id: "a", text: "Node.js in Java, C; Bun in C#, Zig" },
      { id: "b", text: "Node.js in C++, C; Bun in Zig, C++" },
      { id: "c", text: "Node.js in Zig and C++; Bun in C and C++" },
      { id: "d", text: "Node.js in Rust, C; Bun in Zig, Rust" }
    ],
    correctAnswer: "b",
    officialKeyDisplay: "b) Node.js in C++, C; Bun in Zig, C++",
    explanation: "Node.js core is authored in C++ and C (with libuv and V8). Bun's core is implemented primarily in Zig alongside C++ (for JavaScriptCore bindings).",
    topic: "JavaScript & Bun/Node"
  }
];
