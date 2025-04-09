import { JSX, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login.tsx";
import { AuthContext } from "../Contexts/AuthContext.tsx";
import Register from "../Pages/Register/Register.tsx";
import Dash from "../Pages/Dash/Dash.tsx";
import LayoutWithNavbar from "../components/Navbar/LayoutWithNavbar.tsx"; // <- novo
import ListProduct from "../features/Products/ListProduct/ListProduct.tsx";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { auth } = useContext(AuthContext);
  return auth ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas privadas com layout que inclui Navbar */}
        <Route
          element={
            <PrivateRoute>
              <LayoutWithNavbar />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Dash />} />
          <Route path="/product/listar" element={<ListProduct />} />
        </Route>

        {/* Rotas públicas (sem Navbar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
