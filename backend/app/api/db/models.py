from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from .base import Base

"""
Este arquivo define os modelos de dados da aplicação usando SQLAlchemy.
Cada classe aqui representa uma tabela no banco de dados.
Mantenha este arquivo organizado e adicione novos modelos conforme necessário.
"""

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    
    # Relacionamentos
    orders = relationship("Order", back_populates="user")

    def verify_password(self, password: str) -> bool:
        # Função para verificar se a senha fornecida corresponde à senha armazenada (hash).
        import bcrypt
        return bcrypt.checkpw(password.encode('utf-8'), self.hashed_password.encode('utf-8'))

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    description = Column(String(255))

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    
    # Relacionamentos
    user = relationship("User", back_populates="orders")
