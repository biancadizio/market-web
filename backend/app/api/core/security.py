import jwt
from datetime import datetime, timedelta
from typing import Optional
from app.api.core.config import Config


"""
Este arquivo lida com a segurança da aplicação, como hashing e verificação de senhas.
Use as funções aqui para manter a segurança de dados sensíveis, como senhas.
Adicione outras funcionalidades de segurança conforme necessário, como autenticação de tokens.
"""


SECRET_KEY = Config.SECRET_KEY
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
