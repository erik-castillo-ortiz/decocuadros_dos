import React from 'react';
import { fetchFooterData } from '@/layouts/services/Services';
import FooterNewsletter from './components/Footer/FooterNewsletter';
import FooterTop from './components/Footer/FooterTop';
import FooterMiddle from './components/Footer/FooterMiddle';
import FooterBottom from './components/Footer/FooterBottom';

const Footer: React.FC = () => {
  const data = fetchFooterData();

  return (
    <footer className="footer font2">
      <div className="container">
        <FooterNewsletter data={data.newsletter} />
        <FooterTop links={data.links} />
        <FooterMiddle
          categories={data.categories}
          paymentMethods={data.paymentMethods}
        />
        <FooterBottom copyright={data.copyright} />
      </div>
    </footer>
  );
};

export default Footer;
