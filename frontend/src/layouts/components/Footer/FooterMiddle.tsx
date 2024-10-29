import React from 'react';

interface Category {
  title: string;
  items: string[];
  urls: string[];
}

interface FooterMiddleProps {
  categories: Category[];
  paymentMethods: string[];
}

const FooterMiddle: React.FC<FooterMiddleProps> = ({
  categories,
  paymentMethods,
}) => (
  <div className="footer-middle">
    <div className="row">
      <div className="col-12 col-lg-8 mb-3 mb-lg-0">
        <ul className="footer-category-list mb-0">
          {categories.map((category, index) => (
            <li key={index}>
              <h4 className="d-inline-block">{category.title}</h4>{' '}
              {category.items.map((item, itemIndex) => (
                <React.Fragment key={item}>
                  {itemIndex > 0 && ' | '}
                  <a href={category.urls[itemIndex]}>{item}</a>
                </React.Fragment>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-12 offset-lg-1 col-lg-3">
        <div className="widget widget-payment">
          <h3 className="widget-title ls-0">PAYMENT METHODS</h3>
          <div className="widget-content">
            <div className="payment-icons">
              {paymentMethods.map((method, index) => (
                <span
                  key={index}
                  className={`payment-icon ${method.split('.')[0]}`}
                  style={{
                    backgroundImage: `url(assets/images/payments/${method})`,
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterMiddle;
