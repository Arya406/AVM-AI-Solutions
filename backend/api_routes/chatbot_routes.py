# from prompt_toolkit import prompt
from pydantic import BaseModel
from fastapi import APIRouter, HTTPException
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables.history import RunnableWithMessageHistory
import os

from backend.models.chatbot_models import ChatRequest, ChatResponse, ResetRequest
from backend.chatbot.llm import create_llm, DEFAULT_GROQ_MODEL
from backend.chatbot.sys_prompt import get_prompt
from backend.chatbot.chatbot_core import SESSION_STORE, get_session_history

model = create_llm()

router = APIRouter()


'''
    Chat endpoint for user messages

    args:
        payload: ChatRequest
        {
            "session_id": "string",
            "user_input": "string",
            "model": Optional["string"],
            "temperature": Optional[float],
            "system_prompt": Optional["string"]
        }
    output:
        ChatResponse
        {
            "session_id": "string",
            "reply": "string"
        }
'''
@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(payload: ChatRequest) -> ChatResponse:
    try:
        config = {"configurable": {"session_id": payload.session_id}}

        # store model instance
        _model = model

        # Check if user provided a model or temperature
        if payload.model:
            _model = ChatGroq(model=payload.model, temperature=payload.temperature or 0.6)
        elif payload.temperature is not None:
            _model = ChatGroq(model=DEFAULT_GROQ_MODEL, temperature=payload.temperature)


        # Create prompt
        _prompt = get_prompt()


        # If user provided a custom system prompt
        if payload.system_prompt:
            _prompt = ChatPromptTemplate.from_messages([
                        ("system", payload.system_prompt),
                        MessagesPlaceholder(variable_name="history"),
                        ("human", "{input}"),
                        ])

        # Create a chain
        _chain = _prompt | _model | StrOutputParser()
        _chat = RunnableWithMessageHistory(
                    _chain,
                    get_session_history,
                    input_messages_key="input",
                    history_messages_key="history"
                )
        
        reply: str = await _chat.ainvoke({"input": payload.user_input}, config=config)
        return ChatResponse(session_id=payload.session_id, reply=reply)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    


'''
    Route to reset a conversation session

    args:
        payload: ResetRequest
        {  
            "session_id": "string"
        }
'''
@router.post('/reset', response_model=dict)
async def reset_session(payload: ResetRequest):
    try:
        session_id = payload.session_id

        # If session exists → clear it
        if session_id in SESSION_STORE:
            SESSION_STORE[session_id].clear()
            return {
                "success": True,
                "message": f"Session '{session_id}' has been reset successfully."
            }

        # If session doesn't exist → return a clear message (no auto-create here)
        return {
            "success": True,
            "message": f"Session '{session_id}' does not exist or is already cleared."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))