from sqlalchemy.orm import Session
from app.db.models import User


"""
Este arquivo contém a lógica de negócios relacionada aos usuários.
Use este arquivo para manipular dados de usuários, como criação, leitura, atualização e deleção.
Mantenha a lógica de negócios separada das rotas e adicione novos métodos conforme as funcionalidades aumentam.
"""

def authenticate_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        return None
    if not user.verify_password(password):
        return None
    return user

