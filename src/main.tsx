import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import SkillsPage from "./pages/SkillsPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollProgressBar from "./components/ScrollProgressBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ScrollProgressBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
