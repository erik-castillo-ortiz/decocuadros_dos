// import React from 'react';

// interface FooterLink {
//   title: string;
//   items: string[];
//   urls: string[];
//   icons?: string[];
// }

// interface FooterTopProps {
//   links: FooterLink[];
// }

// const FooterTop: React.FC<FooterTopProps> = ({ links }) => (
//   <div className="footer-top">
//     <div className="row">
//       {links.map((section, index) => (
//         <div key={index} className="col-md-6 col-lg-3">
//           <div className="widget">
//             <h3 className="widget-title">{section.title}</h3>
//             <div className="widget-content">
//               {/* Verificamos que section.icons esté definido y tenga elementos */}
//               {section.icons && section.icons.length > 0 ? (
//                 <div className="social-icons">
//                   {section.items.map((name, i) => (
//                     <a
//                       key={name}
//                       href={section.urls[i]}
//                       className={`social-icon ${
//                         section.icons ? section.icons[i] : ''
//                       }`}
//                       target="_blank"
//                       title={name}
//                       rel="noopener noreferrer"
//                     ></a>
//                   ))}
//                 </div>
//               ) : (
//                 <ul>
//                   {section.items.map((link, i) => (
//                     <li key={link}>
//                       <a href={section.urls[i]}>{link}</a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default FooterTop;
import React from 'react';

interface FooterLink {
  title: string;
  items: string[];
  urls: string[];
  icons?: string[];
}

interface FooterTopProps {
  links: FooterLink[];
}

const FooterTop: React.FC<FooterTopProps> = ({ links }) => (
  <div className="footer-top">
    <div className="row">
      {links.map((section, index) => (
        <div key={index} className="col-md-6 col-lg-3">
          <div className="widget">
            <h3 className="widget-title">{section.title}</h3>
            <div className="widget-content">
              {section.icons && section.icons.length > 0 ? (
                <div className="social-icons">
                  {section.items.map((name, i) => (
                    <a
                      key={name}
                      href={section.urls[i]}
                      className={`social-icon ${
                        section.icons ? section.icons[i] : ''
                      }`}
                      target="_blank"
                      title={name}
                      rel="noopener noreferrer"
                    ></a>
                  ))}
                </div>
              ) : (
                <ul>
                  {section.items.map((link, i) => (
                    <li key={link}>
                      <a href={section.urls[i]}>{link}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FooterTop;
