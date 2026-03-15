import { motion } from 'framer-motion';
import {
  SiReact, SiGo, SiFlutter, SiDart, SiHtml5,
  SiTailwindcss, SiPostgresql, SiMysql, SiFirebase,
  SiGit, SiPostman, SiFigma, SiCanva,
  SiFramer, SiLinux
} from 'react-icons/si';
import { FaJava, FaCode, FaCss3Alt, FaWindows } from 'react-icons/fa';

// Using text-based badges for things without react-icon support
const TECH_CATEGORIES = [
  {
    title: 'Languages',
    color: '#00d4ff',
    icons: [
      { Icon: FaJava, name: 'Java' },
      { Icon: FaCode, name: 'C++' },
      { Icon: SiGo, name: 'Go' },
      { Icon: SiDart, name: 'Dart' },
    ],
  },
  {
    title: 'Mobile & Frontend',
    color: '#3b82f6',
    icons: [
      { Icon: SiFlutter, name: 'Flutter' },
      { Icon: SiReact, name: 'React.js' },
      { Icon: SiHtml5, name: 'HTML5' },
      { Icon: FaCss3Alt, name: 'CSS3' },
      { Icon: SiTailwindcss, name: 'Tailwind' },
      { Icon: SiFramer, name: 'Framer' },
    ],
  },
  {
    title: 'Backend & APIs',
    color: '#8b5cf6',
    icons: [
      { Icon: SiGo, name: 'Gin Framework' },
      { Icon: FaCode, name: 'GORM' },
      { Icon: FaCode, name: 'REST APIs' },
      { Icon: FaCode, name: 'Goroutines' },
    ],
  },
  {
    title: 'Databases',
    color: '#10b981',
    icons: [
      { Icon: SiMysql, name: 'MySQL' },
      { Icon: SiPostgresql, name: 'PostgreSQL' },
      { Icon: SiFirebase, name: 'Firebase' },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: '#f59e0b',
    icons: [
      { Icon: SiGit, name: 'Git' },
      { Icon: SiPostman, name: 'Postman' },
      { Icon: SiFigma, name: 'Figma' },
      { Icon: SiCanva, name: 'Canva' },
      { Icon: SiLinux, name: 'Ubuntu' },
      { Icon: FaWindows, name: 'Windows' },
    ],
  },
  {
    title: 'CS Fundamentals',
    color: '#f472b6',
    icons: [
      { Icon: FaCode, name: 'DSA' },
      { Icon: FaCode, name: 'DBMS' },
      { Icon: FaCode, name: 'OOP' },
      { Icon: FaCode, name: 'OS' },
      { Icon: FaCode, name: 'CN' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-cyan-500" />
            <span className="section-tag">Tech Arsenal</span>
            <div className="w-8 h-px bg-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-tight"
          >
            My <span className="gradient-text">Toolkit.</span>
          </motion.h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass p-6 rounded-2xl border border-slate-700/50 group hover:border-opacity-80 transition-colors relative overflow-hidden"
            >
              {/* Colored top border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
              />

              {/* Category Title */}
              <h3
                className="font-mono text-xs tracking-widest uppercase mb-6 pb-3 border-b border-slate-800 flex items-center gap-2"
                style={{ color: category.color }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: category.color }} />
                {category.title}
              </h3>

              {/* Icons */}
              <div className="flex flex-wrap gap-4 justify-start">
                {category.icons.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.08, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.25, y: -4 }}
                    className="relative group/icon flex flex-col items-center cursor-default"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover/icon:shadow-lg"
                      style={{
                        background: `${category.color}12`,
                        border: `1px solid ${category.color}22`,
                      }}
                    >
                      <tech.Icon
                        className="text-2xl text-slate-300 group-hover/icon:text-white transition-colors"
                        style={{ filter: `drop-shadow(0 0 0px ${category.color})` }}
                      />
                    </div>
                    {/* Tooltip label */}
                    <span className="absolute -bottom-7 text-[9px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-700 opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
