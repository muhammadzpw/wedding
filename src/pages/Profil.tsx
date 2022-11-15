import { useSearchParams } from "react-router-dom";
import Bismillah from "../icons/Bismillah";
import CircleDecor from "../icons/CircleDecor";

interface DataPasangan {
  nama: string;
  ayah: string;
  ibu: string;
  jk: "Putra" | "Putri";
}
export default function Profil() {
  const [searchParams] = useSearchParams();
  const gelar = searchParams.get("g");
  // const dataPasangan: DataPasangan[] = [
  //   {
  //     nama: "Dhita Ayu Affiah, M.Pd.",
  //     ayah: "Donny Mulianto",
  //     ibu: "Harlina, S.Pd.",
  //     jk: "Putri"
  //   },
  //   {
  //     nama: "Muhammad Zha'farudin P.W., M.Cs.",
  //     ayah: "Drs. H. Bambang Puji Siswanto",
  //     ibu: "Hj. Sri Wulan Cahyani, S.Pd.",
  //     jk: "Putra"
  //   }
  // ];
  const dataPasangan: DataPasangan[] = [
    {
      nama: "Dhita Ayu Affiah" + (gelar ? ", M.Pd." : ""),
      ayah: (gelar ? "" : "Bapak ") + "Donny Mulianto",
      ibu: (gelar ? "" : "Ibu ") + "Harlina" + (gelar ? ", S.Pd." : ""),
      jk: "Putri"
    },
    {
      nama: "Muhammad Zha'farudin Pudya Wardana" + (gelar ? ", M.Cs." : ""),
      ayah: (gelar ? "Drs. H. " : "Bapak ") + "Bambang Puji Siswanto",
      ibu:
        (gelar ? "Hj. " : "Ibu ") +
        "Sri Wulan Cahyani" +
        (gelar ? ", S.Pd." : ""),
      jk: "Putra"
    }
  ];
  return (
    <>
      <section className="profil page" id="muqaddimah">
        <div className="section-identifier">muqaddimah</div>

        <div className="quran maxMd">
          <strong>QS. Ar-Rum Ayat 21</strong>
          <div className="ayat">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
            ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            {/* <span className="end">{"\u06DD"}٢١</span> */}
          </div>
          <div className="terjemah">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </div>
        </div>
      </section>
      <section className="profil page" id="profil">
        <div className="section-identifier">profil</div>

        <div style={{ padding: "6em 0 3em" }}>
          <Bismillah fill="black" />
        </div>
        <div>
          {/* <p>Assalamu’alaikum Warahmatullahi Wabarakatuh</p> */}
          <p></p>
          <p></p>
          <p>
            Dengan memohon rahmat dan ridho Allah subhanahu wata’ala, kami
            bermaksud menyelenggarakan pernikahan putra-putri kami,
          </p>
        </div>
        {dataPasangan &&
          dataPasangan.map((val, i) => {
            return (
              <div key={`pasangan-${i}`} className="pasangan">
                <div className="decor">
                  <CircleDecor fill="#9f9f45" />
                </div>
                <div className="nama">{val.nama}</div>
                <div className="keluarga">
                  <p>
                    <strong>{val.jk}</strong> dari <br /> {val.ayah} dan
                    <br /> {val.ibu}{" "}
                  </p>
                </div>
                {i === 0 && <div className="nama">&</div>}
              </div>
            );
          })}

        <div style={{ height: 86 }}></div>
      </section>
    </>
  );
}
