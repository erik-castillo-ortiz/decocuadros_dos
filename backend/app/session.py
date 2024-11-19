# from sqlalchemy import create_engine, text
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy.exc import SQLAlchemyError
# from sqlalchemy.orm import Session

# from app.config import settings

# engine = create_engine(settings.DATABASE_URL, echo=True, pool_pre_ping=True)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()

# # Obtener el esquema desde settings
# SCHEMA = settings.SCHEMA 
# # def get_db():
# #     db = SessionLocal()
# #     try:
# #         yield db
# #     finally:
# #         db.close()

# class DatabaseSessionMixin:
#     """Database session mixin."""
#     def __enter__(self) -> Session:
#         self.db = SessionLocal()
#         # Configurar el esquema al inicio de cada sesión
#         self.db.execute(text(f"SET search_path TO {SCHEMA}"))
#         current_schema = self.db.execute(text("SHOW search_path")).fetchone()
#         print(f"Current search_path: {current_schema}")
#         return self.db

#     def __exit__(self, exc_type, exc_val, exc_tb):
#         try:
#             if exc_type is not None:
#                 self.db.rollback()
#         except SQLAlchemyError:
#             pass
#         finally:
#             self.db.close()
#             # SessionLocal.remove()


# def use_database_session():
#     return DatabaseSessionMixin()
from sqlalchemy import create_engine, event, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config import settings

# Crear el motor de la base de datos
engine = create_engine(settings.DATABASE_URL, echo=True, pool_pre_ping=True)

# Obtener el esquema desde settings
SCHEMA = settings.SCHEMA

# Establecer el search_path automáticamente al conectarse
@event.listens_for(engine, "connect")
def set_search_path(dbapi_connection, connection_record):
    cursor = dbapi_connection.cursor()
    cursor.execute(f"SET search_path TO {SCHEMA}")
    cursor.close()

# Crear la sesión
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base declarativa
Base = declarative_base()

# Dependencia para obtener la sesión
def get_db():
    db = SessionLocal()
    try:
        # Configurar el search_path explícitamente
        db.execute(text(f"SET search_path TO {SCHEMA}"))
        current_schema = db.execute(text("SHOW search_path")).fetchone()
        print(f"get_db: Current search_path: {current_schema}")
        yield db
    finally:
        db.close()

# Clase para manejar sesiones de base de datos
class DatabaseSessionMixin:
    """Database session mixin."""
    def __enter__(self):
        self.db = SessionLocal()
        # Configurar el search_path explícitamente
        self.db.execute(text(f"SET search_path TO {SCHEMA}"))
        current_schema = self.db.execute(text("SHOW search_path")).fetchone()
        print(f"DatabaseSessionMixin: Current search_path: {current_schema}")
        return self.db

    def __exit__(self, exc_type, exc_val, exc_tb):
        try:
            if exc_type is not None:
                self.db.rollback()
        finally:
            self.db.close()

# Método para usar el mixin
def use_database_session():
    return DatabaseSessionMixin()
