import { CategoryType } from "../features/Categories/types/categoryType";
import api from "./api"

export const fetchCategories = async (): Promise<CategoryType[]> => {

    const response = await api.get("/category/");
    console.log(response.data)
    return response.data

}