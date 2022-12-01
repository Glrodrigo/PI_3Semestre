from django.test import TestCase
import requests

class TestAgroSolum(TestCase):
    
    def test_urls(self):
        urls = ['', '/login', '/cadastro', '/sobre', '/pesquisar', '/analise', '/cidade', '/resultado', '/resultado_DB']

        for url in urls:
            resp = requests.get(f'http://127.0.0.1:8000/{url}')
            self.assertEqual(resp.status_code, 200)
