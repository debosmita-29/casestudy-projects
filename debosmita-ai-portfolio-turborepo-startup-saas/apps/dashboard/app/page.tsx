const services = [
  ["CogniIntel", "http://localhost:8001/docs", "RAG knowledge intelligence"],
  ["QuantumRoute AI", "http://localhost:8002/docs", "Optimization engine"],
  ["AgentOps Sentinel", "http://localhost:8003/docs", "Agent observability"],
  ["InsightForge", "http://localhost:8004/docs", "NL to analytics"],
  ["NeuroRecruit", "http://localhost:8005/docs", "Talent intelligence"]
];
export default function Page(){return <main style={{padding:40}}><h1 style={{fontSize:44}}>AI SaaS Command Center</h1><p style={{color:'#aaa'}}>Startup-demo dashboard connected to five Dockerized AI products with JWT, Redis, Postgres/pgvector, and LLM hooks.</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:18,marginTop:30}}>{services.map(([n,u,d])=><a key={n} href={u} style={{padding:24,border:'1px solid #333',borderRadius:18,background:'#111',color:'white',textDecoration:'none'}}><h2>{n}</h2><p style={{color:'#aaa'}}>{d}</p><span style={{color:'#60a5fa'}}>Open API docs →</span></a>)}</div><section style={{marginTop:40,padding:24,border:'1px solid #333',borderRadius:18}}><h2>Demo Login</h2><code>POST /auth/token</code><p style={{color:'#aaa'}}>Use returned Bearer token or x-api-key: demo-api-key.</p></section></main>}
