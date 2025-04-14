import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding-left: 10px;
  background-color: oklch(62.3% 0.214 259.815);
  justify-content: space-between;
  height: 45px;
  width: 100%;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ButtonLogout = styled.button`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #000;
  height: 35px;
  width: 100px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.2rem;
`;

export const NavDropDown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-weight: bold;
`;

export const NavDrop = styled.div`
  border-radius: 3px;
  top: 40px;
  width: 120px;
  text-indent: 10px;
  background-color: oklch(62.3% 0.214 259.815);
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.03);
  -webkit-box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.03);
  -moz-box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.03);
`;
