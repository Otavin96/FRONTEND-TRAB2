import { CategoryType } from "../features/Categories/types/categoryType";
import api from "./api";

export const fetchCategories = async (): Promise<CategoryType[]> => {
  const response = await api.get("/category/");
  return response.data;
};

export const createCategory = async (category: CategoryType) => {
  const response = await api.post("/category/", category);
  return response.data;
};
