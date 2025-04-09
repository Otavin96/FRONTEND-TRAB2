import { ProductType } from "../features/Products/types/Product.type";
import api from "./api";

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await api.get("/product/");
  return response.data;
};
