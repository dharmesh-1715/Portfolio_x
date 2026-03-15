import { motion } from 'framer-motion';
import { FaCode, FaHeart, FaBook } from 'react-icons/fa';

const STATS = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Certifications', value: '10' },
  { label: 'Hackathons', value: '5+' },
  { label: 'Poems Written', value: '∞' },
];

const TAGS = [
  'Flutter', 'Golang', 'React.js', 'Java', 'C++',
  'Firebase', 'PostgreSQL', 'REST APIs', 'DSA', 'Problem Solving',
];

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-px bg-cyan-500" />
          <span className="section-tag">About Me</span>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full border border-cyan-500/20 pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-12 rounded-full border border-blue-500/10 border-dashed pointer-events-none"
              />

              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl scale-110 pointer-events-none" />

              {/* Photo Frame */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(0,212,255,0.15)]">
                {/* Try real photo first, fallback to avatar */}
                <img
                  src="/photo.jpg"
                  alt="Dharmeshkumar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a code-themed avatar placeholder
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 items-center justify-center hidden"
                  style={{ display: 'none' }}
                >
                  <div className="text-center">
                    <div className="text-6xl font-mono font-bold gradient-text mb-3">DK</div>
                    <div className="font-mono text-slate-400 text-sm">Add photo.jpg to /public</div>
                  </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 glass border border-cyan-500/30 px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.1)]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#4ade80]" />
                  <span className="text-sm font-mono text-slate-200 font-medium">Open to Opportunities</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight mb-6">
              Hello, World! <span className="gradient-text">I'm Dharmeshkumar.</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed mb-10">
              <p>
                A software engineering student and full-stack problem solver. With hands-on professional 
                experience in <span className="text-cyan-400 font-semibold">Flutter app development</span> and{' '}
                <span className="text-cyan-400 font-semibold">Golang backend engineering</span>, I love bridging the 
                gap between clean user experiences and powerful infrastructure.
              </p>
              <p>
                My toolkit includes <span className="text-blue-400 font-semibold">React, C++</span>, and{' '}
                <span className="text-blue-400 font-semibold">Java</span>, and I enjoy testing my logic skills on 
                various competitive coding platforms. When I'm away from the keyboard, you can usually find me 
                <span className="text-purple-400 font-semibold"> writing poetry</span>. 🎭
              </p>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="tech-tag cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass border border-slate-700/50 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-2xl font-bold gradient-text font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1 font-mono tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
