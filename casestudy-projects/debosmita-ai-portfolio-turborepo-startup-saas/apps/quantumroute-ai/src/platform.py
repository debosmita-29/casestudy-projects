
import os, time
from datetime import datetime, timedelta, timezone
from typing import Optional
import jwt
import redis
import psycopg2
from fastapi import HTTPException, Header
from pydantic import BaseModel

JWT_SECRET = os.getenv("JWT_SECRET", "dev-secret-change-me")
API_KEY = os.getenv("API_KEY", "demo-api-key")
DATABASE_URL = os.getenv("DATABASE_URL", "")
REDIS_URL = os.getenv("REDIS_URL", "redis://redis:6379/0")
LLM_PROVIDER = os.getenv("LLM_PROVIDER", "mock")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")

class TokenRequest(BaseModel):
    username: str = "demo@portfolio.ai"
    password: str = "demo"

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in_minutes: int = 120


def create_token(username: str) -> str:
    payload = {
        "sub": username,
        "iat": datetime.now(timezone.utc),
        "exp": datetime.now(timezone.utc) + timedelta(minutes=120),
        "scope": "portfolio:demo",
    }
    return jwt.encode(payload, JWT_SECRET, algorithm="HS256")


def auth_guard(authorization: Optional[str] = Header(default=None), x_api_key: Optional[str] = Header(default=None)):
    if x_api_key == API_KEY:
        return {"auth": "api_key"}
    if not authorization or not authorization.lower().startswith("bearer "):
        raise HTTPException(status_code=401, detail="Missing Bearer token or x-api-key")
    token = authorization.split(" ", 1)[1]
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")


def db_status(service_name: str):
    if not DATABASE_URL:
        return {"enabled": False, "status": "DATABASE_URL not configured"}
    try:
        conn = psycopg2.connect(DATABASE_URL, connect_timeout=3)
        conn.autocommit = True
        with conn.cursor() as cur:
            cur.execute("CREATE EXTENSION IF NOT EXISTS vector")
            cur.execute("""
                CREATE TABLE IF NOT EXISTS service_events (
                    id SERIAL PRIMARY KEY,
                    service_name TEXT NOT NULL,
                    event_type TEXT NOT NULL,
                    payload JSONB,
                    created_at TIMESTAMPTZ DEFAULT NOW()
                )
            """)
            cur.execute("INSERT INTO service_events(service_name,event_type,payload) VALUES(%s,%s,%s)", (service_name, "health_check", '{"ok":true}'))
            cur.execute("SELECT COUNT(*) FROM service_events WHERE service_name=%s", (service_name,))
            count = cur.fetchone()[0]
        conn.close()
        return {"enabled": True, "status": "ok", "service_events": count}
    except Exception as e:
        return {"enabled": True, "status": "degraded", "error": str(e)[:180]}


def redis_status():
    try:
        client = redis.from_url(REDIS_URL, socket_connect_timeout=2, socket_timeout=2)
        client.set("portfolio:last_health", str(time.time()), ex=300)
        return {"enabled": True, "status": "ok", "last_health": client.get("portfolio:last_health").decode()}
    except Exception as e:
        return {"enabled": True, "status": "degraded", "error": str(e)[:180]}


def llm_summarize(prompt: str) -> str:
    if LLM_PROVIDER == "openai" and OPENAI_API_KEY:
        try:
            from openai import OpenAI
            client = OpenAI(api_key=OPENAI_API_KEY)
            res = client.chat.completions.create(
                model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
                messages=[{"role":"system","content":"You are a concise SaaS product intelligence assistant."},{"role":"user","content":prompt}],
                temperature=0.2,
                max_tokens=220,
            )
            return res.choices[0].message.content or ""
        except Exception as e:
            return f"LLM provider configured but unavailable: {str(e)[:120]}"
    return "Mock LLM summary: prioritized signal, explainability, ROI impact, and next-best action are generated from the local demo dataset."
