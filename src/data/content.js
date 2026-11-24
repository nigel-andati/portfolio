// Single source of truth, transcribed from Nigel_Andati_Resume.pdf (public/).

export const identity = {
  first: 'Nigel',
  last: 'Andati',
  monogram: 'NA',
  discipline: 'Backend systems · Low-latency simulation · AI infrastructure',
  site: 'nigelandati.me',
  email: 'nigelandati@gmail.com',
  github: 'github.com/nigel-andati',
  githubUrl: 'https://github.com/nigel-andati',
  linkedin: 'linkedin.com/in/nigel-andati',
  linkedinUrl: 'https://linkedin.com/in/nigel-andati',
  resume: '/Nigel_Andati_Resume.pdf',
  title: ['Software Engineer', 'AI/ML', 'Backend & Systems'],
  tagline: 'Software Engineer · AI/ML · Backend & Systems',
  status: 'Currently shipping at Tech Hub Africa & PM Accelerator',
  summary:
    'I build backend services, low-latency systems and AI tooling — FastAPI and PostgreSQL APIs for a 10K+ user product, a C++ matching engine at 3.85M events/sec, and an autonomous coding agent that validates its own patches.',
  lede:
    'I work on the parts of software that have to hold under load — order matching engines measured in microseconds, data models that outlive their first schema, and agents that edit real repositories without breaking them.',
  brief: [
    'Computer Science at Duke. Four engineering roles so far, each one closer to the machine: billing flows that moved real money in my first summer, then FastAPI services and Postgres models for a product with ten thousand users, then sole engineering ownership of an AI product from empty repository to production.',
    'Outside of work I build what I want to understand. A C++ matching engine, because reading about price-time priority is not the same as implementing it. A coding agent, because I wanted to know exactly where autonomy breaks down. The interesting part is always the part that is harder than it looks.',
  ],
}

export const education = {
  school: 'Duke University',
  degree: 'B.S. Computer Science',
  grad: 'Expected May 2028',
  location: 'Durham, NC',
  courses: [
    { code: 'COMPSCI 201', name: 'Data Structures & Algorithms' },
    { code: 'COMPSCI 230', name: 'Discrete Mathematics' },
    { code: 'COMPSCI 250', name: 'Computer Architecture' },
    { code: 'COMPSCI 316', name: 'Introduction to Database Systems' },
    { code: 'MATH 105', name: 'Calculus' },
    { code: 'MATH 221', name: 'Linear Algebra' },
    { code: 'MATH 206', name: 'Probability & Statistics' },
    { code: 'CMU 10-605', name: 'Machine Learning with Large Datasets' },
    { code: 'INFOSCI 102', name: 'Computation and Problem Solving' },
  ],
}

// Wrap a fragment in **double asterisks** to render it as a highlighted metric.
export const experience = [
  {
    org: 'Tech Hub Africa LLC',
    role: 'Software Engineering Intern',
    span: 'May 2026 — Present',
    location: 'Accra, GH',
    stack: ['WordPress', 'JavaScript', 'REST'],
    bullets: [
      "Improved page-load performance for AfroEventix's **1,000+ monthly users**, shipping **5+ production features** and custom REST endpoints.",
      'Built AI-assisted tooling that turns stakeholder requests into scoped architecture proposals across **3+ client projects**.',
    ],
  },
  {
    org: 'Product Manager Accelerator',
    role: 'Founding Engineer — Startup Engineering Lead',
    span: 'Mar 2026 — Present',
    location: 'Remote / Boston, MA',
    stack: ['React', 'Supabase', 'Gemini', 'Firecrawl', 'OAuth'],
    bullets: [
      "**Sole engineer** on Heiwa, an AI-powered family OS — own full-stack engineering and the technical roadmap end to end.",
      'Built logistics parsing from flyers and URLs; owned calendar sync and OAuth integration from design through production.',
    ],
  },
  {
    org: 'Nexa Consulting',
    role: 'Software Engineering Intern',
    span: 'May 2025 — Aug 2025',
    location: 'Nairobi, KE',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'JWT'],
    bullets: [
      'Designed FastAPI REST endpoints and PostgreSQL data models for a **10K+ user** product; Redis caching and query-index optimizations **reduced p95 latency**.',
      'Implemented JWT authentication and integration tests, raising backend test coverage to **85%+** and reducing production defects.',
    ],
  },
  {
    org: 'Body Flex Gyms',
    role: 'Full-Stack Software Developer',
    span: 'May 2024 — Aug 2024',
    location: 'Nairobi, KE',
    stack: ['Full-stack', 'Payments', 'SQL'],
    bullets: [
      'Built and shipped live payment-processing features handling real financial transactions for **200+ monthly customers**.',
      'Owned parts of a production billing system early on, improving database reliability and billing-flow stability.',
    ],
  },
]

