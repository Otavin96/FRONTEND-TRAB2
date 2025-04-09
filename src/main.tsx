import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./Routes/AppRoutes.tsx";
import AuthProvider from "./Contexts/AuthContext.tsx";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>
);
