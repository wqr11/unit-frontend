import { createRoot } from "react-dom/client";
import { Router } from "@/router";
import { ThemeProvider } from "@/shared/providers/theme";
import { GlobalStyles } from "@/shared/styles";
import "@/shared/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);