export const projects = [
  {
    index: '001',
    art: { scheme: 'ember', glyph: 'µs' },
    title: 'Market Microstructure Backtesting Engine',
    kicker: 'C++20 matching engine for realistic strategy backtests',
    stack: ['C++20', 'Market Microstructure', 'Thread Pool'],
    problem:
      'Strategy backtests are only as trustworthy as their fills — idealized prices hide slippage and market impact.',
    built:
      'Replays order-by-order market data through a custom price-time-priority matching engine that simulates fills, slippage and market impact, with strategy evaluation parallelized across a thread pool.',
    metrics: [
      { label: 'Throughput', value: '3.85M', unit: 'events/sec' },
      { label: 'p99 match latency', value: '1.0', unit: 'µs' },
    ],
  },
  {
    index: '002',
    art: { scheme: 'teal', glyph: '</>' },
    title: 'Codewright',
    kicker: 'Autonomous bug-fixing & feature-generation agent',
    stack: ['Python', 'LLMs', 'Docker', 'FastAPI', 'GitHub API'],
    href: 'https://codewright-zeta.vercel.app',
    problem:
      'LLM-generated code changes are only useful if they are validated before anyone has to review them.',
    built:
      'A coding agent that maps repositories with AST analysis, plans patches, and validates its own changes through parallel test orchestration before proposing a diff.',
    metrics: [
      { label: 'Patch success rate', value: '100%', unit: 'across 5 repos' },
      { label: 'Repositories validated', value: '5', unit: 'end to end' },
    ],
  },
  {
    index: '003',
    art: { scheme: 'violet', glyph: 'RAG' },
    title: 'Semantic Recommendation Algorithm',
    kicker: 'RAG-based book discovery service',
    stack: ['Python', 'LangChain', 'OpenAI', 'ChromaDB'],
    problem: 'Library-default chunking and retrieval settings return loosely relevant recommendations.',
    built:
      'A retrieval-augmented recommendation service over a 7,000-title corpus, with chunking strategy and retrieval parameters tuned for relevance.',
    metrics: [{ label: 'Corpus size', value: '7,000+', unit: 'titles indexed' }],
  },
]

export const skills = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Backend & Systems',
    items: ['FastAPI', 'Django', 'Flask', 'Node.js', 'Express', 'REST/GraphQL APIs', 'gRPC', 'WebSockets', 'Microservices', 'System Design'],
  },
  {
    label: 'AI / ML',
    items: ['LLMs', 'RAG', 'AI Agents', 'LangChain', 'OpenAI', 'Gemini', 'ChromaDB (vector search)', 'Prompt Engineering'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'Redis', 'MySQL', 'MongoDB', 'DynamoDB', 'Cassandra', 'SQLite', 'Elasticsearch', 'Supabase', 'Firebase'],
  },
  {
    label: 'Cloud & Infrastructure',
    items: ['AWS (EC2, Lambda, S3)', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'Kafka', 'RabbitMQ', 'Linux', 'Git/GitHub'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Redux', 'Vue.js'],
  },
  {
    label: 'Testing',
    items: ['PyTest', 'JUnit', 'Jest', 'Selenium', 'Postman'],
  },
]

