import * as Motion from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCode, FiCpu, FiCreditCard, FiTrendingUp } from 'react-icons/fi'

const experiences = [
  {
    company: 'Tech Hub Africa LLC',
    role: 'Software Engineering Intern',
    dates: 'May 2026 — Present',
    location: 'Accra, Ghana',
    icon: <FiCode size={20} />,
    bullets: [
      'Built and shipped 5+ production features for AfroEventix using WordPress, JavaScript, and custom REST endpoints, improving page-load performance for 1,000+ monthly users.',
      'Developed AI-assisted tooling that converted stakeholder requests into scoped architecture proposals across 3+ client projects.',
    ],
  },
  {
    company: 'Product Manager Accelerator',
    role: 'Software Engineer, Startup Engineering Lead',
    dates: 'Mar 2026 — Present',
    location: 'Remote / Boston, MA',
    icon: <FiCpu size={20} />,
    bullets: [
      'Led engineering for Heiwa, an AI-powered family OS built with React, Supabase, Gemini, and Firecrawl.',
      'Owned calendar sync and OAuth integration end-to-end while parsing logistics from flyers and URLs.',
    ],
  },
  {
    company: 'Nexa Consulting',
    role: 'Software Engineering Intern',
    dates: 'May 2025 — Aug 2025',
    location: 'Nairobi, Kenya',
    icon: <FiBriefcase size={20} />,
    bullets: [
      'Designed Python/FastAPI REST endpoints and PostgreSQL data models for a 10K+ user product.',
      'Added Redis caching and query-index changes to reduce high-latency request paths.',
      'Implemented JWT authentication and integration tests, raising backend test coverage to 85%+ and reducing production defects.',
    ],
  },
  {
    company: 'Body Flex Gyms',
    role: 'Full-Stack Software Developer',
    dates: 'May 2024 — Aug 2024',
    location: 'Nairobi, Kenya',
    icon: <FiCreditCard size={20} />,
    bullets: [
      'Built payment-processing features for 200+ monthly customers, improving database reliability and billing flow stability.',
    ],
  },
  {
    company: 'Equity Group Foundation',
    role: 'Corporate Analyst Intern',
    dates: 'Apr 2022 — Aug 2022',
    location: 'Nairobi, Kenya',
    icon: <FiTrendingUp size={20} />,
    bullets: [
      'Automated portfolio reporting and tuned SQL joins and indexing across 100+ daily transactions, replacing manual reconciliation.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <Motion.motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2">
            Experience
          </h2>
          <div className="w-10 h-0.5 bg-primary mt-3 mb-12 rounded-full" />
        </Motion.motion.div>

        <div className="relative pl-12">
          <div className="timeline-line" />

          {experiences.map((exp, idx) => (
            <Motion.motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="timeline-dot" />
              <div className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-lg font-bold text-gray-900">{exp.company}</h3>
                      <span className="text-sm text-gray-400 font-medium">{exp.dates}</span>
                    </div>
                    <p className="text-primary font-medium text-sm mt-0.5">
                      {exp.role} · {exp.location}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Motion.motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
