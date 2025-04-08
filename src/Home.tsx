import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./Contexts/AuthContext";

function Home() {

  const {auth, setAuth, client } = useContext(AuthContext)

  const teste = Object.keys(client)

  console.log("Autorizado: ", auth)
  console.log("Dados do cliente: ", teste)

  const Logout = () => {
    setAuth(false);
  }

  return (
      <div>
        <h1>Teste</h1>
        <h2>{teste[0]}</h2>
        <button onClick={() => Logout()}>Sair</button>
      </div>
  );
}

export default Home;
