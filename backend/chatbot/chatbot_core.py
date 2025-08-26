# module imports

from __future__ import annotations


import os
from typing import Dict, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from dotenv import load_dotenv


from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_community.chat_message_histories import ChatMessageHistory

# file imports
from backend.chatbot.llm import create_llm
from backend.chatbot.sys_prompt import get_prompt, SYSTEM_PROMPT

load_dotenv()

# --- Create instances

model = create_llm()
prompt = get_prompt()


SESSION_STORE: Dict[str, ChatMessageHistory] = {}

def get_session_history(session_id: str) -> ChatMessageHistory:
    if session_id not in SESSION_STORE:
        SESSION_STORE[session_id] = ChatMessageHistory()
    return SESSION_STORE[session_id]


chain = prompt | model | StrOutputParser()


# Wrap with message history so past messages are fed back in automatically
chat_with_memory = RunnableWithMessageHistory(
                    chain,
                    get_session_history,
                    input_messages_key="input",
                    history_messages_key="history",
                )   



