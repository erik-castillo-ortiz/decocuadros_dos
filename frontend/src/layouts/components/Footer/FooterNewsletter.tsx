import React from 'react';

interface FooterNewsletterProps {
  data: {
    title: string;
    content: string;
    buttonText: string;
  };
}

const FooterNewsletter: React.FC<FooterNewsletterProps> = ({ data }) => (
  <div className="widget-newsletter d-flex align-items-center align-items-sm-start flex-column flex-lg-row  justify-content-lg-between">
    <div className="widget-newsletter-info d-flex flex-column flex-sm-row align-items-center mb-1 mb-lg-0 me-lg-4">
      <i className="icon-envolope me-3 mb-2 mb-sm-0"></i>
      <div className="widget-info-content">
        <h5 className="widget-newsletter-title mb-0">{data.title}</h5>
        <p className="widget-newsletter-content mb-0">{data.content}</p>
      </div>
    </div>
    <form action="#" className="mb-0 w-lg-max mt-2 mt-md-0">
      <div className="footer-submit-wrapper d-flex align-items-center">
        <input
          type="email"
          className="form-control mb-0 flex-grow-1"
          placeholder="Your E-mail Address"
          required
        />
        <button type="submit" className="btn btn-primary btn-sm">
          {data.buttonText}
        </button>
      </div>
    </form>
  </div>
);

export default FooterNewsletter;
