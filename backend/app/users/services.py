from app.users.repository import UserRepository
from app.extensions import DetailedException
from app.users.schemas import UserCreate, UserOut
from app.session import use_database_session
import bcrypt
from fastapi.responses import Response
from datetime import datetime, timedelta
from sqlalchemy import text


class UserService:
    def __init__(self):
        pass

    def get_user_by_email(self, email: str):
        with use_database_session() as db:
            repo = UserRepository(db)
            user = repo.get_user_by_email(email)
            if not user:
                raise DetailedException(status_code=404, detail="User not found")
            return user

    # def create_user(self, user_data: UserCreate):
    #     with use_database_session() as db:
    #         repo = UserRepository(db)
    #         existing_user = repo.get_user_by_email(user_data.email)
    #         if existing_user:
    #             raise DetailedException(status_code=400, detail="Email already registered")
    #         password_hash = self.hash_password(user_data.password)
    #         return repo.create_user(
    #             email=user_data.email,
    #             password_hash=password_hash,
    #             first_name=user_data.first_name,
    #             last_name=user_data.last_name,
    #             phone=user_data.phone,
    #             rut=user_data.rut,
    #         )
    def create_user(self, user_data: UserCreate):
        with use_database_session() as db:
            current_schema = db.execute(text("SHOW search_path")).fetchone()
            print(f"create_user: Current search_path: {current_schema}")
            
            repo = UserRepository(db)
            existing_user = repo.get_user_by_email(user_data.email)
            if existing_user:
                raise DetailedException(status_code=400, detail="Email already registered")
            
            password_hash = self.hash_password(user_data.password)
            return repo.create_user(
                email=user_data.email,
                password_hash=password_hash,
                first_name=user_data.first_name,
                last_name=user_data.last_name,
                phone=user_data.phone,
                rut=user_data.rut,
            )
    def authenticate_user(self, email: str, password: str, response: Response):
        try:
            with use_database_session() as db:
                repo = UserRepository(db)
                user = repo.get_user_by_email(email)
                if not user or not self.validate_password(password, user.password_hash):
                    raise DetailedException(status_code=401, detail="Invalid credentials")
                
                # Crear sesión válida por 1 día
                session = repo.create_session(user.id)
                self.set_session_cookie(response, session.session_id, max_age=86400)  # 1 día
                return UserOut.from_orm(user)
        except DetailedException:
            raise
        except Exception as e:
            raise DetailedException(status_code=500, detail="Unexpected error during authentication")

    def validate_session(self, session_id: str) -> bool:
        print(f"Validating session_id: {session_id}")  # Registra el ID de sesión recibido
        with use_database_session() as db:
            repo = UserRepository(db)
            session = repo.get_session_by_id(session_id)
            if not session:
                print("Session not found.")
            elif session.expires_at <= datetime.utcnow():
                print("Session expired.")
            return session is not None and session.expires_at > datetime.utcnow()

    def hash_password(self, password: str) -> str:
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(password.encode(), salt).decode()

    def validate_password(self, password: str, hashed_password: str) -> bool:
        return bcrypt.checkpw(password.encode(), hashed_password.encode())

    # def set_session_cookie(self, response: Response, session_id: str, max_age: int):
    #     response.set_cookie(
    #         key="session_id",
    #         value=session_id,
    #         httponly=True,
    #         secure=True,
    #         samesite="Strict",
    #         max_age=max_age,
    #     )
    def set_session_cookie(self, response: Response, session_id: str, max_age: int):
        response.set_cookie(
            key="session_id",
            value=session_id,
            httponly=True,
            secure=False,  # Asegúrate de que sea False en desarrollo
            samesite="Lax",  # Usa Lax en lugar de Strict para permitir cookies en subdominios
            max_age=max_age,
        )



    def logout_user(self, response: Response, session_id: str):
        with use_database_session() as db:
            repo = UserRepository(db)
            repo.delete_session(session_id)
        response.delete_cookie("session_id")

    def get_user_by_session(self, session_id: str):
        with use_database_session() as db:
            repo = UserRepository(db)
            user = repo.get_user_by_session(session_id)
            if not user:
                raise DetailedException(status_code=401, detail="Session expired or invalid")
            return user
