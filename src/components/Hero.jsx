import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import profileImg from '../assets/profile.png'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Software Engineer &middot; AI/ML
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Nigel Andati
              </span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              Passionate developer and creative problem-solver building software
              that makes a difference. Exploring AI, full-stack development, and
              everything in between.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://github.com/nigel-andati"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/nigel-andati"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:nigelandati@gmail.com"
                className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiArrowDown size={16} />
              </motion.span>
              Scroll to explore
            </a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
              <img
                src={profileImg}
                alt="Nigel Andati"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl object-cover shadow-xl ring-1 ring-gray-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
