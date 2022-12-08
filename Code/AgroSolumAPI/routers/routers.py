from .config import routers_agrosolum
from models.AgroRequest import *
from models.AgroAPI import AgroAPI
from models.AgroDB import AgroMongo

@routers_agrosolum.get('/list_solum_name')
def list_solum_name(): 
    agro = AgroMongo()
    return agro.list_solum_names()

@routers_agrosolum.get('/list_seed_name')
def list_seed_name(): 
    agro = AgroMongo()
    return agro.list_seed_names()

@routers_agrosolum.get('/list_money')
def list_money(): 
    agro = AgroMongo()
    return agro.list_money_info()

@routers_agrosolum.get('/list_regions')
def list_regions(): 
    agro = AgroMongo()
    return agro.list_region_info()

@routers_agrosolum.get('/list_seeds')
def list_seeds(): 
    agro = AgroMongo()
    return agro.list_seed_info()

@routers_agrosolum.post('/post_form')
def post_form(form: GroundInfo):
    agro = AgroAPI(form)
    print(form)
    agro.save_form_request(form)
    solos = agro.verify_solum()
    return solos

@routers_agrosolum.put('/update_region')
def update_region(region: Region): 
    agro = AgroMongo()
    updated = agro.update_region_search(region.region)
    print(updated)
    return updated
    
@routers_agrosolum.put('/update_seed_clicks')
def update_seeds(seed: Seed): 
    agro = AgroMongo()
    updated = agro.update_seeds(seed.seed)
    print(updated)
    return updated
    

