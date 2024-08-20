from flask import Blueprint, jsonify, request
from app.services.user_service import UserService

"""
Este arquivo define as rotas relacionadas aos usuários da aplicação.
As rotas incluem operações CRUD, como obter todos os usuários, obter um usuário específico por ID, e criar novos usuários.
Mantenha as rotas organizadas e adicione novas conforme necessário.
"""


users_bp = Blueprint('users', __name__)

@users_bp.route('/users', methods=['GET'])
def get_users():
    users = UserService.get_all_users()
    return jsonify(users)

@users_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = UserService.get_user_by_id(user_id)
    return jsonify(user)

@users_bp.route('/users', methods=['POST'])
def create_user():
    data = request.json
    user = UserService.create_user(data)
    return jsonify(user), 201
