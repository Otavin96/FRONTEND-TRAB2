import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar/Navbar.tsx";
import AppRoutes from "./Routes/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Navbar /> */}
    <AppRoutes />
  </StrictMode>
);
