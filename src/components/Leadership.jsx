import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUsers, FiAward } from 'react-icons/fi'

const leadership = [
  {
    title: 'Student Technology Committee Lead',
    org: 'Duke Kunshan University',
    dates: '2024 — Present',
    icon: <FiUsers size={20} />,
    description:
      'Lead a team of student developers in building and maintaining campus technology solutions. Coordinate project timelines, conduct code reviews, and mentor junior developers.',
  },
  {
    title: 'Programming Club President',
    org: 'Duke Kunshan University',
    dates: '2024 — Present',
    icon: <FiAward size={20} />,
    description:
      'Organize weekly coding workshops, hackathons, and guest speaker events. Grew club membership by 40% through outreach initiatives and collaborative projects.',
  },
]

export default function Leadership() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="leadership" className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2">
            Leadership
          </h2>
          <div className="w-10 h-0.5 bg-primary mt-3 mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-primary font-medium text-sm">{item.org}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.dates}</p>
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
