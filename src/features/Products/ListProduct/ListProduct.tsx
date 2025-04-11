import { useEffect, useState } from "react";
import * as S from "../../Categories/ListCategory/styles";
import { Category, ProductType } from "../types/Product.type";
import { fetchProducts } from "../../../services/productService";
import { formatter } from "../../../utils/formatter";

const ListProduct = () => {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    try {
      const listProducts = async () => {
        setProducts(await fetchProducts());
      };

      listProducts();
    } catch (error) {
      console.error("Erro ao buscar os produtos no banco de dados", error);
    }
  }, []);

  return (
    <S.Container>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>Nome</S.Th>
            <S.Th>Descrição</S.Th>
            <S.Th>Preço</S.Th>
            <S.Th>Quantidade</S.Th>
          </S.Tr>
        </S.Thead>

        {products &&
          products.map((product) => (
            <S.Tbody>
              <S.Tr key={product.id}>
                <S.Td>{product.name}</S.Td>
                <S.Td>{product.description}</S.Td>
                <S.Td>{formatter.format(product.price)}</S.Td>
                <S.Td>{product.quantity}</S.Td>
              </S.Tr>
            </S.Tbody>
          ))}
      </S.Table>
    </S.Container>
  );
};

export default ListProduct;
