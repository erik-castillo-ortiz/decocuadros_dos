import React from 'react';
import Tienda from '@/app/tienda/page';

const Categoria = ({ params }: { params: { name: string[] } }) => {
  const categorySlug = params.name[0];
  return <Tienda categorySlug={categorySlug} />;
};

export default Categoria;
