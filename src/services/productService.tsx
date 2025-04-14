import { Product } from "../features/Products/Interface/IProduct";
import api from "./api";

export const createProduct = async (product: Product) => {
  const response = await api.post("/product/", product);
  return response.data;
};
