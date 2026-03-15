import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaUsers } from 'react-icons/fa';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Software Engineer Intern',
    company: 'Coditas Solutions LLP',
    period: 'Jan 2026 – Present',
    type: 'internship',
    color: '#00d4ff',
    icon: FaBriefcase,
    points: [
      'Collaborated with senior developers to build backend features using Go (Golang).',
      'Developed clean, efficient, and maintainable code following Go best practices.',
      'Implemented REST APIs and handled database operations.',
    ],
    tech: ['Go', 'REST APIs', 'PostgreSQL', 'Git'],
  },
  {
    id: 2,
    role: 'Flutter Developer Intern',
    company: 'Havric',
    period: 'Dec 2024 – Jan 2025',
    type: 'internship',
    color: '#3b82f6',
    icon: FaCode,
    points: [
      'Developed cross-platform mobile application features using Flutter and Dart.',
      'Worked on UI/UX implementation and state management with Provider.',
      'Integrated Firebase services for authentication and real-time data.',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider'],
  },
  {
    id: 3,
    role: 'GFG Promotion Team Member',
    company: 'PCCOE&R Chapter',
    period: '2024 – 2025',
    type: 'community',
    color: '#2f8d46',
    icon: FaUsers,
    points: [
      'Promoted competitive programming culture within the college chapter.',
      'Organized and participated in coding challenges and awareness events.',
      'Motivated peers to solve the GFG 160 Days Code Challenge.',
    ],
    tech: ['DSA', 'C++', 'Java', 'Community Building'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-px bg-blue-500" />
            <span className="section-tag !text-blue-400">Career Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-tight"
          >
            Work <span className="gradient-text">Experience.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-slate-800" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ originY: 0 }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-green-500 shadow-[0_0_10px_#00d4ff]"
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
                className="relative pl-16 md:pl-20"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
                  className="absolute left-0 md:left-2 top-2 w-12 h-12 rounded-full glass border-2 flex items-center justify-center z-10"
                  style={{ borderColor: exp.color, boxShadow: `0 0 20px ${exp.color}40` }}
                >
                  <exp.icon style={{ color: exp.color }} className="text-lg" />
                  {/* Glow pulse */}
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ backgroundColor: exp.color, animationDuration: '3s' }}
                  />
                </motion.div>

                {/* Card */}
                <div
                  className="glass rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-opacity-80 transition-all duration-300 group"
                  style={{ '--hover-color': exp.color }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <p className="font-mono font-semibold mt-1" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="glass border border-slate-700 px-3 py-1.5 rounded-full text-xs font-mono text-slate-400 whitespace-nowrap self-start">
                      📅 {exp.period}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <span style={{ color: exp.color }} className="mt-1 text-xs flex-shrink-0">▶</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-mono border border-slate-700/70 text-slate-300 bg-slate-900/50"
                        style={{ borderColor: `${exp.color}30` }}
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
      </div>
    </section>
  );
}
