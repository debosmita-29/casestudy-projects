from pathlib import Path
from typing import Optional

import numpy as np
import pandas as pd
from fastapi import Depends, FastAPI
from pydantic import BaseModel, Field

from platform import TokenRequest, TokenResponse, auth_guard, create_token, llm_summarize

SERVICE_NAME = "AlignOps"
SERVICE_DESC = "Distributed AI infrastructure for alignment, multimodal AI, and GPU optimization"
BASE = Path(__file__).resolve().parents[1]
DATA = BASE / "data"

app = FastAPI(title=SERVICE_NAME, version="1.0.0", description=SERVICE_DESC)


class DemoRequest(BaseModel):
    query: Optional[str] = "Find the highest-impact AI infrastructure optimization"
    limit: int = Field(default=5, ge=1, le=25)


class AlignmentRequest(BaseModel):
    method: str = "GRPO"
    reward_score: float = Field(default=0.89, ge=0, le=1)
    stability_score: float = Field(default=0.93, ge=0, le=1)
    safety_score: float = Field(default=0.94, ge=0, le=1)
    gpu_hours: float = Field(default=315, gt=0)


class InferenceRequest(BaseModel):
    modality: str = "diffusion"
    latency_ms: float = Field(default=2450, gt=0)
    throughput: float = Field(default=18, gt=0)
    gpu_memory_utilization_pct: float = Field(default=61, ge=0, le=100)


def read_csv(name: str) -> pd.DataFrame:
    return pd.read_csv(DATA / name)


def improvement_pct(before: float, after: float) -> float:
    if before == 0:
        return 0.0
    return round(((before - after) / before) * 100, 2)


def cluster_recommendations(clusters: pd.DataFrame) -> list[dict]:
    recommendations = []
    for row in clusters.to_dict(orient="records"):
        actions = []
        if row["utilization_pct"] < 75:
            actions.append("increase adaptive batching and consolidate low-priority jobs")
        if row["communication_overhead_pct"] > 25:
            actions.append("rebalance tensor and pipeline parallel groups")
        if row["memory_utilization_pct"] < 70:
            actions.append("raise batch size or enable KV-cache-aware placement")
        if not actions:
            actions.append("maintain current placement strategy and monitor saturation")
        recommendations.append(
            {
                "cluster_id": row["cluster_id"],
                "gpu_type": row["gpu_type"],
                "health_score": round(
                    0.4 * row["utilization_pct"]
                    + 0.25 * row["memory_utilization_pct"]
                    + 0.25 * row["training_stability_pct"]
                    - 0.1 * row["communication_overhead_pct"],
                    2,
                ),
                "actions": actions,
            }
        )
    return sorted(recommendations, key=lambda item: item["health_score"])


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
        "paper": "AlignOps: A Distributed AI Infrastructure Framework for Reinforcement Learning, Multimodal Foundation Models, and Large-Scale Generative AI Systems",
        "datasets": sorted(path.name for path in DATA.glob("*.csv")),
        "auth": user,
    }


@app.post("/alignment/evaluate")
def evaluate_alignment(req: AlignmentRequest, user=Depends(auth_guard)):
    efficiency = (req.reward_score + req.stability_score + req.safety_score) / np.log10(req.gpu_hours + 10)
    risk_flags = []
    if req.stability_score < 0.8:
        risk_flags.append("alignment instability")
    if req.safety_score < 0.85:
        risk_flags.append("safety regression risk")
    if req.gpu_hours > 400:
        risk_flags.append("high infrastructure cost")
    return {
        "method": req.method.upper(),
        "alignment_readiness_score": round(efficiency * 35, 2),
        "risk_flags": risk_flags or ["no critical risk detected"],
        "recommended_next_step": "promote to gated evaluation" if not risk_flags else "continue offline optimization",
        "auth": user,
    }


@app.post("/inference/optimize")
def optimize_inference(req: InferenceRequest, user=Depends(auth_guard)):
    target_latency = req.latency_ms * 0.59
    target_throughput = req.throughput * 3.7
    actions = [
        "route workload through asynchronous GPU scheduler",
        "enable adaptive batching by modality",
        "place KV cache and tensors using memory-aware policy",
    ]
    if req.gpu_memory_utilization_pct < 70:
        actions.append("increase batch size until memory utilization approaches 80%")
    return {
        "modality": req.modality,
        "estimated_latency_ms": round(target_latency, 2),
        "estimated_throughput": round(target_throughput, 2),
        "actions": actions,
        "auth": user,
    }


@app.post("/analyze")
def run_demo(req: DemoRequest, user=Depends(auth_guard)):
    alignment = read_csv("alignment_runs.csv")
    clusters = read_csv("gpu_clusters.csv")
    inference = read_csv("inference_workloads.csv")

    best_alignment = alignment.sort_values(
        by=["stability_score", "reward_score", "safety_score"], ascending=False
    ).head(req.limit)
    optimized_cluster = clusters.sort_values(by="utilization_pct", ascending=False).iloc[0].to_dict()
    inference["latency_reduction_pct"] = inference.apply(
        lambda row: improvement_pct(row["baseline_latency_ms"], row["optimized_latency_ms"]), axis=1
    )
    inference["throughput_multiplier"] = (
        inference["optimized_throughput"] / inference["baseline_throughput"]
    ).round(2)

    summary = llm_summarize(
        f"Query: {req.query}. Alignment: {best_alignment.to_dict(orient='records')}. "
        f"Clusters: {clusters.to_dict(orient='records')}. Inference: {inference.to_dict(orient='records')}."
    )

    return {
        "service": SERVICE_NAME,
        "query": req.query,
        "key_metrics": {
            "max_gpu_utilization_pct": int(clusters["utilization_pct"].max()),
            "avg_training_stability_pct": round(float(clusters["training_stability_pct"].mean()), 2),
            "avg_latency_reduction_pct": round(float(inference["latency_reduction_pct"].mean()), 2),
            "avg_throughput_multiplier": round(float(inference["throughput_multiplier"].mean()), 2),
        },
        "best_alignment_runs": best_alignment.to_dict(orient="records"),
        "top_cluster": optimized_cluster,
        "inference_workloads": inference.to_dict(orient="records"),
        "recommendations": cluster_recommendations(clusters),
        "llm_summary": summary,
        "auth": user,
    }


@app.get("/")
def root():
    return {"service": SERVICE_NAME, "docs": "/docs", "health": "/health", "demo_endpoint": "/analyze"}
