from langchain_groq import ChatGroq
from dotenv import load_dotenv
import os

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Model options (choose one available in your Groq account)
DEFAULT_GROQ_MODEL = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")

# function to create llm
def create_llm() -> ChatGroq:

    if not GROQ_API_KEY:
        raise RuntimeError("Missing GROQ_API_KEY. Create a .env with GROQ_API_KEY=... or export it in your shell.")
    llm = ChatGroq(model="llama-3.3-70b-versatile", 
                   api_key=GROQ_API_KEY)
    return llm
