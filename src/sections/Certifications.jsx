import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaDatabase, FaAward } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Data Structures and Algorithms using C++',
    platform: 'Udemy',
    PlatformIcon: SiUdemy,
    color: '#a435f0',
    category: 'Programming',
  },
  {
    id: 2,
    title: 'Flutter Development Bootcamp',
    platform: 'Udemy',
    PlatformIcon: SiUdemy,
    color: '#a435f0',
    category: 'Mobile Dev',
  },
  {
    id: 3,
    title: 'MERN Stack Development',
    platform: 'Udemy',
    PlatformIcon: SiUdemy,
    color: '#a435f0',
    category: 'Web Dev',
  },
  {
    id: 4,
    title: 'Body Language: Key to Professional Success',
    platform: 'NPTEL',
    PlatformIcon: FaCertificate,
    color: '#0ea5e9',
    category: 'Soft Skills',
  },
  {
    id: 5,
    title: 'Database Programming with SQL',
    platform: 'Oracle',
    PlatformIcon: FaDatabase,
    color: '#f80000',
    category: 'Database',
  },
  {
    id: 6,
    title: 'Copyright for Literary Work',
    platform: 'Govt. of India',
    PlatformIcon: FaCertificate,
    color: '#10b981',
    category: 'Legal',
  },
  {
    id: 7,
    title: 'Employability Skills Training',
    platform: 'Rubicon',
    PlatformIcon: FaCertificate,
    color: '#f59e0b',
    category: 'Soft Skills',
  },
  {
    id: 8,
    title: 'PMS Robotics Workshop',
    platform: 'PMS',
    PlatformIcon: FaCertificate,
    color: '#8b5cf6',
    category: 'Robotics',
  },
  {
    id: 9,
    title: 'C Programming Training',
    platform: 'Spoken Tutorial',
    PlatformIcon: FaCertificate,
    color: '#00d4ff',
    category: 'Programming',
  },
  {
    id: 10,
    title: 'Hands-on Python Training',
    platform: 'Workshop',
    PlatformIcon: FaCertificate,
    color: '#3b82f6',
    category: 'Programming',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative z-10 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-right">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4 flex-row-reverse"
          >
            <div className="w-12 h-px bg-purple-500" />
            <span className="section-tag !text-purple-400">Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-tight"
          >
            My <span className="gradient-text">Certifications.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 mt-4 text-lg"
          >
            Validated expertise across development, databases, and professional skills.
          </motion.p>
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-5 border border-slate-700/50 flex flex-col gap-4 group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />

              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                {/* Platform Icon + Badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}33` }}
                >
                  <cert.PlatformIcon className="text-2xl" style={{ color: cert.color }} />
                </div>
                {/* Category badge */}
                <span
                  className="text-[10px] font-mono px-2 py-1 rounded-full border flex-shrink-0"
                  style={{ color: cert.color, borderColor: `${cert.color}40`, background: `${cert.color}10` }}
                >
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug flex-grow">
                {cert.title}
              </h3>

              {/* Footer */}
              <div className="flex items-center gap-2 mt-auto pt-3 border-t border-slate-800">
                <FaCertificate className="text-xs" style={{ color: cert.color }} />
                <span className="text-xs font-mono text-slate-400">{cert.platform}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
