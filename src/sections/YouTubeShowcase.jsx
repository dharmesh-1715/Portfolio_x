import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaPlay, FaYoutube, FaTimes } from 'react-icons/fa';

// Real YouTube video IDs extracted from provided links
const VIDEOS = [
  {
    id: 'vid1',
    youtubeId: '5VqQBNZKOzM',
    title: 'My YouTube Video – Watch & Enjoy',
    desc: 'Click to play directly in the page!',
  },
  {
    id: 'vid2',
    youtubeId: 'FEqO1n2sM7Y',
    title: 'My YouTube Video – Watch & Enjoy',
    desc: 'Click to play directly in the page!',
  },
  {
    id: 'vid3',
    youtubeId: '8cXi6inuyxE',
    title: 'My YouTube Video – Watch & Enjoy',
    desc: 'Click to play directly in the page!',
  },
  {
    id: 'vid4',
    youtubeId: '0NhZBy6vhso',
    title: 'My YouTube Video – Watch & Enjoy',
    desc: 'Click to play directly in the page!',
  },
];

function VideoModal({ video, onClose }) {
  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.2)] border border-slate-700"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass border border-slate-600 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-400 transition-colors"
            >
              <FaTimes />
            </button>

            {/* YouTube iFrame */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function YouTubeShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <>
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      <section
        id="youtube"
        ref={containerRef}
        className="py-32 relative z-10 overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 opacity-5 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-600 rounded-full blur-[150px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Section Header */}
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-px bg-red-500" />
              <span className="section-tag !text-red-400 flex items-center gap-2">
                <FaYoutube className="text-lg" /> Content Creation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-mono tracking-tight"
            >
              My <span className="gradient-text-warm">YouTube Journey.</span>
            </motion.h2>

          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setActiveVideo(video)}
                className="group relative rounded-2xl overflow-hidden glass border border-slate-700/50 hover:border-red-500/40 transition-all duration-300 cursor-pointer"
              >
                {/* YouTube Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center shadow-[0_0_30px_#dc2626] transform scale-80 group-hover:scale-100 transition-transform duration-300"
                    >
                      <FaPlay className="text-white text-lg ml-1" />
                    </motion.div>
                  </div>

                  {/* YouTube badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1.5">
                    <FaYoutube className="text-red-500 text-sm" />
                    <span className="text-xs font-mono text-white">YouTube</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-gradient-to-t from-slate-900/80 to-transparent">
                  <h3 className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 group-hover:text-red-400 transition-colors">
                    Click to Play ▶
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
