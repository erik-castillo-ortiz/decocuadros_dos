
from fastapi import Query
from pydantic import BaseModel

class GetPublicationsOut(BaseModel):
    id: int
    title: str

class GetPublicationsPaginationOut(BaseModel):
    data: list[GetPublicationsOut]
    # total_filtered: int
    total: int
    page: int
    size: int

# class GetModerationIn(BaseModel):
#     status: str | None = Query(default=None, description="Status")
#     substatus: str | None = Query(default=None, description="SubStatus")
#     scroll_id: str | None= Query(default=None, description="scroll_id")
#     tags: str | None= Query(default=None, description="tags")
#     # size: int = Query(50, ge=1, le=100, description="Page size")

#     # def to_raw_params(self) -> RawParams:
#     #     return RawParams(
#     #         limit=self.size,
#     #         offset=self.size * (self.page - 1),
#     #     )


# class ModerationOut(BaseModel):
#     id: int
#     status: str
#     substatus: str | None
#     tags: str | None
#     operation: int

# class ModerationResultsItem(BaseModel):
#     value: str

# class GetModerationResultsOut(BaseModel):
#     moderation: ModerationOut
#     results: list[ModerationResultsItem]