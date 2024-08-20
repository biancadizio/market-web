from passlib.context import CryptContext

"""
Este arquivo lida com a segurança da aplicação, como hashing e verificação de senhas.
Use as funções aqui para manter a segurança de dados sensíveis, como senhas.
Adicione outras funcionalidades de segurança conforme necessário, como autenticação de tokens.
"""


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)
