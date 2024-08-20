from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import Config

"""
Este arquivo configura a conexão com o banco de dados utilizando SQLAlchemy.
Use `get_db()` para obter uma sessão do banco de dados em qualquer parte da aplicação.
Certifique-se de fechar as sessões corretamente para evitar vazamentos de memória.
"""



engine = create_engine(Config.SQLALCHEMY_DATABASE_URI)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
