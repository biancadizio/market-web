# app/api/v1/routes/__init__.py
from fastapi import APIRouter

api_v1 = APIRouter()

# Importe as rotas individuais
from .auth import *
from .users import *
from .products import *
from .orders import *
