from django.shortcuts import render

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