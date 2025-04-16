import * as S from "./styles";
import { BtnCancel, BtnEdit } from "./styles";
interface EditModalProps {
  setIsOpen: (value: boolean) => void;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  children?: React.ReactNode;
}

const EditModal = ({
  setIsOpen,
  title,
  confirmText,
  cancelText,
  children
}: EditModalProps) => {
  const closeModal = () => setIsOpen(false);

  return (
    <S.Modal>
      <S.ModalContent>
        {title && <S.Title>{title}</S.Title>}
        {children}
        <S.ModalActions>
          <BtnCancel text="Cancelar" onClick={closeModal}>{cancelText}</BtnCancel>
          <BtnEdit text="Editar" type="submit">{confirmText}</BtnEdit>
        </S.ModalActions>
      </S.ModalContent>
    </S.Modal>
  );
};

export default EditModal;
