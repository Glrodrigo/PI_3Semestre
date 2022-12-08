from django.test import TestCase
from .models import Produtos
from datetime import datetime

class ProdutosModelTest(TestCase):
    
    def setUp(self):
        self.descricao = "Arroz"
        self.quantidade = 10.0
        self.valor = 16.98
        self.vencimento = datetime(year=2023, month=12,day=15)
        self.produto = Produtos(
                    descricao = self.descricao,
                    quantidade = self.quantidade,
                    valor = self.valor,
                    vencimento = self.vencimento
                    )
        self.produto.save()

    def test_created(self):
        self.assertTrue(Produtos.objects.exists())
    
    def test_descricao(self):
        self.assertIsInstance(self.produto.descricao, str)
    
    def test_quantidade(self):
        self.assertIsInstance(self.produto.quantidade, float)

    def test_valor(self):
        self.assertIsInstance(self.produto.valor, float)

    def test_vencimento(self):
        self.assertIsInstance(self.produto.vencimento, datetime)

class TestAgroSolum(TestCase):
    
    def setUp(self):
        self.index = self.client.get('/')
        self.login = self.client.get('/login')
        self.cadastro = self.client.get('/cadastro')
        self.sobre = self.client.get('/sobre')
        self.pesquisar = self.client.get('/pesquisar')
        self.analise = self.client.get('/analise')
        self.cidade = self.client.get('/cidade')
        self.resultado = self.client.get('/resultado')
        self.resultado_DB = self.client.get('/resultado_DB')
        self.relatorios = self.client.get('/relatorios')
        self.erro = self.client.get('/erro')

    def test_index(self):
        self.assertEqual(200, self.index.status_code)

    def test_login(self):
        self.assertEqual(200, self.login.status_code)

    def test_cadastro(self):
        self.assertEqual(200, self.cadastro.status_code)

    def test_sobre(self):
        self.assertEqual(200, self.sobre.status_code)

    def test_pesquisar(self):
        self.assertEqual(200, self.pesquisar.status_code)

    def test_analise(self):
        self.assertEqual(200, self.analise.status_code)

    def test_resultado(self):
        self.assertEqual(200, self.resultado.status_code)

    def test_resultado_DB(self):
        self.assertEqual(200, self.resultado_DB.status_code)

    def test_relatorios(self):
        self.assertEqual(200, self.relatorios.status_code)

    def test_erro(self):
        self.assertEqual(200, self.erro.status_code)
