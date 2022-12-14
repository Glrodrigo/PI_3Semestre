from fastapi import HTTPException
import pymongo

class AgroMongo:

    def __init__(self):
        self.client = pymongo.MongoClient("mongodb+srv://pi_admin:pi_admin123@db.4zptydq.mongodb.net")
        self.db = self.client['PI_3Semestre_DB']
        self.solos = self.db['solos']
        self.regioes = self.db['regioes']
        self.produtos = self.db['produtos']
        self.resultados = self.db['resultados']

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

    def list_money_info(self):
        values = [['Renda', 'respostas']]
        responses = ["1,00 a 1000,00 R$", "1001,00 a 3000,00 R$", "3001,00 a 7000,00 R$", "7001,00 a 15000,00 R$"]
        for resp in responses:
            count = self.resultados.count_documents({"value": resp})
            values.append([resp, count])
        return values

    def update_region_search(self, region: str):
        if region in self.list_region_names():
            finded = self.regioes.find_one({'Regiao':region})
            print(finded)
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

    def save_form_request(self, form):
        try:
            form_db = form.__dict__
            res = self.resultados.insert_one(form_db)
            print("inserted: ", res)
        except Exception as e:
            print(e)
            pass

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

