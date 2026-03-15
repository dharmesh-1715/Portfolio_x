import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_STEPS = [
  { text: '> Initializing Anti-Gravity OS...', delay: 0 },
  { text: '> Connecting to the Metaverse...', delay: 400 },
  { text: '> Loading neural networks...', delay: 800 },
  { text: '> Deploying Dharmeshkumar.exe...', delay: 1300 },
  { text: '> Compiling creative modules...', delay: 1700 },
  { text: '> All systems operational. 🚀', delay: 2100 },
];

// Matrix Character Rain
function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</>{}[]#$%@!';
    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1);

    let animId;
    const draw = () => {
      ctx.fillStyle = 'rgba(2, 4, 8, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        // Alternate colors: cyan for most, bright for some
        const bright = Math.random() > 0.93;
        ctx.fillStyle = bright ? '#ffffff' : i % 3 === 0 ? '#00d4ff88' : '#3b82f644';
        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  );
}

export default function Preloader({ onComplete }) {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Reveal boot steps progressively
    BOOT_STEPS.forEach((step, i) => {
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, step.text]);
        setProgress(Math.round(((i + 1) / BOOT_STEPS.length) * 100));
      }, step.delay + 400);
    });

    // Complete after all steps
    const totalTime = BOOT_STEPS[BOOT_STEPS.length - 1].delay + 1000;
    const completeTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, totalTime + 400);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020408] overflow-hidden"
        >
          {/* Matrix Rain Background */}
          <MatrixRain />

          {/* Center Glass Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 glass border border-slate-700/60 rounded-3xl p-8 md:p-12 max-w-xl w-full mx-4 shadow-[0_0_80px_rgba(0,212,255,0.1)]"
          >
            {/* Logo / Title */}
            <div className="text-center mb-8">
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 10px #00d4ff',
                    '0 0 30px #00d4ff, 0 0 60px #3b82f6',
                    '0 0 10px #00d4ff',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="font-mono text-4xl md:text-5xl font-bold gradient-text mb-2"
              >
                &lt;DK /&gt;
              </motion.div>
              <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
                OS Booting...
              </p>
            </div>

            {/* Terminal Output */}
            <div className="font-mono text-sm space-y-2 mb-8 min-h-[140px] bg-black/40 rounded-xl p-4 border border-slate-800">
              {visibleSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={i === visibleSteps.length - 1 ? 'text-cyan-400' : 'text-slate-500'}
                >
                  {step}
                </motion.div>
              ))}
              {/* Blinking cursor */}
              {!done && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  _
                </motion.span>
              )}
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-slate-500">Loading Portfolio</span>
                <span className="text-xs font-mono text-cyan-400">{progress}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  animate={{
                    boxShadow: ['0 0 10px #00d4ff', '0 0 20px #00d4ff', '0 0 10px #00d4ff'],
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 text-slate-800 font-mono text-xs opacity-40">v2.0.1</div>
          <div className="absolute bottom-8 right-8 text-slate-800 font-mono text-xs opacity-40">
            Dharmeshkumar.portfolio
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
