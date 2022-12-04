from fastapi import HTTPException
from models.AgroRequest import GroundInfo
from models.AgroDB import AgroMongo
import requests
import json

class AgroAPI(AgroMongo):

    def __init__(self, form: GroundInfo):
        super().__init__()
        self.color = form.color.lower()
        self.texture = form.texture.lower()
        self.humidity = self.verify_humidity(form.humidity)
        self.region = self.verify_city(form.city)

    def verify_humidity(self, humidity: int) -> int:
        if humidity<1:
            return 1
        elif humidity>3:
            return 3
        else:
            return humidity

    def verify_city(self, city: str) -> str:
        result = requests.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/mesorregioes')
        content_meso = json.loads(result.content)

        lista_regioes = []
        for item_meso in content_meso:
            lista_regioes.append(item_meso['nome'])

        result = requests.get(f'https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{city.lower()}')
        if result.content == b'[]':
            raise HTTPException(status_code = 404, detail = "Cidade não encontrada")

        local_muni = json.loads(result.content)

        if local_muni['regiao-imediata']['regiao-intermediaria']['nome'] in lista_regioes:
            regiao = local_muni['regiao-imediata']['regiao-intermediaria']['nome']
            return regiao
        else:
            raise HTTPException(status_code = 404, detail = "Solo não encontrado")

    def verify_solum(self) -> str:
        ground_list = []
        for solo in self.list_solum():
            if self.region in solo['regiao']:
                self.update_region_search({"region":self.region})
                if self.color in solo['cor']:
                    if self.texture in solo['textura']:
                        if self.humidity == solo['umidade']:
                            ground_list.append(solo['nome_solo'])
        
        return ground_list[0]

            