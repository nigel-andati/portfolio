import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Semantic Book Recommender',
    year: '2024',
    description:
      'RAG-based discovery engine using OpenAI and vector search. Zero-shot classification and sentiment analysis across 7,000+ books with 30% improvement in recommendation precision.',
    tags: ['Python', 'LangChain', 'OpenAI', 'ChromaDB'],
    color: 'from-blue-500/10 to-violet-500/10',
  },
  {
    title: 'Automated Bug Fixing & Feature Generation Engine',
    year: '2026',
    description:
      'Built an autonomous AI agent processing 100K+ token contexts with AST-based repo analysis, improving patch accuracy by ~30% compared to baseline prompting. Implemented parallel benchmarking and test orchestration, evaluating 100+ tasks with automated regression detection and rollback to ensure stable code generation.',
    tags: ['Python', 'LLMs', 'Docker', 'FastAPI', 'GitHub API'],
    color: 'from-emerald-500/10 to-cyan-500/10',
  },
  {
    title: 'EchoThread',
    year: '2024',
    description:
      'Responsive forum with real-time features and custom REST API. Achieved 40% improvement in rendering speeds and 99.9% reliability with 1,000+ concurrent requests.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'REST API'],
    color: 'from-amber-500/10 to-rose-500/10',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2">
            Projects & Awards
          </h2>
          <div className="w-10 h-0.5 bg-primary mt-3 mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="card-hover group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-50 text-gray-500 border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
