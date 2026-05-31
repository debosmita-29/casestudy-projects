import { useEffect, useRef, useState } from "react";

const projects = [
    {
    slug: "alignops",
    title: "AlignOps",
    subtitle: "Distributed AI Infrastructure for Alignment, Multimodal AI & GPU Optimization",
    desc: "A distributed AI infrastructure framework for reinforcement learning alignment, multimodal foundation models, diffusion serving, and hyperscale GPU orchestration.",
    detail:
      "AlignOps operationalizes PPO, DPO, GRPO, distributed training, asynchronous multimodal inference, and hardware-aware optimization across heterogeneous GPU clusters.",
    included: [
      "Post-training alignment orchestration using PPO, DPO, and GRPO",
      "Fault-tolerant distributed training with FSDP, tensor parallelism, pipeline parallelism, and context parallelism",
      "Asynchronous multimodal and diffusion serving with adaptive batching",
      "GPU orchestration, memory placement, checkpoint recovery, and infrastructure cost intelligence",
      "Hardware evaluation framework for GPUs and emerging accelerators"
    ],
    impact: [
      "38% improvement in GPU utilization",
      "44% reduction in distributed training instability",
      "3.7x acceleration in multimodal inference throughput",
      "31% reduction in operational infrastructure costs"
    ],
    tags: ["Distributed AI", "RLHF", "PPO/DPO/GRPO", "GPU Optimization", "Multimodal AI", "MLOps"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects",
    paperLink: "/papers/AlignOps_IEEE.pdf"
  },
  {
    slug: "medagent-lakeops",
    title: "MedAgent LakeOps",
    subtitle: "Agentic MLOps for Clinical Data Lakes & Healthcare Intelligence",
    desc: "An agentic MLOps framework that orchestrates EHR, radiology, laboratory, operational, and wearable healthcare data into a governed clinical lakehouse.",
    detail:
      "MedAgent LakeOps combines autonomous healthcare agents, semantic interoperability, clinical lakehouse architecture, observability intelligence, and governance-aware MLOps for healthcare AI readiness.",
    included: [
      "Autonomous agents for clinical ingestion, metadata enrichment, semantic normalization, observability, and orchestration",
      "FHIR, DICOM, HL7, and OMOP-inspired interoperability workflows",
      "Clinical lakehouse zones for raw data, standardized healthcare data, feature engineering, model readiness, and governance audits",
      "Agentic MLOps pipeline for training, deployment, monitoring, drift detection, and autonomous remediation",
      "Patient intelligence flow connecting clinical systems, lakehouse pipelines, ML inference, and physician dashboards"
    ],
    impact: [
      "43% reduction in clinical data processing latency",
      "37% improvement in radiology metadata retrieval efficiency",
      "52% reduction in manual operational intervention",
      "4.3x acceleration in healthcare AI model deployment readiness"
    ],
    tags: ["Healthcare AI", "Agentic MLOps", "Clinical Lakehouse", "FHIR", "DICOM", "LangGraph"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects",
    paperLink: "/papers/MedAgent-LakeOps-Agentic-MLOps-for-Clinical-Data.pdf"
  },
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

// const projects = [
//   {
//     slug: "cogniintel",
//     title: "CogniIntel",
//     subtitle: "Enterprise RAG + Multi-Agent Knowledge System",
//     desc: "Autonomous enterprise knowledge extraction using multi-agent RAG systems.",
//     detail: "CogniIntel is a multi-agent RAG system designed to unify fragmented enterprise knowledge.",
//     included: [
//       "Document ingestion over policy and support datasets",
//       "TF-IDF retrieval baseline",
//       "Agent planner, retriever, critic, and answer composer",
//       "Evaluation harness for grounded answers"
//     ],
//     impact: [
//       "Faster knowledge lookup",
//       "Reduced manual document triage",
//       "Better traceability from answer to source"
//     ],
//     tags: ["RAG", "FAISS-like retrieval", "Agent orchestration"],
//     image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
//     githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/cogniintel"
//   },
//   {
//     slug: "quantumroute-ai",
//     title: "QuantumRoute AI",
//     subtitle: "Optimization Engine for Complex Scheduling",
//     desc: "Quantum-inspired optimization for enterprise scheduling and resource allocation.",
//     detail: "QuantumRoute AI solves combinatorial scheduling problems using quantum-inspired search.",
//     included: [
//       "Resource, task, and constraint dataset",
//       "Simulated annealing optimizer",
//       "Constraint-aware scoring engine",
//       "Allocation report generator"
//     ],
//     impact: [
//       "Better allocation visibility",
//       "Faster planning cycles",
//       "Scenario-based scheduling decisions"
//     ],
//     tags: ["Optimization", "Scheduling", "Heuristics"],
//     image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80",
//     githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/quantumroute-ai"
//   },
//   {
//     slug: "agentops-sentinel",
//     title: "AgentOps Sentinel",
//     subtitle: "Observability for Agentic AI Systems",
//     desc: "Observability platform for monitoring multi-agent AI systems in production.",
//     detail: "AgentOps Sentinel provides observability for agentic AI systems.",
//     included: [
//       "Agent telemetry parser",
//       "Hallucination and tool failure risk scoring",
//       "Token efficiency analytics",
//       "Executive summary report"
//     ],
//     impact: [
//       "Improved AI reliability visibility",
//       "Faster debugging of agent failures",
//       "Better governance for production agents"
//     ],
//     tags: ["Observability", "Risk scoring", "Telemetry"],
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
//     githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/agentops-sentinel"
//   },
//   {
//     slug: "insightforge",
//     title: "InsightForge",
//     subtitle: "Autonomous BI + NL-to-SQL Analytics",
//     desc: "Autonomous BI system converting natural language into SQL and insights.",
//     detail: "InsightForge is an autonomous analytics engine.",
//     included: [
//       "SQLite analytics layer over sample sales data",
//       "NL-to-SQL pattern engine",
//       "Insight summarizer",
//       "KPI report output"
//     ],
//     impact: [
//       "Faster access to business insights",
//       "Reduced dashboard dependency",
//       "Natural language analytics workflow"
//     ],
//     tags: ["Analytics", "SQL", "BI automation"],
//     image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
//     githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/insightforge"
//   },
//   {
//     slug: "neurorecruit",
//     title: "NeuroRecruit",
//     subtitle: "AI Talent Intelligence + Skill Matching",
//     desc: "AI-powered talent intelligence and job-candidate matching engine.",
//     detail: "NeuroRecruit matches candidates to roles using skill graph embeddings.",
//     included: [
//       "Candidate and job datasets",
//       "Skill normalization",
//       "Cosine similarity ranking",
//       "Explainable match reasons"
//     ],
//     impact: [
//       "Improved role-to-skill matching",
//       "More explainable recruiting decisions",
//       "Reduced manual screening effort"
//     ],
//     tags: ["Embeddings", "Skill graph", "Ranking"],
//     image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
//     githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/neurorecruit"
//   }
// ];

const pages = {
  home: "Home",
  about: "About",
  projects: "Projects",
  learning: "Learning",
  writing: "Writing",
  speaking: "Speaking",
  resources: "Resources"
};

const newsletterContent = [
  {
    slug: "nemoclaw-future-agentic-ai",
    title: "What NemoClaw Teaches Us About the Future of Agentic AI",
    subtitle:
      "Why the next generation of AI systems will be operational, adaptive, and environment-aware.",
    date: "May 10, 2026",
    readTime: "6 min read",
    category: "Agentic AI",
    featured: false,
    excerpt:
      "Why operational intelligence, observability, and orchestration will define the next generation of enterprise AI systems.",
    content: `
      <p>Most AI systems today are still fundamentally reactive.</p>

      <p>They answer questions. Generate text. Summarize documents. Produce outputs when prompted.</p>

      <p>But the next generation of AI systems will not simply respond.</p>

      <p>They will observe, reason, adapt, recover, and continuously operate inside dynamic environments.</p>

      <p>That shift changes everything.</p>

      <p>NemoClaw is my teaching framework for understanding what this new generation of AI systems may look like.</p>

      <p>Not as another chatbot. Not as another prompt wrapper. But as a resilient operational intelligence architecture.</p>

      <h2>The Misconception Around Intelligent Systems</h2>

      <p>The biggest misconception in AI today is that better prompts alone create intelligent systems.</p>

      <p>They do not.</p>

      <p>Production-grade AI systems require memory, orchestration, telemetry, evaluation, feedback loops, and environmental awareness.</p>

      <p>Without those capabilities, most AI agents remain fragile demos.</p>

      <p>This is why many enterprise AI initiatives fail after initial excitement.</p>

      <p>The problem is rarely model intelligence alone.</p>

      <p>The real challenge is operational intelligence.</p>

      <h2>Why Modern AI Agents Break</h2>

      <p>Modern AI agents break because they lose context, fail silently, hallucinate tool outputs, and cannot recover from unexpected workflow states.</p>

      <p>Many systems today still operate like isolated reasoning engines disconnected from the environments they are supposed to support.</p>

      <p>NemoClaw represents a different philosophy.</p>

      <p>An environment-aware agent should understand signals beyond the immediate prompt.</p>

      <ul>
        <li>system state</li>
        <li>workflow history</li>
        <li>operational telemetry</li>
        <li>user intent persistence</li>
        <li>feedback loops</li>
        <li>tool reliability</li>
        <li>failure patterns</li>
        <li>governance boundaries</li>
      </ul>

      <p>This is where the future of agentic AI begins.</p>

      <h2>The Rise of Orchestrated Intelligence</h2>

      <p>The next evolution of AI systems will involve orchestration layers capable of coordinating specialized agents together.</p>

      <p>One agent may retrieve knowledge. Another may validate evidence. Another may score risk. Another may monitor observability signals. Another may summarize actions for human review.</p>

      <p>The intelligence emerges not from a single model, but from coordinated operational behavior.</p>

      <p>This is extremely important for enterprise systems.</p>

      <p>Enterprises do not simply need AI that sounds intelligent.</p>

      <p>They need AI systems that are:</p>

      <ul>
        <li>observable</li>
        <li>traceable</li>
        <li>governable</li>
        <li>resilient</li>
        <li>measurable</li>
        <li>explainable</li>
        <li>recoverable</li>
      </ul>

      <h2>Why Observability Becomes Foundational</h2>

      <p>Without these properties, AI cannot safely scale inside operational ecosystems.</p>

      <p>This is why observability becomes one of the most important foundations of modern agentic systems.</p>

      <p>In traditional software systems, observability helps engineers understand failures, latency, bottlenecks, and system health.</p>

      <p>In AI systems, observability must evolve further.</p>

      <p>We need visibility into:</p>

      <ul>
        <li>hallucination patterns</li>
        <li>retrieval quality</li>
        <li>reasoning traces</li>
        <li>tool-call reliability</li>
        <li>agent coordination behavior</li>
        <li>prompt drift</li>
        <li>memory corruption</li>
        <li>context fragmentation</li>
      </ul>

      <p>The future AI stack will increasingly resemble distributed systems engineering.</p>

      <h2>Feedback-Native Intelligence</h2>

      <p>NemoClaw also introduces the idea of feedback-native intelligence.</p>

      <p>A modern AI system should not operate as a one-time reasoning engine.</p>

      <p>It should continuously learn from outcomes.</p>

      <ul>
        <li>Did the workflow succeed?</li>
        <li>Did the user correct the response?</li>
        <li>Did the retrieval contain contradictions?</li>
        <li>Did a downstream system fail?</li>
        <li>Did the orchestration layer recover correctly?</li>
      </ul>

      <p>These signals matter enormously.</p>

      <p>Over time, feedback-aware systems become operationally smarter.</p>

      <h2>The Role of Memory</h2>

      <p>Another major shift will involve memory.</p>

      <p>Most AI systems today still operate with extremely limited continuity.</p>

      <p>But future systems will increasingly use memory graphs, persistent context layers, and long-term interaction histories.</p>

      <p>This changes how agents reason.</p>

      <p>Instead of isolated responses, they begin operating with accumulated situational awareness.</p>

      <p>This creates opportunities for:</p>

      <ul>
        <li>adaptive workflows</li>
        <li>personalized orchestration</li>
        <li>autonomous recovery</li>
        <li>proactive recommendations</li>
        <li>operational prediction</li>
      </ul>

      <h2>The Bigger Shift</h2>

      <p>This is where AI starts moving from conversational systems toward operational systems.</p>

      <p>And that transition is the most important shift happening in AI engineering right now.</p>

      <p>The future of AI will not belong to systems that simply generate answers.</p>

      <p>It will belong to systems that can observe, adapt, recover, coordinate, and continuously operate under real-world constraints.</p>

      <p>That is the direction NemoClaw is designed to explore.</p>
    `
  },
  {
    slug: "future-of-ai-is-systems",
    title: "The Future of AI Is Not Models. It Is Systems.",
    subtitle:
      "Why the next competitive advantage in AI will come from architecture, orchestration, and intelligent systems.",
    date: "May 16, 2026",
    readTime: "8 min read",
    category: "Agentic AI",
    featured: true,
    excerpt:
      "The future of AI will not be defined by models alone. It will be defined by intelligent systems, orchestration, memory, reasoning, and autonomous execution.",
    content: `
      <p>For the last few years, the AI industry has been obsessed with one question:</p>

      <blockquote>“Which model is the smartest?”</blockquote>

      <p>GPT-4. Claude. Gemini. Open-source models. Benchmarks. Leaderboards.</p>

      <p>But something much bigger is quietly happening underneath all of this.</p>

      <p>The future of AI will not be defined by models alone.</p>

      <p>It will be defined by systems.</p>

      <p>And the companies that understand this early will build the next generation of enterprise intelligence.</p>

      <h2>Models Are Becoming Commoditized</h2>

      <p>This is the uncomfortable truth many organizations are starting to realize.</p>

      <p>A model alone is no longer the competitive advantage.</p>

      <p>Because eventually:</p>

      <ul>
        <li>everyone gets access to powerful LLMs</li>
        <li>everyone can call APIs</li>
        <li>everyone can generate text, code, or summaries</li>
        <li>everyone can build a chatbot</li>
      </ul>

      <p>The differentiator is shifting elsewhere.</p>

      <p>Not toward:</p>

      <blockquote>“Who has the best model?”</blockquote>

      <p>But toward:</p>

      <blockquote>“Who built the best AI operating system around the model?”</blockquote>

      <p>That means:</p>

      <ul>
        <li>orchestration</li>
        <li>memory</li>
        <li>retrieval</li>
        <li>evaluation</li>
        <li>observability</li>
        <li>reasoning loops</li>
        <li>tool ecosystems</li>
        <li>governance</li>
        <li>feedback systems</li>
        <li>autonomous execution</li>
      </ul>

      <p>The intelligence is moving into the architecture itself.</p>

      <h2>The Real AI Stack Is Much Bigger Than Prompting</h2>

      <p>Most people still think AI engineering is primarily:</p>

      <ul>
        <li>prompt engineering</li>
        <li>model selection</li>
        <li>fine-tuning</li>
      </ul>

      <p>But production AI systems are fundamentally distributed systems problems.</p>

      <p>Because real enterprise AI must solve:</p>

      <ul>
        <li>context management</li>
        <li>latency</li>
        <li>reliability</li>
        <li>hallucination reduction</li>
        <li>authorization</li>
        <li>traceability</li>
        <li>human approval workflows</li>
        <li>state management</li>
        <li>failure recovery</li>
        <li>system observability</li>
      </ul>

      <p>This is why many “AI demos” never become real products.</p>

      <blockquote>The model works. The system does not.</blockquote>

      <h2>We Are Entering the Era of Compound AI Systems</h2>

      <p>The most important shift happening right now is the movement from:</p>

      <blockquote>single-model interactions</blockquote>

      <p>to</p>

      <blockquote>compound AI systems</blockquote>

      <p>Where multiple components work together dynamically.</p>

      <p>For example:</p>

      <ul>
        <li>planners</li>
        <li>retrievers</li>
        <li>evaluators</li>
        <li>tool executors</li>
        <li>memory systems</li>
        <li>workflow engines</li>
        <li>specialized agents</li>
        <li>observability layers</li>
      </ul>

      <p>all collaborating together.</p>

      <p>This is where AI starts behaving less like a chatbot and more like an operating system.</p>

      <h2>Why Autonomous Agents Matter</h2>

      <p>Autonomous agents are not simply “LLMs with tools.”</p>

      <p>They are systems capable of:</p>

      <ul>
        <li>reasoning over goals</li>
        <li>planning execution</li>
        <li>interacting with environments</li>
        <li>observing outcomes</li>
        <li>adapting behavior</li>
        <li>retrying failures</li>
        <li>coordinating workflows</li>
      </ul>

      <p>This changes AI from passive intelligence to operational intelligence.</p>

      <p>And operational intelligence is where enterprise transformation truly begins.</p>

      <h2>The Most Underrated Skill in AI Engineering</h2>

      <p>The highest leverage skill in AI right now is not prompt engineering.</p>

      <p>It is systems thinking.</p>

      <p>The engineers who will shape the future are the ones who understand how to combine:</p>

      <ul>
        <li>distributed systems</li>
        <li>data infrastructure</li>
        <li>orchestration</li>
        <li>retrieval</li>
        <li>memory architectures</li>
        <li>agent workflows</li>
        <li>evaluation pipelines</li>
        <li>observability</li>
        <li>human feedback loops</li>
      </ul>

      <p>into cohesive AI platforms.</p>

      <h2>The Companies That Win Will Build AI Infrastructure, Not AI Features</h2>

      <p>Most organizations are still building isolated AI features:</p>

      <ul>
        <li>chatbots</li>
        <li>copilots</li>
        <li>assistants</li>
        <li>summarizers</li>
      </ul>

      <p>But the companies that dominate the next decade will build reusable AI infrastructure.</p>

      <p>Internal platforms that provide:</p>

      <ul>
        <li>shared memory systems</li>
        <li>reusable retrieval pipelines</li>
        <li>orchestration frameworks</li>
        <li>agent governance</li>
        <li>evaluation tooling</li>
        <li>observability dashboards</li>
        <li>model routing</li>
        <li>enterprise grounding</li>
        <li>security boundaries</li>
      </ul>

      <blockquote>AI platforms, not AI experiments.</blockquote>

      <h2>The Bigger Shift Nobody Is Talking About</h2>

      <p>We are moving from:</p>

      <blockquote>software that waits for instructions</blockquote>

      <p>to</p>

      <blockquote>systems that pursue outcomes</blockquote>

      <p>That is a profound architectural change.</p>

      <p>And it will redefine engineering, operations, enterprise workflows, product design, and decision-making itself.</p>

      <p>The next generation of AI systems will not just assist humans.</p>

      <p>They will collaborate with humans. Reason with humans. Operate alongside humans.</p>

      <p>The future of AI is not one model.</p>

      <p>It is intelligent systems working together.</p>

      <p>That is where the real revolution begins.</p>

      <p><strong>— Debosmita Roy</strong><br />AI Systems Architect | Agentic AI | Enterprise Intelligence</p>
    `
  }
];

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProjectSlug, setActiveProjectSlug] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openCaseStudy = (slug) => {
    setActiveProjectSlug(slug);
    setPage("caseStudy");
    setMenuOpen(false);
    window.history.replaceState({ page: "caseStudy", slug }, "", `#project-${slug}`);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    setActiveProjectSlug(null);
    setPage("article");
    setMenuOpen(false);

    window.history.pushState(
      { page: "article", slug: article.slug },
      "",
      `#writing-${article.slug}`
    );

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

//   const openArticle = (article) => {
//   if (!article) return;

//   setSelectedArticle(article);
//   setPage("article");
//   setMenuOpen(false);

//   window.history.replaceState(
//     { page: "article", slug: article.slug },
//     "",
//     `#writing-${article.slug}`
//   );

//   setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
// };

//   const openArticle = (article) => {
//   setSelectedArticle(article);
//   setPage("article");
//   setMenuOpen(false);

//   window.history.replaceState(
//     { page: "article", slug: article.slug },
//     "",
//     `#writing-${article.slug}`
//   );

//   setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
// };

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash;

    if (hash.startsWith("#project-")) {
      const slug = hash.replace("#project-", "");
      const matchedProject = projects.find((project) => project.slug === slug);

      if (matchedProject) {
        setActiveProjectSlug(matchedProject.slug);
        setSelectedArticle(null);
        setPage("caseStudy");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      }

      return;
    }

    if (hash.startsWith("#writing-")) {
      const slug = hash.replace("#writing-", "");
      const matchedArticle = newsletterContent.find(
        (article) => article.slug === slug
      );

      if (matchedArticle) {
        setSelectedArticle(matchedArticle);
        setActiveProjectSlug(null);
        setPage("article");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    }
  }
};
    // const openFromHash = () => {
    //   const hash = window.location.hash.replace("#project-", "");
    //   const matchedProject = projects.find((project) => project.slug === hash);
    //   if (matchedProject) {
    //     setActiveProjectSlug(matchedProject.slug);
    //     setPage("caseStudy");
    //     setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    //   }
    // };

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
  setSelectedArticle(null);

  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }

  setPage(nextPage);
  setMenuOpen(false);
  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
};

  // const goToPage = (nextPage) => {
  //   setActiveProjectSlug(null);
  //   if (window.location.hash) {
  //     window.history.replaceState(null, "", window.location.pathname);
  //   }
  //   setPage(nextPage);
  //   setMenuOpen(false);
  //   setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  // };

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
      {page === "learning" && <LearningPage goToPage={goToPage} />}
      {page === "caseStudy" && (
        <CaseStudyPage
          project={projects.find((project) => project.slug === activeProjectSlug) || projects[0]}
          goToPage={goToPage}
        />
      )}
      {page === "writing" && <WritingPage openArticle={openArticle} />}
      {page === "speaking" && <SpeakingPage />}
      {page === "resources" && <ResourcesPage />}
      {page === "contact" && <ContactPage />}
      {page === "privacy" && <PrivacyPolicyPage />}
      {page === "terms" && <TermsPage />}
      {page === "home" && <NewsletterSection />}
      {page === "home" && <SpotifyPlaylistSection />}
      {page === "article" && (
        <ArticlePage
          article={selectedArticle}
          goToPage={goToPage}
        />
      )}
      <Footer goToPage={goToPage} />
    </div>
  );
}

