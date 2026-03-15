import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaYoutube, FaTwitter,
  FaCode, FaDownload, FaEye,
} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import ParticleStarfield from '../components/ParticleStarfield';
import CodeSnippetWindow from '../components/CodeSnippetWindow';

// ── Terminal typing hook ───────────────────────────────────────────
const SUBTITLES = [
  'Software Engineer & Problem Solver.',
  'Building the future, one commit at a time.',
  'Backend Developer.',
  'Passionate Programmer.'
];

function useTypingEffect(texts, speed = 55, pauseMs = 1600) {
  const [display, setDisplay] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  // Typing
  useEffect(() => {
    const current = texts[textIdx];
    if (!deleting && charIdx < current.length) {
      const id = setTimeout(() => {
        setDisplay(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(id);
    }
    if (!deleting && charIdx === current.length) {
      const id = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(id);
    }
    if (deleting && charIdx > 0) {
      const id = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
      return () => clearTimeout(id);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
    }
  }, [charIdx, deleting, textIdx, texts, speed, pauseMs]);

  return { display, blink };
}

// ── Social links ───────────────────────────────────────────────────
const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/dharmesh-1715', label: 'GitHub', delay: 0, color: '#ffffff' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/dharmeshkumar-khairnar-95b8522a4/', label: 'LinkedIn', delay: 0.3, color: '#0a66c2' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/dharmesh_1715/', label: 'LeetCode', delay: 0.6, color: '#ffa116' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@stack_underflow-b7t/featured', label: 'YouTube', delay: 0.9, color: '#ff0000' },
  { icon: SiGeeksforgeeks, href: 'https://www.geeksforgeeks.org/profile/dharmeshkumar2shq', label: 'GFG', delay: 1.2, color: '#2f8d46' },
];

// ── Component ──────────────────────────────────────────────────────
export default function Hero() {
  const { display, blink } = useTypingEffect(SUBTITLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #0a1628 0%, #020408 70%)' }}
    >
      <ParticleStarfield />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Main content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-20 lg:mt-0">

        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Headline with Persistent Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-6 flex flex-col items-center lg:items-start gap-4"
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hi, I'm <br className="hidden lg:block" />
              <span className="gradient-text">Dharmeshkumar.</span>
            </h1>

            {/* Subtitle Terminal text */}
            <div className="h-8 md:h-12 flex items-center justify-center lg:justify-start">
              <h2
                className="text-xl md:text-3xl font-mono text-cyan-400 font-medium"
              >
                &gt; {display}
                <span
                  className="inline-block w-0.5 h-6 md:h-8 ml-1 align-middle"
                  style={{
                    background: '#00d4ff',
                    opacity: blink ? 1 : 0,
                    transition: 'opacity 0.1s',
                    boxShadow: '0 0 8px #00d4ff',
                  }}
                />
              </h2>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            {' '}
            <span className="text-cyan-400 font-semibold">Computer Engineering</span> student , passionate about
            building scalable systems, solving hard problems, and crafting delightful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-base px-8 py-4 glow-cyan justify-center"
            >
              <FaEye /> View My Work
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -6, boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 20px 40px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-base px-8 py-4 justify-center"
              style={{
                background: 'linear-gradient(135deg, #00d4ff22, #3b82f644)',
                border: '1px solid rgba(0,212,255,0.5)',
              }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          {/* Floating social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex justify-center lg:justify-start gap-5 flex-wrap"
          >
            {SOCIALS.map(({ icon: Icon, href, label, delay, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  opacity: { delay: 1.2 + delay, duration: 0.5 },
                  y: {
                    delay: 1.2 + delay,
                    duration: 3 + delay * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                whileHover={{ scale: 1.2 }}
                className="relative group"
              >
                <div
                  className="w-11 h-11 rounded-full glass flex items-center justify-center transition-all"
                  style={{
                    border: `1px solid ${color}44`,
                    boxShadow: `0 0 10px ${color}22`,
                  }}
                >
                  <Icon size={20} color={color} className="group-hover:drop-shadow-[0_0_8px_currentColor]" />
                </div>
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-wider text-slate-400 bg-space-deep px-2 py-1 border border-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Visual Element */}
        <div className="w-full h-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0 relative">

          {/* Ambient background glows specifically for the code window */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

          <CodeSnippetWindow />

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.8, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
}
