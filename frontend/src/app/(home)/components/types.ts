export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  category: string;
  categoryId: number;
  rating: number;
  oldPrice: string;
  newPrice: string;
  isHot?: boolean;
  discount?: string | null;
  description: string;
  shortDescription: string;
  SKU: string;
  sizes: string[];
  gallery?: string[];
  stock: number;
  isFeatured: boolean;
  offerEnds: string | null;
  publishDate: string | null;
  attributes?: Attribute[];
  variations?: Variation[];
  basePrice?: string;
  maxPrice?: string;
}

export interface Attribute {
  id: number;
  name: string;
  type: string;
  values: AttributeValue[];
  isVariation: boolean;
}

export interface AttributeValue {
  id: number;
  name: string;
  value: string;
}

export interface Variation {
  id: number;
  attributes: VariationAttribute[];
  price: string;
  stock: number;
  SKU: string;
}

export interface VariationAttribute {
  attributeId: number;
  valueId: number;
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
