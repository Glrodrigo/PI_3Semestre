from pydantic import BaseModel
from typing import Union

class GroundInfo(BaseModel):
    color: str
    texture: str
    humidity: int
    city: str
    season: Union[str, None] = None
    value: Union[str, None] = None