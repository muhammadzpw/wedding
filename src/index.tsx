import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";

import PageWrapper from "./pages/PageWrapper";
import Navigation from "./Navigation";
import Cover from "./pages/Cover";
import Profil from "./pages/Profil";
import { domAnimation, LazyMotion } from "framer-motion";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
  <LazyMotion features={domAnimation}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<PageWrapper />} />
          <Route path="/wedding" element={<PageWrapper />} />
          <Route path="/sampul" element={<Cover />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </LazyMotion>
);
