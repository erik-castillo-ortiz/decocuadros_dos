import React from 'react';

interface FooterNewsletterProps {
  data: {
    title: string;
    content: string;
    buttonText: string;
  };
}

const FooterNewsletter: React.FC<FooterNewsletterProps> = ({ data }) => (
  <div className="widget-newsletter d-flex align-items-center align-items-sm-start flex-column flex-lg-row justify-content-lg-between">
    <div className="widget-newsletter-info text-center text-sm-start d-flex flex-column flex-sm-row align-items-center mb-1 mb-xl-0">
      <i className="icon-envolope"></i>
      <div className="widget-info-content">
        <h5 className="widget-newsletter-title mb-0">{data.title}</h5>
        <p className="widget-newsletter-content mb-0">{data.content}</p>
      </div>
    </div>
    <form action="#" className="mb-0 w-100 mt-2 mt-md-0">
      <div className="footer-submit-wrapper d-flex align-items-center">
        <input
          type="email"
          className="form-control mb-0"
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
