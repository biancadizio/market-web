from flask import Flask

"""
Este é o ponto de entrada da aplicação Flask. Ele cria a instância do app e a inicia, configurando o host e a porta.
Use este arquivo para iniciar a aplicação com `python main.py`.
"""



app = Flask(__name__)

@app.route('/')
def home():
    return "E-commerce!"

if __name__ == "__main__":
    app.run(debug=True)



