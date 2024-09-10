from flask import Flask, request, jsonify, render_template, url_for
import re
from werkzeug.security import generate_password_hash, check_password_hash
import smtplib
from email.mime.text import MIMEText
"""
Este é o ponto de entrada da aplicação Flask. Ele cria a instância do app e a inicia, configurando o host e a porta.
Use este arquivo para iniciar a aplicação com `python main.py`.
"""

# Simulação do banco de dados em memória
users_db = {}

# Função para validar e-mail
def is_valid_email(email):
    regex = r'^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    return re.match(regex, email)

# Função para validar a força da senha
def password_strength(password):
    strength = {
        "length": len(password) >= 8,
        "uppercase": any(c.isupper() for c in password),
        "lowercase": any(c.islower() for c in password),
        "digit": any(c.isdigit() for c in password),
        "special": any(c in "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~" for c in password)
    }
    return strength

# Função para checar se a senha é forte
def is_strong_password(password):
    strength = password_strength(password)
    return all(strength.values())

# Função para enviar e-mail de recuperação de senha
def send_recovery_email(email, recovery_link):
    msg = MIMEText(f"Recupere sua senha clicando no link: {recovery_link}")
    msg['Subject'] = "Recuperação de senha"
    msg['From'] = "your-email@example.com"
    msg['To'] = email
    
    with smtplib.SMTP('localhost') as server:
        server.send_message(msg)

app = Flask(__name__)

# Rotas da API

# Home
@app.route('/')
def home():
    return "Bem-vindo ao E-commerce!"

# Produtos
@app.route('/products', methods=['GET'])
def get_products():
    return "Lista de produtos"

# Detalhes do produto
@app.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    return f"Detalhes do produto {product_id}"


# Perfil de usuário
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    return f"Perfil do usuário {user_id}"

# Carrinho
@app.route('/cart', methods=['GET'])
def get_cart():
    return "Carrinho de compras"

# Purchase
@app.route('/purchase', methods=['POST'])
def purchase():
    # Get the purchase details from the request
    product_id = request.form.get('product_id')
    quantity = request.form.get('quantity')
    payment_method = request.form.get('payment_method')

    # Check if all the required fields are provided
    if not product_id or not quantity or not payment_method:
        return jsonify({'error': 'Product ID, quantity, and payment method are required.'}), 400

    # Process the purchase logic here
    # ...

    return jsonify({'message': 'Purchase successful.'}), 200


# Rota de Login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    user = users_db.get(email)
    if not user or not check_password_hash(user['password'], password):
        return jsonify({"message": "Credenciais inválidas"}), 401
    
    return jsonify({"message": "Login realizado com sucesso"}), 200

# Rota de Criar Usuário
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirm_password')
    
    if not is_valid_email(email):
        return jsonify({"message": "E-mail inválido"}), 400
    
    if password != confirm_password:
        return jsonify({"message": "As senhas não coincidem"}), 400
    
    if not is_strong_password(password):
        return jsonify({"message": "A senha não é forte o suficiente"}), 400
    
    hashed_password = generate_password_hash(password)
    users_db[email] = {"email": email, "password": hashed_password}
    
    return jsonify({"message": "Usuário criado com sucesso"}), 201

# Rota de Recuperar Senha
@app.route('/recover-password', methods=['POST'])
def recover_password():
    data = request.json
    email = data.get('email')
    
    if not is_valid_email(email):
        return jsonify({"message": "E-mail inválido"}), 400
    
    if email not in users_db:
        return jsonify({"message": "Usuário não encontrado"}), 404
    
    recovery_link = url_for('reset_password', email=email, _external=True)
    send_recovery_email(email, recovery_link)
    
    return jsonify({"message": "E-mail de recuperação enviado"}), 200

# Rota de Resetar Senha (Simplesmente um exemplo)
@app.route('/reset-password/<email>', methods=['POST'])
def reset_password(email):
    data = request.json
    new_password = data.get('password')
    
    if not is_strong_password(new_password):
        return jsonify({"message": "A senha não é forte o suficiente"}), 400
    
    hashed_password = generate_password_hash(new_password)
    users_db[email]['password'] = hashed_password
    
    return jsonify({"message": "Senha alterada com sucesso"}), 200



# Pedidos
@app.route('/orders', methods=['GET'])
def get_orders():
    return "Lista de pedidos"

@app.route('/orders/<int:order_id>', methods=['GET'])
def get_order(order_id):
    return f"Detalhes do pedido {order_id}"







if __name__ == "__main__":
    app.run(debug=True)
