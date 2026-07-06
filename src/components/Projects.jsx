import * as Motion from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Codewright',
    year: '2026',
    description:
      'Automated bug fixing and feature generation engine using AST analysis to map repositories, plan patches, and validate changes through parallel test orchestration. Achieved 100% patch success rate across 5 repositories.',
    tags: ['Python', 'LLMs', 'Docker', 'FastAPI', 'GitHub API'],
    color: 'from-emerald-500/10 to-cyan-500/10',
    href: 'https://codewright-zeta.vercel.app',
  },
  {
    title: 'LOB-Driven Backtesting Engine',
    description:
      'C++20 market microstructure simulator with integer-tick price handling, O(1) cancel/modify lookup, FIFO price levels, deterministic replay, synthetic MBO generation, and latency-delayed strategy execution. Benchmarked 3.85M events/sec throughput, 1µs p99 matching latency, and 2.4x parallel sweep speedup.',
    tags: ['C++20', 'Market Microstructure'],
    color: 'from-indigo-500/10 to-fuchsia-500/10',
  },
  {
    title: 'Semantic Recommendation Algorithm',
    year: '2024',
    description:
      'RAG recommendation service over 7,000+ books using ChromaDB and LangChain, with tuned chunking and retrieval for more relevant discovery.',
    tags: ['Python', 'LangChain', 'OpenAI', 'ChromaDB'],
    color: 'from-blue-500/10 to-violet-500/10',
  },
  {
    title: 'LinguaDetect',
    year: '2024',
    description:
      'Browser extension that detects and translates text across 12+ languages using asynchronous batching, caching, and language detection APIs.',
    tags: ['JavaScript', 'REST APIs', 'franc', 'cld3'],
    color: 'from-amber-500/10 to-rose-500/10',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <Motion.motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-3xl font-bold text-gray-900 mb-2">
            Projects & Awards
          </h2>
          <div className="w-10 h-0.5 bg-primary mt-3 mb-12 rounded-full" />
        </Motion.motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Motion.motion.div
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
                  <div className="flex items-center gap-2">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                        aria-label={`${project.title} website`}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                    {project.year && (
                      <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                        {project.year}
                      </span>
                    )}
                  </div>
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
            </Motion.motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
