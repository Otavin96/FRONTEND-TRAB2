import { Link } from "react-router-dom";
import * as S from "./styles";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import { GrLogout } from "react-icons/gr";

const Navbar = () => {
  const { setAuth, client, setClient } = useContext(AuthContext);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef(null);

  // Fecha dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Logout = () => {
    setAuth(false);
    setClient({});
    sessionStorage.clear();
  };

  return (
    <S.Nav ref={menuRef}>
      <S.Navbar>
        <S.StyledLink to="/">Home</S.StyledLink>

        {/* PRODUTOS */}
        <S.NavDropDown>
          <S.StyledLink
            onClick={() =>
              setOpenDropdown(openDropdown === "products" ? null : "products")
            }
          >
            Produtos
          </S.StyledLink>
          <S.NavDrop>
            {openDropdown === "products" && (
              <S.StyledLink to="/produto/cadastrar">
                Cadastrar
                <hr />
              </S.StyledLink>
            )}
            {openDropdown === "products" && (
              <S.StyledLink to="/produto/listar">Listar</S.StyledLink>
            )}
          </S.NavDrop>
        </S.NavDropDown>

        {/* CATEGORIAS */}
        <S.NavDropDown>
          <S.StyledLink
            onClick={() =>
              setOpenDropdown(
                openDropdown === "categories" ? null : "categories"
              )
            }
          >
            Categorias
          </S.StyledLink>
          <S.NavDrop>
            {openDropdown === "categories" && (
              <S.StyledLink to="/categoria/cadastrar">
                Cadastrar
                <hr />
              </S.StyledLink>
            )}
            {openDropdown === "categories" && (
              <S.StyledLink to="/categoria/listar">Listar</S.StyledLink>
            )}
          </S.NavDrop>
        </S.NavDropDown>
      </S.Navbar>

      {/* BOTAO LOGOUT */}
      <S.ButtonLogout onClick={() => Logout()}>
        <GrLogout />
        Logout
      </S.ButtonLogout>
    </S.Nav>
  );
};

export default Navbar;
