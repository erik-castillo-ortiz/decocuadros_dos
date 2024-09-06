const Footer = () => {
    return (
        <>
            <footer className="footer font2">
                <div className="container">
                    <div className="widget-newsletter d-flex align-items-center align-items-sm-start flex-column flex-lg-row  justify-content-lg-between">
                        <div className="widget-newsletter-info text-center text-sm-left d-flex flex-column flex-sm-row align-items-center mb-1 mb-xl-0">
                            <i className="icon-envolope" />
                            <div className="widget-info-content">
                                <h5 className="widget-newsletter-title mb-0">
                                    Subscribe To Our Newsletter
                                </h5>
                                <p className="widget-newsletter-content mb-0">
                                    Get all the latest information on Events, Sales and Offers.
                                </p>
                            </div>
                        </div>
                        <form action="#" className="mb-0 w-lg-max mt-2 mt-md-0">
                            <div className="footer-submit-wrapper d-flex align-items-center">
                                <input
                                    type="email"
                                    className="form-control mb-0"
                                    placeholder="Your E-mail Address"
                                    size={40}
                                    required
                                />
                                <button type="submit" className="btn btn-primary btn-sm">
                                    Subscribe Now!
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="widget">
                                    <h3 className="widget-title">Customer Service</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li>
                                                <a href="#">Help &amp; FAQs</a>
                                            </li>
                                            <li>
                                                <a href="#">Order Tracking</a>
                                            </li>
                                            <li>
                                                <a href="#">Shipping &amp; Delivery</a>
                                            </li>
                                            <li>
                                                <a href="#">Orders History</a>
                                            </li>
                                            <li>
                                                <a href="#">Advanced Search</a>
                                            </li>
                                            <li>
                                                <a href="login.html">Login</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="widget">
                                    <h3 className="widget-title">About Us</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li>
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Careers</a>
                                            </li>
                                            <li>
                                                <a href="#">Our Stores</a>
                                            </li>
                                            <li>
                                                <a href="#">Corporate Sales</a>
                                            </li>
                                            <li>
                                                <a href="#">Careers</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="widget">
                                    <h3 className="widget-title">More Information</h3>
                                    <div className="widget-content">
                                        <ul>
                                            <li>
                                                <a href="#">Affiliates</a>
                                            </li>
                                            <li>
                                                <a href="#">Refer a Friend</a>
                                            </li>
                                            <li>
                                                <a href="#">Student Beans Offers</a>
                                            </li>
                                            <li>
                                                <a href="#">Gift Vouchers</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="widget">
                                    <h3 className="widget-title">Social Media</h3>
                                    <div className="widget-content">
                                        <div className="social-icons">
                                            <a
                                                href="#"
                                                className="social-icon social-facebook icon-facebook"
                                                target="_blank"
                                                title="Facebook"
                                            />
                                            <a
                                                href="#"
                                                className="social-icon social-twitter icon-twitter"
                                                target="_blank"
                                                title="Twitter"
                                            />
                                            <a
                                                href="#"
                                                className="social-icon social-instagram icon-instagram"
                                                target="_blank"
                                                title="Instagram"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-middle">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-3 mb-lg-0">
                                <ul className="footer-category-list mb-0">
                                    <li>
                                        <h4 className="d-inline-block">Fashion:</h4>{" "}
                                        <a href="demo36-shop.html">Tops &amp; Blouses</a> |{" "}
                                        <a href="demo36-shop.html">Accessories</a> |{" "}
                                        <a href="demo36-shop.html">Dresses &amp; Skirts</a> |{" "}
                                        <a href="demo36-shop.html">Shoes &amp; Boots</a> |{" "}
                                        <a className="view-all" href="demo36-shop.html">
                                            View All
                                            <i className="fas fa-long-arrow-alt-right ml-1" />
                                        </a>
                                    </li>
                                    <li>
                                        <h4 className="d-inline-block">Electronics:</h4>{" "}
                                        <a href="demo36-shop.html">Cables &amp; Adapters</a> |{" "}
                                        <a href="demo36-shop.html">Electronic Cigarettes</a> |{" "}
                                        <a href="demo36-shop.html">Batteries</a> |{" "}
                                        <a href="demo36-shop.html">Chargers</a> |{" "}
                                        <a href="demo36-shop.html">Home Electronic</a> |{" "}
                                        <a href="demo36-shop.html">Bags &amp; Cases</a> |{" "}
                                        <a className="view-all" href="demo36-shop.html">
                                            View All
                                            <i className="fas fa-long-arrow-alt-right ml-1" />
                                        </a>
                                    </li>
                                    <li>
                                        <h4 className="d-inline-block">Gifts:</h4>{" "}
                                        <a href="demo36-shop.html">Gifts for Boyfriend</a> |{" "}
                                        <a href="demo36-shop.html">Gifts for Husband</a> |{" "}
                                        <a href="demo36-shop.html">Gifts for Dad</a> |{" "}
                                        <a href="#">Gifts for Grandpa</a> |{" "}
                                        <a className="view-all" href="demo36-shop.html">
                                            View All
                                            <i className="fas fa-long-arrow-alt-right ml-1" />
                                        </a>
                                    </li>
                                    <li>
                                        <h4 className="d-inline-block">Home &amp; Garden:</h4>{" "}
                                        <a href="#">Sofas &amp; Couches</a> | <a href="#">Armchairs</a>{" "}
                                        | <a href="#">Bed Frames</a> | <a href="#">Bedside Tables</a> |{" "}
                                        <a href="#">Dressing Tables</a> |{" "}
                                        <a href="#">Chest of Drawers</a> |{" "}
                                        <a className="view-all" href="demo36-shop.html">
                                            View All
                                            <i className="fas fa-long-arrow-alt-right ml-1" />
                                        </a>
                                    </li>
                                    <li>
                                        <h4 className="d-inline-block">Music:</h4>{" "}
                                        <a href="#">Guitar</a> | <a href="#">Drums Sets</a> |{" "}
                                        <a href="#">Percussions</a> |{" "}
                                        <a href="#">Pedals &amp; Effects</a> |
                                        <a href="#">Sound Cards</a> | <a href="#">Studio Equipments</a>{" "}
                                        | <a href="#">Piano &amp; Keyboards</a> |{" "}
                                        <a href="#" className="view-all">
                                            View All
                                            <i className="fas fa-long-arrow-alt-right ml-1" />
                                        </a>
                                    </li>
                                    <li>
                                        <h4 className="d-inline-block">Sports:</h4>{" "}
                                        <a href="#">Sports &amp; Fitness</a> |{" "}
                                        <a href="#">Boating &amp; Sailing</a> | <a href="#">Clothing</a>{" "}
                                        | <a href="#">Exercise &amp; Fitness</a> | <a href="#">Golf</a>{" "}
                                        | <a href="#">Hunting &amp; Fishing</a> |{" "}
                                        <a href="#">Leisure Sports</a> | <a href="#">Running</a> |
                                        <a className="view-all" href="demo36-shop.html">
                                            View All
                                            <i className="fas fa-long-arrow-alt-right ml-1" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-12 offset-lg-1 col-lg-3">
                                <div className="widget widget-payment">
                                    <h3 className="widget-title ls-0">PAYMENT METHODS</h3>
                                    <div className="widget-content">
                                        <div className="payment-icons mr-0">
                                            <span
                                                className="payment-icon visa"
                                                style={{
                                                    backgroundImage:
                                                        "url(assets/images/payments/payment-visa.svg)"
                                                }}
                                            />
                                            <span
                                                className="payment-icon paypal"
                                                style={{
                                                    backgroundImage:
                                                        "url(assets/images/payments/payment-paypal.svg)"
                                                }}
                                            />
                                            <span
                                                className="payment-icon stripe"
                                                style={{
                                                    backgroundImage:
                                                        "url(assets/images/payments/payment-stripe.png)"
                                                }}
                                            />
                                            <span
                                                className="payment-icon verisign"
                                                style={{
                                                    backgroundImage:
                                                        "url(assets/images/payments/payment-verisign.svg)"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-sm-flex align-items-center justify-content-center">
                        <span className="footer-copyright">
                            Porto eCommerce. © 2021. All Rights Reserved
                        </span>
                    </div>
                    {/* End .footer-bottom */}
                </div>
            </footer>
            {/* End .footer */}
        </>
    )
}

export default Footer