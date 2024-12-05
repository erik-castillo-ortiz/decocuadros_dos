from fastapi import APIRouter, Depends, HTTPException
from app.cart.services import CartService
from app.cart.schemas import Cart, CartItem

router = APIRouter()


@router.get("/", response_model=Cart)
def get_cart(
    user_id: int = None,
    session_id: str = None,
    service: CartService = Depends(),
):
    try:
        return service.get_cart(user_id=user_id, session_id=session_id)
    except DetailedException as err:
        raise HTTPException(status_code=err.status_code, detail=err.detail)


@router.post("/add", response_model=Cart)
def add_to_cart(
    product_variant_id: int,
    quantity: int,
    user_id: int = None,
    session_id: str = None,
    service: CartService = Depends(),
):
    return service.add_to_cart(
        user_id=user_id,
        session_id=session_id,
        product_variant_id=product_variant_id,
        quantity=quantity,
    )


@router.put("/{item_id}/update", response_model=CartItem)
def update_cart_item(item_id: int, quantity: int, service: CartService = Depends()):
    return service.update_cart_item(item_id, quantity)


@router.delete("/{item_id}", response_model=CartItem)
def remove_cart_item(item_id: int, service: CartService = Depends()):
    return service.remove_cart_item(item_id)
