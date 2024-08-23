from sqlalchemy.ext.declarative import declarative_base


"""
Este arquivo importa todos os modelos SQLAlchemy da aplicação para que possam ser detectados pelo Alembic para migrações.
Mantenha este arquivo atualizado conforme novos modelos forem adicionados.
"""

Base = declarative_base()
