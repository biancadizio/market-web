from fastapi import FastAPI
from api.v1.routes import *
import uvicorn

"""
Este é o ponto de entrada da aplicação Flask. Ele cria a instância do app e a inicia, configurando o host e a porta.
Use este arquivo para iniciar a aplicação com `python main.py`.
"""

app = FastAPI()
app.include_router(api_v1, prefix="/api/v1")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


