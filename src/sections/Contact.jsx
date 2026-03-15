import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaRocket, FaCheckCircle } from 'react-icons/fa';

const RECIPIENT = 'dharmeshkumarlkhairnar05@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = "Message from Portfolio";
    const bodyText = `Hi Dharmeshkumar,\n\nYou have a new message from your portfolio:\n\n👤 Name: ${name}\n📧 Email: ${email}\n\n💬 Message:\n${message}\n\n---\nSent via Portfolio Contact Form`;
    
    // Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="pt-32 pb-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-3xl glow-cyan relative overflow-hidden text-center"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            Initiate <span className="gradient-text">Contact.</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
            Ready to build something extraordinary? Drop a message below and I'll get back to you at warp speed.
          </p>

          {/* Success Banner */}
          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mb-8 flex items-center gap-3 justify-center bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-3 rounded-xl font-mono text-sm max-w-xl mx-auto"
              >
                <FaCheckCircle className="text-lg flex-shrink-0" />
                Mail client opened! Your message is ready to send.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form 
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6 text-left relative z-10"
          >
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="glow-input pb-3 pt-6 px-4"
                required
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 top-2 text-xs font-mono text-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity"
              >
                NAME
              </label>
            </div>
            
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="glow-input pb-3 pt-6 px-4"
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 top-2 text-xs font-mono text-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity"
              >
                EMAIL
              </label>
            </div>
            
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="glow-input pb-3 pt-6 px-4 resize-none"
                required
              />
              <label 
                htmlFor="message" 
                className="absolute left-4 top-2 text-xs font-mono text-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity"
              >
                MESSAGE
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary justify-center text-lg py-4 mt-2"
              type="submit"
            >
              Send Transmission <FaPaperPlane className="ml-2" />
            </motion.button>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm gap-6">
          <p className="font-mono">
            Made by <span className="text-cyan-400 font-semibold drop-shadow-[0_0_5px_rgba(0,212,255,0.4)]">Dharmeshkumar, Pune</span>
          </p>
          
          <motion.button
            whileHover={{ y: -5, color: '#00d4ff', boxShadow: '0 0 20px #00d4ff66' }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center transition-colors border border-slate-700/50 group"
            aria-label="Back to top"
          >
            <FaRocket className="text-slate-400 group-hover:text-cyan-400 transition-colors transform -rotate-45 mb-1 mr-1" size={18} />
          </motion.button>
        </div>
        
      </div>
    </section>
  );
}
