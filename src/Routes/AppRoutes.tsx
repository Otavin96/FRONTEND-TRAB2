import React, {JSX, useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "../Pages/Login/Login.tsx";
import { AuthContext } from "../Contexts/AuthContext.tsx";
import Register from "../Pages/Register/Register.tsx";
import Dash from "../Pages/Dash/Dash.tsx";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { auth } = useContext(AuthContext);
  return auth ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
          {/* <Navbar /> */}
          <Route path="/dash" element={<Dash />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
