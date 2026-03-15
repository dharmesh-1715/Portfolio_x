import { motion } from 'framer-motion';
import { FaTrophy, FaLightbulb } from 'react-icons/fa';

const PHOTOS = [
  {
    id: 1,
    url: 'innovateYou.png',
    title: 'PCCOE&R Hackathon 2024',
    desc: 'Winner - Best EdTech Solution',
    height: 'h-64',
  },
  {
    id: 2,
    url: 'poetry.jpg',
    title: 'State Level Coding Contest',
    desc: '1st Runner Up (Algorithms)',
    height: 'h-96',
  },
  {
    id: 3,
    url: 'buddha.jpg',
    title: 'Pune DevFest',
    desc: 'Top 10 Finalist (Open Source)',
    height: 'h-72',
  },
  {
    id: 4,
    url: 'fe2.jpg',
    title: 'National IoT Challenge',
    desc: 'Innovative Idea Award',
    height: 'h-80',
  },
  {
    id: 5,
    url: 'poem.jpg',
    title: 'University Tech Symposium',
    desc: 'Guest Speaker & Mentor',
    height: 'h-64',
  },
];

export default function HackathonGallery() {
  return (
    <section id="hackathons" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-purple-500" />
            <span className="section-tag !text-purple-400">Competitive Spirit</span>
            <div className="w-8 h-px bg-purple-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-tight"
          >
            Prizes & <span className="gradient-text">Events.</span>
          </motion.h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              className={`gallery-item relative overflow-hidden rounded-2xl break-inside-avoid ${photo.height} shadow-lg shadow-black/50`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Translucent Banner overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full flex flex-col justify-end h-full transition-transform duration-400 ease-out" style={{ transitionProperty: 'transform, opacity' }}>
                <div className="opacity-0 translate-y-4 transition-all duration-400 delay-100 banner-content">
                  <div className="flex items-center gap-2 mb-1">
                    <FaTrophy className="text-cyan-400 text-sm" />
                    <h3 className="font-bold text-lg text-white font-mono">{photo.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm flex items-center gap-2">
                    <FaLightbulb className="text-yellow-400/80" /> {photo.desc}
                  </p>
                </div>
              </div>

              {/* Hacky CSS for the banner since Tailwind hover state targeting children is slightly tricky without deeply nested classes */}
              <style>{`
                .gallery-item:hover .banner-content {
                  opacity: 1;
                  transform: translateY(0);
                }
                .gallery-item:hover > div:last-child {
                  transform: translateY(0);
                }
                .gallery-item > div:last-child {
                  transform: translateY(20px);
                }
              `}</style>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
