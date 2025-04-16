import { Product } from "../features/Products/Interface/IProduct";
import api from "./api";


interface EditProductProps {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  category_id?: string;
}

export const createProduct = async (product: Product) => {
  const response = await api.post("/product/", product);
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await api.get(`/product/${id}`)
  return response.data
}

export const updateProduct = async (id: string, updatedProduct: EditProductProps) => {
  const response = await api.put(`/product/${id}`, updatedProduct)
  return response.data
}
