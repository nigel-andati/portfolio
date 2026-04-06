import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiStar, FiAward, FiTarget } from 'react-icons/fi'

const achievements = [
  {
    title: 'Hackathon Finalist',
    description: 'Top 10 finish at Duke University annual hackathon with an AI-powered campus safety tool.',
    icon: <FiStar size={22} />,
    accent: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Dean\'s List',
    description: 'Recognized for academic excellence across multiple semesters at Duke University.',
    icon: <FiAward size={22} />,
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to multiple open-source projects in the AI/ML ecosystem.',
    icon: <FiTarget size={22} />,
    accent: 'bg-emerald-50 text-emerald-600',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2">
            Extracurricular Achievements
          </h2>
          <div className="w-10 h-0.5 bg-primary mt-3 mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
