# Debosmita Roy AI SaaS Portfolio Turborepo

Production-grade startup demo monorepo containing a portfolio web app, AI SaaS dashboard, and five executable FastAPI AI products.

## Apps
- `apps/web` — React/Tailwind portfolio website. Opens at http://localhost:3000
- `apps/dashboard` — Next.js SaaS command center. Opens at http://localhost:3001
- `apps/cogniintel` — RAG knowledge intelligence API. Docs: http://localhost:8001/docs
- `apps/quantumroute-ai` — Optimization API. Docs: http://localhost:8002/docs
- `apps/agentops-sentinel` — Agent observability API. Docs: http://localhost:8003/docs
- `apps/insightforge` — Analytics API. Docs: http://localhost:8004/docs
- `apps/neurorecruit` — Talent intelligence API. Docs: http://localhost:8005/docs

## Production Demo Stack
- PostgreSQL + pgvector
- Redis cache/queue foundation
- JWT auth and API-key auth
- Real LLM integration hook using OpenAI-compatible SDK
- Dockerfile per app/service
- Docker Compose orchestration
- GitHub Actions CI scaffold
- Real-world-style local datasets for every product

## Run Everything
```bash
cp .env.example .env
docker compose up --build
```

Open:
- Portfolio: http://localhost:3000
- SaaS Dashboard: http://localhost:3001

## Auth
Each API supports:
```bash
curl -X POST http://localhost:8001/auth/token \
  -H "Content-Type: application/json" \
  -d '{"username":"demo@portfolio.ai","password":"demo"}'
```

Then call APIs with either:
```bash
-H "Authorization: Bearer <token>"
```
or:
```bash
-H "x-api-key: demo-api-key"
```

## Real LLM Mode
Set in `.env`:
```bash
LLM_PROVIDER=openai
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4o-mini
```

Without an API key, services run in safe mock-LLM mode so the repo is executable immediately.
