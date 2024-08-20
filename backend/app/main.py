from app.api.v1.routes import create_app


"""
Este é o ponto de entrada da aplicação Flask. Ele cria a instância do app e a inicia, configurando o host e a porta.
Use este arquivo para iniciar a aplicação com `python main.py`.
"""

app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
