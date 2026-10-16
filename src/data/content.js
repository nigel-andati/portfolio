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

const skillCount = skills.reduce((n, g) => n + g.items.length, 0)

// Every browsable title. `scheme` picks the poster palette, `glyph` the poster art.
export const pages = {
  experience: {
    to: '/experience',
    title: 'Professional',
    nav: 'Professional',
    meta: `${experience.length} roles · 2024 — now`,
    art: { scheme: 'crimson', glyph: '04' },
  },
  projects: {
    to: '/projects',
    title: 'Projects',
    nav: 'Projects',
    meta: `${projects.length} builds · C++ · Python`,
    art: { scheme: 'ember', glyph: '{ }' },
  },
  skills: {
    to: '/skills',
    title: 'Skills',
    nav: 'Skills',
    meta: `${skillCount} entries · ${skills.length} groups`,
    art: { scheme: 'teal', glyph: '57' },
  },
  about: {
    to: '/about',
    title: 'Education & About',
    nav: 'About',
    meta: `${education.school} · ${education.grad.replace('Expected ', '')}`,
    art: { scheme: 'royal', glyph: 'BS' },
  },
  leadership: {
    to: '/leadership',
    title: 'Leadership',
    nav: 'Leadership',
    meta: `${leadership.length} fellowships & roles`,
    art: { scheme: 'gold', glyph: '07' },
  },
  contact: {
    to: '/contact',
    title: 'Hire Me',
    nav: 'Hire Me',
    meta: identity.email,
    art: { scheme: 'crimson', glyph: '@' },
  },
  resume: {
    to: identity.resume,
    title: 'Résumé',
    meta: 'PDF · opens in a new tab',
    art: { scheme: 'bone', glyph: 'CV' },
  },
  github: {
    to: identity.githubUrl,
    title: 'GitHub',
    meta: identity.github,
    art: { scheme: 'slate', glyph: 'gh' },
  },
  linkedin: {
    to: identity.linkedinUrl,
    title: 'LinkedIn',
    meta: identity.linkedin,
    art: { scheme: 'royal', glyph: 'in' },
  },
}

export const navPages = ['experience', 'projects', 'skills', 'about', 'contact']

// "Who's watching?" — each profile is a different cut of the same content.
export const profiles = [
  {
    id: 'recruiter',
    label: 'Recruiter',
    color: 'blue',
    primary: { label: 'Résumé', to: identity.resume },
    secondary: { label: 'LinkedIn', to: identity.linkedinUrl },
    rows: [
      { title: 'Top Picks for Recruiter', items: ['experience', 'projects', 'skills', 'about', 'resume', 'contact'] },
      { title: 'Top 3 Builds', top: true },
      { title: 'Continue Watching for Recruiter', progress: true, items: ['leadership', 'linkedin', 'github'] },
    ],
  },
  {
    id: 'engineer',
    label: 'Engineer',
    color: 'red',
    primary: { label: 'Projects', to: '/projects' },
    secondary: { label: 'GitHub', to: identity.githubUrl },
    rows: [
      { title: 'Top 3 Builds', top: true },
      { title: 'Top Picks for Engineer', items: ['skills', 'experience', 'github', 'resume'] },
      { title: 'Continue Watching for Engineer', progress: true, items: ['about', 'contact'] },
    ],
  },
  {
    id: 'curious',
    label: 'Curious',
    color: 'yellow',
    primary: { label: 'About', to: '/about' },
    secondary: { label: 'LinkedIn', to: identity.linkedinUrl },
    rows: [
      { title: 'Top Picks for Curious', items: ['about', 'leadership', 'experience', 'contact'] },
      { title: 'Top 3 Builds', top: true },
      { title: 'Continue Watching for Curious', progress: true, items: ['projects', 'linkedin'] },
    ],
  },
]

// Experience grouped into "seasons" by start year, newest first.
export const seasons = Object.entries(
  experience.reduce((acc, job) => {
    const year = job.span.match(/\d{4}/)[0]
    ;(acc[year] ||= []).push(job)
    return acc
  }, {}),
).sort(([a], [b]) => b - a)
