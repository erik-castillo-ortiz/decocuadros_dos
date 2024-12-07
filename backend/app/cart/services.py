from app.cart.repository import CartRepository
from app.session import use_database_session
from app.users.services import UserService
from fastapi.responses import Response
from fastapi import HTTPException
import uuid
from app.cart.models import Carts
from sqlalchemy.exc import SQLAlchemyError

from sqlalchemy import create_engine, event, text

from app.config import settings



SCHEMA = settings.SCHEMA

class CartService:

    def get_or_create_cart(
        self, session_id: str = None, user_id: int = None, cart_hash: str = None, response: Response = None
    ):
        with use_database_session() as db:
            repo = CartRepository(db)

            # Buscar carrito por hash primero
            cart = None
            if cart_hash:
                cart = repo.get_cart_by_hash(cart_hash)

            # Si no se encontró por hash, buscar por usuario logueado
            if not cart and user_id:
                cart = repo.get_cart_by_user(user_id)

            # Si no se encontró por usuario, buscar por sesión
            if not cart and session_id:
                cart = repo.get_cart_by_session(session_id)

            # Si todavía no hay carrito, crear uno nuevo
            if not cart:
                cart_hash = cart_hash or str(uuid.uuid4())
                cart = repo.create_cart(user_id=user_id, session_id=session_id, cart_hash=cart_hash)
                if response:
                    self.set_cart_cookie(response, cart_hash)

            # Asociar carrito existente al usuario si está logueado
            if user_id and not cart.user_id:
                cart.user_id = user_id
                db.commit()
                db.refresh(cart)

            # Refrescar los ítems relacionados para asegurar la carga
            db.refresh(cart, ["items"])
            return cart


    def add_to_cart(self, cart, product_variant_id: int, quantity: int):
        with use_database_session() as db:
            repo = CartRepository(db)

            # Busca el ítem directamente en la base de datos
            item = repo.get_cart_item(cart.id, product_variant_id)
            if item:
                # Si el ítem ya existe, incrementa la cantidad
                item.quantity += quantity
                db.commit()
            else:
                # Si no existe, agrega un nuevo ítem
                repo.add_item_to_cart(cart, product_variant_id, quantity)

            # Obtén el carrito actualizado con sus ítems
            updated_cart = repo.get_cart_by_hash(cart.cart_hash)
            db.refresh(updated_cart, ["items"])  # Asegúrate de cargar los ítems relacionados
            return updated_cart


    # def remove_from_cart(self, cart, product_variant_id: int, quantity: int = None):
    #     with use_database_session() as db:
    #         repo = CartRepository(db)

    #         # Busca el ítem directamente en la base de datos
    #         item = repo.get_cart_item(cart.id, product_variant_id)
    #         if not item:
    #             raise HTTPException(status_code=404, detail="Item not found in cart")

    #         if quantity is None or quantity >= item.quantity:
    #             # Si no se proporciona cantidad o es mayor o igual al stock actual, elimina el ítem
    #             repo.remove_cart_item(item)
    #         else:
    #             # Reduce la cantidad
    #             item.quantity -= quantity
    #             db.commit()

    #         # Obtén el carrito actualizado con sus ítems
    #         updated_cart = repo.get_cart_by_hash(cart.cart_hash)
    #         db.refresh(updated_cart, ["items"])  # Asegúrate de cargar los ítems relacionados
    #         return updated_cart
    def remove_from_cart(self, cart, product_variant_id: int, quantity: int = None):
        with use_database_session() as db:
            repo = CartRepository(db)

            item = repo.get_cart_item(cart.id, product_variant_id)
            if not item:
                raise HTTPException(status_code=404, detail="Item not found in cart")

            if quantity is None or quantity >= item.quantity:
                repo.remove_cart_item(item)
            else:
                item.quantity -= quantity
                db.commit()

            db.execute(text(f"SET search_path TO {SCHEMA}"))

            updated_cart = repo.get_cart_by_hash(cart.cart_hash)
            db.refresh(updated_cart, ["items"])
            return updated_cart

    def clear_cart(self, cart):
        with use_database_session() as db:
            repo = CartRepository(db)

            # Limpia todos los ítems del carrito
            repo.clear_cart(cart)

            # Obtén el carrito actualizado
            updated_cart = repo.get_cart_by_hash(cart.cart_hash)
            db.refresh(updated_cart, ["items"])  # Asegúrate de refrescar los ítems relacionados
            return updated_cart


    def merge_carts(self, user_cart, guest_cart):
        with use_database_session() as db:
            repo = CartRepository(db)

            # Reasocia los carritos a la sesión activa
            user_cart = db.merge(user_cart)
            guest_cart = db.merge(guest_cart)

            # Fusiona los ítems del carrito de invitado en el carrito de usuario
            for guest_item in guest_cart.items:
                user_item = repo.get_cart_item(user_cart.id, guest_item.product_variant_id)
                if user_item:
                    # Incrementa la cantidad si el ítem ya existe
                    user_item.quantity += guest_item.quantity
                else:
                    # Crea un nuevo ítem en el carrito de usuario
                    repo.add_item_to_cart(user_cart, guest_item.product_variant_id, guest_item.quantity)

            # Limpia el carrito de invitado
            repo.clear_cart(guest_cart)

            # Asocia el carrito al usuario si no tiene uno
            if not user_cart.user_id:
                user_cart.user_id = guest_cart.user_id

            # Confirma los cambios
            db.commit()

            # Refresca el carrito con los ítems fusionados
            db.refresh(user_cart, ["items"])
            return user_cart


    def set_cart_cookie(self, response: Response, cart_hash: str, max_age: int = 30 * 24 * 60 * 60):
        response.set_cookie(
            key="cart_hash",
            value=cart_hash,
            httponly=True,
            secure=False,  # Cambiar a True en producción
            samesite="Lax",
            max_age=max_age,
        )

    def get_user_id_by_session(self, session_id: str) -> int | None:
        from app.users.services import UserService
        user_service = UserService()
        user = user_service.get_user_by_session(session_id)
        return user.id if user else None

    def associate_cart_with_user(self, cart, user_id: int, session_id: str) -> Carts:
        with use_database_session() as db:
            repo = CartRepository(db)

            # Vincula el carrito con la sesión actual
            cart = db.merge(cart)

            # Asigna el user_id y el session_id al carrito
            cart.user_id = user_id
            cart.session_id = session_id

            # Refresca explícitamente las relaciones
            db.refresh(cart, ["items"])

            try:
                db.commit()
                return cart
            except SQLAlchemyError as e:
                db.rollback()
                raise HTTPException(status_code=500, detail=f"Error updating cart: {str(e)}")

    def get_cart_by_hash(self, cart_hash: str) -> Carts | None:
        with use_database_session() as db:
            repo = CartRepository(db)
            cart = repo.get_cart_by_hash(cart_hash)
            return db.merge(cart) if cart else None

    def merge_guest_cart_to_user_cart(self, cart_hash: str, session_id: str) -> dict:
        from app.users.services import UserService

        user_service = UserService()

        # Obtener usuario autenticado por la sesión
        user = user_service.get_user_by_session(session_id)
        if not user:
            raise HTTPException(status_code=401, detail="User not authenticated")

        with use_database_session() as db:
            repo = CartRepository(db)

            # Obtener carrito de invitado
            guest_cart = repo.get_cart_by_hash(cart_hash)
            if guest_cart:
                print(f"Carrito de invitado encontrado: ID={guest_cart.id}, User ID={guest_cart.user_id}")

            # Obtener carrito del usuario
            user_cart = repo.get_cart_by_user(user.id)

            # Fusionar si hay ambos carritos
            if user_cart and guest_cart:
                print(f"Fusionando carrito de usuario ID={user_cart.id} con carrito de invitado ID={guest_cart.id}")
                for guest_item in guest_cart.items:
                    user_item = repo.get_cart_item(user_cart.id, guest_item.product_variant_id)
                    if user_item:
                        user_item.quantity += guest_item.quantity
                    else:
                        repo.add_item_to_cart(user_cart, guest_item.product_variant_id, guest_item.quantity)
                repo.clear_cart(guest_cart)
                db.delete(guest_cart)
                db.commit()
                db.refresh(user_cart, ["items"])
                return {"cart": user_cart, "cart_hash": user_cart.cart_hash}

            # Si solo existe carrito de invitado, vincularlo al usuario
            if guest_cart:
                guest_cart.user_id = user.id
                guest_cart.session_id = session_id
                db.commit()
                db.refresh(guest_cart, ["items"])
                return {"cart": guest_cart, "cart_hash": guest_cart.cart_hash}

            # Si solo existe carrito de usuario, retornarlo
            if user_cart:
                db.refresh(user_cart, ["items"])
                return {"cart": user_cart, "cart_hash": user_cart.cart_hash}

            # Si no hay ningún carrito, crear uno nuevo
            new_cart = repo.create_cart(user_id=user.id, session_id=session_id, cart_hash=str(uuid.uuid4()))
            db.commit()
            db.refresh(new_cart, ["items"])
            return {"cart": new_cart, "cart_hash": new_cart.cart_hash}




