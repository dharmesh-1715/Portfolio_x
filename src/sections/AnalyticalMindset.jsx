import { motion } from 'framer-motion';
import { FaSquareRootAlt, FaBrain, FaChartLine } from 'react-icons/fa';
import { TbMathFunction, TbMathIntegral } from 'react-icons/tb';

const SKILLS = [
  {
    icon: FaSquareRootAlt,
    title: 'Quantitative Mastery',
    desc: 'Deep expertise in solving complex mathematical and logical aptitude puzzles under time constraints.',
  },
  {
    icon: FaBrain,
    title: 'Algorithmic Thinking',
    desc: 'Breaking down large, intimidating problems into smaller, manageable, and highly optimized sub-problems.',
  },
  {
    icon: FaChartLine,
    title: 'Data-Driven Optimization',
    desc: 'Applying statistical analysis and quantitative models to improve software performance and scalability.',
  },
];

export default function AnalyticalMindset() {
  return (
    <section id="analytical" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-px bg-cyan-400" />
            <span className="section-tag">The Logical Foundation</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-tight"
          >
            Analytical <span className="gradient-text">Mindset.</span>
          </motion.h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              Beyond syntax and frameworks, my core strength lies in a rigorous, mathematical approach to problem-solving. My passion for quantitative aptitude translates directly into writing highly efficient, edge-case-resilient code. Every algorithm is an equation waiting to be balanced.
            </p>
            
            <div className="space-y-6 mt-10">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-900/30 transition-all duration-300 glow-border">
                    <skill.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">{skill.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mathematical Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="relative h-[450px] w-full rounded-2xl glass p-8 overflow-hidden glow-cyan flex items-center justify-center border border-cyan-500/20"
          >
            {/* Background Math symbols */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 opacity-10 flex items-center justify-center font-mono text-cyan-500 text-[10rem] pointer-events-none"
            >
              <TbMathIntegral />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
              className="absolute top-10 right-10 opacity-10 flex items-center justify-center font-mono text-blue-500 text-[8rem] pointer-events-none"
            >
              <TbMathFunction />
            </motion.div>

            {/* Glowing Data Node Network Simulation */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-cyan-500/30 flex items-center justify-center relative float-anim">
                <div className="w-32 h-32 rounded-full border border-blue-500/40 flex items-center justify-center absolute float-anim-2">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/20 shadow-[0_0_50px_#00d4ff] flex items-center justify-center absolute float-anim-3 backdrop-blur-md">
                    <FaBrain className="text-cyan-300 text-2xl" />
                  </div>
                </div>
                
                {/* Orbiting nodes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#00d4ff]" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-8 rounded-full border border-dashed border-blue-500/20"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
                </motion.div>
              </div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/50 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/50 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-500/50 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/50 rounded-br-xl" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
