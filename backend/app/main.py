from fastapi import FastAPI,Depends,HTTPException
from starlette.middleware.cors import CORSMiddleware

from app.products.router import router as products_router
from app.cart.router import router as cart_router
from app.users.router import router as users_router
from app.config import app_configs, settings
from sqlalchemy.orm import Session
from .session import use_database_session
from .models import User,UserOut
from .repository import UserRepository

app = FastAPI(**app_configs)


@app.on_event("startup")
def startup():
    # await database.connect()
    ...


@app.on_event("shutdown")
def shutdown():
    # await database.disconnect()
    ...


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_origin_regex=settings.CORS_ORIGINS_REGEX,
    allow_credentials=True,
    allow_methods=("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"),
    allow_headers=settings.CORS_HEADERS,
)

app.include_router(products_router, prefix="/products", tags=["Productos"])
app.include_router(cart_router, prefix="/cart", tags=["Cart"])
app.include_router(users_router, prefix="/users", tags=["Users"])

