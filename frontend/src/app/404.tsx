// src/app/404.tsx
import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className="container">
      <div className="row main-content-wrap">
        <div className="col-lg-12">
          <div id="content" className="no-content">
            <section className="page-not-found">
              <div className="row">
                <div className="col-lg-6 offset-lg-1">
                  <div className="page-not-found-main">
                    <h2 className="entry-title">
                      404 <i className="fas fa-file"></i>
                    </h2>
                    <p>
                      Lo sentimos, dsfsfsfspero la página que buscas no existe.
                    </p>
                    <Link href="/" legacyBehavior>
                      <a className="btn btn-primary mt-3">Volver al Inicio</a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="sidebar-overlay"></div>
    </div>
  );
};

export default Custom404;
