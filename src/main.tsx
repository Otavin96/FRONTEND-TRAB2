import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./Routes/AppRoutes.tsx";
import AuthProvider from "./Contexts/AuthContext.tsx";
import { GlobalStyle } from "./styled.global.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <GlobalStyle />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
