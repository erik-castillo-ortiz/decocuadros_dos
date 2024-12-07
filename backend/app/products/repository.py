from typing import Optional, Tuple

from app.extensions import DetailedException, NotFound 
from app.pagination import Params
from app.products.models import Products, ProductAttributes, Attributes, AttributeOptions, ProductVariants, ProductVariantOptions
from app.products.schemas import GetPublicationsOut
from app.repository import BaseRepository
from sqlalchemy import func, select
from sqlalchemy.orm import joinedload


class ProductRepository(BaseRepository):
    """Operations to interact with the `users` table in the database."""

    def get_product_by(self, id) -> Products:
        base_query = self.db.query(Products).filter(Products.id == id)
        
        return base_query.first()


    def get_product_with_relations_by_slug(self, slug: str) -> Products:
        return (
            self.db.query(Products)
            .filter(Products.slug == slug)
            .options(
                joinedload(Products.attributes).joinedload(ProductAttributes.attribute).joinedload(Attributes.options),
                joinedload(Products.variants).joinedload(ProductVariants.variant_options).joinedload(ProductVariantOptions.attribute_option),
                joinedload(Products.category),
            )
            .first()
        )


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

    def get_product_by_variant_id(self, variant_id: int) -> Tuple[Optional[Products], Optional[ProductVariants]]:
        product_variant = (
            self.db.query(ProductVariants)
            .filter(ProductVariants.id == variant_id)
            .join(Products)
            .options(
                joinedload(ProductVariants.product)
            )
            .first()
        )

        if not product_variant:
            return None, None

        return product_variant.product, product_variant

