import * as S from "../Register/styles";
import * as L from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthType } from "../../features/Clients/types/ClientType";
import { authenticateClient } from "../../services/clientService";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";

const schema = z.object({
  email: z.string().min(1, "Campo é obrigatório").email("E-mail inválido"),
  password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
});

type FormProps = z.infer<typeof schema>;

const Login = () => {
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

  const { setAuth, setClient } = useContext(AuthContext);
  const nav = useNavigate();

  const onSubmit = async (data: AuthType) => {
    try {
      const { client, access_token } = await authenticateClient(data);

      setAuth(true);
      setClient(client);

      localStorage.setItem("token", access_token.access_token);
      setValue("email", "");
      setValue("password", "");

      nav("/");
    } catch (error) {
      console.error("Erro ao cadastrar o cliente", error);
    }
  };
  return (
    <S.Container>
      <L.Login onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl">Faça o login</h1>

        <Input
          {...register("email")}
          type="text"
          label="E-mail"
          placeholder="Digite seu e-mail"
          helperText={errors.email?.message}
        />

        <Input
          {...register("password")}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          helperText={errors.password?.message}
        />

        <Button text={"Entrar"} type={"submit"} />
        <p>
          Tem conta? faça seu cadastro
          <NavLink to="../register"> clicando aqui</NavLink>
        </p>
      </L.Login>
    </S.Container>
  );
};

export default Login;
