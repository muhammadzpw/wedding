import React from "react";
import Cover from "./Cover";
import Profil from "./Profil";
import AcaraData from "./Acara";
import Adab from "./Adab";
import Ucapan from "./Ucapan";
import Footer from "./Footer";

export default function PageWrapper() {
  return (
    <div>
      <Cover />
      <Profil />
      <AcaraData />
      <Adab />
      <Ucapan />
      {/* <div style={{ height: "100vh" }}></div> */}
      <Footer />
    </div>
  );
}
