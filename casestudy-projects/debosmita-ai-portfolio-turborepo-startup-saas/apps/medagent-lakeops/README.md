# MedAgent LakeOps

Agentic MLOps framework demo for clinical data lakes, healthcare interoperability, radiology metadata intelligence, and autonomous healthcare AI readiness.

This project implements a production-inspired FastAPI service based on the MedAgent LakeOps IEEE research paper. It simulates how autonomous agents can orchestrate EHR, radiology, laboratory, operational, and patient engagement data into a governed clinical lakehouse.

## What it demonstrates

- Clinical ingestion and semantic normalization workflows
- FHIR, DICOM, HL7, and OMOP-inspired interoperability readiness
- Radiology metadata enrichment and retrieval scoring
- Agentic MLOps readiness across training, deployment, monitoring, drift detection, and remediation
- Patient intelligence routing for physician-facing decision support

## Run locally

```bash
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8007
```

Open API docs:

```text
http://localhost:8007/docs
```

## Run with Docker

```bash
docker build -t medagent-lakeops .
docker run -p 8007:8007 medagent-lakeops
```

## API endpoints

- `GET /health` - service health and dataset availability
- `GET /metadata` - project metadata and dataset inventory
- `POST /analyze` - full healthcare lakehouse analysis workflow
- `POST /patient/intelligence` - patient intelligence summary
- `POST /mlops/readiness` - healthcare model deployment readiness score

## Portfolio positioning

MedAgent LakeOps is a research-to-product case study for healthcare AI teams building governed data platforms, agentic MLOps, semantic interoperability, and clinical intelligence workflows.
