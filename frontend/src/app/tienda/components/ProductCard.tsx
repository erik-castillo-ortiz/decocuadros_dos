import Link from "next/link"

const ProductCard = ({to}:{to:string}) => {

    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                <div className="product-default inner-quickview inner-icon">
                    <figure>
                        <Link href={to}>
                            <img
                                src="assets/images/demoes/demo36/products/product-10.jpg"
                                width={239}
                                height={239}
                                alt="product"
                            />
                        </Link>
                        <div className="btn-icon-group">
                            <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                            >
                                <i className="icon-shopping-cart" />
                            </a>
                        </div>
                        <Link href={"?show=true"} className="btn-quickview" title="Quick View" scroll={false}>
                            Quick View
                        </Link>
                       
                    </figure>
                    <div className="product-details">
                        <div className="category-wrap">
                            <div className="category-list">
                                <a href="demo36-shop.html" className="product-category">
                                    category
                                </a>
                            </div>
                            <a
                                href="wishlist.html"
                                title="Wishlist"
                                className="btn-icon-wish"
                            >
                                <i className="icon-heart" />
                            </a>
                        </div>
                        <h3 className="product-title">
                            <a href="demo36-product.html">Black Bag</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{ width: "100%" }} />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
            </div>
        </>
    )
}

export default ProductCard