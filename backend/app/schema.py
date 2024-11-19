from enum import Enum
from typing import Generic, TypeVar
from fastapi import Query
from pydantic import BaseModel


class MyBaseModel(BaseModel):
    def __str__(self):
        # Generate a dynamic string based on the fields of the model
        fields = ', '.join(f"{key}={value}" for key, value in self.dict().items())
        return f"{self.__class__.__name__}({fields})"

class TypeOfItemsEnum(str, Enum):
    published = "published"
    standby = "standby"
    rejected = "rejected"    

class GetGenericSearchIn(MyBaseModel):
    q: str | None = None
    type_of: TypeOfItemsEnum = Query(
        TypeOfItemsEnum.published, description="Type Of Item"
    )
    # size: int = Query(50, ge=1, le=100, description="Page size")


# T = TypeVar('T')
# class GenericPaginationOut(BaseModel, Generic[T]):
#     data: T
#     # total_filtered: int
#     total: int
#     page: int
