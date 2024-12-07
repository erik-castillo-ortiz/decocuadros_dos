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

    def get_product_by_slug(self, slug: str):
        with use_database_session() as db:
            product_repo = ProductRepository(db)

            product = product_repo.get_product_with_relations_by_slug(slug)
            if not product:
                return None, DetailedException(status_code=404, detail="Product not found")

            # Construir la respuesta JSON
            attributes = [
                {
                    "id": attr.attribute.id,
                    "name": attr.attribute.name,
                    "type": attr.attribute.type,
                    "values": [
                        {"id": option.id, "name": option.name, "value": option.value}
                        for option in attr.attribute.options
                    ],
                    "isVariation": attr.is_variation,
                }
                for attr in product.attributes
            ]

            variations = [
                {
                    "id": variant.id,
                    "SKU": variant.sku,
                    "price": f"${variant.price:.2f}",
                    "stock": variant.stock,
                    "attributes": [
                        {
                            "attributeId": opt.attribute_option.attribute_id,
                            "valueId": opt.attribute_option.id,
                            "orderMenu": opt.order_menu,
                        }
                        for opt in variant.variant_options
                    ],
                }
                for variant in product.variants
            ]

            return {
                "id": product.id,
                "name": product.name,
                "slug": product.slug,
                "image": product.image,
                "category": product.category.name,
                "categoryId": product.category.id,
                "rating": product.rating,
                "oldPrice": f"${product.old_price:.2f}" if product.old_price else None,
                "newPrice": f"${product.new_price:.2f}" if product.new_price else None,
                "isHot": product.is_hot,
                "discount": product.discount,
                "description": product.description,
                "shortDescription": product.short_description,
                "SKU": product.sku,
                "sizes": product.sizes,
                "gallery": product.gallery,
                "stock": product.stock,
                "isFeatured": product.is_featured,
                "offerEnds": product.offer_ends,
                "publishDate": product.publish_date,
                "attributes": attributes,
                "variations": variations,
            }, None

    def get_product_by_id(self, id):
        with use_database_session() as db:
            product_repo = ProductRepository(db)

            item = product_repo.get_product_by(id)
            if item is None:
                return ( None, DetailedException(status_code=404, detail="Not Found"))
            
            return (item, None)
            
    def get_product_by_variant_id(self, variant_id: int):
        with use_database_session() as db:
            product_repo = ProductRepository(db)

            product, variant = product_repo.get_product_by_variant_id(variant_id)
            if not product or not variant:
                return None, DetailedException(status_code=404, detail="Product variant not found")

            return {
                "name": product.name,
                "slug": product.slug,
                "image_url": product.image,
                "price": float(variant.price),
            }, None