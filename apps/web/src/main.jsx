import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "cogniintel",
    title: "CogniIntel",
    desc: "Autonomous enterprise knowledge extraction using multi-agent RAG systems.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    github: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/cogniintel",
    caseStudy: `CogniIntel is a multi-agent RAG system designed to unify fragmented enterprise knowledge.

Problem:
- Enterprise data is scattered across documents, emails, and tools

Solution:
- Document ingestion pipeline
- Vector embeddings + FAISS retrieval
- Agent-based query orchestration

Impact:
- 72% faster information retrieval in benchmark simulation`
  },
  {
    slug: "quantumroute",
    title: "QuantumRoute AI",
    desc: "Quantum-inspired optimization for enterprise scheduling and resource allocation.",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    github: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/quantumroute-ai",
    caseStudy: `QuantumRoute AI solves combinatorial scheduling problems using quantum-inspired heuristics.

Problem:
- Classical scheduling fails under high complexity constraints

Solution:
- QAOA-inspired optimization
- Stochastic search refinement
- Constraint-aware scoring

Impact:
- Improved allocation efficiency in simulated workloads`
  },
  {
    slug: "agentops",
    title: "AgentOps Sentinel",
    desc: "Observability platform for monitoring multi-agent AI systems in production.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    github: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/agentops-sentinel",
    caseStudy: `AgentOps Sentinel provides observability for agentic AI systems.

Key Features:
- Agent logging pipeline
- Hallucination detection scoring
- Tool-call failure tracking
- Token efficiency metrics`
  },
  {
    slug: "insightforge",
    title: "InsightForge",
    desc: "Autonomous BI system converting natural language into SQL and insights.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/insightforge",
    caseStudy: `InsightForge is an autonomous analytics engine.

Pipeline:
- Natural language query parsing
- SQL generation
- Execution over structured data
- Insight summarization

Impact:
- Removes dependency on manual BI dashboards`
  },
  {
    slug: "neurorecruit",
    title: "NeuroRecruit",
    desc: "AI-powered talent intelligence and job-candidate matching engine.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    github: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/neurorecruit",
    caseStudy: `NeuroRecruit matches candidates to roles using skill graph embeddings.

Features:
- Skill overlap scoring
- Candidate ranking engine
- Job recommendation system`
  }
];

function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

function CaseStudy({ project }) {
  const goBack = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-5xl mx-auto">
      <button
        onClick={goBack}
        className="mb-8 text-sm text-zinc-400 hover:text-white transition"
      >
        ← Back to Projects
      </button>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        {project.title}
      </motion.h1>

      <img
        src={project.img}
        className="mt-8 rounded-3xl w-full object-cover max-h-[500px] border border-zinc-800"
      />

      <div className="mt-8 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 backdrop-blur-lg">
        <p className="text-zinc-300 whitespace-pre-line leading-8 text-lg">
          {project.caseStudy}
        </p>
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
      >
        View GitHub Repository →
      </a>
    </div>
  );
}

export default function DebosmitaPortfolio() {
  const [active, setActive] = useState("hero");
  const [route, setRoute] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  const projectSlug = route.startsWith("/projects/")
    ? route.replace("/projects/", "")
    : null;

  const selectedProject = projectSlug
    ? getProjectBySlug(projectSlug)
    : null;

  useEffect(() => {
    const onRouteChange = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", onRouteChange);

    return () => window.removeEventListener("popstate", onRouteChange);
  }, []);

  useEffect(() => {
    const sections = ["hero", "projects", "impact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
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

  if (selectedProject) {
    return <CaseStudy project={selectedProject} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-x-hidden">
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-zinc-800">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <div className="text-2xl font-semibold tracking-tight">
            Debosmita Roy
          </div>

          <div className="flex gap-8 text-sm text-zinc-400">
            <a
              href="#hero"
              className={`transition ${
                active === "hero" ? "text-white" : "text-zinc-400"
              }`}
            >
              Home
            </a>
            <a
              href="#projects"
              className={`transition ${
                active === "projects" ? "text-white" : "text-zinc-400"
              }`}
            >
              Projects
            </a>
            <a
              href="#impact"
              className={`transition ${
                active === "impact" ? "text-white" : "text-zinc-400"
              }`}
            >
              Impact
            </a>
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

      <section
        id="hero"
        className="px-8 py-32 max-w-7xl mx-auto text-center"
      >
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

      <section
        id="projects"
        className="px-8 py-16 max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10"
      >
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
            <img src={p.img} className="h-56 w-full object-cover" />

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

      <section
        id="impact"
        className="px-8 py-32 max-w-6xl mx-auto text-center"
      >
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
    </div>
  );
}
