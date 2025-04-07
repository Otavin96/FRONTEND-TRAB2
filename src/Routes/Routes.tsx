import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import ListProduct from "../features/Products/ListProduct.tsx";
import Home from "../Home";
import Register from "../Pages/Register/Register.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/produtos/listar" element={<ListProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
