export interface Product {
  active: boolean;
  description: string;
  id: boolean;
  image: string;
  name: string;
  promo: false;
  rating: number;
}

export interface ProductsQuery {
  searchTerm: string;
  page: number;
  active: boolean | undefined;
  promo: boolean | undefined;
  limit: number;
}

export interface ProductDetailType {
  state: string;
  description: string;
  image: string;
  name: string;
  onClose: () => void;
}