export const leadership = [
  { name: 'ColorStack Fellow', note: 'Technical community' },
  { name: 'CodePath Fellow', note: 'Technical community' },
  { name: 'Nike Sophomore Recruiting Summit', note: 'Selected participant' },
  { name: 'Global Ambassador', note: 'Duke Kunshan University' },
  { name: 'Secretary', note: 'African & Black Students Association' },
  { name: 'Varsity Soccer', note: 'Student athlete' },
  { name: 'EA Software Engineering', note: 'Virtual Experience Program' },
]

// Awards & achievements — same real fellowships, selections and roles,
// presented the way the reference presents its Awards section.
export const awards = [
  { name: 'ColorStack Fellow', note: 'Technical fellowship community' },
  { name: 'CodePath Fellow', note: 'Technical fellowship community' },
  { name: 'Nike Sophomore Recruiting Summit', note: 'Selected participant' },
  { name: 'Global Ambassador', note: 'Duke Kunshan University' },
  { name: 'Secretary', note: 'African & Black Students Association' },
  { name: 'Varsity Soccer', note: 'Student athlete' },
  { name: 'EA Software Engineering Virtual Experience Program', note: 'Completed program' },
]

// Engineering interests, each one evidenced by shipped work above —
// no invented hobbies, just what the projects and roles already show.
export const interests = [
  {
    name: 'Low-latency systems & market microstructure',
    note: 'Price-time-priority matching, microsecond measurement, thread-pool parallelism.',
  },
  {
    name: 'AI agents that validate their own work',
    note: 'AST repository mapping, patch planning, parallel test orchestration.',
  },
  {
    name: 'Retrieval quality & evaluation tuning',
    note: 'Chunking strategy and retrieval-parameter tuning over a 7,000-title corpus.',
  },
  {
    name: 'Production backend ownership',
    note: 'Billing flows handling real money, FastAPI services for 10K+ users.',
  },
]

// Research threads — independent, implementation-led investigation.
// Nigel has no peer-reviewed publications; nothing here claims one.
export const research = [
  {
    title: 'Realistic fill simulation for strategy backtests',
    area: 'Market microstructure',
    body: 'Idealized backtest prices hide slippage and market impact. Implemented a custom C++ price-time-priority matching engine that replays order-by-order market data, measuring 3.85M events/sec throughput at 1.0 µs p99 match latency.',
  },
  {
    title: 'Where autonomous coding breaks down',
    area: 'AI agents',
    body: 'LLM-generated changes are only useful when validated before review. Built a coding agent that maps repositories with AST analysis, plans patches, and validates them through parallel test orchestration — 100% patch success across 5 repositories.',
  },
  {
    title: 'Chunking and retrieval tuning for relevance',
    area: 'Retrieval-augmented generation',
    body: 'Library-default chunking returns loosely relevant results. Tuned chunking strategy and retrieval parameters for a RAG book-discovery service over a 7,000-title corpus indexed in ChromaDB.',
  },
]

// Projects grouped the way the reference groups its builds.
// Heiwa appears here as well as under Experience: it is real full-stack
// work shipped as sole/ founding engineer, framed honestly as such.
export const projectCategories = [
  {
    id: 'backend-systems',
    title: 'Backend & Systems Engineering',
    items: [projects[0]],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    items: [projects[1], projects[2]],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    items: [
      {
        index: 'pm-heiwa',
        art: { scheme: 'crimson', glyph: 'H' },
        title: 'Heiwa — AI-powered family OS',
        kicker: 'Shipped as sole / founding engineer, PM Accelerator',
        stack: ['React', 'Supabase', 'Gemini', 'Firecrawl', 'OAuth'],
        problem: 'Family logistics scattered across flyers, messages and calendars.',
        built: 'Own full-stack engineering end to end: logistics parsing from flyers and URLs, calendar sync and OAuth integration from design through production.',
        metrics: [{ label: 'Team', value: 'Sole', unit: 'engineer' }],
      },
    ],
  },
]

// Single-page anchor navigation, mirroring the reference's section order.
export const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'awards', label: 'Awards' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
]

export const skillCount = skills.reduce((n, g) => n + g.items.length, 0)
