import React from 'react';
import Tienda from '@/app/tienda/page';

const Categoria = ({ params }: { params: { name: string[] } }) => {
  return <Tienda categorySlug={params.name} />;
};

export default Categoria;
