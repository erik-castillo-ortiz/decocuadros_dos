import { notFound } from 'next/navigation';

import React from 'react';
import Tienda from '@/app/tienda/page';
import { fetchCategoryData } from '@/app/(home)/components/services/Services';

const Categoria = async ({ params }: { params: { name: string[] } }) => {
  const categorySlug = params.name.join('/');
  const categoryData = await fetchCategoryData(categorySlug);

  if (!categoryData) {
    notFound();
  }
  return <Tienda categorySlug={params.name} />;
};

export default Categoria;
