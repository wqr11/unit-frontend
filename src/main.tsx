import { createRoot } from "react-dom/client";
import { Router } from "@/router";
import { ThemeProvider } from "@/providers/theme";
import { GlobalStyles } from "@/styles";
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);
