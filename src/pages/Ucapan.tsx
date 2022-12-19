import Form from "../components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDataPasangan, getGelar, isDevelopment } from "../data";
import DecorativeDivider from "../icons/DecorativeDivider";

function Envelope({ width, fill }: { width: number; fill: string }) {
  return (
    <svg width={width} viewBox="0 0 512 512">
      <path
        fill={fill}
        d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
      />
    </svg>
  );
}

export interface UcapanData {
  nama: string;
  pesan: string;
  timestamp?: any;
}

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Acara() {
  const [dataUcapan, setDataUcapan] = useState<UcapanData[]>([]);
  const fetchData = async () => {
    if (isDevelopment()) {
      return;
    }

    try {
      const resp = await axios.get(
        "https://api.sheety.co/97b073c15ac0ff0288b0adbaaa059b24/undangan/kirimanUcapan"
      );
      setDataUcapan(resp.data.kirimanUcapan);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addData = (pesan: UcapanData) => {
    setDataUcapan([...dataUcapan, pesan]);
  };

  return (
    <>
      <section className="acara ucapan page" id="ucapan">
        <div className="section-identifier">pesan</div>

        <div style={{ padding: "1em 0 0em" }}>
          <h2>Pesan dan Doa</h2>
        </div>
        <div className="ucapan-list">
          <div style={{ height: 32 }}></div>
          {dataUcapan &&
            shuffle(dataUcapan)
              .filter((val) => val.nama && val.pesan)
              .map((val, id) => {
                return (
                  <div key={`ucapan-${id}`} className="event-item maxMd">
                    <div className="decor">
                      <Envelope fill="#9F9F45" width={32} />
                    </div>
                    <div className="nama">{val.nama}</div>
                    <div className="ucapan">{val.pesan}</div>
                  </div>
                );
              })}
        </div>
        <Form addData={addData} />
        <div style={{ height: 32 }}></div>
      </section>
      <section className="profil page">
        <div style={{ height: 32 }}></div>
        <p>
          Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
          berkenan hadir untuk memberikan doa dan restu.
        </p>
        <DecorativeDivider />
        <p>Wassalamu'alaikum warahmatullahi wabarakatuh.</p>
        <div style={{ height: 16 }}></div>

        <p>Kami yang berbahagia,</p>
        {getDataPasangan(getGelar()).map((data, i) => (
          <div key={`keluarga-${i}`}>
            Kel. {data.ayah} & {data.ibu}
          </div>
        ))}

        <div style={{ height: 32 }}></div>
        <div className="ayat" style={{ fontSize: "1.1em" }}>
          جَزَاكُمُ اللهُ خَيْرًا
        </div>

        <div style={{ height: 64 }}></div>
      </section>
    </>
  );
}
