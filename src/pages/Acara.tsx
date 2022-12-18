import CountDownTimer from "../components/CountDownTimer";
import Ring from "../icons/Ring";

interface AcaraData {
  nama: string;
  jam: string;
  tanggal: string;
  lokasi: string;
  map?: string;
}

const targetDate = new Date("2022-12-31 08:00:00+0700");
const targetCloseDate = new Date("2022-12-31 12:00:00+0700");

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
      <div style={{ padding: "2em 0 0em" }}>
        <Ring fill="black" />
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "32px",
            marginTop: -12,
          }}
        >
          Hitung Mundur Acara
        </h2>
      </div>
      <CountDownTimer
        targetDate={targetDate.getTime()}
        targetCloseDate={targetCloseDate.getTime()}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      {dataAcara &&
        dataAcara.map((val, id) => {
          return (
            <div key={`acara-${id}`} className="event-item maxMd">
              <div className="decor">
                <Ring fill="#9F9F45" />
              </div>
              <div className="nama">{val.nama}</div>
              <div className="tanggal">{val.tanggal}</div>
              <div className="jam">{val.jam}</div>
            </div>
          );
        })}
      <div style={{ height: 20 }}></div>
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
          allowFullScreen
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
