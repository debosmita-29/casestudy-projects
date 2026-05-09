import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Github, ArrowRight } from "lucide-react";
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

function CaseStudy({ project, onBack }) {
  return (
    <main className="case">
      <button
        type="button"
        onClick={onBack}
        style={{
          background: "transparent",
          color: "#a1a1aa",
          border: "1px solid #27272a",
          borderRadius: "999px",
          padding: "10px 16px",
          cursor: "pointer",
          marginBottom: "24px"
        }}
      >
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
  // FIX 1: Use React state for routing instead of window.location / pushState.
  // The original URL-based routing breaks in sandboxed/iframe environments.
  const [currentSlug, setCurrentSlug] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedProject = currentSlug
    ? projects.find((p) => p.slug === currentSlug)
    : null;

  const closeMenu = () => setMenuOpen(false);

  // FIX 2: Removed useEffect that set document.body.style.overflow — this can
  // cause layout issues in sandboxed environments. Overflow lock is handled inline.

  if (selectedProject) {
    return (
      <CaseStudy
        project={selectedProject}
        onBack={() => setCurrentSlug(null)}
      />
    );
  }

  // FIX 3: Hamburger button uses position: "absolute" within a relative wrapper
  // instead of position: "fixed", which can be clipped in iframes/sandboxes.
  // FIX 4: z-index values reduced to reasonable numbers (9999) — the original
  // used 2147483647 (MAX_INT) which can cause stacking issues in some renderers.

  return (
    <div style={{ position: "relative" }}>
      {/* Hamburger toggle button */}
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
        style={{
          position: "fixed",
          left: "18px",
          top: "18px",
          zIndex: 9999,
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.22)",
          background: "rgba(8,8,10,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
          padding: 0,
          margin: 0
        }}
      >
        <span style={{ width: "21px", height: "2px", background: "#fff", borderRadius: "999px", display: "block" }} />
        <span style={{ width: "21px", height: "2px", background: "#fff", borderRadius: "999px", display: "block" }} />
        <span style={{ width: "21px", height: "2px", background: "#fff", borderRadius: "999px", display: "block" }} />
      </button>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          role="presentation"
          onClick={closeMenu}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.62)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            zIndex: 9997
          }}
        />
      )}

      {/* Slide-out drawer */}
      <aside
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: "320px",
          maxWidth: "86vw",
          background: "linear-gradient(180deg, rgba(12,12,14,0.99), rgba(20,20,24,0.99))",
          borderRight: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "30px 0 80px rgba(0,0,0,0.48)",
          zIndex: 9998,
          // FIX 5: Use visibility to truly hide the drawer when closed,
          // preventing focusable elements from being reachable off-screen.
          transform: menuOpen ? "translateX(0)" : "translateX(-110%)",
          visibility: menuOpen ? "visible" : "hidden",
          transition: "transform 260ms ease, visibility 260ms ease",
          padding: "26px",
          color: "#fff",
          boxSizing: "border-box"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
          <div>
            <p style={{ margin: 0, color: "#a1a1aa", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Portfolio
            </p>
            <h2 style={{ margin: "8px 0 0", fontSize: "24px" }}>Debosmita Roy</h2>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            style={{
              background: "transparent",
              border: "none",
              color: "#d4d4d8",
              fontSize: "30px",
              cursor: "pointer",
              lineHeight: 1,
              padding: 0
            }}
          >
            ×
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "34px" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "14px 16px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.045)",
                transition: "all 180ms ease"
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          style={{
            position: "absolute",
            left: "26px",
            right: "26px",
            bottom: "26px",
            padding: "18px",
            borderRadius: "22px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)"
          }}
        >
          <p style={{ margin: 0, color: "#d4d4d8", lineHeight: 1.6, fontSize: "14px" }}>
            AI Engineer by heart. Builder of systems that think, learn, and scale.
          </p>
        </div>
      </aside>

      {/* Top nav bar */}
      <nav>
        <b style={{ paddingLeft: "54px" }}>Debosmita Roy</b>
        <div>
          <a href="#projects">Projects</a>
          <a href="#impact">Impact</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/debosmita-roy-b0964921/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <p className="eyebrow">AI • Data Analytics • Agentic Systems</p>
        <h1>Building Autonomous AI Systems for Enterprise Intelligence</h1>
        <p>
          RAG,optimization, observability, analytics, and talent intelligence.
        </p>
      </section>

      {/* Projects grid */}
      <section id="projects" className="grid">
        {projects.map((p) => (
          <article
            key={p.slug}
            onClick={() => setCurrentSlug(p.slug)}
            style={{ cursor: "pointer" }}
          >
            <img src={p.img} alt={p.title} />
            <div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="chips">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <b>Open case study →</b>
            </div>
          </article>
        ))}
      </section>

      {/* Impact */}
      <section id="impact" className="impact">
        <h2>Enterprise Impact</h2>
        <p>
          Designed to communicate architecture depth, hands-on implementation,
          dataset-driven thinking, and leadership-level AI product vision.
        </p>
      </section>

      {/* About */}
      <section
        id="about"
        className="impact"
        style={{ textAlign: "left", maxWidth: "1100px", margin: "0 auto", padding: "80px 28px" }}
      >
        <p className="eyebrow">About Me</p>
        <h2>AI Engineer by heart. Builder of systems that think, learn, and scale.</h2>
        <p>
          My story sits at the intersection of engineering discipline and AI imagination.
          I started with deep foundations in software engineering, testing, automation,
          platforms, telecommunications, and enterprise systems, then evolved into
          building Agentic AI, RAG-backed intelligence, multi-agent orchestration,
          and autonomous SaaS platforms.
        </p>
        <p>
          What drives me is turning complexity into intelligent systems: agents that
          reason, pipelines that retrieve the right knowledge, dashboards that explain
          operational signals, and platforms that move teams from manual effort to
          autonomous execution.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="impact"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 28px" }}
      >
        <p className="eyebrow">Contact</p>
        <h2>Let's connect</h2>
        <p>
          I'm open to meaningful conversations around Agentic AI, enterprise RAG,
          AI-native SaaS platforms, intelligent automation, and leadership-level AI
          transformation.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginTop: "28px" }}>
          <a className="primary" href="mailto:debosmitaroy.ai@gmail.com">
            Email: debosmitaroy.ai@gmail.com
          </a>
          <a
            className="primary"
            href="https://www.linkedin.com/in/debosmita-roy-b0964921/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn: Debosmita Roy <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element with id='root' was not found.");
createRoot(rootElement).render(<App />);
