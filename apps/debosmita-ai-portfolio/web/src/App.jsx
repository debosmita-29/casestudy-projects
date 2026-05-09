import { useEffect, useRef, useState } from "react";

const projects = [
  {
    slug: "cogniintel",
    title: "CogniIntel",
    subtitle: "Enterprise RAG + Multi-Agent Knowledge System",
    desc: "Autonomous enterprise knowledge extraction using multi-agent RAG systems.",
    detail: "CogniIntel is a multi-agent RAG system designed to unify fragmented enterprise knowledge.",
    included: [
      "Document ingestion over policy and support datasets",
      "TF-IDF retrieval baseline",
      "Agent planner, retriever, critic, and answer composer",
      "Evaluation harness for grounded answers"
    ],
    impact: [
      "Faster knowledge lookup",
      "Reduced manual document triage",
      "Better traceability from answer to source"
    ],
    tags: ["RAG", "FAISS-like retrieval", "Agent orchestration"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/cogniintel"
  },
  {
    slug: "quantumroute-ai",
    title: "QuantumRoute AI",
    subtitle: "Optimization Engine for Complex Scheduling",
    desc: "Quantum-inspired optimization for enterprise scheduling and resource allocation.",
    detail: "QuantumRoute AI solves combinatorial scheduling problems using quantum-inspired search.",
    included: [
      "Resource, task, and constraint dataset",
      "Simulated annealing optimizer",
      "Constraint-aware scoring engine",
      "Allocation report generator"
    ],
    impact: [
      "Better allocation visibility",
      "Faster planning cycles",
      "Scenario-based scheduling decisions"
    ],
    tags: ["Optimization", "Scheduling", "Heuristics"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/quantumroute-ai"
  },
  {
    slug: "agentops-sentinel",
    title: "AgentOps Sentinel",
    subtitle: "Observability for Agentic AI Systems",
    desc: "Observability platform for monitoring multi-agent AI systems in production.",
    detail: "AgentOps Sentinel provides observability for agentic AI systems.",
    included: [
      "Agent telemetry parser",
      "Hallucination and tool failure risk scoring",
      "Token efficiency analytics",
      "Executive summary report"
    ],
    impact: [
      "Improved AI reliability visibility",
      "Faster debugging of agent failures",
      "Better governance for production agents"
    ],
    tags: ["Observability", "Risk scoring", "Telemetry"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/agentops-sentinel"
  },
  {
    slug: "insightforge",
    title: "InsightForge",
    subtitle: "Autonomous BI + NL-to-SQL Analytics",
    desc: "Autonomous BI system converting natural language into SQL and insights.",
    detail: "InsightForge is an autonomous analytics engine.",
    included: [
      "SQLite analytics layer over sample sales data",
      "NL-to-SQL pattern engine",
      "Insight summarizer",
      "KPI report output"
    ],
    impact: [
      "Faster access to business insights",
      "Reduced dashboard dependency",
      "Natural language analytics workflow"
    ],
    tags: ["Analytics", "SQL", "BI automation"],
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/insightforge"
  },
  {
    slug: "neurorecruit",
    title: "NeuroRecruit",
    subtitle: "AI Talent Intelligence + Skill Matching",
    desc: "AI-powered talent intelligence and job-candidate matching engine.",
    detail: "NeuroRecruit matches candidates to roles using skill graph embeddings.",
    included: [
      "Candidate and job datasets",
      "Skill normalization",
      "Cosine similarity ranking",
      "Explainable match reasons"
    ],
    impact: [
      "Improved role-to-skill matching",
      "More explainable recruiting decisions",
      "Reduced manual screening effort"
    ],
    tags: ["Embeddings", "Skill graph", "Ranking"],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/neurorecruit"
  }
];

const pages = {
  home: "Home",
  about: "About",
  projects: "Projects",
  writing: "Writing",
  speaking: "Speaking",
  resources: "Resources"
};

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProjectSlug, setActiveProjectSlug] = useState(null);

  const openCaseStudy = (slug) => {
    setActiveProjectSlug(slug);
    setPage("caseStudy");
    setMenuOpen(false);
    window.history.replaceState({ page: "caseStudy", slug }, "", `#project-${slug}`);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#project-", "");
      const matchedProject = projects.find((project) => project.slug === hash);
      if (matchedProject) {
        setActiveProjectSlug(matchedProject.slug);
        setPage("caseStudy");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    window.addEventListener("popstate", openFromHash);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener("popstate", openFromHash);
    };
  }, []);

  const goToPage = (nextPage) => {
    setActiveProjectSlug(null);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    setPage(nextPage);
    setMenuOpen(false);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#caa177]/30 selection:text-white">
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
      )}

      <aside className={`fixed left-0 top-0 z-[70] flex h-full w-80 max-w-[86vw] flex-col border-r border-zinc-800 bg-zinc-950 p-7 shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Portfolio Menu</p>
            <h2 className="mt-2 text-2xl font-bold">Debosmita Roy</h2>
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-3xl leading-none text-zinc-400 transition hover:text-white" aria-label="Close menu">
            ×
          </button>
        </div>

        <nav className="mt-8 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">
          {Object.entries(pages).map(([key, label]) => (
            <button key={key} onClick={() => goToPage(key)} className={`rounded-2xl border px-5 py-4 text-left transition ${page === key ? "border-white bg-white text-black" : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600 hover:text-white"}`}>
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm leading-6 text-zinc-400">AI Engineer by heart. Builder of systems that think, learn, and scale.</p>
        </div>
      </aside>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <button onClick={() => setMenuOpen(true)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#caa177]/50 bg-transparent transition hover:bg-[#caa177]/10" aria-label="Open menu">
              <span className="h-0.5 w-5 rounded-full bg-[#caa177]" />
              <span className="h-0.5 w-5 rounded-full bg-[#caa177]" />
              <span className="h-0.5 w-5 rounded-full bg-[#caa177]" />
            </button>
            <a href="https://www.debosmita.ai" onClick={(event) => { event.preventDefault(); goToPage("home"); }} className="whitespace-nowrap text-left text-sm font-light uppercase tracking-[0.22em] text-zinc-100 transition hover:text-[#caa177] sm:text-base md:text-xl lg:text-2xl">
              Debosmita Roy
            </a>
          </div>

          <nav className="hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300 lg:flex">
            {Object.entries(pages).map(([key, label]) => (
              <button key={key} onClick={() => goToPage(key)} className={`rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-xl transition-all duration-300 hover:border-[#caa177]/40 hover:bg-[#caa177]/10 hover:text-[#caa177] ${page === key ? "border-[#caa177]/40 bg-[#caa177]/10 text-[#caa177]" : "text-zinc-300"}`}>
                {label}
              </button>
            ))}
            <button onClick={() => goToPage("contact")} className="rounded-full border border-[#caa177]/50 bg-[#caa177]/10 px-4 py-1.5 text-[#caa177] backdrop-blur-xl transition-all duration-300 hover:bg-[#caa177] hover:text-black">
              Let’s Talk
            </button>
          </nav>
        </div>
      </header>

      {page === "home" && <HomePage goToPage={goToPage} />}
      {page === "about" && <AboutPage />}
      {page === "projects" && <ProjectsPage openCaseStudy={openCaseStudy} />}
      {page === "caseStudy" && (
        <CaseStudyPage
          project={projects.find((project) => project.slug === activeProjectSlug) || projects[0]}
          goToPage={goToPage}
        />
      )}
      {page === "writing" && <WritingPage />}
      {page === "speaking" && <SpeakingPage />}
      {page === "resources" && <ResourcesPage />}
      {page === "contact" && <ContactPage />}
      {page === "privacy" && <PrivacyPolicyPage />}
      {page === "terms" && <TermsPage />}
      {page === "home" && <NewsletterSection />}
      {page === "home" && <SpotifyPlaylistSection />}
      <Footer goToPage={goToPage} />
    </div>
  );
}

function HomePage({ goToPage }) {
  return (
    <main>
      <section className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl gap-12 overflow-hidden px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="absolute left-1/2 top-20 h-96 w-96 rounded-full bg-[#caa177]/10 blur-3xl" />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">AI Architect & Engineering Leader</p>
          <h1 className="mt-8 max-w-3xl font-serif text-5xl font-light leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Building Intelligent Systems that Scale
          </h1>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-16 bg-[#caa177]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#caa177]" />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
            I architect and build AI-powered platforms and multi-agent systems that solve real-world problems and drive measurable impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => goToPage("projects")} className="rounded-2xl bg-[#caa177] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-[#d8b58d]">
              View My Work →
            </button>
            <button onClick={() => goToPage("contact")} className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#caa177] hover:text-[#caa177]">
              Let’s Connect →
            </button>
          </div>

          <div className="mt-14 flex items-center gap-4 text-zinc-500">
            <div className="h-px w-16 bg-zinc-700" />
            <span className="text-xs uppercase tracking-[0.35em]">Scroll</span>
            <div className="animate-bounce text-lg text-[#caa177]">↓</div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-[#111111] to-black shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(202,161,119,0.24),transparent_42%)]" />
            <img
              src="/assets/debosmita-hero.png"
              alt="Debosmita Roy"
              className="relative z-10 h-[620px] w-full object-cover object-[center_top] scale-[1.02]"
            />
          </div>
        </div>
      </section>
      <CalloutGrid goToPage={goToPage} />
    </main>
  );
}

function CalloutGrid({ goToPage }) {
  const callouts = [
    {
      title: "I work in AI engineering",
      body: "I build intelligent systems across GenAI, Agentic AI, RAG, orchestration, observability & enterprise automation.",
      action: "Read my story",
      page: "about"
    },
    {
      title: "I write and teach AI thinking",
      body: "I share practical notes on agentic systems, engineering leadership, AI architecture & production readiness.",
      action: "Read writing",
      page: "writing"
    },
    {
      title: "Invite me to speak or collaborate",
      body: "Let’s discuss AI strategy, enterprise RAG, agentic platforms or intelligent automation transformation.",
      action: "Contact me",
      page: "contact"
    }
  ];

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2">
      {callouts.map((item) => (
        <div key={item.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600">
          <h2 className="text-3xl font-bold">{item.title}</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{item.body}</p>
          <button onClick={() => goToPage(item.page)} className="mt-7 rounded-2xl bg-white px-5 py-3 font-semibold text-black">
            {item.action} →
          </button>
        </div>
      ))}
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell eyebrow="About" title="AI Engineer by heart. Architect by discipline. Builder by choice.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-3xl font-bold">My brief story</h2>
          <p className="mt-5 leading-8 text-zinc-300">
            I started with strong foundations in software engineering, testing, automation, telecommunications, and enterprise platforms. Over time, I evolved into building Agentic AI systems, RAG-backed enterprise intelligence, orchestration pipelines & AI-native SaaS platforms.
          </p>
          <p className="mt-5 leading-8 text-zinc-300">
            My north star is simple: build AI systems that are not only impressive demos but useful, reliable, observable & ready for real business outcomes.
          </p>
        </div>
        <div className="rounded-[2rem] border border-zinc-800 bg-black p-8">
          <h2 className="text-3xl font-bold">What I’m known for</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Agentic AI strategy",
              "Enterprise RAG design",
              "Multi-agent orchestration",
              "AI-powered SDLC automation",
              "Observability-driven intelligence",
              "Production-grade SaaS thinking"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function ProjectsPage({ openCaseStudy }) {
  return (
    <PageShell eyebrow="Projects" title="AI product case studies built as a production-inspired portfolio.">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">{project.subtitle}</p>
            <h2 className="mt-4 text-3xl font-bold">{project.title}</h2>
            <p className="mt-5 leading-8 text-zinc-400">{project.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button type="button" onClick={() => openCaseStudy(project.slug)} className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]">
                Open Case Study →
              </button>
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl border border-zinc-700 px-5 py-3 font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900">
                GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function CaseStudyPage({ project, goToPage }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <button onClick={() => goToPage("projects")} className="mb-10 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white">
        ← Back to Projects
      </button>

      <h1 className="text-5xl font-bold text-white">{project.title}</h1>

      <img src={project.image} alt={project.title} className="mt-10 h-auto w-full rounded-[2rem] border border-zinc-800 object-cover" />

      <div className="mt-10 space-y-8 text-zinc-300">
        <p className="text-xl leading-9 text-zinc-200">{project.detail}</p>

        <div>
          <h2 className="text-2xl font-semibold text-white">Research Brief</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            {project.desc} This case study explores how modern AI architectures can improve enterprise workflows, automation, observability, and intelligent decision-making at scale.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">Implementation included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-400">
            {project.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">Impact Simulation</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-400">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

function WritingPage() {
  const posts = [
    "What it takes to build production-grade Agentic AI",
    "Why enterprise RAG needs observability, not just retrieval",
    "From test automation to autonomous engineering intelligence",
    "How AI-native SaaS products should be architected"
  ];

  return (
    <PageShell eyebrow="Writing" title="Notes on AI engineering, agentic systems, and platform thinking.">
      <div className="grid gap-5">
        {posts.map((post) => (
          <article key={post} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:border-zinc-600">
            <h2 className="text-2xl font-bold">{post}</h2>
            <p className="mt-3 leading-7 text-zinc-400">A practical perspective on building useful, reliable, and enterprise-ready AI systems.</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function SpeakingPage() {
  return (
    <PageShell eyebrow="Speaking" title="Invite me to talk about Agentic AI, enterprise RAG, and intelligent automation.">
      <div className="grid gap-8 md:grid-cols-3">
        {["Agentic AI Strategy", "Enterprise RAG Architecture", "AI-Powered Engineering Platforms"].map((topic) => (
          <div key={topic} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-2xl font-bold">{topic}</h2>
            <p className="mt-4 leading-7 text-zinc-400">
              Executive-friendly and engineering-grounded talks designed to connect emerging AI capabilities to measurable business outcomes.
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function ResourcesPage() {
  return (
    <PageShell eyebrow="Resources" title="AI systems, portfolio assets, and learning resources.">
      <div className="grid gap-6 md:grid-cols-2">
        {["GitHub AI SaaS Monorepo", "Agentic AI Portfolio", "RAG Architecture Notes", "AI Observability Checklist"].map((item) => (
          <div key={item} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
            <h2 className="text-2xl font-bold">{item}</h2>
            <p className="mt-3 leading-7 text-zinc-400">A resource designed to make AI architecture, implementation, and communication easier to understand.</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Let’s connect and build intelligent systems that matter.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
          <h2 className="text-3xl font-light">Reach out</h2>
          <p className="mt-5 leading-8 text-zinc-400">
            I’m open to meaningful conversations around Agentic AI, RAG-backed enterprise intelligence, AI-native SaaS products, intelligent automation, and engineering leadership.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-[2rem] border border-zinc-800 bg-black p-8">
          <a href="mailto:debosmitaroy.ai@gmail.com" className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black">
            Email: debosmitaroy.ai@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/debosmita-roy-b0964921/" target="_blank" rel="noreferrer" className="rounded-2xl border border-zinc-700 px-6 py-4 text-center font-semibold text-white hover:bg-zinc-900">
            LinkedIn: Debosmita Roy
          </a>
        </div>
      </div>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, children }) {
  return (
    <main id={`${eyebrow.toLowerCase()}-section`} className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.35em] text-[#caa177]">{eyebrow}</p>
      <h1 className="mt-6 max-w-5xl font-serif text-4xl font-light leading-tight md:text-6xl">{title}</h1>
      <div className="mt-12">{children}</div>
    </main>
  );
}

function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#070b12] px-6 py-16 text-center shadow-2xl md:px-12">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 via-zinc-900 to-fuchsia-500/20 text-xl font-black text-white shadow-lg shadow-cyan-500/10">
          DR
        </div>

        <p className="relative mt-6 text-xs uppercase tracking-[0.35em] text-cyan-300/80">AI Notes • Systems Thinking • Career Growth</p>

        <h2 className="relative mt-4 text-2xl font-black md:text-4xl">Debosmita's Newsletter</h2>

        <p className="relative mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300">I help you level up in AI, data science, agentic systems, and modern technology.</p>

        <p className="relative mt-2 text-xs font-semibold text-zinc-400">By Debosmita Roy</p>

        <form onSubmit={(event) => event.preventDefault()} className="relative mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-cyan-300/30 bg-black/50 p-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:flex-row">
          <input type="email" placeholder="Type your email..." className="min-h-14 flex-1 rounded-xl border border-zinc-800 bg-zinc-950/80 px-5 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20" aria-label="Email address" />
          <button type="submit" className="min-h-14 rounded-xl bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-7 text-base font-bold text-black transition hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20">
            Subscribe
          </button>
        </form>

        <p className="relative mx-auto mt-7 max-w-2xl text-sm leading-6 text-zinc-500">
          By subscribing, you agree to receive occasional AI insights, engineering notes, and future updates from Debosmita Roy.
        </p>
      </div>
    </section>
  );
}

function SpotifyPlaylistSection() {
  const favoriteTracks = [
    {
      title: "Neural Dreams",
      artist: "Future Frequencies",
      mood: "Ambient AI",
      notes: [329.63, 392, 440, 523.25, 440, 392, 349.23, 392]
    },
    {
      title: "Cosmic Debugging",
      artist: "Quantum Sessions",
      mood: "Experimental focus",
      notes: [246.94, 311.13, 369.99, 493.88, 369.99, 311.13, 277.18, 311.13]
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const audioContextRef = useRef(null);
  const masterGainRef = useRef(null);
  const intervalRef = useRef(null);
  const progressTimerRef = useRef(null);
  const activeTrackRef = useRef(0);

  const activeTrack = favoriteTracks[activeTrackIndex];

  const stopAudioNodes = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    if (masterGainRef.current && audioContextRef.current) {
      masterGainRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.04);
    }
  };

  const playTone = (frequency, startTime, duration, volume = 0.08) => {
    const context = audioContextRef.current;
    const master = masterGainRef.current;
    if (!context || !master) return;

    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration + 0.02);
  };

  const scheduleLoop = () => {
    const context = audioContextRef.current;
    if (!context) return;

    const now = context.currentTime;
    const currentTrack = favoriteTracks[activeTrackRef.current];

    currentTrack.notes.forEach((note, index) => {
      playTone(note, now + index * 0.32, 0.22, 0.055);
      if (index % 2 === 0) {
        playTone(note / 2, now + index * 0.32, 0.18, 0.035);
      }
    });
  };

  const startPlaylist = async () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
      masterGainRef.current = audioContextRef.current.createGain();
      masterGainRef.current.gain.value = 0.18;
      masterGainRef.current.connect(audioContextRef.current.destination);
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    if (masterGainRef.current) {
      masterGainRef.current.gain.setTargetAtTime(0.18, audioContextRef.current.currentTime, 0.04);
    }

    setIsPlaying(true);
    setProgress((value) => (value === 0 ? 8 : value));
    scheduleLoop();
    intervalRef.current = setInterval(scheduleLoop, 2600);
    progressTimerRef.current = setInterval(() => {
      setProgress((value) => (value >= 100 ? 8 : value + 2));
    }, 700);
  };

  const pausePlaylist = () => {
    stopAudioNodes();
    setIsPlaying(false);
  };

  const stopPlaylist = () => {
    stopAudioNodes();
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pausePlaylist();
    } else {
      startPlaylist();
    }
  };

  const selectTrack = (index) => {
    const wasPlaying = isPlaying;
    stopAudioNodes();
    activeTrackRef.current = index;
    setActiveTrackIndex(index);
    setProgress(0);
    setIsPlaying(false);

    if (wasPlaying) {
      setTimeout(() => {
        startPlaylist();
      }, 80);
    }
  };

  const nextTrack = () => {
    const nextIndex = (activeTrackIndex + 1) % favoriteTracks.length;
    selectTrack(nextIndex);
  };

  const previousTrack = () => {
    const previousIndex =
      activeTrackIndex === 0 ? favoriteTracks.length - 1 : activeTrackIndex - 1;
    selectTrack(previousIndex);
  };

  useEffect(() => {
    activeTrackRef.current = activeTrackIndex;
  }, [activeTrackIndex]);

  useEffect(() => {
    return () => {
      stopAudioNodes();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <section className="border-y border-zinc-800 bg-zinc-900/60 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-bold uppercase tracking-[0.22em] text-zinc-200 md:text-xl">
              SOUNDTRACKS FOR BUILDING THE FUTURE
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Hype-up mix for deep work, coding, architecture & launch energy.
            </p>
          </div>
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            Favorites
          </span>
        </div>
        <div className="mt-7 h-px w-full bg-zinc-600" />

        <div className="mt-5 rounded-[1.6rem] border border-zinc-800 bg-[#121212] p-3 shadow-2xl md:p-3.5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 grid-cols-2 overflow-hidden rounded-md bg-zinc-800">
                <div className="bg-cyan-500/70" />
                <div className="bg-fuchsia-500/70" />
                <div className="bg-orange-500/70" />
                <div className="bg-violet-500/70" />
              </div>

              <div className="text-left">
                <p className="text-xs font-semibold text-white">
                  {activeTrack.title} · {activeTrack.artist}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-400">
                  {activeTrack.mood} · AI Focus Mix · Future Soundscapes
                </p>
                <span className="mt-1 inline-flex rounded-md bg-zinc-800 px-1.5 py-0.5 text-[9px] font-semibold text-zinc-300">
                  Original browser audio preview
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-zinc-300">
              <button
                type="button"
                onClick={previousTrack}
                className="rounded-full border border-zinc-700 p-1.5 text-[10px] transition hover:border-white hover:text-white"
                aria-label="Previous track"
              >
                ◀◀
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-black transition hover:scale-105"
                aria-label={isPlaying ? "Pause playlist" : "Play playlist"}
              >
                {isPlaying ? "Ⅱ" : "▶"}
              </button>

              <button
                type="button"
                onClick={stopPlaylist}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-xs transition hover:border-white hover:text-white"
                aria-label="Stop playlist"
              >
                ■
              </button>

              <button
                type="button"
                onClick={nextTrack}
                className="rounded-full border border-zinc-700 p-1.5 text-[10px] transition hover:border-white hover:text-white"
                aria-label="Next track"
              >
                ▶▶
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-green-300 via-cyan-300 to-fuchsia-400 ${
                  isPlaying ? "animate-pulse" : ""
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-500">
              <span>{isPlaying ? `Playing ${activeTrack.title}` : progress === 0 ? "Stopped" : "Paused"}</span>
              <span>Play / Pause / Stop enabled</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {favoriteTracks.map((track, index) => (
              <button
                key={track.title}
                type="button"
                onClick={() => selectTrack(index)}
                className={`rounded-xl border p-2 text-left transition ${
                  activeTrackIndex === index
                    ? "border-green-300 bg-green-300/10 text-white"
                    : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600 hover:text-white"
                }`}
              >
                <p className="text-[11px] font-semibold">{track.title}</p>
                <p className="mt-0.5 text-[9px] opacity-70">{track.mood}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23h-4V8Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.9 12l-6.3 3.6Z" />
    </svg>
  );
}

function PrivacyPolicyPage() {
  return (
    <PageShell eyebrow="Privacy" title="Privacy policy for visitors, collaborators, and subscribers.">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 text-zinc-300">
        <h2 className="text-2xl font-light text-white">Information collection</h2>
        <p className="mt-4 leading-8 text-zinc-400">
          This website may collect basic contact information voluntarily submitted through newsletter subscriptions and contact forms.
        </p>
      </div>
    </PageShell>
  );
}

function TermsPage() {
  return (
    <PageShell eyebrow="Terms" title="Terms and conditions for using this portfolio website.">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 text-zinc-300">
        <h2 className="text-2xl font-light text-white">Website usage</h2>
        <p className="mt-4 leading-8 text-zinc-400">
          The content on this website is intended for informational and portfolio purposes only.
        </p>
      </div>
    </PageShell>
  );
}

function Footer({ goToPage }) {
  return (
    <footer className="border-t border-zinc-800 px-6 py-14 text-center text-sm text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-5 text-zinc-400">
          <a href="https://www.instagram.com/milenial_mamma?igsh=OGlxYmltbndvNTdh&utm_source=qr" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-800 p-3 transition hover:border-white hover:text-white" aria-label="Instagram">
            <InstagramIcon />
          </a>

          <a href="https://www.linkedin.com/in/debosmita-roy-b0964921/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-800 p-3 transition hover:border-white hover:text-white" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>

          <a href="https://www.youtube.com/channel/UCzlOtV6gKYvkkKR_8P7s-YA" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-800 p-3 transition hover:border-white hover:text-white" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>

        <p className="italic text-zinc-500">Copyright © 2026 Debosmita Roy</p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-500">
          <button type="button" onClick={() => goToPage("privacy")} className="transition hover:text-white">
            Privacy Policy
          </button>

          <button type="button" onClick={() => goToPage("terms")} className="transition hover:text-white">
            Terms and Conditions
          </button>
        </div>
      </div>
    </footer>
  );
}
