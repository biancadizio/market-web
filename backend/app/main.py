from flask import Flask
from flask import request, jsonify

"""
Este é o ponto de entrada da aplicação Flask. Ele cria a instância do app e a inicia, configurando o host e a porta.
Use este arquivo para iniciar a aplicação com `python main.py`.
"""

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


# Login
@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Check if username and password are provided
    if not username or not password:
        return jsonify({'error': 'Username and password are required.'}), 400

    # Check if username and password are correct
    if username != 'admin' or password != 'password':
        return jsonify({'error': 'Invalid username or password.'}), 401

    return jsonify({'message': 'Login successful.'}), 200



# Pedidos
@app.route('/orders', methods=['GET'])
def get_orders():
    return "Lista de pedidos"

@app.route('/orders/<int:order_id>', methods=['GET'])
def get_order(order_id):
    return f"Detalhes do pedido {order_id}"







if __name__ == "__main__":
    app.run(debug=True)
