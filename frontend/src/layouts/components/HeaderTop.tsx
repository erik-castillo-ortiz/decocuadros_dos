import React from 'react';

const HeaderTop = () => {
  return (
    <>
        <div className="header-top">
          <div className="container">
            <div className="header-left d-none d-sm-block">
              <div className="info-box info-box-icon-left text-primary justify-content-start p-0">
                <i className="icon-shipping" />
                <div className="info-box-content">
                  <h4 className="text-transform-none">
                    FREE Express Shipping On Orders $99+
                  </h4>
                </div>
                {/* End .info-box-content */}
              </div>
            </div>
            {/* End .header-left */}
            
            <div className="header-right header-dropdowns ms-0 ms-sm-auto w-sm-100">
              <div className="header-dropdown">
                <a href="#">USD</a>
                <div className="header-menu">
                  <ul>
                    <li><a href="#">EUR</a></li>
                    <li><a href="#">USD</a></li>
                  </ul>
                </div>
                {/* End .header-menu */}
              </div>
              {/* End .header-dropdown */}

              <div className="header-dropdown me-auto me-sm-3 me-md-0">
                <a href="#">
                  <i className="flag-us flag" /> Eng
                </a>
                <div className="header-menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="flag-us flag me-2" /> ENG
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flag-fr flag me-2" /> FRA
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End .header-menu */}
              </div>
              {/* End .header-dropdown */}

              <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                <a href="#">Links</a>
                <div className="header-menu">
                  <ul>
                    <li><a href="dashboard.html">My account</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="login.html" className="login-link">Log In</a></li>
                  </ul>
                </div>
                {/* End .header-menu */}
              </div>
              {/* End .header-dropdown */}

              <div className="social-icons">
                <a
                  href="#"
                  className="social-icon social-facebook icon-facebook"
                  target="_blank"
                />
                <a
                  href="#"
                  className="social-icon social-twitter icon-twitter"
                  target="_blank"
                />
                <a
                  href="#"
                  className="social-icon social-instagram icon-instagram"
                  target="_blank"
                />
              </div>
              {/* End .social-icons */}
            </div>
            {/* End .header-right */}
          </div>
          {/* End .container */}
        </div>
        {/* End .header-top */}

    </>
  );
};

export default HeaderTop;
