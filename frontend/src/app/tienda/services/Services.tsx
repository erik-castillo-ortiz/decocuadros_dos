import sidebarData from '@/app/tienda/helpers/SideBar.json';

export interface Subcategory {
  name: string;
  items: string[];
}

export interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[];
}

export interface SidebarData {
  categories: Category[];
  priceRange: {
    min: number;
    max: number;
  };
  colors: string[];
  brands: string[];
}

export const fetchSidebarData = async (): Promise<SidebarData> => {
  // Transformamos `subcategories` de string[] a Subcategory[]
  const transformedData: SidebarData = {
    ...sidebarData,
    categories: sidebarData.categories.map((category) => ({
      ...category,
      subcategories: category.subcategories.map((subcat) => ({
        name: subcat,
        items: [], // Ajusta esto según lo que necesites para `items`
      })),
    })),
  };

  return transformedData;
};
