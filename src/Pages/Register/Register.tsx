import * as S from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { createClient } from "../../services/clientService";

const schema = z
  .object({
    cnpj: z.string().min(1, "Campo é obrigatório"),
    social_reason: z.string().min(1, "Campo é obrigatório"),
    email: z.string().min(1, "Campo é obrigatório").email("E-mail inválido"),
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(1, "A confirmação de senha é obrigatório"),
    phone: z.string().min(1, "Campo é obrigatório"),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
  });

type FormProps = z.infer<typeof schema>;

const Register = () => {
  const [success, setSuccess] = useState(false);
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

  const onSubmit = async (client: FormProps) => {
    try {
      await createClient(client);

      setValue("cnpj", "");
      setValue("social_reason", "");
      setValue("phone", "");
      setValue("email", "");
      setValue("password", "");
      setValue("confirmPassword", "");

      setSuccess(true);

      setTimeout(() => {
        nav("/login");
      }, 3000);
    } catch (error) {
      console.error("Erro ao cadastrar o cliente", error);
    }
  };

  return (
    <S.Container>
      <S.Register onSubmit={handleSubmit(onSubmit)}>
        {success && (
          <S.Success>
            <S.Title>Cliente Cadastrado com sucesso!</S.Title>
            <S.Info>Você sera redirecionado para a tela de login</S.Info>
          </S.Success>
        )}
        <h1 className="text-3xl">Cadastre-se</h1>
        <Input
          {...register("cnpj")}
          type="text"
          placeholder="Digite seu CNPJ"
          label="CNPJ"
          helperText={errors.cnpj?.message}
        />
        <Input
          {...register("social_reason")}
          type="text"
          placeholder="Digite sua razão social"
          label="Razão Social"
          helperText={errors.social_reason?.message}
        />
        <Input
          {...register("email")}
          type="text"
          placeholder="Digite seu e-mail"
          label="E-mail"
          helperText={errors.email?.message}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          helperText={errors.password?.message}
        />
        <Input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirme sua senha"
          label="Confirmação de senha"
          helperText={errors.confirmPassword?.message}
        />
        <Input
          {...register("phone")}
          type="text"
          placeholder="Digite seu telefone"
          label="Telefone"
          helperText={errors.phone?.message}
        />
        <Button text={"Cadastrar"} type={"submit"} />
        <p>
          Tem conta? faça seu login
          <NavLink to="../login"> clicando aqui</NavLink>
        </p>
      </S.Register>
    </S.Container>
  );
};

export default Register;
