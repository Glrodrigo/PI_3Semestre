from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.__init__ import routers_agrosolum

app = FastAPI()

app.include_router(
    routers_agrosolum,
    prefix="/api_agrosolum",                
    tags=["APIAgroSolum"],
)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
