
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

#### <li> Endpoint: http://127.0.0.1:8500/api_agrosolum/post_form </li>

#### <li> Modelo de requisição: </li>
    
```python
{
    "color": "vermelho",
    "texture": "argilosa",
    "humidity": 2,
    "city": "Pirassununga",
    "season": "",
    "value": ""
}
```
<br>

<center>

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) 

</center>
