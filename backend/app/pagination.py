from pydantic import BaseModel
from typing import Optional
from fastapi import Query
from dataclasses import dataclass


@dataclass
class RawParams:
    limit: Optional[int] = None
    offset: Optional[int] = None


class Params(BaseModel):
    page: int = Query(1, ge=1, description="Page number")
    size: int = Query(20, ge=1, le=100, description="Page size")

    def to_raw_params(self) -> RawParams:
        return RawParams(
            limit=self.size,
            offset=self.size * (self.page - 1),
        )
