# from sqlalchemy.orm import Session
# from app.users.models import Users, UserSession
# import uuid
# from sqlalchemy.exc import SQLAlchemyError


# class UserRepository:
#     def __init__(self, db: Session):
#         self.db = db

#     def get_user_by_email(self, email: str) -> Users | None:
#         return self.db.query(Users).filter(Users.email == email).first()

#     def get_user_by_id(self, user_id: int) -> Users | None:
#         return self.db.query(Users).filter(Users.id == user_id).first()

#     def create_user(self, email: str, password_hash: str, **kwargs) -> Users:
#         new_user = Users(email=email, password_hash=password_hash, **kwargs)
#         self.db.add(new_user)
#         try:
#             self.db.commit()
#             self.db.refresh(new_user)
#         except SQLAlchemyError as e:
#             self.db.rollback()
#             raise e
#         return new_user

#     def create_session(self, user_id: int) -> UserSession:
#         session_id = str(uuid.uuid4())
#         new_session = UserSession(user_id=user_id, session_id=session_id)
#         self.db.add(new_session)
#         try:
#             self.db.commit()
#             self.db.refresh(new_session)
#         except SQLAlchemyError as e:
#             self.db.rollback()
#             raise e
#         return new_session

#     def get_session_by_id(self, session_id: str) -> UserSession | None:
#         return self.db.query(UserSession).filter(UserSession.session_id == session_id).first()

#     def delete_session(self, session_id: str) -> bool:
#         session = self.get_session_by_id(session_id)
#         if session:
#             try:
#                 self.db.delete(session)
#                 self.db.commit()
#                 return True
#             except SQLAlchemyError as e:
#                 self.db.rollback()
#                 raise e
#         return False
from sqlalchemy.orm import Session
from app.users.models import Users, UserSession
import uuid
from sqlalchemy.exc import SQLAlchemyError
from datetime import datetime, timedelta


class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_user_by_email(self, email: str) -> Users | None:
        return self.db.query(Users).filter(Users.email == email).first()

    def get_user_by_id(self, user_id: int) -> Users | None:
        return self.db.query(Users).filter(Users.id == user_id).first()

    def create_user(self, email: str, password_hash: str, **kwargs) -> Users:
        new_user = Users(email=email, password_hash=password_hash, **kwargs)
        self.db.add(new_user)
        try:
            self.db.commit()
            self.db.refresh(new_user)
        except SQLAlchemyError as e:
            self.db.rollback()
            raise e
        return new_user

    def create_session(self, user_id: int) -> UserSession:
        session_id = str(uuid.uuid4())
        expires_at = datetime.utcnow() + timedelta(days=1)
        new_session = UserSession(user_id=user_id, session_id=session_id, expires_at=expires_at)
        self.db.add(new_session)
        try:
            self.db.commit()
            self.db.refresh(new_session)
        except SQLAlchemyError as e:
            self.db.rollback()
            raise e
        return new_session

    def is_session_valid(self, session_id: str) -> bool:
        session = self.get_session_by_id(session_id)
        return session and session.expires_at > datetime.utcnow()

    def get_session_by_id(self, session_id: str) -> UserSession | None:
        session = self.db.query(UserSession).filter(UserSession.session_id == session_id).first()
        if session and session.expires_at and session.expires_at < datetime.utcnow():
            return None
        return session

    def delete_session(self, session_id: str) -> bool:
        session = self.get_session_by_id(session_id)
        if session:
            try:
                self.db.delete(session)
                self.db.commit()
                return True
            except SQLAlchemyError as e:
                self.db.rollback()
                raise e
        return False
