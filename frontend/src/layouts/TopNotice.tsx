
const TopNotice = () => {
    return (
        <>
            <div className="top-notice bg-dark text-white pt-3">
                <div className="container text-center d-flex align-items-center justify-content-center flex-wrap">
                    <img
                        src="/assets/images/demoes/demo36/shop-logo.png"
                        width={116}
                        height={23}
                        alt="logo"
                    />
                    <h5 className="d-inline-block mb-0 pl-3 pr-3 pt-2 pb-2">
                        The Lowest Prices Once A Month! Hurry To Snap Up
                    </h5>
                    <a href="demo36-shop.html" className="btn btn-darkcategory ls-0">
                        SHOP NOW!
                    </a>
                </div>
                {/* End .container */}
            </div>
            {/* End .top-notice */}
        </>
    )
}

export default TopNotice