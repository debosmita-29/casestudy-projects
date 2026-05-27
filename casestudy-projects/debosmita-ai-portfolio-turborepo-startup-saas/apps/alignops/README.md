# AlignOps

Distributed AI infrastructure demo for reinforcement learning alignment, multimodal inference, GPU orchestration, and cost-aware AI operations.

This project implements a production-inspired FastAPI service based on the AlignOps IEEE research paper. It simulates how an AI infrastructure control plane can evaluate training runs, inference workloads, GPU cluster utilization, and optimization actions across large-scale generative AI systems.

## What it demonstrates

- PPO, DPO, and GRPO alignment workload tracking
- Distributed training stability and checkpoint recovery scoring
- Multimodal and diffusion inference throughput analysis
- GPU utilization, memory pressure, communication overhead, and cost intelligence
- Hardware-aware optimization recommendations

## Run locally

```bash
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8006
```

Open API docs:

```text
http://localhost:8006/docs
```

## Run with Docker

```bash
docker build -t alignops .
docker run -p 8006:8006 alignops
```

## API endpoints

- `GET /health` - service health and dataset availability
- `GET /metadata` - project metadata and dataset inventory
- `POST /analyze` - full infrastructure analysis workflow
- `POST /alignment/evaluate` - alignment run scoring
- `POST /inference/optimize` - multimodal inference optimization plan

## Portfolio positioning

AlignOps is a research-to-product case study for distributed AI infrastructure teams building scalable alignment, multimodal serving, observability, and GPU optimization systems.
