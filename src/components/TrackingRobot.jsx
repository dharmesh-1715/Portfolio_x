import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

export default function TrackingRobot() {
  const containerRef = useRef(null);
  const [isSmiling, setIsSmiling] = useState(false);

  // Mouse position relative to center of screen (default 0)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate position relative to viewport center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Values from -1 to 1 based on mouse position
      mouseX.set((e.clientX - centerX) / centerX);
      mouseY.set((e.clientY - centerY) / centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth springs for tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // --- Rotations & Translations ---
  
  // Head & Neck rotate up to 35 degrees left/right, and tilt slightly up/down
  const headRotateY = useTransform(smoothX, [-1, 1], [-35, 35]);
  const headRotateX = useTransform(smoothY, [-1, 1], [15, -15]); // Look up/down
  
  // Torso rotates less than head (max 15 degrees)
  const torsoRotateY = useTransform(smoothX, [-1, 1], [-15, 15]);
  const torsoRotateX = useTransform(smoothY, [-1, 1], [5, -5]);

  // Eyes (Pupils) shift within the visor
  const eyeShiftX = useTransform(smoothX, [-1, 1], [-6, 6]);
  const eyeShiftY = useTransform(smoothY, [-1, 1], [-4, 4]);

  return (
    <div 
      ref={containerRef}
      className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex items-center justify-center transform-gpu"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsSmiling(true)}
      onMouseLeave={() => setIsSmiling(false)}
    >
      
      {/* 
        Anti-Gravity Floating Wrapper for entire robot 
        We use framer-motion keyframes to create a slow, continuous bobbing.
      */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none transform-style-3d"
      >
        
        {/* --- TORSO & ARMS LAYER --- */}
        <motion.div
           style={{ rotateX: torsoRotateX, rotateY: torsoRotateY, z: 0 }}
           className="absolute bottom-10 flex flex-col items-center transform-style-3d"
        >
          {/* Main Torso */}
          <div className="relative w-48 h-56 bg-slate-800 rounded-3xl border-4 border-slate-600 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
             {/* Chest Reactor Glowing Core */}
             <div className="w-16 h-16 rounded-full bg-space-black border-4 border-slate-700 flex items-center justify-center shadow-[inset_0_0_20px_#000]">
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_30px_#00d4ff]"
               />
             </div>
             
             {/* Torso Panels */}
             <div className="absolute top-4 left-4 w-12 h-2 bg-slate-600 rounded-full opacity-50" />
             <div className="absolute top-4 right-4 w-12 h-2 bg-slate-600 rounded-full opacity-50" />
             
             <div className="absolute bottom-8 w-32 h-16 border-t-2 border-slate-600 rounded-t-[50%] opacity-30" />
          </div>

          {/* Left Arm Layered */}
          <motion.div 
            animate={{ rotateZ: [-3, 3, -3] }} // subtle sway
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="absolute -left-12 top-8 w-16 h-40 origin-top transform-style-3d"
          >
            {/* Shoulder */}
            <div className="w-16 h-16 rounded-full bg-slate-700 border-4 border-slate-500 shadow-lg absolute top-0 z-20" />
            {/* Upper Arm */}
            <div className="w-8 h-24 bg-slate-800 border-x-2 border-slate-600 absolute top-10 left-4 z-10" />
            {/* Lower Arm / Hand */}
            <div className="w-12 h-16 bg-slate-700 border-2 border-slate-500 rounded-2xl absolute top-30 left-2 z-20 flex items-center justify-center">
              <div className="w-6 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#00d4ff]" />
            </div>
          </motion.div>

          {/* Right Arm Layered */}
          <motion.div 
            animate={{ rotateZ: [3, -3, 3] }} // subtle sway counter to left arm
            transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
            className="absolute -right-12 top-8 w-16 h-40 origin-top transform-style-3d"
          >
             {/* Shoulder */}
             <div className="w-16 h-16 rounded-full bg-slate-700 border-4 border-slate-500 shadow-lg absolute top-0 z-20" />
             {/* Upper Arm */}
             <div className="w-8 h-24 bg-slate-800 border-x-2 border-slate-600 absolute top-10 left-4 z-10" />
             {/* Lower Arm / Hand */}
             <div className="w-12 h-16 bg-slate-700 border-2 border-slate-500 rounded-2xl absolute top-30 left-2 z-20 flex items-center justify-center">
               <div className="w-6 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#00d4ff]" />
             </div>
          </motion.div>
        </motion.div>


        {/* --- NECK LAYER --- */}
        <motion.div 
          style={{ rotateX: headRotateX, rotateY: headRotateY, z: 20 }}
          className="absolute top-44 md:top-[180px] w-12 h-12 bg-slate-600 border-x-4 border-slate-500 transform-style-3d z-10 box-border border-b-0"
        >
           {/* Ribbed neck detail */}
           <div className="w-full h-2 bg-slate-800 mt-2 opacity-60" />
           <div className="w-full h-2 bg-slate-800 mt-2 opacity-60" />
        </motion.div>


        {/* --- HEAD LAYER --- */}
        <motion.div
           style={{ rotateX: headRotateX, rotateY: headRotateY, z: 40 }}
           className="absolute top-8 md:top-[40px] flex flex-col items-center transform-style-3d z-20"
        >
          {/* Top Antenna */}
          <div className="relative w-2 h-10 bg-slate-400 rounded-t-full -mb-2 z-0">
             <motion.div 
               animate={{ backgroundColor: ['#00d4ff', '#3b82f6', '#00d4ff'] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="absolute -top-3 -left-2 w-6 h-6 rounded-full shadow-[0_0_15px_currentColor]"
             />
          </div>

          {/* Main Head Chassis */}
          <div className="relative w-48 h-44 bg-slate-800 rounded-[2.5rem] border-4 border-slate-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center pt-6 overflow-hidden bg-gradient-to-b from-slate-700 to-slate-900 z-10">
            
            {/* Visor Screen */}
            <div className="w-[85%] h-20 bg-space-black rounded-2xl border-2 border-slate-700 shadow-[inset_0_0_30px_#000] flex justify-center items-center gap-6 relative overflow-hidden">
               
               {/* Left Eye Container */}
               <div className="w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500/50 relative overflow-hidden flex items-center justify-center">
                  {/* The actual moving pupil */}
                  <motion.div 
                    style={{ x: eyeShiftX, y: eyeShiftY }}
                    className="w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_#00d4ff]" 
                  />
               </div>

               {/* Right Eye Container */}
               <div className="w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500/50 relative overflow-hidden flex items-center justify-center">
                  <motion.div 
                    style={{ x: eyeShiftX, y: eyeShiftY }}
                    className="w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_#00d4ff]" 
                  />
               </div>

               {/* Inner Visor Reflections & Scanline */}
               <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/5 rounded-t-2xl pointer-events-none" />
               <motion.div 
                 animate={{ top: ['-20%', '120%'] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute left-0 right-0 h-[2px] bg-cyan-400/40 shadow-[0_0_10px_#00d4ff] pointer-events-none" 
               />
            </div>

            {/* Mouth / Smile */}
            <div className="mt-4 relative w-20 h-8">
              <svg viewBox="0 0 100 50" className="w-full h-full stroke-cyan-400 fill-transparent overflow-visible drop-shadow-[0_0_8px_#00d4ff]">
                <motion.path
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ d: "M 10 20 Q 50 20 90 20" }} // Neutral expression straight line
                  animate={isSmiling ? { d: "M 10 10 Q 50 45 90 10" } : { d: "M 10 20 Q 50 25 90 20" }} 
                  transition={{ type: "spring", stiffness: 120, damping: 10 }}
                />
              </svg>
            </div>
            
            {/* Ear modules (attached to side of head) */}
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-3 h-12 bg-slate-400 rounded-r-md border border-slate-600" />
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-3 h-12 bg-slate-400 rounded-l-md border border-slate-600" />
          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
}
