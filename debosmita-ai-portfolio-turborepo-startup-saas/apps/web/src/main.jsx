import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import "./styles.css";

const projects = [
  { slug: "cogniintel", title: "CogniIntel", desc: "Autonomous enterprise knowledge extraction using multi-agent RAG systems.", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c", github: "https://github.com/debosmita-roy/cogniintel", stack: ["RAG", "FAISS-like retrieval", "Agent orchestration"], caseStudy: `CogniIntel is a multi-agent RAG system designed to unify fragmented enterprise knowledge.

Implementation included in this repo:
- Document ingestion over policy and support datasets
- TF-IDF retrieval baseline
- Agent planner, retriever, critic, and answer composer
- Evaluation harness for grounded answers

Impact simulation:
- Faster knowledge lookup
- Reduced manual document triage
- Better traceability from answer to source` },
  { slug: "quantumroute-ai", title: "QuantumRoute AI", desc: "Quantum-inspired optimization for enterprise scheduling and resource allocation.", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb", github: "https://github.com/debosmita-roy/quantumroute-ai", stack: ["Optimization", "Scheduling", "Heuristics"], caseStudy: `QuantumRoute AI solves combinatorial scheduling problems using quantum-inspired search.

Implementation included in this repo:
- Resource, task, and constraint dataset
- Simulated annealing optimizer
- Constraint-aware scoring engine
- Allocation report generator` },
  { slug: "agentops-sentinel", title: "AgentOps Sentinel", desc: "Observability platform for monitoring multi-agent AI systems in production.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", github: "https://github.com/debosmita-roy/agentops-sentinel", stack: ["Observability", "Risk scoring", "Telemetry"], caseStudy: `AgentOps Sentinel provides observability for agentic AI systems.

Implementation included in this repo:
- Agent telemetry parser
- Hallucination and tool failure risk scoring
- Token efficiency analytics
- Executive summary report` },
  { slug: "insightforge", title: "InsightForge", desc: "Autonomous BI system converting natural language into SQL and insights.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", github: "https://github.com/debosmita-roy/insightforge", stack: ["Analytics", "SQL", "BI automation"], caseStudy: `InsightForge is an autonomous analytics engine.

Implementation included in this repo:
- SQLite analytics layer over sample sales data
- NL-to-SQL pattern engine
- Insight summarizer
- KPI report output` },
  { slug: "neurorecruit", title: "NeuroRecruit", desc: "AI-powered talent intelligence and job-candidate matching engine.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", github: "https://github.com/debosmita-roy/neurorecruit", stack: ["Embeddings", "Skill graph", "Ranking"], caseStudy: `NeuroRecruit matches candidates to roles using skill graph embeddings.

Implementation included in this repo:
- Candidate and job datasets
- Skill normalization
- Cosine similarity ranking
- Explainable match reasons` }
];

function getProjectBySlug(slug) { return projects.find(p => p.slug === slug); }
function CaseStudy({ project }) { return <main className="case"><button onClick={() => { history.pushState({}, "", "/"); dispatchEvent(new PopStateEvent("popstate")); }}>← Back to Projects</button><h1>{project.title}</h1><img src={project.img}/><p>{project.caseStudy}</p><div className="chips">{project.stack.map(s=><span key={s}>{s}</span>)}</div><a className="primary" href={project.github}>View GitHub Repository <ArrowRight size={16}/></a></main>; }
function App(){ const [route,setRoute]=useState(location.pathname); useEffect(()=>{const f=()=>setRoute(location.pathname); addEventListener('popstate',f); return()=>removeEventListener('popstate',f)},[]); const slug=route.startsWith('/projects/')?route.replace('/projects/',''):null; const selected=slug&&getProjectBySlug(slug); if(selected) return <CaseStudy project={selected}/>; return <div><nav><b>Debosmita Roy</b><div><a href="#projects">Projects</a><a href="#impact">Impact</a><a href="https://github.com/debosmita-roy"><Github size={18}/></a><a href="https://www.linkedin.com/in/debosmita-roy-b0964921/"><Linkedin size={18}/></a></div></nav><section className="hero"><p className="eyebrow">AI • Data Analytics • Agentic Systems</p><h1>Building Autonomous AI Systems for Enterprise Intelligence</h1><p>Five portfolio-ready implementations packaged as a Turborepo: RAG, optimization, observability, analytics, and talent intelligence.</p></section><section id="projects" className="grid">{projects.map(p=><article onClick={()=>{history.pushState({},'',`/projects/${p.slug}`); dispatchEvent(new PopStateEvent('popstate'));}} key={p.slug}><img src={p.img}/><div><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div><b>Open case study →</b></div></article>)}</section><section id="impact" className="impact"><h2>Enterprise Impact</h2><p>Designed to communicate architecture depth, hands-on implementation, dataset-driven thinking, and leadership-level AI product vision.</p></section></div> }

createRoot(document.getElementById('root')).render(<App/>);
