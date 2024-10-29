import React from 'react';

interface FooterBottomProps {
  copyright: string;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ copyright }) => (
  <div className="footer-bottom d-sm-flex align-items-center justify-content-center">
    <span className="footer-copyright">{copyright}</span>
  </div>
);

export default FooterBottom;
