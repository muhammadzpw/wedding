import { render } from "react-dom";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
// import "./fonts/web/Alkalami-Light.woff";

import PageWrapper from "./pages/PageWrapper";
import Navigation from "./Navigation";
import Cover from "./pages/Cover";
import Profil from "./pages/Profil";

const rootElement = document.getElementById("root");
render(
  <>
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
  </>,

  rootElement
);
