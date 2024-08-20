# /tests/unit/test_users.py
import pytest
from app.main import app
from app.db.session import get_db

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://user:password@localhost/test_db'
    with app.test_client() as client:
        with app.app_context():
            get_db().create_all()
        yield client

def test_create_user(client):
    response = client.post('/api/v1/users', json={
        'name': 'Test User',
        'email': 'testuser@example.com',
        'password': 'password'
    })
    assert response.status_code == 201
    assert response.json['email'] == 'testuser@example.com'
