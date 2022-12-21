import { getDataPasangan, getGelar } from "../data";
import Bismillah from "../icons/Bismillah";
import CircleDecor from "../icons/CircleDecor";
import { m } from "framer-motion";
import { fadeLeftVariant, fadeUpVariant } from "../motions";

export default function Profil() {
  const gelar = getGelar();

  const dataPasangan = getDataPasangan(gelar);
  return (
    <>
      <section className="profil page" id="muqaddimah">
        <div className="section-identifier">muqaddimah</div>

        <div className="quran maxMd">
          <m.strong
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
          >
            {/* QS. Adz-Dzariyyat Ayat 49 */}
            QS. Ar-Rum Ayat 21
          </m.strong>
          <m.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            className="ayat"
          >
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
            ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            {/* <span className="end">{"\u06DD"}٢١</span> */}
            {/* وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُوْنَ */}
          </m.div>
          <m.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            className="terjemah"
          >
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
            {/* "Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat
            (kebesaran Allah)." */}
          </m.div>
        </div>
      </section>
      <section className="profil page" id="profil">
        <div className="section-identifier">profil</div>

        <m.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ padding: "6em 0 3em" }}
        >
          <Bismillah fill="black" />
        </m.div>
        <div>
          <m.p
            variants={fadeUpVariant}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            Assalamu’alaikum warahmatullahi wabarakatuh
          </m.p>
          <p></p>
          <p></p>
          <m.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Maha suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Dengan memohon rahmat dan ridho Allah subhanahu
            wata'ala, Insya Allah kami akan menyelenggarakan acara pernikahan:
          </m.p>
        </div>
        <div style={{ overflow: "hidden" }}>
          {dataPasangan &&
            dataPasangan.map((val, i) => {
              return (
                <m.div
                  variants={fadeLeftVariant}
                  initial="hidden"
                  whileInView="visible"
                  key={`pasangan-${i}`}
                  viewport={{ once: true }}
                  className="pasangan"
                >
                  <div className="decor">
                    <CircleDecor fill="#9f9f45" />
                  </div>
                  <div className="nama">{val.nama}</div>
                  <div className="keluarga">
                    <p>
                      <strong>{val.jk}</strong> <br /> keluarga {val.ayah} dan{" "}
                      {val.ibu}{" "}
                    </p>
                  </div>
                  {i === 0 && <div className="nama">&</div>}
                </m.div>
              );
            })}
        </div>

        <div style={{ height: 86 }}></div>
      </section>
    </>
  );
}
