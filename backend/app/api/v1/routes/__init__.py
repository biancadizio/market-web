from flask import Flask

app = Flask(__name__)

# Importe as rotas individuais
from .auth import *
from .users import *
from .products import *
from .orders import *
