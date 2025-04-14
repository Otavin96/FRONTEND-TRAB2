export type CategoryType = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type PaginationType = {
  total: number;
  current_page: number;
  per_page: number;
  last_page: number;
};

export type ProductType = {
  id?: string;
  name: string;
  sku?: string;
  description: string;
  price: number; // ou number, depende se você quer converter
  quantity: number; // ou number
  createdAt?: string;
  updatedAt?: string;
  category_id: string;
};
