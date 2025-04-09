// components/LayoutWithNavbar.tsx
import { useContext } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import Navbar from "./Navbar";

const LayoutWithNavbar = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];
  const shouldShowNavbar =
    auth && !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default LayoutWithNavbar;
