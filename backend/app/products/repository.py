from typing import Optional, Tuple

from app.extensions import DetailedException, NotFound 
from app.pagination import Params
from app.products.models import Products
from app.products.schemas import GetPublicationsOut
from app.repository import BaseRepository
from sqlalchemy import func, select
 
class ProductRepository(BaseRepository):
    """Operations to interact with the `users` table in the database."""

    def get_product_by(self, id) -> Products:
        base_query = self.db.query(Products).filter(Products.id == id)
        
        return base_query.first()

    def get_products(self, params: Params, q = ""):
        params_base = params.to_raw_params()
        limit = params_base.limit
        offset = params_base.offset

        total_query = self.db.execute(select(func.count(Products.id)))
        total:int = total_query.scalar_one()

        query = select(
                Products.id, Products.title, Products.description, Products.base_price 
            )
        
        sub_query = True
        if q:
            search = "%{}%".format(q)
            sub_query = (
                        Products.title.like(search) 
                        # Products.eyn_id.like(search) |
                        # Products.ml_id.like(search)
                    )
            query = query.where(sub_query)
        query = query.order_by(Products.id.desc()).limit(limit=limit).offset(offset=offset)

        # total_filtered_query = self.db.execute(select(func.count(Products.id)).select_from(query.subquery()))
        # total_filtered:int = total_filtered_query.scalar_one()
        
        result = self.db.execute(query)
        items: list[Products] = result.all() 

        items_list = [ GetPublicationsOut(
            id = item.id ,
            title =item.title,
        ) for item in items ]

        return (items_list, total)



    # def get_moderation_results_by(self, moderation_id,limit, offset):
    #     total_query = self.db.execute(select(func.count(ModerationResults.id)).where(ModerationResults.moderation_id == moderation_id))
    #     total:int = total_query.scalar_one()
        
    #     query = select(
    #             ModerationResults.id, ModerationResults.value
    #         ).where(
                
    #         )
        
    #     sub_query = True
    #     # if q:
    #     #     search = "%{}%".format(q)
    #     #     sub_query = (
    #     #                 Products.title.like(search) |
    #     #                 Products.eyn_id.like(search) |
    #     #                 Products.ml_id.like(search)
    #     #             )
    #     #     query = query.where(sub_query)
    #     query = query.order_by(ModerationResults.id.desc()).limit(limit=limit).offset(offset=offset)

    #     # total_filtered_query = self.db.execute(select(func.count(Products.id)).select_from(query.subquery()))
    #     # total_filtered:int = total_filtered_query.scalar_one()
        
    #     result = self.db.execute(query)
    #     items: list[ModerationResults] = result.all() 

    #     items_list = [ ModerationResultsItem(
    #         value= item.value
    #     ) for item in items ]

    #     return (items_list, total)

    # def delete_moderation(self, id):
    #     self.db.query(Moderations).filter(Moderations.id == id).delete()

    # def createModeration(data: GetModerationIn):
    #     ...