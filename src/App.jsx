import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { GitFork, Link2, Mail, Phone, ExternalLink, ChevronDown, Code2, Server, Database, Shield, Wrench, Music, CreditCard, Home, Menu, X, Sparkles } from "lucide-react";
import "./App.css";

const SKILLS = [
  { icon: <Code2 size={18}/>, label: "Frontend", tags: ["React.js", "JavaScript ES6+", "HTML5", "CSS3"] },
  { icon: <Server size={18}/>, label: "Backend", tags: ["Node.js", "Express.js", "REST API"] },
  { icon: <Database size={18}/>, label: "Database", tags: ["MongoDB", "Mongoose ODM"] },
  { icon: <Shield size={18}/>, label: "Auth & Security", tags: ["JWT Authentication", "Session Management"] },
  { icon: <Wrench size={18}/>, label: "Tools", tags: ["Git", "GitHub", "Postman", "VS Code"] },
];

const PROJECTS = [
  {
    id: "bank",
    icon: <CreditCard size={22}/>,
    title: "Banking App",
    subtitle: "Full Stack · MERN",
    desc: "A production-grade banking system with real-time ledger transactions, multi-currency account management, email notifications on every transaction, and a secure JWT-protected dashboard.",
    features: [
      "JWT authentication & session management",
      "Account balance, status & currency tracking",
      "Send Money with real-time ledger recording",
      "DEBIT/CREDIT history with filtering",
      "Email notification on every transaction (Nodemailer)",
      "Responsive dashboard UI",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
    link: "https://github.com/priyanshu-vaishnav/banksystem",
    liveLink: "https://banksystem-blush.vercel.app/",
    accent: "#059669",
    accentLight: "rgba(5,150,105,0.08)",
    gradient: "linear-gradient(135deg, rgba(5,150,105,0.13) 0%, rgba(13,148,132,0.13) 100%)",
    aiGenerated: false,
  },
  {
    id: "music",
    icon: <Music size={22}/>,
    title: "Music Player App",
    subtitle: "Full Stack · MERN",
    desc: "A complete music streaming platform with role-based access — listeners stream, artists upload, albums are curated. Secure auth, CRUD operations and a clean responsive UI.",
    features: [
      "Dual-role system: User & Artist accounts",
      "Album creation & song management (CRUD)",
      "Play / pause / skip with dynamic playlists",
      "Search functionality for quick discovery",
      "Secure JWT authentication",
      "Responsive, modern UI with CSS3",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS3"],
    link: "https://github.com/priyanshu-vaishnav/MusicApp",
    liveLink: "https://musicplayer-chi-woad.vercel.app/",
    accent: "#7C3AED",
    accentLight: "rgba(124,58,237,0.08)",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.13) 0%, rgba(79,70,229,0.13) 100%)",
    aiGenerated: false,
  },
 {
  id: "decorhub",
  icon: <Sparkles size={22} />,
  title: "DecorHub",
  subtitle: "AI Assisted Full-Stack ·multiple vendors Booking Platform",
  desc: "Chhattisgarh ka #1 decoration booking platform — Raipur, Bhilai, Durg, Rajnandgaon, Bilaspur aur Korba ke verified decorators ko ek jagah connect karta hai clients se.",
  features: [
    "JWT auth with brute force protection, OTP email verification & refresh tokens",
    "Auto booking number (DH2024XXXXX), date conflict prevention & coupon system",
    "Real-time chat & notifications via Socket.IO with typing indicators & read receipts",
    "Decorator earnings analytics, availability calendar & subscription plans",
    "Admin dashboard — revenue charts, city-wise analytics & dispute management",
    "Razorpay payments — advance (30%) + full flow with refund processing",
  ],
  tech: [
    "React.js", "Node.js", "Express", "MongoDB",
    "Socket.IO", "Razorpay", "JWT", "Nodemailer",
  ],
  link: null,
  liveLink: "https://decorhub-ruddy.vercel.app/",
  accent: "#D85A30",
  accentLight: "rgba(216,90,48,0.08)",
  gradient: "linear-gradient(135deg, rgba(216,90,48,0.13) 0%, rgba(185,60,20,0.13) 100%)",
  aiGenerated: false,
  version: "2.0",
  badges: ["Advanced", "Full-Stack", "Real-time"],
},
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About", "Skills", "Projects", "Education", "Contact"];
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <a href="#hero" className="nav-logo">PV<span>.</span></a>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
      <button className="nav-menu-btn" onClick={() => setOpen(!open)} aria-label="menu">
        {open ? <X size={20}/> : <Menu size={20}/>}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["React.js", "Node.js", "MongoDB", "Express.js"];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" ref={ref} className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob1"/>
        <div className="hero-blob blob2"/>
        <div className="hero-blob blob3"/>
        <div className="grid-overlay"/>
      </div>
      <motion.div className="hero-content" style={{ y, opacity }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="hero-eyebrow">
          <span className="dot pulse"/>
          Available for opportunities
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }}>
          <span className="hero-name">Priyanshu</span>
          <br/>
          <span className="hero-name-last">Vaishnav</span>
        </motion.h1>
        <motion.div className="hero-role" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          MERN Stack Developer &mdash;&nbsp;
          <AnimatePresence mode="wait">
            <motion.span key={wordIdx} className="rotating-word" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
              {words[wordIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.8 }}>
          BCA graduate from Durg, Chhattisgarh. I build full-stack web applications with clean architecture, secure auth and smooth UX.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }}>
          <a href="#projects" className="btn-hero-primary">See my work</a>
          <a href="mailto:priyanshuvaishnav0606@gmail.com" className="btn-hero-ghost">
            <Mail size={15}/> Get in touch
          </a>
        </motion.div>
        <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
          {[["3", "Projects"], ["5+", "Technologies"], ["2025", "BCA Graduate"]].map(([n, l]) => (
            <div key={l} className="stat">
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <a href="#about" className="scroll-hint">
        <ChevronDown size={20}/>
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div className="section-tag" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>About me</motion.div>
        <div className="about-grid">
          <motion.div className="about-text" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2>Turning ideas into<br/><em>working products</em></h2>
            <p>I'm a MERN Stack Developer based in Durg, Chhattisgarh. After completing my BCA from Kalyan College, I did intensive hands-on training at Aavish EduCom where I built real-world full-stack applications.</p>
            <p>I love building things that feel complete — from database schema design to polished frontend UX. Whether it's a banking system with real-time ledger transactions or a music platform with role-based access, I care about every layer of the stack.</p>
            <div className="about-links">
              <a href="https://github.com/priyanshu-vaishnav" target="_blank" rel="noreferrer" className="about-link"><GitFork size={16}/> GitHub</a>
              <a href="https://linkedin.com/in/priyanshu-vaishnav-baaa4b385" target="_blank" rel="noreferrer" className="about-link"><Link2 size={16}/> LinkedIn</a>
            </div>
          </motion.div>
          <motion.div className="about-card" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="avatar-ring">
              <div className="avatar-inner">PV</div>
            </div>
            <div className="about-card-info">
              <div className="info-row"><span>Location</span><strong>Durg, Chhattisgarh</strong></div>
              <div className="info-row"><span>Role</span><strong>MERN Stack Developer</strong></div>
              <div className="info-row"><span>Education</span><strong>BCA — 2025</strong></div>
              <div className="info-row"><span>Status</span><strong className="available">Open to work ✦</strong></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div className="section-tag" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>Tech Stack</motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Skills &amp; Technologies</motion.h2>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <motion.div key={s.label} className="skill-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} whileHover={{ y: -5 }}>
              <div className="skill-icon">{s.icon}</div>
              <h4>{s.label}</h4>
              <div className="skill-tags">
                {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.7 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ "--accent": p.accent, "--accent-light": p.accentLight }}
    >
      <div className="project-card-bg" style={{ background: p.gradient }}/>

      {p.aiGenerated && (
        <div className="ai-badge">
          <Sparkles size={11}/> Built with AI
        </div>
      )}

      <div className="project-header">
        <div className="project-icon-wrap" style={{ background: p.accentLight, color: p.accent }}>{p.icon}</div>
        <div>
          <h3>{p.title}</h3>
          <span className="project-subtitle">{p.subtitle}</span>
        </div>
        <div className="project-header-links">
          {p.liveLink && (
            <motion.a
              href={p.liveLink}
              target="_blank"
              rel="noreferrer"
              className="project-live-link"
              style={{ color: p.accent, borderColor: p.accent }}
              animate={{ x: hovered ? 0 : 4, opacity: hovered ? 1 : 0.5 }}
              title="Live Demo"
            >
              <ExternalLink size={13}/> Live
            </motion.a>
          )}
          {p.link && (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="project-github-link"
              animate={{ x: hovered ? 0 : 4, opacity: hovered ? 1 : 0.4 }}
              title="GitHub"
            >
              <GitFork size={17}/><ExternalLink size={13}/>
            </motion.a>
          )}
        </div>
      </div>

      <p className="project-desc">{p.desc}</p>

      <ul className="project-features">
        {p.features.map((f, idx) => (
          <motion.li key={f} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx }}>
            <span className="feature-dot" style={{ background: p.accent }}/>
            {f}
          </motion.li>
        ))}
      </ul>

      <div className="project-tech">
        {p.tech.map(t => <span key={t} className="tech-badge" style={{ color: p.accent, background: p.accentLight }}>{t}</span>)}
      </div>

      <div className="project-footer">
        {p.liveLink && (
          <a href={p.liveLink} target="_blank" rel="noreferrer" className="project-cta" style={{ color: p.accent }}>
            View Live <ExternalLink size={13}/>
          </a>
        )}
        {p.link && (
          <a href={p.link} target="_blank" rel="noreferrer" className="project-cta-ghost">
            GitHub <GitFork size={13}/>
          </a>
        )}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div className="section-tag" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>Work</motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Featured Projects</motion.h2>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i}/>)}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const items = [
    { icon: "🎓", title: "Bachelor of Computer Applications (BCA)", place: "Kalyan College, Bhilai, Chhattisgarh", detail: "59.6%", year: "2022 - 2025", type: "edu" },
    { icon: "⚡", title: "Full Stack Web Development — MERN Stack", place: "Aavish EduCom, Durg", detail: "Hands-on training — Banking App & Music Player", year: "2025 - 2026", type: "cert" },
  ];
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div className="section-tag" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>Background</motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Education &amp; Training</motion.h2>
        <div className="edu-list">
          {items.map((item, i) => (
            <motion.div key={item.title} className={`edu-card ${item.type}`} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }} whileHover={{ x: 6 }}>
              <div className="edu-icon">{item.icon}</div>
              <div className="edu-body">
                <h4>{item.title}</h4>
                <p>{item.place}</p>
                <span className="edu-detail">{item.detail}</span>
              </div>
              <div className="edu-year">{item.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contacts = [
    { icon: <Mail size={18}/>, label: "Email", value: "priyanshuvaishnav0606@gmail.com", href: "mailto:priyanshuvaishnav0606@gmail.com" },
    { icon: <Phone size={18}/>, label: "Phone", value: "+91 9131162334", href: "tel:9131162334" },
    { icon: <GitFork size={18}/>, label: "GitHub", value: "priyanshu-vaishnav", href: "https://github.com/priyanshu-vaishnav" },
    { icon: <Link2 size={18}/>, label: "LinkedIn", value: "priyanshu-vaishnav", href: "https://linkedin.com/in/priyanshu-vaishnav-baaa4b385" },
  ];
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div className="section-tag" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>Contact</motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Let's work together</motion.h2>
        <motion.p className="contact-sub" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>I'm actively looking for full-stack developer roles. Feel free to reach out — I'd love to chat.</motion.p>
        <div className="contact-grid">
          {contacts.map((c, i) => (
            <motion.a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5, scale: 1.02 }}>
              <div className="contact-icon">{c.icon}</div>
              <div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-value">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <footer className="footer">
        <div className="container">
          <span>© 2025 Priyanshu Vaishnav</span>
          <span>Built with React</span>
          <span>Durg, Chhattisgarh 🇮🇳</span>
        </div>
      </footer>
    </>
  );
}