// src/pages/Products/ListProduct/ProductTable.tsx
import ProductRow from "./ProductRow";
import * as S from "../../Categories/ListCategory/styles";
import { ProductResponse } from "../Interface/IProduct";

interface ProductTableProps {
  products: ProductResponse["items"];
  onDelete: (id: string, name: string) => void;
  onEdit: (id: string) => void;
}

const ProductTable = ({ products, onDelete, onEdit }: ProductTableProps) => {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Nome</S.Th>
          <S.Th>Descrição</S.Th>
          <S.Th>Preço</S.Th>
          <S.Th>Quantidade</S.Th>
          <S.Th>Ação</S.Th>
        </S.Tr>
      </S.Thead>

      <S.Tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </S.Tbody>
    </S.Table>
  );
};

export default ProductTable;