function HomePage({ goToPage }) {
  const calendlyLink = "https://calendly.com/debosmitaroy-ai/30min?month=2026-06";

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
            I architect and build AI & ML powered platforms and multi-agent systems that solve real-world problems and drive measurable impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => goToPage("projects")} className="rounded-2xl bg-[#caa177] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-[#d8b58d]">
              View My Work →
            </button>

            <button onClick={() => goToPage("contact")} className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#caa177] hover:text-[#caa177]">
              Let’s Connect →
            </button>

            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#caa177]/60 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#caa177] transition hover:bg-[#caa177] hover:text-black"
            >
              Book a Call →
            </a>

            <button
              type="button"
              onClick={() => goToPage("learning")}
              className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#caa177] hover:text-[#caa177]"
            >
              Learn AI →
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

// function HomePage({ goToPage }) {
//   return (
//     <main>
//       <section className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl gap-12 overflow-hidden px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
//         <div className="absolute left-1/2 top-20 h-96 w-96 rounded-full bg-[#caa177]/10 blur-3xl" />

//         <div className="relative z-10">
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">AI Architect & Engineering Leader</p>
//           <h1 className="mt-8 max-w-3xl font-serif text-5xl font-light leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
//             Building Intelligent Systems that Scale
//           </h1>

