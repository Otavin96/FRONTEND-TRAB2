// src/pages/Products/ListProduct/ProductRow.tsx
import * as S from "../../Categories/ListCategory/styles";
import { Product } from "../Interface/IProduct"; // Certifique-se de que o tipo Product está exportado corretamente
import { formatter } from "../../../utils/formatter";

interface ProductRowProps {
  product: Product;
  onDelete: (id: string, name: string) => void;
  onEdit: (id: string) => void;
}

const ProductRow = ({ product, onDelete, onEdit }: ProductRowProps) => {
  return (
    <S.Tr>
      <S.Td>{product.name}</S.Td>
      <S.Td>{product.description}</S.Td>
      <S.Td>{formatter.format(product.price)}</S.Td>
      <S.Td>{product.quantity}</S.Td>
      <S.Td>
        <S.Action>
          <S.Btn onClick={() => product.id && product && onEdit(product.id)}>
            Editar
          </S.Btn>
          <S.BtnDel
            onClick={() =>
              product.id && product.name && onDelete(product.id, product.name)
            }
          >
            Deletar
          </S.BtnDel>
        </S.Action>
      </S.Td>
    </S.Tr>
  );
};

export default ProductRow;
