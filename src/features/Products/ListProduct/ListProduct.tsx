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
      {products &&
        products.map((product) => (
          <S.Card key={product.id}>
            <S.Title>{product.name}</S.Title>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
          </S.Card>
        ))}
    </S.Container>
  );
};

export default ListProduct;
