'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();

  // No mostrar el breadcrumb en la página de inicio
  if (pathname === '/') {
    return null;
  }

  // Divide el pathname en segmentos y filtra los vacíos (por ejemplo, el primer "/")
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <i className="icon-home" />
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            // Genera el path acumulado hasta el segmento actual
            const href = '/' + pathSegments.slice(0, index + 1).join('/');
            // Capitaliza el texto del breadcrumb
            const label = segment.charAt(0).toUpperCase() + segment.slice(1);

            return (
              <li key={href} className="breadcrumb-item">
                <Link href={href}>{label}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
