import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./Routes/AppRoutes.tsx";
import AuthContext from "./Contexts/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContext>
      <AppRoutes />
    </AuthContext>
  </StrictMode>
);
