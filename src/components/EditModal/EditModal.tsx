import * as S from "./styles";
import { Button } from "../Button/styles";
import { Input } from "../Input/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "../../features/Products/Interface/IProduct";

const schema = z.object({
  name: z.string().min(1, "Campo é obrigatório").optional(),
  description: z.string().min(1, "Campo é obrigatório").optional(),
  price: z.coerce.number().optional(),
  quantity: z.coerce.number().optional(),
  category_id: z.string().optional(),
});

type FormProps = z.infer<typeof schema>;

interface EditModalProps {
  setIsOpen: (value: boolean) => void;
  title?: string;
  message: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  data: Product[];
}

const EditModal = ({
  setIsOpen,
  title,
  message,
  onConfirm,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  data,
}: EditModalProps) => {
  const closeModal = () => setIsOpen(false);

  // const [categories, setCategories] = useState<CategoryType[]>();

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  const { register } = useForm<FormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  // useEffect(() => {
  //   try {
  //     const listCategories = async () => {
  //       setCategories(await fetchCategories());
  //     };

  //     listCategories();
  //   } catch (error) {
  //     console.log("Erro ao buscar as categorias no banco", error);
  //   }
  // }, []);

  return (
    <S.Modal>
      <S.ModalContent>
        {title && <S.Title>{title}</S.Title>}
        <S.Text>{message}</S.Text>
        {data &&
          data.map((item: Product) => (
            <Input {...register("name")} value={item.name} />
          ))}

        <S.ModalActions>
          <Button onClick={closeModal}>{cancelText}</Button>
          <Button onClick={handleConfirm}>{confirmText}</Button>
        </S.ModalActions>
      </S.ModalContent>
    </S.Modal>
  );
};

export default EditModal;
