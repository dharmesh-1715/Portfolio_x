import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import YouTubeShowcase from './sections/YouTubeShowcase';
import HackathonGallery from './sections/HackathonGallery';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  // Lock scrolling during preloader
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <YouTubeShowcase />
          <HackathonGallery />
          <Achievements />
          <Certifications />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}

export default App;
