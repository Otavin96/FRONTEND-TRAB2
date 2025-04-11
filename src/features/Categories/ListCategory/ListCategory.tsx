import { useEffect, useState } from "react";
import * as S from "./styles";
import { CategoryType } from "../types/categoryType";
import { fetchCategories } from "../../../services/categoryService";

const ListCategory = () => {
  const [categories, setCategories] = useState<CategoryType[]>();

  useEffect(() => {
    try {
      const listCategories = async () => {
        setCategories(await fetchCategories());
      };

      listCategories();
    } catch (error) {
      console.error("Erro ao buscar as categorias no banco de dados", error);
    }
  }, []);

  return (
    <S.Container>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>Nome</S.Th>
            <S.Th>Descrição</S.Th>
          </S.Tr>
        </S.Thead>

        {categories &&
          categories.map((category) => (
            <S.Tbody>
              <S.Tr key={category.id}>
                <S.Td>{category.name}</S.Td>
                <S.Td>{category.description}</S.Td>
              </S.Tr>
            </S.Tbody>
          ))}
      </S.Table>
    </S.Container>
  );
};

export default ListCategory;
