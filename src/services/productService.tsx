import { ProductType } from "../features/Products/types/Product.type";
import api from "./api";

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await api.get("/product/");
  console.log(response.data)
  return response.data;
};