//           <div className="mt-8 flex items-center gap-3">
//             <div className="h-px w-16 bg-[#caa177]" />
//             <div className="h-1.5 w-1.5 rounded-full bg-[#caa177]" />
//           </div>

//           <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
//             I architect and build AI & ML powered platforms and multi-agent systems that solve real-world problems and drive measurable impact.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <button onClick={() => goToPage("projects")} className="rounded-2xl bg-[#caa177] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-[#d8b58d]">
//               View My Work →
//             </button>
//             <button onClick={() => goToPage("contact")} className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#caa177] hover:text-[#caa177]">
//               Let’s Connect →
//             </button>
//           </div>

//           <div className="mt-14 flex items-center gap-4 text-zinc-500">
//             <div className="h-px w-16 bg-zinc-700" />
//             <span className="text-xs uppercase tracking-[0.35em]">Scroll</span>
//             <div className="animate-bounce text-lg text-[#caa177]">↓</div>
//           </div>
//         </div>

//         <div className="relative z-10 flex justify-center lg:justify-end">
//           <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-[#111111] to-black shadow-2xl">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(202,161,119,0.24),transparent_42%)]" />
//             <img
//               src="/assets/debosmita-hero.png"
//               alt="Debosmita Roy"
//               className="relative z-10 h-[620px] w-full object-cover object-[center_top] scale-[1.02]"
//             />
//           </div>
//         </div>
//       </section>
//       <CalloutGrid goToPage={goToPage} />
//     </main>
//   );
// }

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
          <article
            key={project.title}
            className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600"
          >
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
              <button
                type="button"
                onClick={() => openCaseStudy(project.slug)}
                className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
              >
                Open Case Study →
              </button>

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-2xl border border-zinc-700 px-5 py-3 font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900"
                >
                  GitHub →
                </a>
              )}

              {project.paperLink && (
                <a
                  href={project.paperLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-2xl border border-[#caa177]/60 px-5 py-3 font-semibold text-[#caa177] transition hover:bg-[#caa177] hover:text-black"
                >
                  IEEE Paper →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function LearningPage({ goToPage }) {
  const tracks = [
    {
      title: "AI Foundations",
      items: ["How LLMs work", "Prompting", "Embeddings", "RAG", "Evaluation"]
    },
    {
      title: "Data Science Foundations",
      items: ["Python", "SQL", "Statistics", "EDA", "Dashboards"]
    },
    {
      title: "Machine Learning",
      items: ["Supervised ML", "Feature engineering", "Model training", "Validation", "Deployment"]
    },
    {
      title: "Agentic AI Engineering",
      items: ["Tool use", "Memory", "Planning", "Multi-agent workflows", "Observability"]
    },
    {
      title: "Production AI Projects",
      items: ["Chatbots", "RAG apps", "AI agents", "MLOps pipelines", "LLM-powered products"]
    },
    {
      title: "Research & White Papers",
      items: ["Guides", "Architecture notes", "Case studies", "Quizzes", "Hands-on labs"]
    }
  ];

  return (
    <PageShell eyebrow="Learning Platform" title="Learn AI, ML, data science, and agentic systems by building real projects.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <article key={track.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
            <h2 className="text-2xl font-bold text-white">{track.title}</h2>
            <ul className="mt-5 space-y-3 text-zinc-400">
              {track.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-[#caa177]/40 bg-[#caa177]/10 p-8">
        <h2 className="text-3xl font-bold text-white">Hands-on Practice Lab</h2>
        <p className="mt-4 leading-8 text-zinc-300">
          Students will learn by building chatbots, RAG systems, agents, data pipelines, dashboards, and production-style AI apps with guided exercises, quizzes, templates, and project reviews.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://calendly.com/debosmitaroy-ai/30min?month=2026-06"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-[#caa177] px-6 py-3 font-semibold text-black transition hover:bg-[#d8b58d]"
          >
            Book a Learning Call →
          </a>

          <button
            type="button"
            onClick={() => goToPage("resources")}
            className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-[#caa177] hover:text-[#caa177]"
          >
            Explore Resources →
          </button>
        </div>
      </div>
    </PageShell>
  );
}

// function ProjectsPage({ openCaseStudy }) {
//   return (
//     <PageShell eyebrow="Projects" title="AI product case studies built as a production-inspired portfolio.">
//       <div className="grid gap-8 md:grid-cols-2">
//         {projects.map((project) => (
//           <article key={project.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600">
//             <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">{project.subtitle}</p>
//             <h2 className="mt-4 text-3xl font-bold">{project.title}</h2>
//             <p className="mt-5 leading-8 text-zinc-400">{project.desc}</p>

//             <div className="mt-6 flex flex-wrap gap-2">
//               {project.tags.map((tag) => (
//                 <span key={tag} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-7 flex flex-wrap gap-3">
//               <button type="button" onClick={() => openCaseStudy(project.slug)} className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]">
//                 Open Case Study →
//               </button>
//               <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl border border-zinc-700 px-5 py-3 font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900">
//                 GitHub →
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </PageShell>
//   );
// }

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

function ArticlePage({ article, goToPage }) {
  if (!article) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <button
          onClick={() => goToPage("writing")}
          className="mb-10 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
        >
          ← Back to Writing
        </button>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
          <h1 className="text-3xl font-semibold text-white">
            Article not found
          </h1>
          <p className="mt-4 text-zinc-400">
            Please go back to the Writing page and select an article again.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <button
        onClick={() => goToPage("writing")}
        className="mb-10 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
      >
        ← Back to Writing
      </button>

      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-14">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#caa177]">
          <span>{article.category || "Newsletter"}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          {article.date && (
            <>
              <span>•</span>
              <span>{article.date}</span>
            </>
          )}
        </div>

        <h1 className="mt-6 text-4xl font-light leading-tight text-white md:text-6xl">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="mt-6 text-xl leading-9 text-zinc-300">
            {article.subtitle}
          </p>
        )}

        <article
          className="newsletter-article mt-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </main>
  );
}

// function ArticlePage({ article, goToPage }) {
//   if (!article) return null;

//   return (
//     <main className="mx-auto max-w-4xl px-6 py-20">
//       <button
//         onClick={() => goToPage("writing")}
//         className="mb-10 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
//       >
//         ← Back to Writing
//       </button>

//       <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-14">
//         <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#caa177]">
//           <span>Newsletter</span>
//           <span>•</span>
//           <span>{article.readTime}</span>
//         </div>

//         <h1 className="mt-6 text-4xl font-light leading-tight text-white md:text-6xl">
//           {article.title}
//         </h1>

//         <p className="mt-6 text-xl leading-9 text-zinc-300">
//           {article.subtitle}
//         </p>

//         <div className="newsletter-article mt-12">
//              dangerouslySetInnerHTML={{ __html: article.content }}
//         </div>
//       </div>
//     </main>
//   );
// }

// function WritingPage() {
//   const [selectedPost, setSelectedPost] = useState(null);

//   if (selectedPost) {
//     return (
//       <PageShell eyebrow="Newsletter" title={selectedPost.title}>
//         <button
//           onClick={() => setSelectedPost(null)}
//           className="mb-8 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
//         >
//           ← Back to Writing
//         </button>

//         <div className="mb-8 text-sm uppercase tracking-[0.2em] text-[#caa177]">
//           {selectedPost.category} • {selectedPost.date} • {selectedPost.readTime}
//         </div>

//         {selectedPost.subtitle && (
//           <p className="mb-10 max-w-3xl text-xl leading-8 text-zinc-300">
//             {selectedPost.subtitle}
//           </p>
//         )}

//         <article
//           className="newsletter-article"
//           dangerouslySetInnerHTML={{ __html: selectedPost.content }}
//         />
//       </PageShell>
//     );
//   }

//   return (
//     <PageShell eyebrow="Writing" title="Ideas on AI, Systems & Engineering">
//       <div className="grid gap-6 md:grid-cols-2">
//         {newsletterContent.map((post) => (
//           <article
//             key={post.slug}
//             className={`newsletter-card ${
//               post.featured ? "md:col-span-2 border-[#caa177]/60" : ""
//             }`}
//           >
//             <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#caa177]">
//               <span>{post.category}</span>
//               <span>•</span>
//               <span>{post.readTime}</span>
//               <span>•</span>
//               <span>{post.date}</span>
//             </div>

//             <h2 className="text-2xl font-semibold text-white">{post.title}</h2>

//             {post.subtitle && (
//               <p className="mt-3 text-zinc-400">{post.subtitle}</p>
//             )}

//             <p className="mt-4 text-zinc-500">{post.excerpt}</p>

//             <button
//               onClick={() => setSelectedPost(post)}
//               className="mt-6 rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
//             >
//               Read Newsletter →
//             </button>
//           </article>
//         ))}
//       </div>
//     </PageShell>
//   );
// }

function NewsletterFeature() {
  return (
    <section className="mt-16 overflow-hidden rounded-[32px] border border-[#caa177]/30 bg-gradient-to-br from-[#151515] via-[#101010] to-black">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-8 md:p-12">
          <div className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
            Newsletter • Issue 001
          </div>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            What NemoClaw Teaches Us About the Future of Agentic AI
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Most AI systems today are still reactive.
            They answer questions, summarize content, or generate outputs on demand.
            But the next generation of AI systems will do much more:
            they will observe environments, reason continuously,
            coordinate actions, recover from failures,
            and evolve through feedback loops.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            NemoClaw is my teaching framework for explaining how
            resilient, operational, environment-aware agentic systems
            are beginning to emerge across engineering platforms,
            developer tooling, observability systems,
            and enterprise AI infrastructure.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Adaptive orchestration",
              "Environment-aware agents",
              "AI observability",
              "Feedback-driven workflows",
              "Long-term memory systems",
              "Human-in-the-loop governance",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-zinc-300 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-[#caa177] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#ddb892]">
              Read Full Newsletter
            </button>

            <button className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300 hover:text-cyan-200">
              Subscribe
            </button>
          </div>
        </div>

        <div className="relative hidden overflow-hidden border-l border-white/5 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(202,161,119,0.18),transparent_55%)]" />

          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#caa177]/10 blur-3xl" />

          <div className="relative flex h-full flex-col justify-between p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Teaching Focus
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Why current AI agents fail in production",
                  "The evolution from reactive AI to operational AI",
                  "Memory graphs & orchestration layers",
                  "Observability-driven AI systems",
                  "Enterprise readiness for autonomous workflows",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <p className="text-sm leading-7 text-zinc-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-6">
              <p className="text-sm leading-7 text-zinc-300">
                “The future of AI will not belong to systems
                that simply generate answers.
                It will belong to systems that can observe,
                adapt, recover, coordinate, and operate
                continuously under real-world constraints.”
              </p>

              <div className="mt-5 text-xs uppercase tracking-[0.22em] text-cyan-200">
                — Debosmita Roy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WritingPage({ openArticle }) {
  const posts = [
    ...newsletterContent.map((newsletter, index) => ({
      title: newsletter.title,
      slug: newsletter.slug,
      type: index === 0 ? "First Newsletter" : "Featured Newsletter",
      readTime: newsletter.readTime,
      body:
        newsletter.excerpt ||
        newsletter.subtitle ||
        "A practical essay on AI architecture, agentic systems, enterprise intelligence, and production-ready AI.",
      tags: [
        newsletter.category || "Agentic AI",
        "AI Architecture",
        "Enterprise AI",
      ],
      featured: newsletter.featured || index === 0,
      article: newsletter,
    })),
    {
      title: "Why Most Agentic AI Systems Fail in Production",
      type: "Architecture Note",
      readTime: "5 min read",
      body:
        "A practical breakdown of context fragmentation, brittle tool-calling, missing observability, weak evaluation loops, and governance gaps.",
      tags: ["Production AI", "Reliability", "Agents"],
    },
    {
      title: "Enterprise RAG Needs Observability, Not Just Retrieval",
      type: "Technical Essay",
      readTime: "4 min read",
      body:
        "How retrieval quality, answer grounding, telemetry, source traceability, and evaluation should work together in enterprise AI systems.",
      tags: ["RAG", "Observability", "LLMOps"],
    },
    {
      title: "From Test Automation to Autonomous Engineering Intelligence",
      type: "Builder Journal",
      readTime: "5 min read",
      body:
        "How modern QA, SDLC automation, build intelligence, and agentic workflows can evolve into AI-native engineering platforms.",
      tags: ["SDLC AI", "Build Agents", "Automation"],
    },
  ];

  return (
    <PageShell
      eyebrow="Writing"
      title="AI Notes, Architecture Thinking & Builder Essays"
    >
      <p className="mb-10 max-w-3xl text-zinc-400">
        I write to teach how AI systems are designed, evaluated, observed, and
        productized. My focus is practical: how to move from interesting demos
        to reliable, explainable, production-ready AI systems.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <button
            key={post.slug || post.title}
            type="button"
            onClick={() => {
              if (post.article) {
                openArticle(post.article);
              }
            }}
            className={`group rounded-3xl border p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#caa177]/60 ${
              post.featured
                ? "border-[#caa177]/50 bg-[#caa177]/10 md:col-span-2"
                : "border-zinc-800 bg-zinc-950/80"
            }`}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#caa177]">
              <span>{post.type}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="text-2xl font-semibold text-white transition group-hover:text-[#e2c19f]">
              {post.title}
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">{post.body}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {post.article && (
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#caa177] transition group-hover:translate-x-1">
                Read Full Article
                <span>→</span>
              </div>
            )}
          </button>
        ))}
      </div>

      <section className="mt-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
          Newsletter Series
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Agentic AI, RAG, Observability & Enterprise Intelligence
        </h2>
        <p className="mt-5 text-zinc-300">
          This writing series explores how AI systems evolve from reactive demos
          into operational platforms that can observe signals, reason over
          context, use tools, adapt to feedback, and recover when workflows fail.
        </p>
        <p className="mt-4 text-zinc-400">
          I will continue sharing practical architecture notes on adaptive
          orchestration, memory graphs, RAG, AI observability,
          human-in-the-loop governance, and production readiness for multi-agent
          systems.
        </p>
      </section>
    </PageShell>
  );
}

// function WritingPage({ openArticle }) {
//   <NewsletterFeature />
//   const posts = [
//   {
//     title: newsletterContent.title,
//     slug: newsletterContent.slug,
//     type: "Featured Newsletter",
//     readTime: "6 min read",
//     body:
//       "A teaching-first introduction to environment-aware agents, adaptive orchestration, memory, feedback loops, and why the future of AI is operational — not just conversational.",
//     tags: ["NemoClaw", "Agentic AI", "AI Architecture"],
//     featured: true,
//   },
//     {
//       title: "Why Most Agentic AI Systems Fail in Production",
//       type: "Architecture Note",
//       readTime: "5 min read",
//       body:
//         "A practical breakdown of context fragmentation, brittle tool-calling, missing observability, weak evaluation loops, and governance gaps.",
//       tags: ["Production AI", "Reliability", "Agents"],
//     },
//     {
//       title: "Enterprise RAG Needs Observability, Not Just Retrieval",
//       type: "Technical Essay",
//       readTime: "4 min read",
//       body:
//         "How retrieval quality, answer grounding, telemetry, source traceability, and evaluation should work together in enterprise AI systems.",
//       tags: ["RAG", "Observability", "LLMOps"],
//     },
//     {
//       title: "From Test Automation to Autonomous Engineering Intelligence",
//       type: "Builder Journal",
//       readTime: "5 min read",
//       body:
//         "How modern QA, SDLC automation, build intelligence, and agentic workflows can evolve into AI-native engineering platforms.",
//       tags: ["SDLC AI", "Build Agents", "Automation"],
//     },
//   ];

//   return (
//     <PageShell eyebrow="Writing" title="AI Notes, Architecture Thinking & Builder Essays">
//       <p className="mb-10 max-w-3xl text-zinc-400">
//         I write to teach how AI systems are designed, evaluated, observed, and productized.
//         My focus is practical: how to move from interesting demos to reliable, explainable,
//         production-ready AI systems.
//       </p>

//       <div className="grid gap-6 md:grid-cols-2">
//         {posts.map((post) => (
//           // <article
//           //   key={post.title}
//           //   className={`rounded-3xl border p-7 transition hover:-translate-y-1 hover:border-[#caa177]/60 ${
//           //     post.featured
//           //       ? "border-[#caa177]/50 bg-[#caa177]/10 md:col-span-2"
//           //       : "border-zinc-800 bg-zinc-950/80"
//           //   }`}
//           // >
//           //   <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#caa177]">
//           //     <span>{post.type}</span>
//           //     <span>•</span>
//           //     <span>{post.readTime}</span>
//           //   </div>

//           //   <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
//           //   <p className="mt-4 text-zinc-400">{post.body}</p>

//           //   <div className="mt-6 flex flex-wrap gap-2">
//           //     {post.tags.map((tag) => (
//           //       <span
//           //         key={tag}
//           //         className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
//           //       >
//           //         {tag}
//           //       </span>
//           //     ))}
//           //   </div>
//           // </article>
//           <button
//             key={post.title}
//             type="button"
//             onClick={() => {
//               if (post.slug) {
//                 openArticle({
//                   ...newsletterContent,
//                 });
//               }
//             }}
//             className={`group rounded-3xl border p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#caa177]/60 ${
//               post.featured
//                 ? "border-[#caa177]/50 bg-[#caa177]/10 md:col-span-2"
//                 : "border-zinc-800 bg-zinc-950/80"
//             }`}
//           >
//             <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#caa177]">
//               <span>{post.type}</span>
//               <span>•</span>
//               <span>{post.readTime}</span>
//             </div>

//             <h2 className="text-2xl font-semibold text-white transition group-hover:text-[#e2c19f]">
//               {post.title}
//             </h2>

//             <p className="mt-4 leading-7 text-zinc-400">
//               {post.body}
//             </p>

//             <div className="mt-6 flex flex-wrap gap-2">
//               {post.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {post.slug && (
//               <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#caa177] transition group-hover:translate-x-1">
//                 Read Full Article
//                 <span>→</span>
//               </div>
//             )}
//           </button>
//         ))}
//       </div>

//       <section className="mt-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
//         <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
//           First Newsletter
//         </p>
//         <h2 className="mt-3 text-3xl font-semibold text-white">
//           What NemoClaw Teaches Us About the Future of Agentic AI
//         </h2>
//         <p className="mt-5 text-zinc-300">
//           NemoClaw is my teaching lens for explaining the next generation of agentic
//           systems: AI that can observe signals, reason over context, use tools,
//           adapt to feedback, and recover when workflows fail.
//         </p>
//         <p className="mt-4 text-zinc-400">
//           Most AI products today are still reactive. They answer, summarize, or
//           autocomplete. The next wave will be operational: agents that understand
//           systems, coordinate actions, monitor their own outcomes, and stay aligned
//           with human intent.
//         </p>
//         <p className="mt-4 text-zinc-400">
//           Through NemoClaw, I will teach concepts like adaptive orchestration,
//           memory graphs, feedback loops, AI observability, human-in-the-loop
//           governance, and production readiness for multi-agent systems.
//         </p>
//       </section>
//     </PageShell>
//   );
// }

function SpeakingPage() {
  const topics = [
    {
      title: "Agentic AI in Enterprise Engineering",
      desc:
        "How AI agents can support build intelligence, test generation, release confidence, and operational decision-making.",
    },
    {
      title: "AI-Native Developer Platforms",
      desc:
        "How engineering teams can evolve from automation scripts to intelligent platforms that reason, recommend, and act.",
    },
    {
      title: "RAG, Governance & Production Readiness",
      desc:
        "How to design trustworthy RAG systems with source grounding, evaluation, observability, and responsible AI controls.",
    },
    {
      title: "Observability-Driven AI Systems",
      desc:
        "Why agent telemetry, tool-call traces, feedback loops, and failure classification are essential for production AI.",
    },
  ];

  return (
    <PageShell eyebrow="Speaking" title="Talks, Workshops & AI Leadership Sessions">
      <p className="mb-10 max-w-3xl text-zinc-400">
        I speak about AI through the lens of engineering execution: how to design,
        adopt, govern, and scale AI systems inside real organizations.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7 transition hover:-translate-y-1 hover:border-[#caa177]/50"
          >
            <h2 className="text-2xl font-semibold text-white">{topic.title}</h2>
            <p className="mt-4 text-zinc-400">{topic.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-[#caa177]/30 bg-[#caa177]/10 p-8">
        <h2 className="text-2xl font-semibold text-white">
          Available Speaking Formats
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Executive Briefings", "Engineering Workshops", "AI Town Halls"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-5 text-zinc-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// function ResourcesPage() {
//   return (
//     <PageShell eyebrow="Resources" title="AI systems, portfolio assets, and learning resources.">
//       <div className="grid gap-6 md:grid-cols-2">
//         {["GitHub AI SaaS Monorepo", "Agentic AI Portfolio", "RAG Architecture Notes", "AI Observability Checklist"].map((item) => (
//           <div key={item} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
//             <h2 className="text-2xl font-bold">{item}</h2>
//             <p className="mt-3 leading-7 text-zinc-400">A resource designed to make AI architecture, implementation, and communication easier to understand.</p>
//           </div>
//         ))}
//       </div>
//     </PageShell>
//   );
// }

function ResourcesPage() {
  const resources = [
    {
      title: "Agentic AI Production Readiness Checklist",
      desc:
        "A practical checklist for evaluating orchestration, tools, memory, guardrails, telemetry, and failure recovery.",
    },
    {
      title: "RAG Architecture Blueprint",
      desc:
        "A reference guide for ingestion, chunking, embeddings, retrieval, reranking, grounding, and evaluation.",
    },
    {
      title: "AI Build Agent Design Notes",
      desc:
        "A systems-thinking guide for designing build agents that analyze pipelines, failures, code quality, and release risks.",
    },
    {
      title: "Executive AI Adoption Scorecard",
      desc:
        "A leadership-friendly framework to assess business value, risk, maturity, governance, and adoption readiness.",
    },
  ];

  return (
    <PageShell eyebrow="Resources" title="Templates, Blueprints & Practical AI Guides">
      <p className="mb-10 max-w-3xl text-zinc-400">
        These resources are designed to help engineers, leaders, and builders move
        from AI curiosity to AI execution.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7 transition hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-cyan-200">
              Resource
            </p>
            <h2 className="text-2xl font-semibold text-white">{resource.title}</h2>
            <p className="mt-4 text-zinc-400">{resource.desc}</p>
            <button className="mt-6 rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300 hover:text-cyan-200">
              Coming Soon →
            </button>
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
