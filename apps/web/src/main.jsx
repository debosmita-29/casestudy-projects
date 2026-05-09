import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Github, ArrowRight, Home, FolderKanban, TrendingUp, User, Mail } from "lucide-react";
import "./styles.css";

const projects = [
  {
    slug: "cogniintel",
    title: "CogniIntel",
    desc: "Autonomous enterprise knowledge extraction using multi-agent RAG systems.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    github:
      "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/cogniintel/README.md",
    stack: ["RAG", "FAISS-like retrieval", "Agent orchestration"],
    caseStudy: `CogniIntel is a multi-agent RAG system designed to unify fragmented enterprise knowledge.

Implementation included in this repo:
- Document ingestion over policy and support datasets
- TF-IDF retrieval baseline
- Agent planner, retriever, critic, and answer composer
- Evaluation harness for grounded answers

Impact simulation:
- Faster knowledge lookup
- Reduced manual document triage
- Better traceability from answer to source`
  },
  {
    slug: "quantumroute-ai",
    title: "QuantumRoute AI",
    desc: "Quantum-inspired optimization for enterprise scheduling and resource allocation.",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    github:
      "https://github.com/debosmita-29/casestudy-projects/blob/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/quantumroute-ai/README.md",
    stack: ["Optimization", "Scheduling", "Heuristics"],
    caseStudy: `QuantumRoute AI solves combinatorial scheduling problems using quantum-inspired search.

Implementation included in this repo:
- Resource, task, and constraint dataset
- Simulated annealing optimizer
- Constraint-aware scoring engine
- Allocation report generator`
  },
  {
    slug: "agentops-sentinel",
    title: "AgentOps Sentinel",
    desc: "Observability platform for monitoring multi-agent AI systems in production.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    github:
      "https://github.com/debosmita-29/casestudy-projects/blob/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/agentops-sentinel/README.md",
    stack: ["Observability", "Risk scoring", "Telemetry"],
    caseStudy: `AgentOps Sentinel provides observability for agentic AI systems.

Implementation included in this repo:
- Agent telemetry parser
- Hallucination and tool failure risk scoring
- Token efficiency analytics
- Executive summary report`
  },
  {
    slug: "insightforge",
    title: "InsightForge",
    desc: "Autonomous BI system converting natural language into SQL and insights.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    github:
      "https://github.com/debosmita-29/casestudy-projects/blob/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/insightforge/README.md",
    stack: ["Analytics", "SQL", "BI automation"],
    caseStudy: `InsightForge is an autonomous analytics engine.

Implementation included in this repo:
- SQLite analytics layer over sample sales data
- NL-to-SQL pattern engine
- Insight summarizer
- KPI report output`
  },
  {
    slug: "neurorecruit",
    title: "NeuroRecruit",
    desc: "AI-powered talent intelligence and job-candidate matching engine.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    github:
      "https://github.com/debosmita-29/casestudy-projects/blob/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/neurorecruit/README.md",
    stack: ["Embeddings", "Skill graph", "Ranking"],
    caseStudy: `NeuroRecruit matches candidates to roles using skill graph embeddings.

Implementation included in this repo:
- Candidate and job datasets
- Skill normalization
- Cosine similarity ranking
- Explainable match reasons`
  }
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const impactStats = [
  { value: "90%", label: "Reduction in engineering effort through AI-assisted workflows." },
  { value: "5+", label: "Production-grade AI SaaS architectures designed and implemented." },
  { value: "99.3%", label: "Regression stability enabled through intelligent automation." }
];

function CaseStudy({ project, onBack }) {
  return (
    <main className="case">
      <button type="button" onClick={onBack} className="back-btn">
        ← Back to Projects
      </button>
      <h1>{project.title}</h1>
      <img src={project.img} alt={project.title} />
      <p style={{ whiteSpace: "pre-line" }}>{project.caseStudy}</p>
      <div className="chips">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <a className="primary" href={project.github} target="_blank" rel="noreferrer">
        View GitHub Repository <ArrowRight size={16} />
      </a>
    </main>
  );
}

function App() {
  const [currentSlug, setCurrentSlug] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedProject = currentSlug
    ? projects.find((p) => p.slug === currentSlug)
    : null;

  const closeMenu = () => setMenuOpen(false);

  if (selectedProject) {
    return <CaseStudy project={selectedProject} onBack={() => setCurrentSlug(null)} />;
  }

  return (
    <div style={{ position: "relative" }}>

      {/* Backdrop */}
      {menuOpen && (
        <div role="presentation" onClick={closeMenu} className="drawer-backdrop" />
      )}

      {/* Drawer */}
      <aside className={`drawer${menuOpen ? " drawer--open" : ""}`}>
        <div className="drawer-header">
          <div>
            <p className="drawer-label">Portfolio Menu</p>
            <h2 className="drawer-name">Debosmita Roy</h2>
          </div>
          <button type="button" onClick={closeMenu} aria-label="Close menu" className="drawer-close">×</button>
        </div>
        <nav className="drawer-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} className="drawer-link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="drawer-footer">
          <p>AI Engineer by heart. Builder of systems that think, learn, and scale.</p>
        </div>
      </aside>

      {/* Top nav — hamburger lives inside here, vertically centered */}
      <nav className="topnav">
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="hamburger-btn"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <b className="topnav-brand">Debosmita Roy</b>
        <div className="topnav-links">
          <a href="#projects">Projects</a>
          <a href="#impact">Impact</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/debosmita-29/casestudy-projects" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href="https://www.linkedin.com/in/debosmita-roy-b0964921/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <p className="eyebrow">AI • Data Analytics • Agentic Systems</p>
        <h1>Building Autonomous AI Systems for Enterprise Intelligence</h1>
        <p>RAG, optimization, observability, analytics, and talent intelligence.</p>
      </section>

      {/* Projects — all 5, auto-fill grid */}
      <section id="projects" className="grid">
        {projects.map((p) => (
          <article key={p.slug} onClick={() => setCurrentSlug(p.slug)}>
            <img src={p.img} alt={p.title} />
            <div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="chips">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <b>Open case study →</b>
            </div>
          </article>
        ))}
      </section>

      {/* Impact */}
      <section id="impact" className="impact-section">
        <h2 className="section-title">Enterprise Impact</h2>
        <div className="impact-grid">
          {impactStats.map((stat) => (
            <div key={stat.value} className="impact-card">
              <span className="impact-value">{stat.value}</span>
              <p className="impact-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-card">
          <p className="eyebrow">About Me</p>
          <h2>AI Engineer by heart. Builder of systems that think, learn, and scale.</h2>
          <p>
            I operate at the intersection of AI architecture, enterprise platforms, autonomous systems, and
            intelligent automation. My work focuses on building Agentic AI, RAG-backed enterprise
            intelligence, orchestration pipelines, observability systems, and production-ready SaaS platforms.
          </p>
          <p>
            I started with deep foundations in software engineering, testing, automation,
            telecommunications, and enterprise systems — then evolved into multi-agent orchestration
            and autonomous AI platforms that move teams from manual effort to intelligent execution.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <p className="eyebrow">Contact</p>
          <h2>Let's connect</h2>
          <p>
            Open to conversations around Agentic AI, enterprise intelligence, autonomous
            systems, AI-native SaaS platforms, and intelligent automation.
          </p>
        </div>
        <div className="contact-right">
          <a className="contact-btn contact-btn--light" href="mailto:debosmitaroy.ai@gmail.com">
            Email: debosmitaroy.ai@gmail.com
          </a>
          <a
            className="contact-btn contact-btn--dark"
            href="https://www.linkedin.com/in/debosmita-roy-b0964921/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn: Debosmita Roy
          </a>
        </div>
      </section>

    </div>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element with id='root' was not found.");
createRoot(rootElement).render(<App />);
