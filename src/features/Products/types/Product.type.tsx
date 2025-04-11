export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
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
