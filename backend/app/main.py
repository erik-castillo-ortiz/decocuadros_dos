from fastapi import FastAPI,Depends,HTTPException
from starlette.middleware.cors import CORSMiddleware

#from app.items.router import router as items_router
#from app.configuration.router import router as configurations_router
#from app.auth.router import router as auth_router
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

# @app.get("/get_user_by_id", response_model=UserOut)
# def get_user_by_id(id: int) -> dict[str, str]:
#     # print(query)
#     with use_database_session() as db:
#         repo = UserRepository(db)
#         (data, err) = repo.get(id)
#         if err:
#             raise HTTPException(status_code=err.status_code, detail=err.detail)
#         out = UserOut(id=data.id, name=data.name)
#     print(out)
#     return out


    # return {"status": "ok"}
