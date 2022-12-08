
# AgroSolumAPI

## Sobre

#### API para ser utilizada no Projeto Interdisciplinar do 3 Semestre de Desenvolvimento de Software Multiplataforma da Fatec Araras

## Objetivo

#### Com essa API, temos o objetivo de retornar o solo que melhor for identificado pelos parametros.


## Start

```cmd
uvicorn main:app --port 8500
```

## Requisição:

#### http://127.0.0.1:8500/api_agrosolum

####  Rotas

##### - Lista nomes dos solos: '/list_solum_name'
##### - Lista nomes das sementes: '/list_seed_name'
##### - Lista número de média de rendas por requisição: '/list_money'
##### - Lista nomes dos solos: '/list_regions'
##### - Lista nomes dos solos: '/list_seeds'
##### - Posta dados para verificar solo: '/post_form'
##### - Atualiza número de tipo de região recebido: '/update_region'
##### - Atualiza número de sementes recebido: '/update_seed_clicks'

<br>

<center>

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) 

</center>
