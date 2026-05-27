import os
from datetime import datetime, timedelta, timezone
from typing import Optional

import jwt
from fastapi import Header, HTTPException
from pydantic import BaseModel

JWT_SECRET = os.getenv("JWT_SECRET", "dev-secret-change-me")
API_KEY = os.getenv("API_KEY", "demo-api-key")
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
        "scope": "medagent-lakeops:demo",
    }
    return jwt.encode(payload, JWT_SECRET, algorithm="HS256")


def auth_guard(
    authorization: Optional[str] = Header(default=None),
    x_api_key: Optional[str] = Header(default=None),
):
    if x_api_key == API_KEY:
        return {"auth": "api_key"}
    if not authorization or not authorization.lower().startswith("bearer "):
        raise HTTPException(status_code=401, detail="Missing Bearer token or x-api-key")
    token = authorization.split(" ", 1)[1]
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")


def llm_summarize(prompt: str) -> str:
    if LLM_PROVIDER == "openai" and OPENAI_API_KEY:
        try:
            from openai import OpenAI

            client = OpenAI(api_key=OPENAI_API_KEY)
            response = client.chat.completions.create(
                model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
                messages=[
                    {
                        "role": "system",
                        "content": "You are a concise healthcare AI and MLOps analyst.",
                    },
                    {"role": "user", "content": prompt},
                ],
                temperature=0.2,
                max_tokens=220,
            )
            return response.choices[0].message.content or ""
        except Exception as exc:
            return f"LLM provider configured but unavailable: {str(exc)[:120]}"
    return (
        "Mock LLM summary: MedAgent LakeOps improves clinical interoperability, radiology metadata retrieval, "
        "MLOps readiness, observability coverage, and autonomous remediation using local demo datasets."
    )
