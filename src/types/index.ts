// Shared types for the application

// Showcase/Product types
export interface ShowcaseItem {
  id: string;
  title: string;
  specs: string;
  description: string;
  image: string;
  category: string;
}

export interface ProductSpec {
  name: string;
  details: string;
}

export interface ProductSpecs {
  cpu: ProductSpec;
  gpu: ProductSpec;
  ram: ProductSpec;
  storage: ProductSpec;
  cooling: ProductSpec;
  psu: ProductSpec;
  case: ProductSpec;
  motherboard: ProductSpec;
  [key: string]: ProductSpec;
}

export interface BuyLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  currency: string;
  stock: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  specs: ProductSpecs;
  features: string[];
  buyLinks: BuyLink[];
  relatedProducts: number[] | null;
}
