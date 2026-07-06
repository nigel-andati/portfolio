import * as Motion from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center" ref={ref}>
        <Motion.motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2 mx-auto">
            About Me
          </h2>
          <div className="w-10 h-0.5 bg-primary mx-auto mt-3 mb-8 rounded-full" />
          <p className="text-gray-500 text-lg leading-relaxed text-justify">
            I'm a Computer Science student at Duke University focused on backend
            systems, full-stack product engineering, and AI-assisted developer
            infrastructure. My work spans FastAPI services, PostgreSQL data
            models, Redis caching, React interfaces, and LLM-powered tools that
            turn ambiguous product needs into reliable software.
          </p>
        </Motion.motion.div>
      </div>
    </section>
  )
}
