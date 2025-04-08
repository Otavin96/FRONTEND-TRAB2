import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import * as S from './styles'

function Dash() {

  const {auth, setAuth, client } = useContext(AuthContext)

  const Logout = () => {
    setAuth(false);
  }

  return (
      <S.Container>
        <S.Title>Teste</S.Title>
        <p>Sejá bem vindo! {client.social_reason}</p>
        <button onClick={() => Logout()}>Sair</button>
      </S.Container>
  );
}

export default Dash;
