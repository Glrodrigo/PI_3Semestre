from fastapi import HTTPException
import pymongo

class AgroMongo:

    def __init__(self):
        self.client = pymongo.MongoClient("mongodb+srv://pi_admin:pi_admin123@db.4zptydq.mongodb.net")
        self.db = self.client['PI_3Semestre_DB']
        self.solos = self.db['solos']
        self.regioes = self.db['regioes']
        self.produtos = self.db['produtos']

    def list_solum(self):
        return self.solos.find()

    def list_solum_names(self):
        names = []
        for solo in self.solos.find():
            names.append(solo['nome_solo'])
        return names

    def list_seed_names(self):
        names = []
        for solo in self.produtos.find():
            names.append(solo['semente'])
        return names

    def list_region_names(self):
        names = []
        for region in self.regioes.find():
            names.append(region['Regiao'])
        return names

    def list_region_info(self):
        regions = [['Região', 'Pesquisas']]
        for region in self.regioes.find():
            regions.append([region['Regiao'], region['Pesquisas']])
        return regions

    def list_seed_info(self):
        seeds = [['Semente', 'clicks']]
        for seed in self.produtos.find():
            seeds.append([seed['semente'], seed['clicks']])
        return seeds

    def update_region_search(self, region: str):
        if region in self.list_region_names():
            finded = self.regioes.find_one({'Regiao':region})
            if self.count_len_find(finded) > 0:
                new_searches = finded['Pesquisas'] + 1
                newvalues = { "$set": { "Pesquisas": new_searches } }
                self.regioes.update_one(finded, newvalues)
                new_values = self.regioes.find_one({'Regiao':region})
                return {"Regiao": new_values['Regiao'], "Pesquisas": new_values['Pesquisas']}
            else:
                raise HTTPException(status_code=404, detail=f"not found '{region}'.")

        else:
            raise HTTPException(status_code=404, detail=f"not found '{region}'.")

    def count_len_find(self, find):
        counter = 0
        for item in find:
            counter += 1
        return counter

    def update_seeds(self, seed: str):
        if seed in self.list_seed_names():
            finded = self.produtos.find_one({'semente':seed})
            if self.count_len_find(finded) > 0:
                new_searches = finded['clicks'] + 1
                newvalues = { "$set": { "clicks": new_searches } }
                self.produtos.update_one(finded, newvalues)
                new_values = self.produtos.find_one({'semente':seed})
                return {"semente": new_values['semente'], "clicks": new_values['clicks']}
            else:
                raise HTTPException(status_code=404, detail=f"not found '{seed}'.")

        else:
            raise HTTPException(status_code=404, detail=f"not found '{seed}'.")

