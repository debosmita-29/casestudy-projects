# QuantumRoute AI

Production-style FastAPI microservice for the Debosmita Roy AI SaaS portfolio.

## Run with Docker

```bash
docker build -t quantumroute-ai .
docker run --env-file ../../.env.example -p 8012:8000 quantumroute-ai
```

Open API docs: `http://localhost:8012/docs`

## SaaS endpoints

- `GET /health` - container/platform health probe
- `GET /version` - app metadata
- `POST /optimize` - project-specific AI/data workflow

## Production extension ideas

- Replace placeholder API key middleware with OAuth/OIDC or gateway auth
- Persist usage telemetry to Postgres/ClickHouse
- Add rate limiting at the API gateway
- Deploy each service independently to Kubernetes, Fly.io, Render, Railway, or internal PaaS
