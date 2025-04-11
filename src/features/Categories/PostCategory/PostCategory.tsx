import { Input } from "../../../components/Input/Input";
import * as S from "./styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../services/categoryService";

const schema = z.object({
  name: z.string().min(1, "Campo é obrigatório"),
  description: z.string().min(1, "Campo é obrigatório"),
});

type FormProps = z.infer<typeof schema>;

const PostCategory = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  const nav = useNavigate();

  const onSubmit = async (category: FormProps) => {
    try {
      await createCategory(category);

      setValue("name", "");
      setValue("description", "");

      nav("/categoria/listar");
    } catch (error) {
      console.error("Erro ao cadastrar categoria", error);
    }
  };

  return (
    <S.Container>
      <S.PostCategory onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Cadastrar Categoria</S.Title>

        <Input
          {...register("name")}
          type="text"
          placeholder="Digite o nome da categoria"
          label="Nome"
          helperText={errors.name?.message}
        />
        <Input
          {...register("description")}
          type="text"
          placeholder="Digite a descrição"
          label="Descrição"
          helperText={errors.description?.message}
        />

        <Button text="Cadastrar" type="submit" />
      </S.PostCategory>
    </S.Container>
  );
};

export default PostCategory;
