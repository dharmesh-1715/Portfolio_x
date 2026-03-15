import { motion } from 'framer-motion';

const CODE_LINES = [
  { text: "const developer = {", color: "text-purple-400" },
  { text: "  name: 'Dharmeshkumar',", color: "text-cyan-400", indent: true },
  { text: "  role: 'Software Engineer',", color: "text-green-400", indent: true },
  { text: "  passions: ['Algorithms', 'Scalability', 'UI/UX'],", color: "text-yellow-400", indent: true },
  { text: "  isCoding: true,", color: "text-orange-400", indent: true },
  { text: "};", color: "text-purple-400" },
  { text: "", color: "" },
  { text: "function buildFuture() {", color: "text-blue-400" },
  { text: "  while (developer.isCoding) {", color: "text-purple-400", indent: true },
  { text: "    solveProblems(complex);", color: "text-cyan-400", indent: 2 },
  { text: "    innovate(relentlessly);", color: "text-green-400", indent: 2 },
  { text: "  }", color: "text-purple-400", indent: true },
  { text: "}", color: "text-blue-400" },
];

export default function CodeSnippetWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: -15, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      className="relative w-full max-w-lg mx-auto md:mx-0 glass rounded-xl border border-slate-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] float-anim z-10"
      style={{ perspective: 1000 }}
    >
      {/* Window Header */}
      <div className="bg-slate-800/80 px-4 py-3 flex items-center border-b border-slate-700/50 backdrop-blur-md">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308]" />
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-slate-400 text-xs font-mono">
          <span className="opacity-50">~</span> dharmeshkumar.js <span className="opacity-50">— Editor</span>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed bg-[#0a1628]/90 backdrop-blur-md relative overflow-hidden">
        
        {/* Decorative subtle grid background inside the code window */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        <div className="relative z-10">
          {CODE_LINES.map((line, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + idx * 0.1, duration: 0.4 }}
              className={`flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors ${line.indent === 2 ? 'pl-10' : line.indent ? 'pl-6' : ''}`}
            >
              <span className="w-6 inline-block text-slate-600 select-none mr-4 text-right bg-slate-800/20 px-1 rounded-sm">{idx + 1}</span>
              <span className={line.color}>{line.text}</span>
            </motion.div>
          ))}
          
          {/* Blinking simulated cursor */}
          <motion.div 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-2.5 h-5 bg-cyan-400 ml-12 mt-1 shadow-[0_0_8px_#00d4ff]"
          />
        </div>
        
        {/* Glow overlay */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] pointer-events-none" />
      </div>
    </motion.div>
  );
}
