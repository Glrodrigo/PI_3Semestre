from django.urls import path
from . import views

urlpatterns = [
    path('', views.retorna_main),
    path('login', views.retorna_login),
    path('cadastro', views.retorna_cadastro),
    path('sobre', views.retorna_sobre),
    path('pesquisar', views.retorna_pesquisar),
    path('analise', views.retorna_analise),
    path('cidade', views.retorna_cidade),
    path('resultado', views.retorna_resultado),
    path('resultado_DB', views.retorna_resultadoDB),
    path('retorna_resultadoDB', views.retorna_resultadoDB),
    path('relatorios', views.retorna_estatisticas),
    path('erro', views.retorna_erro),
]