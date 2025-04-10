import { useEffect, useState } from "react";
import * as S from "./styles";
import { Category, ProductType } from "../types/Product.type";
import { fetchProducts } from "../../../services/productService";

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
      
          <table>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Quantidade</th>
            </tr>
  
            {products &&
        products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            </tr>
            ))}

          </table>
        
    </S.Container>
  );
};

export default ListProduct;
