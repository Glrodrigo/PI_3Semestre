from django.db import models

class Produtos(models.Model):
    descricao = models.CharField( max_length=100)  
    quantidade = models.FloatField()
    valor = models.FloatField()
    vencimento = models.DateField()
    