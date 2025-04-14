import * as S from "./styles";
import { Button } from "../Button/styles";

interface ConfirmationModalProps {
  setIsOpen: (value: boolean) => void;
  title?: string;
  message: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationModal = ({
  setIsOpen,
  title,
  message,
  onConfirm,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}: ConfirmationModalProps) => {
  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <S.Modal>
      <S.ModalContent>
        {title && <S.Title>{title}</S.Title>}
        <S.Text>{message}</S.Text>
        <S.ModalActions>
          <Button onClick={closeModal}>{cancelText}</Button>
          <Button onClick={handleConfirm}>{confirmText}</Button>
        </S.ModalActions>
      </S.ModalContent>
    </S.Modal>
  );
};

export default ConfirmationModal;
