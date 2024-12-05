from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional


class CartItem(BaseModel):
    id: int
    product_variant_id: int
    quantity: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


class CartOut(BaseModel):
    id: int
    user_id: Optional[int]
    session_id: Optional[str]
    cart_hash: str
    items: List[CartItem]
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


class AddToCart(BaseModel):
    product_variant_id: int
    quantity: int


class RemoveFromCart(BaseModel):
    product_variant_id: int
    quantity: Optional[int] = None

