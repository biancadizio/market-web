from pydantic import BaseModel

"""
Este arquivo define os schemas para serialização e deserialização de dados usando Pydantic.
Use esses schemas para validar e transformar dados de entrada e saída.
Adicione novos schemas conforme a aplicação cresce e mais dados precisam ser validados.
"""


class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class User(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        orm_mode = True

class ProductCreate(BaseModel):
    name: str
    description: str

class Product(BaseModel):
    id: int
    name: str
    description: str

    class Config:
        orm_mode = True
