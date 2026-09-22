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
  status: 'Currently shipping at Tech Hub Africa & PM Accelerator',
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

export const experience = [
  {
    org: 'Tech Hub Africa LLC',
    role: 'Software Engineering Intern',
    span: 'May 2026 — Present',
    location: 'Accra, GH',
    stack: ['WordPress', 'JavaScript', 'REST'],
    bullets: [
      "Improved page-load performance for AfroEventix's 1,000+ monthly users by shipping 5+ production features and custom REST endpoints.",
      'Developed AI-assisted tooling that converted stakeholder requests into scoped architecture proposals across 3+ client projects.',
    ],
  },
  {
    org: 'Product Manager Accelerator',
    role: 'Founding Engineer — Startup Engineering Lead',
    span: 'Mar 2026 — Present',
    location: 'Remote / Boston, MA',
    stack: ['React', 'Supabase', 'Gemini', 'Firecrawl', 'OAuth'],
    bullets: [
      "Owned full-stack engineering for Heiwa, an AI-powered family OS, as the team's sole engineer — architected the technical roadmap end to end.",
      'Built logistics parsing from flyers and URLs, and owned calendar sync and OAuth integration from design through production.',
    ],
  },
  {
    org: 'Nexa Consulting',
    role: 'Software Engineering Intern',
    span: 'May 2025 — Aug 2025',
    location: 'Nairobi, KE',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'JWT'],
    bullets: [
      'Designed Python/FastAPI REST endpoints and PostgreSQL data models for a 10K+ user product; added Redis caching and query-index optimizations to reduce p95 latency.',
      'Implemented JWT authentication and integration tests, raising backend test coverage to 85%+ and reducing production defects.',
    ],
  },
  {
    org: 'Body Flex Gyms',
    role: 'Full-Stack Software Developer',
    span: 'May 2024 — Aug 2024',
    location: 'Nairobi, KE',
    stack: ['Full-stack', 'Payments', 'SQL'],
    bullets: [
      'Built and shipped live payment-processing features handling real financial transactions for 200+ monthly customers — early hands-on ownership of a production billing system, improving database reliability and billing-flow stability.',
    ],
  },
]

export const projects = [
  {
    index: '001',
    title: 'Market Microstructure Backtesting Engine',
    kicker: 'Order-by-order replay · price-time priority',
    stack: ['C++20', 'Market Microstructure', 'Thread Pool'],
    body:
      'Replays order-by-order market data through a custom price-time-priority matching engine, simulating realistic fills, slippage, and market impact for trading strategies. Strategy evaluation is parallelized across independent simulations with a thread pool.',
    metrics: [
      { label: 'Throughput', value: 3.85, suffix: 'M', unit: 'events/sec', fill: 0.92 },
      { label: 'p99 match latency', value: 1.0, decimals: 1, suffix: '', unit: 'µs', fill: 0.14, invert: true },
    ],
  },
  {
    index: '002',
    title: 'Codewright',
    kicker: 'Automated bug fixing & feature generation engine',
    stack: ['Python', 'LLMs', 'Docker', 'FastAPI', 'GitHub API'],
    href: 'https://codewright-zeta.vercel.app',
    body:
      'An autonomous coding agent that uses AST analysis to map repositories, plan patches, and validate its own changes through parallel test orchestration before anything is proposed as a diff.',
    metrics: [
      { label: 'Patch success rate', value: 100, suffix: '%', unit: 'across 5 repos', fill: 1 },
      { label: 'Repositories validated', value: 5, suffix: '', unit: 'end to end', fill: 0.5 },
    ],
  },
  {
    index: '003',
    title: 'Semantic Recommendation Algorithm',
    kicker: 'Retrieval-augmented discovery over a book corpus',
    stack: ['Python', 'LangChain', 'OpenAI', 'ChromaDB'],
    body:
      'A RAG recommendation service over a 7,000-title corpus, with chunking strategy and retrieval parameters tuned against relevance rather than left at library defaults.',
    metrics: [
      { label: 'Corpus size', value: 7000, suffix: '+', unit: 'titles indexed', fill: 0.8 },
    ],
  },
]

export const skills = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'C++', 'Go', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'FastAPI', 'Flask', 'Django', 'Express', 'Next.js', 'Redux', 'Vue.js', 'LangChain'],
  },
  {
    label: 'Databases & Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'DynamoDB', 'Cassandra', 'SQLite', 'Elasticsearch', 'ChromaDB'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS EC2', 'AWS Lambda', 'AWS S3', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'Git/GitHub', 'Linux'],
  },
  {
    label: 'Systems & Architecture',
    items: ['Microservices', 'REST/GraphQL APIs', 'WebSockets', 'gRPC', 'Kafka', 'RabbitMQ', 'System Design'],
  },
  {
    label: 'AI & Data',
    items: ['LLMs', 'RAG', 'AI Agents', 'Prompt Engineering', 'Generative AI', 'OpenAI'],
  },
  {
    label: 'Testing & Tools',
    items: ['JUnit', 'PyTest', 'Jest', 'Selenium', 'Postman', 'JSON', 'YAML', 'VS Code'],
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

// Marquee strip under the masthead — a flat read of the stack.
export const ticker = [
  'C++20',
  'Python',
  'Go',
  'TypeScript',
  'FastAPI',
  'PostgreSQL',
  'Redis',
  'Kafka',
  'gRPC',
  'Docker',
  'Kubernetes',
  'Terraform',
  'AWS',
  'React',
  'Next.js',
  'LangChain',
  'ChromaDB',
  'Elasticsearch',
  'Supabase',
  'PyTest',
]

export const sections = [
  { id: 'masthead', label: 'Identity', num: '01' },
  { id: 'brief', label: 'Brief', num: '02' },
  { id: 'ledger', label: 'Experience', num: '03' },
  { id: 'dossier', label: 'Work', num: '04' },
  { id: 'matrix', label: 'Stack', num: '05' },
  { id: 'signals', label: 'Off-Hours', num: '06' },
  { id: 'contact', label: 'Contact', num: '07' },
]
