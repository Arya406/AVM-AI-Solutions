from pydantic import BaseModel, Field
from typing import Optional
from sqlmodel import SQLModel


# Chat Request Model
class ChatRequest(BaseModel):
    session_id: str = Field(..., description="Unique id for the conversation session")
    user_input: str = Field(..., description="User's message")

    # Optional runtime overrides
    temperature: Optional[float] = Field(None, ge=0.0, le=1.0)
    model: Optional[str] = Field(None, description="Groq model name override")
    system_prompt: Optional[str] = Field(None, description="Override the assistant persona")


# Chat Response Model
class ChatResponse(BaseModel):
    session_id: str
    reply: str

class ResetRequest(BaseModel):
    session_id: str = Field(..., description="Unique id for the conversation session to reset")