from pathlib import Path
from typing import Optional

import pandas as pd
from fastapi import Depends, FastAPI
from pydantic import BaseModel, Field

from platform import TokenRequest, TokenResponse, auth_guard, create_token, llm_summarize

SERVICE_NAME = "MedAgent LakeOps"
SERVICE_DESC = "Agentic MLOps for clinical data lakes and autonomous healthcare intelligence"
BASE = Path(__file__).resolve().parents[1]
DATA = BASE / "data"

app = FastAPI(title=SERVICE_NAME, version="1.0.0", description=SERVICE_DESC)


class DemoRequest(BaseModel):
    query: Optional[str] = "Find the most important healthcare AI readiness insight"
    limit: int = Field(default=5, ge=1, le=25)


class PatientRequest(BaseModel):
    patient_id: str = "p-1002"
    include_radiology: bool = True
    include_governance: bool = True


class MLOpsReadinessRequest(BaseModel):
    feature_consistency_pct: float = Field(default=86, ge=0, le=100)
    drift_detection_accuracy_pct: float = Field(default=82, ge=0, le=100)
    monitoring_coverage_pct: float = Field(default=91, ge=0, le=100)
    automated_remediation_pct: float = Field(default=71, ge=0, le=100)


def read_csv(name: str) -> pd.DataFrame:
    return pd.read_csv(DATA / name)


def readiness_score(row: dict) -> float:
    return round(
        0.3 * row["feature_consistency_pct"]
        + 0.25 * row["drift_detection_accuracy_pct"]
        + 0.25 * row["monitoring_coverage_pct"]
        + 0.2 * row["automated_remediation_pct"],
        2,
    )


def normalize_bool_columns(df: pd.DataFrame) -> pd.DataFrame:
    normalized = df.copy()
    for col in normalized.columns:
        if normalized[col].dtype == object:
            normalized[col] = normalized[col].replace({"true": True, "false": False})
    return normalized


def agent_recommendations(events: pd.DataFrame, registry: pd.DataFrame) -> list[str]:
    recommendations = []
    review_count = int((events["governance_status"] != "approved").sum())
    avg_latency = float(events["latency_min"].mean())
    avg_readiness = float(registry.apply(lambda row: readiness_score(row.to_dict()), axis=1).mean())
    if review_count:
        recommendations.append("route non-approved clinical records to governance review agent")
    if avg_latency > 20:
        recommendations.append("prioritize Spark streaming optimization for high-latency source systems")
    if avg_readiness < 85:
        recommendations.append("increase drift detection and automated remediation coverage before promotion")
    recommendations.append("publish model-ready features into governed lakehouse zone")
    return recommendations


@app.post("/auth/token", response_model=TokenResponse)
def token(req: TokenRequest):
    return TokenResponse(access_token=create_token(req.username))


@app.get("/health")
def health():
    return {
        "service": SERVICE_NAME,
        "status": "ok",
        "datasets": sorted(path.name for path in DATA.glob("*.csv")),
    }


@app.get("/metadata")
def metadata(user=Depends(auth_guard)):
    return {
        "service": SERVICE_NAME,
        "description": SERVICE_DESC,
        "paper": "MedAgent LakeOps: An Agentic MLOps Framework for Orchestrating Clinical Data Lakes and Autonomous Healthcare Intelligence",
        "standards": ["FHIR", "DICOM", "HL7", "OMOP CDM"],
        "datasets": sorted(path.name for path in DATA.glob("*.csv")),
        "auth": user,
    }


@app.post("/patient/intelligence")
def patient_intelligence(req: PatientRequest, user=Depends(auth_guard)):
    events = normalize_bool_columns(read_csv("clinical_events.csv"))
    radiology = read_csv("radiology_metadata.csv")

    patient_events = events[events["patient_id"] == req.patient_id]
    patient_radiology = radiology[radiology["patient_id"] == req.patient_id] if req.include_radiology else pd.DataFrame()
    if patient_events.empty and patient_radiology.empty:
        return {
            "patient_id": req.patient_id,
            "status": "no local demo records found",
            "next_action": "request source-system refresh",
            "auth": user,
        }

    governance_flags = []
    if req.include_governance and not patient_events.empty:
        governance_flags = patient_events[patient_events["governance_status"] != "approved"][
            ["event_type", "source_system", "governance_status"]
        ].to_dict(orient="records")

    return {
        "patient_id": req.patient_id,
        "clinical_context": patient_events.to_dict(orient="records"),
        "radiology_context": patient_radiology.to_dict(orient="records"),
        "governance_flags": governance_flags,
        "recommended_workflow": "physician dashboard refresh with governed lakehouse context",
        "auth": user,
    }


@app.post("/mlops/readiness")
def mlops_readiness(req: MLOpsReadinessRequest, user=Depends(auth_guard)):
    score = readiness_score(req.model_dump())
    if score >= 85:
        stage = "deployment-ready"
    elif score >= 75:
        stage = "needs controlled validation"
    else:
        stage = "not ready for clinical promotion"
    return {
        "readiness_score": score,
        "stage": stage,
        "gates": {
            "feature_consistency": req.feature_consistency_pct >= 85,
            "drift_detection": req.drift_detection_accuracy_pct >= 80,
            "monitoring_coverage": req.monitoring_coverage_pct >= 85,
            "automated_remediation": req.automated_remediation_pct >= 70,
        },
        "auth": user,
    }


@app.post("/analyze")
def run_demo(req: DemoRequest, user=Depends(auth_guard)):
    events = normalize_bool_columns(read_csv("clinical_events.csv"))
    radiology = read_csv("radiology_metadata.csv")
    registry = read_csv("mlops_registry.csv")

    registry["readiness_score"] = registry.apply(lambda row: readiness_score(row.to_dict()), axis=1)
    approved_rate = round(float((events["governance_status"] == "approved").mean() * 100), 2)
    normalized_rate = round(float(events["normalized"].mean() * 100), 2)
    avg_radiology_retrieval = round(float(radiology["retrieval_time_sec"].mean()), 2)

    summary = llm_summarize(
        f"Query: {req.query}. Clinical events: {events.to_dict(orient='records')}. "
        f"Radiology: {radiology.to_dict(orient='records')}. MLOps registry: {registry.to_dict(orient='records')}."
    )

    return {
        "service": SERVICE_NAME,
        "query": req.query,
        "key_metrics": {
            "approved_governance_rate_pct": approved_rate,
            "semantic_normalization_rate_pct": normalized_rate,
            "avg_clinical_latency_min": round(float(events["latency_min"].mean()), 2),
            "avg_radiology_retrieval_sec": avg_radiology_retrieval,
            "avg_model_readiness_score": round(float(registry["readiness_score"].mean()), 2),
        },
        "clinical_events": events.head(req.limit).to_dict(orient="records"),
        "radiology_metadata": radiology.head(req.limit).to_dict(orient="records"),
        "model_registry": registry.sort_values(by="readiness_score", ascending=False)
        .head(req.limit)
        .to_dict(orient="records"),
        "recommendations": agent_recommendations(events, registry),
        "llm_summary": summary,
        "auth": user,
    }


@app.get("/")
def root():
    return {"service": SERVICE_NAME, "docs": "/docs", "health": "/health", "demo_endpoint": "/analyze"}
