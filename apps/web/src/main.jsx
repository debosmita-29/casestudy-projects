import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { GitHub, ArrowRight } from "lucide-react";
import "./styles.css";

const projects = [
  { slug: "cogniintel", title: "CogniIntel", desc: "Autonomous enterprise knowledge extraction using multi-agent RAG systems.", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c", github: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/cogniintel/README.md", stack: ["RAG", "FAISS-like retrieval", "Agent orchestration"], caseStudy: `CogniIntel is a multi-agent RAG system designed to unify fragmented enterprise knowledge.

Implementation included in this repo:
- Document ingestion over policy and support datasets
- TF-IDF retrieval baseline
- Agent planner, retriever, critic, and answer composer
- Evaluation harness for grounded answers

Impact simulation:
- Faster knowledge lookup
- Reduced manual document triage
- Better traceability from answer to source` },
  { slug: "quantumroute-ai", title: "QuantumRoute AI", desc: "Quantum-inspired optimization for enterprise scheduling and resource allocation.", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb", github: "https://github.com/debosmita-29/casestudy-projects/blob/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/quantumroute-ai/README.md", stack: ["Optimization", "Scheduling", "Heuristics"], caseStudy: `QuantumRoute AI solves combinatorial scheduling problems using quantum-inspired search.

Implementation included in this repo:
- Resource, task, and constraint dataset
- Simulated annealing optimizer
- Constraint-aware scoring engine
- Allocation report generator` },
  { slug: "agentops-sentinel", title: "AgentOps Sentinel", desc: "Observability platform for monitoring multi-agent AI systems in production.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", github: "https://github.com/debosmita-29/casestudy-projects/blob/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/agentops-sentinel/README.md", stack: ["Observability", "Risk scoring", "Telemetry"], caseStudy: `AgentOps Sentinel provides observability for agentic AI systems.

Implementation included in this repo:
- Agent telemetry parser
- Hallucination and tool failure risk scoring
- Token efficiency analytics
- Executive summary report` },
  { slug: "insightforge", title: "InsightForge", desc: "Autonomous BI system converting natural language into SQL and insights.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", github: "https://github.com/debosmita-29/casestudy-projects/blob/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/insightforge/README.md", stack: ["Analytics", "SQL", "BI automation"], caseStudy: `InsightForge is an autonomous analytics engine.

Implementation included in this repo:
- SQLite analytics layer over sample sales data
- NL-to-SQL pattern engine
- Insight summarizer
- KPI report output` },
  { slug: "neurorecruit", title: "NeuroRecruit", desc: "AI-powered talent intelligence and job-candidate matching engine.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", github: "https://github.com/debosmita-29/casestudy-projects/blob/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/neurorecruit/README.md", stack: ["Embeddings", "Skill graph", "Ranking"], caseStudy: `NeuroRecruit matches candidates to roles using skill graph embeddings.

Implementation included in this repo:
- Candidate and job datasets
- Skill normalization
- Cosine similarity ranking
- Explainable match reasons` }
];

function getProjectBySlug(slug) { return projects.find(p => p.slug === slug); }
function CaseStudy({ project }) { return <main className="case"><button onClick={() => { window.history.pushState({}, "", "/"); window.dispatchEvent(new window.PopStateEvent("popstate")); }}>← Back to Projects</button><h1>{project.title}</h1><img src={project.img}/><p>{project.caseStudy}</p><div className="chips">{project.stack.map(s=><span key={s}>{s}</span>)}</div><a className="primary" href={project.github} target="_blank" rel="noreferrer">View GitHub Repository <ArrowRight size={16}/></a></main>; }
function App(){ const [route,setRoute]=useState(typeof window !== "undefined" ? window.location.pathname : "/"); useEffect(()=>{const f=()=>setRoute(window.location.pathname); window.addEventListener('popstate',f); return()=>window.removeEventListener('popstate',f)},[]); const slug=route.startsWith('/projects/')?route.replace('/projects/',''):null; const selected=slug&&getProjectBySlug(slug); if(selected) return <CaseStudy project={selected}/>; return <div><nav><b>Debosmita Roy</b><div><a href="#projects">Projects</a><a href="#impact">Impact</a><a href="https://github.com/debosmita-roy"><Github size={18}/></a><a href="https://www.linkedin.com/in/debosmita-roy-b0964921/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></div></nav><section className="hero"><p className="eyebrow">AI • Data Analytics • Agentic Systems</p><h1>Building Autonomous AI Systems for Enterprise Intelligence</h1><p>Five portfolio-ready implementations packaged as a Turborepo: RAG, optimization, observability, analytics, and talent intelligence.</p></section><section id="projects" className="grid">{projects.map(p=><article onClick={()=>{window.history.pushState({},'',`/projects/${p.slug}`); window.dispatchEvent(new window.PopStateEvent('popstate'));}} key={p.slug}><img src={p.img}/><div><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div><b>Open case study →</b></div></article>)}</section><section id="impact" className="impact"><h2>Enterprise Impact</h2><p>Designed to communicate architecture depth, hands-on implementation, dataset-driven thinking, and leadership-level AI product vision.</p></section></div> }

export default function DebosmitaPortfolio() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  const projectSlug = route.startsWith("/projects/")
    ? route.replace("/projects/", "")
    : null;

  const selectedProject = projectSlug ? getProjectBySlug(projectSlug) : null;

  useEffect(() => {
    const onRouteChange = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", onRouteChange);

    return () => window.removeEventListener("popstate", onRouteChange);
  }, []);

  useEffect(() => {
    const sections = ["hero", "projects", "impact", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openProject = (slug) => {
    window.history.pushState({}, "", `/projects/${slug}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const closeMenu = () => setMenuOpen(false);

  if (selectedProject) {
    return <CaseStudy project={selectedProject} />;
  }

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Impact", href: "#impact" },
    { label: "About Me", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-x-hidden">
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          onClick={closeMenu}
        />
      )}

      <motion.aside
        initial={false}
        animate={{ x: menuOpen ? 0 : -360 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="fixed top-0 left-0 h-full w-80 bg-zinc-950 border-r border-zinc-800 z-[70] p-7 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">Portfolio Menu</p>
            <h2 className="text-2xl font-bold mt-1">Debosmita Roy</h2>
          </div>
          <button
            onClick={closeMenu}
            className="text-zinc-400 hover:text-white text-2xl"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-3">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`rounded-2xl px-5 py-4 transition border ${
                active === item.href.replace("#", "")
                  ? "bg-white text-black border-white"
                  : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-7 left-7 right-7 rounded-3xl bg-zinc-900 border border-zinc-800 p-5">
          <p className="text-sm text-zinc-400 leading-6">
            AI Engineer by heart, architect by discipline, and builder by choice.
          </p>
        </div>
      </motion.aside>

      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-zinc-800">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="w-11 h-11 rounded-2xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition flex flex-col items-center justify-center gap-1.5"
              aria-label="Open menu"
            >
              <span className="w-5 h-0.5 bg-white rounded-full" />
              <span className="w-5 h-0.5 bg-white rounded-full" />
              <span className="w-5 h-0.5 bg-white rounded-full" />
            </button>
            <div className="text-2xl font-semibold tracking-tight">
              Debosmita Roy
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#hero" className={`transition ${active === "hero" ? "text-white" : "text-zinc-400"}`}>Home</a>
            <a href="#projects" className={`transition ${active === "projects" ? "text-white" : "text-zinc-400"}`}>Projects</a>
            <a href="#about" className={`transition ${active === "about" ? "text-white" : "text-zinc-400"}`}>About Me</a>
            <a href="#contact" className={`transition ${active === "contact" ? "text-white" : "text-zinc-400"}`}>Contact</a>
            <a
              href="https://www.linkedin.com/in/debosmita-roy-b0964921/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <section id="hero" className="px-8 py-32 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text leading-tight"
        >
          Building Autonomous AI Systems for Enterprise Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-zinc-400 text-xl max-w-3xl mx-auto leading-8"
        >
          AI Engineer • Multi-Agent Systems • RAG Architectures • Enterprise
          Intelligence • Autonomous SaaS Platforms
        </motion.p>
      </section>

      <section id="projects" className="px-8 py-16 max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((p, index) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            onClick={() => openProject(p.slug)}
            className="cursor-pointer rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:scale-[1.02] transition-all duration-300 hover:border-zinc-600 shadow-2xl"
          >
            <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />

            <div className="p-7">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-zinc-400 mt-3 leading-7">{p.desc}</p>
              <div className="mt-6 inline-flex items-center text-blue-400">
                Open case study →
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section id="impact" className="px-8 py-32 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold">Enterprise Impact</h2>

        <p className="mt-8 text-zinc-300 max-w-4xl mx-auto text-xl leading-9">
          Designing production-scale agentic AI systems for enterprise
          knowledge extraction, optimization, observability, and intelligent
          automation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
            <h3 className="text-4xl font-bold">90%</h3>
            <p className="mt-3 text-zinc-400">Reduction in AI-assisted engineering workflows</p>
          </div>
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
            <h3 className="text-4xl font-bold">5+</h3>
            <p className="mt-3 text-zinc-400">Enterprise-grade AI SaaS platforms architected</p>
          </div>
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
            <h3 className="text-4xl font-bold">99.3%</h3>
            <p className="mt-3 text-zinc-400">Regression stability through intelligent automation</p>
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-28 max-w-6xl mx-auto">
        <div className="rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 md:p-12 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            AI Engineer by heart. Builder of systems that think, learn, and scale.
          </h2>
          <p className="mt-8 text-zinc-300 text-lg leading-8">
            My story sits at the intersection of engineering discipline and AI imagination. I started with deep foundations in software engineering, testing, automation, platforms, telecommunications, and enterprise systems, then evolved into building Agentic AI, RAG-backed intelligence, multi-agent orchestration, and autonomous SaaS platforms.
          </p>
          <p className="mt-5 text-zinc-300 text-lg leading-8">
            What drives me is the ability to turn complexity into intelligent systems: agents that reason, pipelines that retrieve the right knowledge, dashboards that explain operational signals, and platforms that help teams move from manual effort to autonomous execution. I build with a product mindset, an architect’s eye, and a bias toward measurable enterprise impact.
          </p>
          <p className="mt-6 text-xl text-white font-semibold">
            My north star: build AI systems that are not just impressive demos, but useful, reliable, observable, and ready for real business outcomes.
          </p>
        </div>
      </section>

      <section id="contact" className="px-8 py-28 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-[2rem] bg-zinc-900 border border-zinc-800 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Contact</p>
            <h2 className="text-4xl font-bold mt-4">Let’s connect</h2>
            <p className="mt-6 text-zinc-300 leading-8 text-lg">
              I’m always open to meaningful conversations around Agentic AI, enterprise RAG, AI-native SaaS platforms, intelligent automation, and leadership-level AI transformation.
            </p>
          </div>

          <div className="rounded-[2rem] bg-black border border-zinc-800 p-8 md:p-10 flex flex-col justify-center gap-5">
            <a
              href="mailto:debosmitaroy.ai@gmail.com"
              className="rounded-2xl bg-white text-black px-6 py-4 font-semibold text-center hover:scale-[1.02] transition"
            >
              Email: debosmitaroy.ai@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/debosmita-roy-b0964921/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 px-6 py-4 font-semibold text-center hover:bg-zinc-900 transition"
            >
              LinkedIn: Debosmita Roy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App/>, <DebosmitaPortfolio/>);  
