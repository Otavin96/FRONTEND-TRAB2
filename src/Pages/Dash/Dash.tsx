import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import * as S from "./styles";

function Dash() {
  const { client } = useContext(AuthContext);

  return (
    <S.Container>
      <S.Card>
        <S.Title>Sejá bem vindo! {client.social_reason}</S.Title>
      </S.Card>

      <S.Card>
        <S.Title>Sejá bem vindo! {client.social_reason}</S.Title>
      </S.Card>

      <S.Card>
        <S.Title>Sejá bem vindo! {client.social_reason}</S.Title>
      </S.Card>

      <S.Card>
        <S.Title>Sejá bem vindo! {client.social_reason}</S.Title>
      </S.Card>
    </S.Container>
  );
}

export default Dash;
