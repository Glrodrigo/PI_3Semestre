from django.shortcuts import render
from .models import Produtos

# Create your views here.

def retorna_main(request):
    return render(request, 'index.html')

def retorna_login(request):
    return render(request, 'login.html')

def retorna_pesquisar(request):
    return render(request, 'Pesquisar.html')

def retorna_sobre(request):
    return render(request, 'Sobre.html')

def retorna_cadastro(request):
    return render(request, 'cadastro.html')

def retorna_analise(request):
    return render(request, 'quiz.html')

def retorna_cidade(request):
    return render(request, 'cidade.html')

def retorna_resultado(request):
    return render(request, 'Resulta_API.html')

def retorna_resultadoDB(request):
    produto = Produtos.objects.all()
    return render(request, "Resultado_DB.html", {"produto": produto})

def retorna_estatisticas(request):
    return render(request, 'estatisticas.html')
