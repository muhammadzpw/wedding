import dayjs from "dayjs";
import { m } from "framer-motion";
import CountDownTimer from "../components/CountDownTimer";
import DecorativeDivider from "../icons/DecorativeDivider";
import Ring from "../icons/Ring";
import {
  fadeLeftVariant,
  fadeUpVariant,
  fadeUpVariantWithChilds,
} from "../motions";

interface AcaraData {
  nama: string;
  jam: string;
  tanggal: string;
  lokasi: string;
  map?: string;
}

const targetDate = dayjs("2022-12-31 08:00:00").toDate();
const targetCloseDate = dayjs("2022-12-31 12:00:00").toDate();
export default function Acara() {
  const dataAcara: AcaraData[] = [
    {
      nama: "Akad Nikah",
      jam: "08.00 - selesai",
      tanggal: "Sabtu, 31 Desember 2022",
      lokasi: "Masjid Blabla",
    },
    {
      nama: "Walimatul 'Urs",
      jam: "10.00 - 12.00",
      tanggal: "Sabtu, 31 Desember 2022",
      lokasi: "Teras Bumbu",
    },
  ];
  return (
    <section className="acara page" id="acara">
      <div className="section-identifier">Acara</div>
      <m.div
        variants={fadeUpVariantWithChilds}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ padding: "1em 0 0em" }}
      >
        <Ring fill="black" />
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "32px",
            marginTop: -12,
          }}
        >
          Waktu Menuju Acara
        </h2>
      </m.div>
      <div style={{ overflow: "hidden", padding: "1em 0" }}>
        <m.div
          variants={fadeLeftVariant}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
        >
          <CountDownTimer
            targetDate={targetDate}
            targetCloseDate={targetCloseDate}
          />
        </m.div>
      </div>
      <br />
      <br />
      <br />
      <m.p
        variants={fadeUpVariantWithChilds}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan
        yang Insya Allah akan kami selenggarakan pada:
      </m.p>
      <br />

      {dataAcara &&
        dataAcara.map((val, id) => {
          return (
            <m.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={`acara-${id}`}
              className="event-item maxMd"
            >
              <div className="decor">
                <Ring fill="#9F9F45" />
              </div>
              <div className="nama">{val.nama}</div>
              <div className="tanggal">{val.tanggal}</div>
              <div className="jam">{val.jam}</div>
            </m.div>
          );
        })}

      <div style={{ height: 32 }}></div>
      <div className="event-item">
        <div className="decor">
          <h2 style={{ fontSize: "2em", margin: 10, color: "#9F9F45" }}>
            Peta Lokasi Acara
          </h2>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15805.40953568129!2d112.6541118!3d-7.9624875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb3714ccc86c926b!2sTeras%20Bumbu%20Waroeng!5e0!3m2!1sid!2sid!4v1667826616754!5m2!1sid!2sid"
          title="gmap"
          id="gmap"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="tanggal" style={{ padding: "0 2em" }}>
          <br />
          <strong>Teras Bumbu</strong> <br />
          Jl. Sulfat No.4A, Pandanwangi, Kec. Blimbing, Kota Malang, Jawa Timur
          <br />
          <br />
          <a
            href="https://goo.gl/maps/mFuck5hecqhawZqy8"
            rel="noreferrer"
            target="_blank"
            className="btn"
          >
            buka peta
          </a>
        </div>
      </div>
    </section>
  );
}
