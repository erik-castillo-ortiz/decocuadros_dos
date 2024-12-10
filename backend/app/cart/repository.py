from sqlalchemy.orm import Session
from app.cart.models import Carts, CartItems
from app.products.models import ProductVariants
from sqlalchemy.exc import SQLAlchemyError
import uuid


class CartRepository:
    def __init__(self, db: Session):
        self.db = db
        
    def get_cart_by_hash(self, cart_hash: str) -> Carts | None:
        return self.db.query(Carts).filter(Carts.cart_hash == cart_hash).first()

    def get_cart_by_user(self, user_id: int) -> Carts | None:
        return self.db.query(Carts).filter(Carts.user_id == user_id).first()

    def get_cart_by_session(self, session_id: str) -> Carts | None:
        return self.db.query(Carts).filter(Carts.session_id == session_id).first()

    def create_cart(self, user_id: int = None, session_id: str = None, cart_hash: str = None) -> Carts:
        new_cart = Carts(user_id=user_id, session_id=session_id, cart_hash=cart_hash or str(uuid.uuid4()))
        self.db.add(new_cart)
        try:
            self.db.commit()
            self.db.refresh(new_cart)
        except SQLAlchemyError:
            self.db.rollback()
            raise
        return new_cart

    def add_item_to_cart(self, cart: Carts, product_variant_id: int, quantity: int) -> CartItems:
        new_item = CartItems(cart_id=cart.id, product_variant_id=product_variant_id, quantity=quantity)
        self.db.add(new_item)
        try:
            self.db.commit()
            self.db.refresh(new_item)
        except SQLAlchemyError:
            self.db.rollback()
            raise
        return new_item

    def get_cart_item(self, cart_id: int, product_variant_id: int) -> CartItems | None:
        # Busca el ítem en la base de datos con el ID del carrito y el ID de la variante
        return (
            self.db.query(CartItems)
            .filter(
                CartItems.cart_id == cart_id,
                CartItems.product_variant_id == product_variant_id
            )
            .first()
        )


    def remove_cart_item(self, cart_item: CartItems):
        try:
            self.db.delete(cart_item)
            self.db.commit()
        except SQLAlchemyError:
            self.db.rollback()
            raise

    def clear_cart(self, cart: Carts):
        try:
            for item in cart.items:
                self.db.delete(item)
            self.db.commit()
        except SQLAlchemyError:
            self.db.rollback()
            raise
