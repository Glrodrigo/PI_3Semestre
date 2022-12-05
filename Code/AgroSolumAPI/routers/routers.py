from .config import routers_agrosolum
from models.AgroRequest import GroundInfo
from models.AgroAPI import AgroAPI
from models.AgroDB import AgroMongo
from fastapi import Body

@routers_agrosolum.get('/list_solum_name')
def list_solum_name(): 
    agro = AgroMongo()
    return agro.list_solum_names()

@routers_agrosolum.get('/list_seed_name')
def list_seed_name(): 
    agro = AgroMongo()
    return agro.list_seed_names()

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
    solos = agro.verify_solum()
    return solos

@routers_agrosolum.post('/update_region')
def update_region(region: str = Body(...)): 
    agro = AgroMongo()
    updated = agro.update_region_search(region)
    return updated
    
@routers_agrosolum.post('/update_seed_clicks')
def update_seeds(seed: str = Body(...)): 
    agro = AgroMongo()
    updated = agro.update_seeds(seed)
    return updated
    

