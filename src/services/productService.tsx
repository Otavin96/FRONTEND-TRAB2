import { ProductType } from "../features/Products/types/Product.type";
import api from "./api";

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await api.get("/product/");
  return response.data;
};

export const createProduct = async (product: ProductType) => {
  const response = await api.post("/product/", product);
  return response.data;
};
