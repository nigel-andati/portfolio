import * as Motion from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCode, FiGlobe, FiTarget, FiUsers } from 'react-icons/fi'

const achievements = [
  {
    title: 'ColorStack Fellow',
    description: 'Selected fellow supporting technical growth and community for Black and Latinx technologists.',
    icon: <FiTarget size={22} />,
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'CodePath Fellow',
    description: 'Fellow in a software engineering community focused on industry-ready technical development.',
    icon: <FiCode size={22} />,
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Global Ambassador',
    description: 'Represented Duke Kunshan University as a global ambassador during the 2024-2025 academic year.',
    icon: <FiGlobe size={22} />,
    accent: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Campus Leadership',
    description: 'Varsity soccer athlete and Secretary of the African & Black Students Association.',
    icon: <FiUsers size={22} />,
    accent: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Nike Sophomore Scouting Summit',
    description: 'Participant in the 2026 Nike Sophomore Scouting Summit.',
    icon: <FiAward size={22} />,
    accent: 'bg-violet-50 text-violet-600',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <Motion.motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2">
            Extracurricular Achievements
          </h2>
          <div className="w-10 h-0.5 bg-primary mt-3 mb-12 rounded-full" />
        </Motion.motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <Motion.motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.accent} flex items-center justify-center mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </Motion.motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
