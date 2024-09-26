from pydantic import BaseModel, EmailStr

"""
Este arquivo define os schemas para serialização e deserialização de dados usando Pydantic.
Use esses schemas para validar e transformar dados de entrada e saída.
Adicione novos schemas conforme a aplicação cresce e mais dados precisam ser validados.
"""



class UserLogin(BaseModel):
    email: EmailStr
    password: str


class ProductCreate(BaseModel):
    name: str
    description: str

class Product(BaseModel):
    id: int
    name: str
    description: str

    class Config:
        orm_mode = True
