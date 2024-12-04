from sqlalchemy import ForeignKey, func
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime, timedelta
from app.database import Base


class Users(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(unique=True)
    password_hash: Mapped[str] = mapped_column()
    first_name: Mapped[str] = mapped_column()
    last_name: Mapped[str] = mapped_column()
    phone: Mapped[str] = mapped_column(nullable=True)
    rut: Mapped[str] = mapped_column()
    created_at: Mapped[datetime] = mapped_column(default=func.now())
    updated_at: Mapped[datetime] = mapped_column(default=func.now(), onupdate=func.now())

    sessions = relationship("UserSession", back_populates="user")
    cart = relationship("Carts", back_populates="user", uselist=False)


class UserSession(Base):
    __tablename__ = "users_sessions"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    session_id: Mapped[str] = mapped_column(unique=True)
    created_at: Mapped[datetime] = mapped_column(default=func.now())
    last_active: Mapped[datetime] = mapped_column(default=func.now(), onupdate=func.now())
    expires_at: Mapped[datetime] = mapped_column(default=lambda: datetime.utcnow() + timedelta(hours=1))

    user = relationship("Users", back_populates="sessions")
