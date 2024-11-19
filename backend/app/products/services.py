import requests
from app.extensions import DetailedException
from app.pagination import Params
from app.products.repository import ProductRepository
from app.products.schemas import GetPublicationsPaginationOut
from app.session import use_database_session

class ProductService:
    def __init__(self):
        ...

    def get_products(self, params: Params):
        with use_database_session() as db:
            product_repo = ProductRepository(db)

            (items, total) = product_repo.get_products(params)
            
            return ( GetPublicationsPaginationOut(
                data=items,
                total=total,
                # total_filtered=total_filtered,
                page=params.page,
                size=params.size
            ) , None)


    def get_product_by_id(self, id):
        with use_database_session() as db:
            product_repo = ProductRepository(db)

            item = product_repo.get_product_by(id)
            if item is None:
                return ( None, DetailedException(status_code=404, detail="Not Found"))
            
            return (item, None)
