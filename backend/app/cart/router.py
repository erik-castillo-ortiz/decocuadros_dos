from fastapi import APIRouter, Depends, HTTPException, Cookie, Response
from app.cart.services import CartService
from app.cart.schemas import CartOut, AddToCart, RemoveFromCart

router = APIRouter()


@router.get("/", response_model=CartOut)
def get_cart(
    session_id: str = Cookie(None),
    cart_hash: str = Cookie(None),
    response: Response = None,
    service: CartService = Depends(),
):
    cart = service.get_or_create_cart(session_id=session_id, cart_hash=cart_hash, response=response)
    return cart


# @router.post("/add", response_model=CartOut)
# def add_to_cart(
#     data: AddToCart,
#     response: Response,
#     session_id: str = Cookie(None),
#     cart_hash: str = Cookie(None),
#     service: CartService = Depends(),
# ):
#     cart = service.get_or_create_cart(session_id=session_id, cart_hash=cart_hash, response=response)
#     service.add_to_cart(cart, data.product_variant_id, data.quantity)
#     return cart

@router.post("/add", response_model=CartOut)
def add_to_cart(
    data: AddToCart,
    response: Response,
    session_id: str = Cookie(None),
    cart_hash: str = Cookie(None),
    service: CartService = Depends(),
):
    # Obtén el carrito existente o crea uno nuevo
    cart = service.get_or_create_cart(session_id=session_id, cart_hash=cart_hash, response=response)

    # Agrega el producto al carrito y devuelve el carrito actualizado
    updated_cart = service.add_to_cart(cart, data.product_variant_id, data.quantity)
    return updated_cart

# @router.delete("/remove", response_model=CartOut)
# def remove_from_cart(
#     response: Response,
#     data: RemoveFromCart,
#     session_id: str = Cookie(None),
#     cart_hash: str = Cookie(None),
#     user_id: int = None,
#     service: CartService = Depends(),
# ):
#     # Obtén el carrito
#     cart = service.get_or_create_cart(session_id=session_id, user_id=user_id, cart_hash=cart_hash, response=response)
    
#     # Depuración
#     print(f"Removing product_variant_id: {data.product_variant_id} with quantity: {data.quantity} from cart ID: {cart.id}")
    
#     # Llama al servicio para eliminar
#     service.remove_from_cart(cart, data.product_variant_id, data.quantity)
#     return cart

@router.delete("/remove", response_model=CartOut)
def remove_from_cart(
    response: Response,
    data: RemoveFromCart,
    session_id: str = Cookie(None),
    cart_hash: str = Cookie(None),
    user_id: int = None,
    service: CartService = Depends(),
):
    # Obtén el carrito existente
    cart = service.get_or_create_cart(session_id=session_id, user_id=user_id, cart_hash=cart_hash, response=response)

    # Elimina el ítem y devuelve el carrito actualizado
    updated_cart = service.remove_from_cart(cart, data.product_variant_id, data.quantity)
    return updated_cart



# @router.delete("/clear", response_model=CartOut)
# def clear_cart(
#     response: Response,
#     session_id: str = Cookie(None),
#     cart_hash: str = Cookie(None),
#     service: CartService = Depends(),
# ):
#     cart = service.get_or_create_cart(session_id=session_id, cart_hash=cart_hash, response=response)
#     service.clear_cart(cart)
#     return cart

@router.delete("/clear", response_model=CartOut)
def clear_cart(
    response: Response,
    session_id: str = Cookie(None),
    cart_hash: str = Cookie(None),
    service: CartService = Depends(),
):
    # Obtén el carrito existente o crea uno nuevo
    cart = service.get_or_create_cart(session_id=session_id, cart_hash=cart_hash, response=response)

    # Limpia el carrito y devuelve el estado actualizado
    updated_cart = service.clear_cart(cart)
    return updated_cart

# @router.post("/merge", response_model=CartOut)
# def merge_guest_cart_to_user_cart(
#     response: Response,
#     session_id: str = Cookie(None),
#     cart_hash: str = Cookie(None),
#     service: CartService = Depends(),
# ):
#     guest_cart = service.get_or_create_cart(session_id=session_id, cart_hash=cart_hash, response=response)
#     user_cart = service.get_or_create_cart(response=response)
#     service.merge_carts(user_cart, guest_cart)
#     return user_cart
@router.post("/merge", response_model=CartOut)
def merge_guest_cart_to_user_cart(
    response: Response,
    session_id: str = Cookie(None),
    cart_hash: str = Cookie(None),
    service: CartService = Depends(),
):
    if not session_id or not cart_hash:
        raise HTTPException(status_code=400, detail="Missing cookies for session or cart")

    # Ejecuta la fusión y obtiene los datos relevantes
    result = service.merge_guest_cart_to_user_cart(cart_hash, session_id)
    updated_cart = result["cart"]
    new_cart_hash = result["cart_hash"]

    # Actualizar cookies con el carrito consolidado
    response.set_cookie(
        key="cart_hash",
        value=new_cart_hash,
        httponly=True,
        samesite="Lax",
        max_age=30 * 24 * 60 * 60,
    )
    if updated_cart.session_id:
        response.set_cookie(
            key="session_id",
            value=updated_cart.session_id,
            httponly=True,
            samesite="Lax",
            max_age=30 * 24 * 60 * 60,
        )

    return updated_cart
