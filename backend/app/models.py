from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from .session import Base

from pydantic import BaseModel

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String)


#test Schema Out
class MyBaseModel(BaseModel):
    def __str__(self):
        # Generate a dynamic string based on the fields of the model
        fields = ', '.join(f"{key}={value}" for key, value in self.dict().items())
        return f"{self.__class__.__name__}({fields})"

class UserOut(MyBaseModel):
    id: int
    name: str

    class Config:
        schema_extra = {
            "examples": [
                {
                    "name": "Foo",
                    "id": 1,
                }
            ]
        }
