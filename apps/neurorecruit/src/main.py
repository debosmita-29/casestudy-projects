
from pathlib import Path
from typing import Optional
import pandas as pd
from fastapi import FastAPI, Depends
from pydantic import BaseModel
from platform import TokenRequest, TokenResponse, create_token, auth_guard, db_status, redis_status, llm_summarize

SERVICE_NAME = "NeuroRecruit"
SERVICE_DESC = "Skill graph candidate matching"
BASE = Path(__file__).resolve().parents[1]
DATA = BASE / "data"

app = FastAPI(title=SERVICE_NAME, version="1.0.0", description=SERVICE_DESC)

class DemoRequest(BaseModel):
    query: Optional[str] = "Show the highest-impact insight from this dataset"
    limit: int = 5

@app.post("/auth/token", response_model=TokenResponse)
def token(req: TokenRequest):
    return TokenResponse(access_token=create_token(req.username))

@app.get("/health")
def health():
    return {"service": SERVICE_NAME, "status": "ok", "database": db_status(SERVICE_NAME), "redis": redis_status()}

@app.get("/metadata")
def metadata(user=Depends(auth_guard)):
    files = [p.name for p in DATA.glob("*")]
    return {"service": SERVICE_NAME, "description": SERVICE_DESC, "datasets": files, "auth": user}

@app.post("/match")
def run_demo(req: DemoRequest, user=Depends(auth_guard)):
    rows=[]
    for f in DATA.glob("*.csv"):
        try:
            df=pd.read_csv(f)
            rows.append({"dataset": f.name, "rows": len(df), "columns": list(df.columns), "preview": df.head(req.limit).to_dict(orient="records")})
        except Exception:
            pass
    text_files=[]
    for f in DATA.glob("*.txt"):
        text_files.append({"dataset": f.name, "characters": len(f.read_text(errors='ignore'))})
    summary=llm_summarize(f"Service: {SERVICE_NAME}. User query: {req.query}. Datasets: {rows or text_files}")
    return {"service": SERVICE_NAME, "query": req.query, "result": {"tables": rows, "documents": text_files}, "llm_summary": summary}

@app.get("/")
def root():
    return {"service": SERVICE_NAME, "docs": "/docs", "health": "/health", "demo_endpoint": "/match"}
