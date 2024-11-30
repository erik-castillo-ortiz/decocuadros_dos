from fastapi import status
from typing import Any, Optional


class DetailedException(Exception):  # Hereda de Exception
    status_code: Optional[int]
    detail: str = ""

    def __init__(self, status_code: int, detail: str, **kwargs: dict[str, Any]) -> None:
        self.status_code = status_code
        self.detail = detail


class NotFound(DetailedException):
    def __init__(self, detail: str = "Not Found", **kwargs) -> None:
        super().__init__(status_code=status.HTTP_404_NOT_FOUND, detail=detail, **kwargs)


class BadRequest(DetailedException):
    def __init__(self, detail: str = "Bad Request", **kwargs) -> None:
        super().__init__(status_code=status.HTTP_400_BAD_REQUEST, detail=detail, **kwargs)


class NotAuthenticated(DetailedException):
    def __init__(self, detail: str = "User not authenticated", **kwargs) -> None:
        super().__init__(status_code=status.HTTP_401_UNAUTHORIZED, detail=detail, **kwargs)
