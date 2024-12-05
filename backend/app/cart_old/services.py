from app.cart.repository import CartRepository
from app.products.repository import ProductRepository
from app.extensions import DetailedException
from app.session import use_database_session


class CartService:
    def __init__(self):
        pass

    def get_cart(self, user_id=None, session_id=None):
        with use_database_session() as db:
            repo = CartRepository(db)
            cart = repo.get_cart(user_id=user_id, session_id=session_id)
            if not cart:
                raise DetailedException(status_code=404, detail="Cart not found")
            return cart

    def create_cart(self, user_id=None, session_id=None):
        with use_database_session() as db:
            repo = CartRepository(db)
            return repo.create_cart(user_id=user_id, session_id=session_id)

    def add_to_cart(self, user_id, session_id, product_variant_id, quantity):
        with use_database_session() as db:
            cart_repo = CartRepository(db)
            product_repo = ProductRepository(db)

            product_variant = product_repo.get_product_variant(product_variant_id)
            if not product_variant:
                raise DetailedException(status_code=404, detail="Product variant not found")

            cart = cart_repo.get_cart(user_id=user_id, session_id=session_id)
            if not cart:
                cart = cart_repo.create_cart(user_id=user_id, session_id=session_id)

            cart_repo.add_to_cart(cart_id=cart.id, product_variant_id=product_variant.id, quantity=quantity)
            return cart

    def update_cart_item(self, item_id: int, quantity: int):
        with use_database_session() as db:
            repo = CartRepository(db)
            item = repo.update_cart_item(item_id, quantity)
            if not item:
                raise DetailedException(status_code=404, detail="Item not found")
            return item

    def remove_cart_item(self, item_id: int):
        with use_database_session() as db:
            repo = CartRepository(db)
            item = repo.remove_cart_item(item_id)
            if not item:
                raise DetailedException(status_code=404, detail="Item not found")
            return item
