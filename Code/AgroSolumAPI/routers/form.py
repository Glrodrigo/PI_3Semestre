from .config import routers_agrosolum
from models.AgroRequest import GroundInfo
from models.AgroAPI import AgroAPI
from models.AgroDB import AgroMongo

@routers_agrosolum.get('/list_solum_name')
def list_solum_name(): 
    agro = AgroMongo()
    return agro.list_solum_names()

@routers_agrosolum.get('/list_regions')
def list_regions(): 
    agro = AgroMongo()
    return agro.list_region_info()

@routers_agrosolum.post('/post_form')
def post_form(form: GroundInfo):
    agro = AgroAPI(form)
    solos = agro.verify_solum()
    agro.update_region_search(solos)
    print(solos)
    return solos

@routers_agrosolum.post('/update_region')
def post_json(region: str): 
    agro = AgroMongo()
    updated = agro.update_region_search(region.capitalize())
    return updated
    

