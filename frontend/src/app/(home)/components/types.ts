export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  categoryId: number;
  rating: number;
  oldPrice: string;
  newPrice: string;
  isHot?: boolean;
  discount?: string | null;
  shortDescription: string;
  SKU: string;
  sizes: string[];
  gallery?: string[];
  stock: number;
  isFeatured: boolean;
  offerEnds: string | null;
  publishDate: string | null;
}

export interface BannerProps {
  title: string;
  subtitle: string;
  discountText: string;
  startingPrice: string;
  backgroundImage: string;
}

export interface PromoSectionProps {
  headingText: string;
  subText: string;
  promoText: string;
  buttonText: string;
  buttonLink: string;
}
export interface CategoryMenuProps {
  categories: { id: number; name: string }[];
  onCategorySelect: (categoryId: number) => void;
}

export interface QuickViewProductProps {
  isOpen: boolean;
  closeModal: () => void;
  product: Product | null;
}
