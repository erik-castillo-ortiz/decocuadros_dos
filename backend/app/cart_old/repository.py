from sqlalchemy.orm import Session
from app.cart.models import CartItems, Carts
from sqlalchemy.exc import SQLAlchemyError


class CartRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_cart(self, user_id=None, session_id=None):
        query = self.db.query(Carts)
        if user_id:
            query = query.filter(Carts.user_id == user_id)
        elif session_id:
            query = query.filter(Carts.session_id == session_id)
        return query.first()

    def create_cart(self, user_id=None, session_id=None):
        new_cart = Carts(user_id=user_id, session_id=session_id)
        self.db.add(new_cart)
        try:
            self.db.commit()
            self.db.refresh(new_cart)
        except SQLAlchemyError as e:
            self.db.rollback()
            raise e
        return new_cart

    def add_to_cart(self, cart_id: int, product_variant_id: int, quantity: int):
        existing_item = (
            self.db.query(CartItems)
            .filter(CartItems.cart_id == cart_id, CartItems.product_variant_id == product_variant_id)
            .first()
        )
        if existing_item:
            existing_item.quantity += quantity
        else:
            new_item = CartItems(
                cart_id=cart_id,
                product_variant_id=product_variant_id,
                quantity=quantity,
            )
            self.db.add(new_item)
        self.db.commit()

    def update_cart_item(self, item_id: int, quantity: int):
        item = self.db.query(CartItems).filter(CartItems.id == item_id).first()
        if item:
            item.quantity = quantity
            self.db.commit()
            self.db.refresh(item)
            return item
        return None

    def remove_cart_item(self, item_id: int):
        item = self.db.query(CartItems).filter(CartItems.id == item_id).first()
        if item:
            self.db.delete(item)
            self.db.commit()
        return item
