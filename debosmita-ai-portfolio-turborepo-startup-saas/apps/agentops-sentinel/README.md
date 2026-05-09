# AgentOps Sentinel

Production-style FastAPI microservice for the Debosmita Roy AI SaaS portfolio.

## Run with Docker

```bash
docker build -t agentops-sentinel .
docker run --env-file ../../.env.example -p 8013:8000 agentops-sentinel
```

Open API docs: `http://localhost:8013/docs`

## SaaS endpoints

- `GET /health` - container/platform health probe
- `GET /version` - app metadata
- `POST /analyze` - project-specific AI/data workflow

## Production extension ideas

- Replace placeholder API key middleware with OAuth/OIDC or gateway auth
- Persist usage telemetry to Postgres/ClickHouse
- Add rate limiting at the API gateway
- Deploy each service independently to Kubernetes, Fly.io, Render, Railway, or internal PaaS
