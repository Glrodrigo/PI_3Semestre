from .config import routers_agrosolum
from models.request_model import GroundInfo
from models.AgroAPI import AgroAPI


@routers_agrosolum.post('/post_form')
def post_form(form: GroundInfo):
    agro = AgroAPI(form)
    solos = agro.verify_solum()
    print(solos)
    return solos