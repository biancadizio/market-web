from app.db.session import get_db
from app.db.models import User
from app.core.security import get_password_hash, verify_password


"""
Este arquivo contém a lógica de negócios relacionada aos usuários.
Use este arquivo para manipular dados de usuários, como criação, leitura, atualização e deleção.
Mantenha a lógica de negócios separada das rotas e adicione novos métodos conforme as funcionalidades aumentam.
"""


class UserService:

    @staticmethod
    def get_all_users(db):
        return db.query(User).all()

    @staticmethod
    def get_user_by_id(db, user_id: int):
        return db.query(User).filter(User.id == user_id).first()

    @staticmethod
    def create_user(db, user_data):
        hashed_password = get_password_hash(user_data['password'])
        user = User(username=user_data['username'], email=user_data['email'], hashed_password=hashed_password)
        db.add(user)
        db.commit()
        db.refresh(user)
        return user
