import { useEffect, useState } from "react";
import { Product } from "./types/Product.type";
import { fetchProducts } from "../../services/productService";

const ListProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar todos os produtos", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container">
      <h1>List Products</h1>

      {products.map((product) => (
        <ul key={product.id} className="card-product">
          <h3>Produto</h3>
          <li>Nome: {product.name}</li>
          <li>SKU: {product.sku}</li>
          <li>Descrição: {product.description}</li>
          <li>
            Preço:{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(product.price))}
          </li>
          <li>Quantidade: {product.quantity}</li>
          <li>Categoria: {product.category_id.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListProduct;
