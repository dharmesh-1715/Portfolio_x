import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

const PROJECTS = [
  {
    id: "stock",
    title: "Stock Trading Platform (Backend)",
    type: "Golang · REST API · PostgreSQL",
    desc:"Built a scalable stock trading backend system with secure authentication using JWT and RESTful APIs for user operations.",
    tech: ["Golang",
      "PostgreSQL",
      "GORM",
      "Postman",
      "JWT",
      "Middleware",
      "API",],
    highlights: [
      { icon: FaMobileAlt, text: "Middleware Architecture" },
      { icon: FaGithub, text: "JWT Authorization" },
    ],
    star: true,
    points: [
       "Developed stock broker backend with Signup API, Signin API, OTP API, and Change Password API.",
      "Implemented JWT-based authentication with middlewares for validation and authorization.",
      "Built watchlist APIs (Add API, Get API, Delete API) for user-specific stock management.",
      "Used PostgreSQL with logging for reliable data handling and monitoring.",
    ],
    color: "#00d4ff",
  },
  {
    id: "workconnect",
    title: "WorkConnect App",
    type: "Flutter · Firebase · Provider",
    desc: "A secure and dynamic employee management system for seamless collaboration with an intuitive dashboard for effortless navigation and workflow." ,
    tech: [
     "Flutter", "Dart", "Firebase", "Provider", "REST APIs"
    ],
    github: "https://github.com/dharmesh-1715/Employee-Management-and-workspace-App/tree/main",
    demo: "#",
    highlights: [],
    star: false,
    points: [
      "Developed a secure and dynamic employee management system for seamless collaboration.",
      "Created an intuitive dashboard for effortless navigation and workflow.",
      "Role-based access control using Firebase Authentication for secure login.",
      "Project and task module for assigning, tracking, and updating status in real-time.",
    ],
    color: "#8b5cf6",
  },
  {
    id: "healthguardian",
    title: "HealthGuardian App",
    type: "Flutter · Dialogflow · Encryption",
    desc: "A cloud-based, secure patient data management platform with AI-powered chatbot for intelligent health assistance and automated patient interaction.",
    tech: ["Flutter", "Dart", "Firebase", "Dialogflow", "Encryption"],
    github: "https://github.com/dharmesh-1715/HealthGuardian",
    demo: "#",
    highlights: [{ icon: FaRobot, text: "AI Chatbot via Dialogflow" }],
    star: false,
    points: [
      "Developed a cloud-based, secure patient data management platform.",
      "Integrated an AI-powered chatbot using Dialogflow for health assistance.",
      "Enhanced performance with optimized Dart code and smooth UI/UX flows.",
      "Leveraged Firebase & Realtime Database for secure encrypted patient data storage.",
    ],
    color: "#3b82f6",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-3d relative rounded-2xl glass p-7 flex flex-col h-full transform-gpu border border-slate-700/50 hover:border-opacity-80 transition-colors group ${project.star ? "md:col-span-2 lg:col-span-2 border-cyan-500/20" : ""}`}
    >
      {/* Top color line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
        }}
      />

      <div className="relative z-10 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <p
              className="font-mono text-sm mb-1"
              style={{ color: project.color }}
            >
              {project.type}
            </p>
            <h3
              className={`font-bold text-slate-100 group-hover:text-white transition-colors ${project.star ? "text-2xl lg:text-3xl" : "text-xl"}`}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              data-cursor-hover
            >
              <FaGithub size={20} />
            </a>
            <a
              href={project.demo}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              data-cursor-hover
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5">
          {project.desc}
        </p>

        {/* Bullet points */}
        <ul className="space-y-1.5 mb-5 flex-grow">
          {project.points.map((pt, i) => (
            <li key={i} className="flex gap-2 text-slate-400 text-sm">
              <span
                style={{ color: project.color }}
                className="flex-shrink-0 mt-0.5 text-xs"
              >
                ▸
              </span>
              {pt}
            </li>
          ))}
        </ul>

        {/* Highlights */}
        {project.star && project.highlights.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            {project.highlights.map((hlt, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-900/50 border border-slate-700/50 px-4 py-2.5 rounded-lg"
              >
                <hlt.icon
                  style={{ color: project.color }}
                  className="text-lg flex-shrink-0"
                />
                <span className="text-sm font-medium text-slate-200">
                  {hlt.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col items-end text-right">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4 flex-row-reverse"
          >
            <div className="w-12 h-px bg-blue-500" />
            <span className="section-tag !text-blue-500">
              Engineering Showcase
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-mono tracking-tight"
          >
            Flagship <span className="gradient-text">Projects.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
