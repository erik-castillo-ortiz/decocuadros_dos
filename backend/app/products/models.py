
from app.database import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import types

class Products(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(types.String(255))
    description: Mapped[str] = mapped_column(types.Text)
    base_price: Mapped[float] = mapped_column(types.Float(10,2))

