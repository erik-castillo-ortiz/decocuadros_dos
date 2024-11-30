from pydantic import BaseModel
from typing import List, Optional


class CartItem(BaseModel):
    id: int
    product_variant_id: int
    quantity: int

    class Config:
        orm_mode = True


class Cart(BaseModel):
    id: int
    user_id: Optional[int]
    session_id: Optional[str]
    items: List[CartItem]

    class Config:
        orm_mode = True
