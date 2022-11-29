from django.db import models

class Produtos(models.Model):
    descricao = models.CharField( max_length=100)  
    quantidade = models.IntegerField()
    valor = models.IntegerField()
    vencimento = models.DateField()
    
class API(models.Model):
    nome_solo = models.CharField(max_length=50)
    cor = models.CharField(max_length=20)
    umidade = models.IntegerField()
    regiao = models.CharField(max_length=20)
    producao = models.CharField(max_length=20)
    imagem = models.IntegerField()
    
    
    def __str__(self):
            return self.nome_solo
    