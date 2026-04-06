import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCpu, FiTrendingUp } from 'react-icons/fi'

const experiences = [
  {
    company: 'PM Accelerator',
    role: 'AI/ML SWE Intern',
    dates: 'Mar 2026 — Jun 2026',
    icon: <FiCpu size={20} />,
    bullets: [
      'Developed and optimized machine learning models and pipelines for AI-driven product features.',
      'Collaborated with cross-functional teams to integrate ML solutions into production environments.',
      'Conducted data analysis and model evaluation to improve system performance and accuracy.',
    ],
  },
  {
    company: 'Duke Kunshan University',
    role: 'IT Office Software Developer',
    dates: '2024 — Present',
    icon: <FiCode size={20} />,
    bullets: [
      'Develop and maintain campus technologies including library reservation systems, student club applications, and physical computing projects.',
      'Maintain infrastructure with 99.9% uptime for mission-critical campus services.',
      'Manage database integrity and optimize query performance across multiple systems.',
    ],
  },
  {
    company: 'Equity Group Foundation',
    role: 'Corporate Analyst Intern',
    dates: 'Apr 2022 — Aug 2022',
    icon: <FiTrendingUp size={20} />,
    bullets: [
      'Built Python automation scripts that reduced data processing time by 30%.',
      'Developed SQL queries and Excel macros for financial trend analysis across portfolios.',
      'Created interactive dashboards for KPI visualization used by senior leadership.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2">
            Experience
          </h2>
          <div className="w-10 h-0.5 bg-primary mt-3 mb-12 rounded-full" />
        </motion.div>

        <div className="relative pl-12">
          <div className="timeline-line" />

          {experiences.map((exp, idx) => (
            <motion.div
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
                    <p className="text-primary font-medium text-sm mt-0.5">{exp.role}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
