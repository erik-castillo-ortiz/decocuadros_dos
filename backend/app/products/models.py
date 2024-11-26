
# from app.database import Base
# from sqlalchemy.orm import Mapped, mapped_column, relationship
# from sqlalchemy import types
from app.database import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import types, ForeignKey
# class Products(Base):
#     __tablename__ = "products"

#     id: Mapped[int] = mapped_column(primary_key=True)
#     title: Mapped[str] = mapped_column(types.String(255))
#     description: Mapped[str] = mapped_column(types.Text)
#     base_price: Mapped[float] = mapped_column(types.Float(10,2))



class Products(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(types.String(255))
    slug: Mapped[str] = mapped_column(types.String(255), unique=True)
    image: Mapped[str] = mapped_column(types.String(255))
    categoryid: Mapped[int] = mapped_column(ForeignKey("categories.id")) 
    rating: Mapped[int]
    old_price: Mapped[float] = mapped_column(types.Numeric(10, 2))
    new_price: Mapped[float] = mapped_column(types.Numeric(10, 2))
    is_hot: Mapped[bool] = mapped_column(types.Boolean, default=False)
    discount: Mapped[str] = mapped_column(types.String(50))
    description: Mapped[str] = mapped_column(types.Text)
    short_description: Mapped[str] = mapped_column(types.Text)
    sku: Mapped[str] = mapped_column(types.String(255))
    sizes: Mapped[list[str]] = mapped_column(types.ARRAY(types.String(50)))
    gallery: Mapped[list[str]] = mapped_column(types.ARRAY(types.String(255)))
    stock: Mapped[int]
    is_featured: Mapped[bool] = mapped_column(types.Boolean, default=False)
    offer_ends: Mapped[str] = mapped_column(types.DateTime)
    publish_date: Mapped[str] = mapped_column(types.DateTime)

    category = relationship("Categories")
    attributes = relationship("ProductAttributes", back_populates="product")
    # variants = relationship("ProductVariants", back_populates="product")
    variants = relationship(
        "ProductVariants",
        back_populates="product",
        order_by="ProductVariants.id"
    )



class Categories(Base):
    __tablename__ = "categories"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(types.String(255))
    slug: Mapped[str] = mapped_column(types.String(255), unique=True)


class ProductAttributes(Base):
    __tablename__ = "product_attributes"

    id: Mapped[int] = mapped_column(primary_key=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id"))
    attribute_id: Mapped[int] = mapped_column(ForeignKey("attributes.id"))
    is_variation: Mapped[bool] = mapped_column(types.Boolean, default=False)

    product = relationship("Products", back_populates="attributes")
    attribute = relationship("Attributes", back_populates="product_attributes")


class Attributes(Base):
    __tablename__ = "attributes"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(types.String(255))
    type: Mapped[str] = mapped_column(types.String(50))
    options = relationship("AttributeOptions", back_populates="attribute")
    product_attributes = relationship("ProductAttributes", back_populates="attribute")


class AttributeOptions(Base):
    __tablename__ = "attribute_options"

    id: Mapped[int] = mapped_column(primary_key=True)
    attribute_id: Mapped[int] = mapped_column(ForeignKey("attributes.id"))
    name: Mapped[str] = mapped_column(types.String(255))
    value: Mapped[str] = mapped_column(types.String(255))

    attribute = relationship("Attributes", back_populates="options")


class ProductVariants(Base):
    __tablename__ = "product_variants"

    id: Mapped[int] = mapped_column(primary_key=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id"))
    sku: Mapped[str] = mapped_column(types.String(255), unique=True)
    stock: Mapped[int]
    price: Mapped[float] = mapped_column(types.Numeric(10, 2))

    product = relationship("Products", back_populates="variants")
    # variant_options = relationship("ProductVariantOptions", back_populates="variant")
    variant_options = relationship(
            "ProductVariantOptions",
            back_populates="variant",
            order_by="ProductVariantOptions.order_menu"  # Orden explícito
        )

class ProductVariantOptions(Base):
    __tablename__ = "product_variant_options"

    id: Mapped[int] = mapped_column(primary_key=True)
    product_variant_id: Mapped[int] = mapped_column(ForeignKey("product_variants.id"))
    attribute_option_id: Mapped[int] = mapped_column(ForeignKey("attribute_options.id"))
    order_menu: Mapped[int]

    variant = relationship("ProductVariants", back_populates="variant_options")
    attribute_option = relationship("AttributeOptions")