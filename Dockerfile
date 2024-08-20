FROM python:3.9-slim

# Dockerfile
#
# Este arquivo define a imagem Docker para a aplicação.
# Ele instala as dependências e copia o código da aplicação para o contêiner.
# Utilize este arquivo para criar e executar a aplicação em um ambiente de contêiner.


WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "main.py"]
