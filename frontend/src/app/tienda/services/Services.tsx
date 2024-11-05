// import categories from '@/app/helpers/Categories_2.json';
// import sidebarData from '@/app/tienda/helpers/SideBar.json';

// export interface Category {
//   categoryId: number;
//   categoryName: string;
//   categorySlug: string;
//   categoryParent: number | null;
//   subcategories?: Category[];
//   fullPath?: string;
// }

// export interface SidebarData {
//   categories: Category[];
//   priceRange: {
//     min: number;
//     max: number;
//   };
//   colors: string[];
//   brands: string[];
// }

// export const fetchSidebarData = async (): Promise<SidebarData> => {
//   // Organizar las categorías en un formato jerárquico
//   const categoryMap = new Map<number, Category>();

//   // Primero, crear una copia de cada categoría sin subcategorías y agregarla al mapa
//   categories.forEach((category) => {
//     categoryMap.set(category.categoryId, { ...category, subcategories: [] });
//   });

//   // Luego, asignar subcategorías a sus respectivas categorías padre
//   categoryMap.forEach((category) => {
//     if (category.categoryParent !== null) {
//       const parentCategory = categoryMap.get(category.categoryParent);
//       if (parentCategory) {
//         parentCategory.subcategories!.push(category);
//       }
//     }
//   });

//   // Filtrar solo las categorías principales (sin padres)
//   const mainCategories = Array.from(categoryMap.values()).filter(
//     (category) => category.categoryParent === null
//   );

//   // Retornar la estructura jerárquica en el formato de SidebarData
//   return {
//     categories: mainCategories,
//     priceRange: sidebarData.priceRange || { min: 0, max: 1000 },
//     colors: sidebarData.colors || [],
//     brands: sidebarData.brands || [],
//   };
// };
import categories from '@/app/helpers/Categories_2.json';
import sidebarData from '@/app/tienda/helpers/SideBar.json';

export interface Category {
  categoryId: number;
  categoryName: string;
  categorySlug: string;
  categoryParent: number | null;
  subcategories?: Category[];
  fullPath?: string;
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

const buildFullPath = (category: Category, categories: Category[]): string => {
  let pathSegments: string[] = [];
  let currentCategory: Category | undefined = category;

  while (currentCategory) {
    pathSegments.unshift(currentCategory.categorySlug);
    currentCategory = categories.find(
      (cat) => cat.categoryId === currentCategory?.categoryParent
    );
  }

  return `/categoria/${pathSegments.join('/')}`;
};

export const fetchSidebarData = async (): Promise<SidebarData> => {
  // Organizar las categorías en un formato jerárquico
  const categoryMap = new Map<number, Category>();

  // Primero, crear una copia de cada categoría sin subcategorías y agregarla al mapa
  categories.forEach((category) => {
    categoryMap.set(category.categoryId, { ...category, subcategories: [] });
  });

  // Luego, asignar subcategorías a sus respectivas categorías padre
  categoryMap.forEach((category) => {
    if (category.categoryParent !== null) {
      const parentCategory = categoryMap.get(category.categoryParent);
      if (parentCategory) {
        parentCategory.subcategories!.push(category);
      }
    }
  });

  // Filtrar solo las categorías principales (sin padres)
  const mainCategories = Array.from(categoryMap.values()).filter(
    (category) => category.categoryParent === null
  );

  // Construir el fullPath para cada categoría
  categoryMap.forEach((category) => {
    category.fullPath = buildFullPath(
      category,
      Array.from(categoryMap.values())
    );
  });

  // Retornar la estructura jerárquica en el formato de SidebarData
  return {
    categories: mainCategories,
    priceRange: sidebarData.priceRange || { min: 0, max: 1000 },
    colors: sidebarData.colors || [],
    brands: sidebarData.brands || [],
  };
};
