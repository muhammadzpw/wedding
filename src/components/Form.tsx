import { useRef, useState } from "react";
import { scrollTo as scrollToId } from "../utils";

import axios from "axios";
import { UcapanData } from "../pages/Ucapan";

export default function Form({
  addData,
}: {
  addData: (pesan: UcapanData) => void;
}) {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  // const [dataUcapan, setDataUcapan] = useState<UcapanData[]>([]);
  const formElement = useRef<HTMLFormElement>(null);
  const giveAlert = (message: string, timeout?: number) => {
    setWarning(message);
    setTimeout(() => {
      setWarning("");
      setNama("");
      setPesan("");
      formElement.current?.reset();
    }, timeout || 10000);
  };
  const onSubmit = async () => {
    if (!nama || !pesan) {
      giveAlert("Nama atau pesan tidak boleh kosong.");
      return;
    }
    console.log(nama, pesan);
    const baseurl =
      "https://docs.google.com/forms/d/e/1FAIpQLSf5fSwDJAyHorK7WUvz9TL6u5qTRu9PVmoo1pEUxI17fLmzGg/formResponse";
    const s = new URLSearchParams({
      usp: "pp_url",
      "entry.1019179698": nama,
      "entry.395114230": pesan,
    });
    const url = `${baseurl}?${s.toString()}`;

    // const resp = await fetch(
    //   "https://docs.google.com/forms/d/e/1FAIpQLSf5fSwDJAyHorK7WUvz9TL6u5qTRu9PVmoo1pEUxI17fLmzGg/formResponse?usp=pp_url&entry.1019179698=mzpw&entry.395114230=pesan+di+sini"
    // );
    try {
      const resp = await axios.post(url);
      console.log(resp);
    } catch (error) {
      console.error(error);
    }
    addData({
      nama,
      pesan,
      timestamp: Date.now().toString(),
    });

    scrollToId("#ucapan");
    giveAlert("Jazakallahu khayran atas pesan dan doa yang disampaikan");
  };
  return (
    <div>
      {warning && (
        <div className="input-wrapper warning">
          <div className="input">{warning}</div>
        </div>
      )}
      <form
        ref={formElement}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="input-wrapper">
          <input
            type="text"
            name="nama"
            maxLength={25}
            onChange={(e) => setNama(e.target.value)}
            className="input"
            placeholder="Nama"
          />
        </div>
        <div className="input-wrapper">
          <textarea
            name="ucapan"
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tuliskan pesan dan doa Anda di sini"
            className="input"
            style={{ resize: "vertical" }}
            maxLength={255}
          ></textarea>
        </div>
        <button className="btn">Kirim pesan dan doa</button>
      </form>
    </div>
  );
}
