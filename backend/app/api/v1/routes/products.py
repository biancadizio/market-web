'''
from flask import Blueprint, jsonify, request
from app.api.services.product_service import ProductService

"""
Este arquivo define as rotas relacionadas aos produtos.
Aqui estão incluídas operações para listar, obter detalhes e criar produtos.
Adicione mais rotas conforme novas funcionalidades para produtos forem implementadas.
"""


products_bp = Blueprint('products', __name__)

@products_bp.route('/products', methods=['GET'])
def get_products():
    products = ProductService.get_all_products()
    return jsonify(products)

@products_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = ProductService.get_product_by_id(product_id)
    return jsonify(product)

@products_bp.route('/products', methods=['POST'])
def create_product():
    data = request.json
    product = ProductService.create_product(data)
    return jsonify(product), 201
'''


from flask import jsonify  # Corrige a importação de jsonify
from app.api.services.product_service import ProductService

def register_routes(app):  # Aceita o 'app' como argumento
    @app.route('/products', methods=['GET'])
    def products():
        products = ProductService.get_all_products()
        return jsonify(products)



