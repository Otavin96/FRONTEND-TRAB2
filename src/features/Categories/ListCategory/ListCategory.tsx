import * as S from "./styles";
import { fetchCategories } from "../../../services/categoryService";
import { useQuery } from "@tanstack/react-query";

const ListCategory = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

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
