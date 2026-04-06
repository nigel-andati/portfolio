import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen } from 'react-icons/fi'

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2">
            Education
          </h2>
          <div className="w-10 h-0.5 bg-primary mt-3 mb-12 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl"
        >
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
              <FiBookOpen className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Duke University</h3>
              <p className="text-primary font-medium mt-1">
                Bachelor of Science, Computer Science
              </p>
              <p className="text-sm text-gray-400 mt-1">2024 — 2028</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500 mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Machine Learning',
                    'Computer Architecture',
                    'Software Engineering',
                    'Discrete Mathematics',
                    'Linear Algebra',
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-50 text-gray-600 border border-gray-100"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
