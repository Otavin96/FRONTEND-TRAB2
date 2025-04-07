export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string;
  name: string;
  sku: string;
  description: string;
  price: string; // ou number, depende se você quer converter
  quantity: string; // ou number
  createdAt: string;
  updatedAt: string;
  category_id: Category;
};
