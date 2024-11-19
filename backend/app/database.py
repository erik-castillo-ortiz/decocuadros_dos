from sqlalchemy import Boolean, Integer, JSON, orm, String, Text
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column


class Base:
    __allow_unmapped__ = True

    def __repr__(self):
        return f"{self.__class__.__name__}({', '.join(f'{k}={v!r}' for k, v in self.__dict__.items())})"

Base = orm.declarative_base(cls=Base)
