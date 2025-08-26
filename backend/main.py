from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from backend.api_routes.chatbot_routes import router as chatbot_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000/", "http://localhost:5173/"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# include routes
app.include_router(chatbot_router, prefix="/api/chatbot", tags=["chatbot"])


@app.get('/')
async def load_homepage():
    return {
        'response': 'ok',
        'message': 'homepage loaded successfully'
    }


@app.get('/health/')
async def health():
    return {'health': 'ok'}


def start_server():
    # print('Starting Server...')    
    uvicorn.run(
        "app",
        host="0.0.0.0",
        port=8000,
        log_level="debug",
        reload=True,
    )


if __name__ == "__main__":
    start_server()


    # async def _demo() -> None:
    #     sid = "demo"
    #     print("Type 'exit' to quit.\n")
    #     while True:
    #         user = input("You: ")
    #         if user.strip().lower() in {"exit", "quit"}:
    #             break
    #         resp = await chat_with_memory.ainvoke(
    #             {"input": user}, config={"configurable": {"session_id": sid}}
    #         )
    #     print(f"Bot: {resp}\n")


    # asyncio.run(_demo())