import { motion } from 'framer-motion';
import { FaMedal, FaStar, FaTrophy } from 'react-icons/fa';

const ACHIEVEMENTS = [
  {
    id: 1,
    emoji: '🏅',
    title: '1st Ranker – SSC Board Examination',
    desc: 'Topped the SSC Examination with an outstanding score of 96%.',
    icon: FaTrophy,
    color: '#f59e0b',
    category: 'Academic',
  },
  {
    id: 2,
    emoji: '🏅',
    title: '3rd Ranker – First Year Engineering',
    desc: 'Secured 3rd rank in FY Engineering among the entire cohort.',
    icon: FaMedal,
    color: '#00d4ff',
    category: 'Academic',
  },
  {
    id: 3,
    emoji: '🏅',
    title: '2nd Place – Project-Based Learning Competition',
    desc: 'Runner-up in the prestigious PBL Competition for innovative project presentation.',
    icon: FaMedal,
    color: '#3b82f6',
    category: 'Technical',
  },
  {
    id: 4,
    emoji: '🏅',
    title: 'Winner – Bug Battle Competition',
    desc: 'Emerged victorious in the competitive Bug Battle event, demonstrating strong debugging skills.',
    icon: FaTrophy,
    color: '#10b981',
    category: 'Technical',
  },
  {
    id: 5,
    emoji: '🏅',
    title: '1st Place – Poetry Recitation Competition',
    desc: 'Won first place in Poetry Recitation, reflecting creativity beyond code.',
    icon: FaTrophy,
    color: '#8b5cf6',
    category: 'Creative',
  },
  {
    id: 6,
    emoji: '🏅',
    title: 'AICTE Android Development Virtual Internship',
    desc: 'Completed AICTE-recognized Android Development virtual internship program.',
    icon: FaStar,
    color: '#f59e0b',
    category: 'Internship',
  },
  {
    id: 7,
    emoji: '🏅',
    title: 'GFG 160 Days Code Challenge Winner',
    desc: 'Successfully completed the rigorous GeeksforGeeks 160 Days Challenge.',
    icon: FaTrophy,
    color: '#2f8d46',
    category: 'Competitive',
  },
  {
    id: 8,
    emoji: '🌟',
    title: 'National Level Hackathon Qualifier – Innovate You',
    desc: 'Qualified for the prestigious national-level "Innovate You" hackathon.',
    icon: FaStar,
    color: '#00d4ff',
    category: 'Hackathon',
  },
  {
    id: 9,
    emoji: '🌟',
    title: 'National Level Project Competition – PICT',
    desc: 'Competed at the national level project exhibition at PICT.',
    icon: FaStar,
    color: '#3b82f6',
    category: 'Technical',
  },
  {
    id: 10,
    emoji: '🌟',
    title: 'Intracollege Debate Competition Winner',
    desc: 'Won the intracollege debate competition, demonstrating strong communication skills.',
    icon: FaTrophy,
    color: '#8b5cf6',
    category: 'Creative',
  },
  {
    id: 11,
    emoji: '🌟',
    title: 'Poetry Competition Winner',
    desc: 'Awarded first place in the poetry writing competition for original literary work.',
    icon: FaStar,
    color: '#f472b6',
    category: 'Creative',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-px bg-yellow-500" />
            <span className="section-tag !text-yellow-400">Hall of Fame</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-tight"
          >
            Milestones &amp; <span className="gradient-text">Achievements.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 mt-4 text-lg max-w-2xl"
          >
            Recognition across academics, competitive programming, hackathons, and creative arts.
          </motion.p>
        </div>

        {/* Achievements Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-5 border border-slate-700/40 group transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}12, transparent 70%)` }}
              />
              {/* Left accent line */}
              <div
                className="absolute top-0 left-0 w-0.5 h-full rounded-l-2xl"
                style={{ background: `linear-gradient(180deg, ${item.color}, transparent)` }}
              />

              <div className="relative z-10 flex gap-4 items-start">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}33` }}
                >
                  <item.icon className="text-xl" style={{ color: item.color }} />
                </div>

                <div className="flex-grow min-w-0">
                  {/* Category Badge */}
                  <span
                    className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border mb-2 inline-block"
                    style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}
                  >
                    {item.category}
                  </span>

                  {/* Emoji + Title */}
                  <h3 className="text-sm md:text-base font-bold text-slate-200 group-hover:text-white transition-colors leading-snug mb-1.5">
                    {item.emoji} {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
