import Cover from "./Cover";
import Profil from "./Profil";
import AcaraData from "./Acara";
import Adab from "./Adab";
import Ucapan from "./Ucapan";
import Footer from "./Footer";
import AudioPlayer from "./Audio";

export default function PageWrapper() {
  return (
    <div>
      <Cover />
      <AudioPlayer />
      <Profil />
      <AcaraData />
      <Adab />
      <Ucapan />
      {/* <div style={{ height: "100vh" }}></div> */}
      <Footer />
    </div>
  );
}
