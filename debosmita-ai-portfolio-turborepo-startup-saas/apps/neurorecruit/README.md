# NeuroRecruit

Production-style FastAPI microservice for the Debosmita Roy AI SaaS portfolio.

## Run with Docker

```bash
docker build -t neurorecruit .
docker run --env-file ../../.env.example -p 8015:8000 neurorecruit
```

Open API docs: `http://localhost:8015/docs`

## SaaS endpoints

- `GET /health` - container/platform health probe
- `GET /version` - app metadata
- `POST /match` - project-specific AI/data workflow

## Production extension ideas

- Replace placeholder API key middleware with OAuth/OIDC or gateway auth
- Persist usage telemetry to Postgres/ClickHouse
- Add rate limiting at the API gateway
- Deploy each service independently to Kubernetes, Fly.io, Render, Railway, or internal PaaS
