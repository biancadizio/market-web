import os


"""
Este arquivo contém as configurações globais da aplicação, como a URI do banco de dados e chaves secretas.
Atualize este arquivo ao configurar novas variáveis de ambiente ou ao alterar a configuração do banco de dados.
"""

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "mysql+pymysql://user:password@localhost/db_name")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
    ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30))
