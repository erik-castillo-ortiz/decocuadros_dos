from fastapi import status
from typing import Any, Optional

class DetailedException:
    status_code: Optional[int] 
    detail:str=""

    def __init__(self, status_code:int, detail:str, **kwargs: dict[str, Any]) -> None:
        self.status_code = status_code
        self.detail = detail
        # super().__init__(status_code=self.status_code, detail=self.detail, **kwargs)


class NotFound(DetailedException):
    status_code: Optional[int] = status.HTTP_404_NOT_FOUND
    detail:str=""
    
    def __init__(self, detail: str, status_code: Optional[int] = status.HTTP_404_NOT_FOUND, **kwargs) -> None:
        _status_code = status_code or self.status_code
        super().__init__(status_code=_status_code, detail=detail, **kwargs)