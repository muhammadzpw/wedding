import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Logo from "../Logo";
import Bismillah from "../icons/Bismillah";
import Wave from "../icons/Wave";
import {
  enableScroll,
  displayMenu,
  displayFullscreen,
  scrollTo as scrollToId,
} from "../utils";

export default function Cover() {
  const [openned, setOpenned] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    enableScroll(openned);
    displayMenu(openned);
    displayFullscreen(openned);
  }, [openned]);

  const guestName = searchParams.get("to");
  return (
    <section className="cover page" id="sampul">
      {/* <div className="section-identifier">sampul</div> */}

      <div className="content">
        <div className="logo">
          <div style={{ marginBottom: "1.5em" }}>
            <Bismillah fill="black" />
          </div>

          <h3> Undangan Pernikahan</h3>

          <Logo fill="black" />
        </div>
        <div className="weddingDay">Sabtu, 31 Desember 2022</div>
        Yth.
        <div className="guest">
          {guestName || "Nama Tamu"}
          <div className="i">
            mohon maaf jika terdapat kesalahan penulisan nama atau gelar
          </div>
        </div>
        <div className="weddingDay"></div>
        <div>
          {!openned && (
            <span
              className="btn"
              onClick={() => {
                setOpenned(true);
                scrollToId("#muqaddimah");
              }}
            >
              Buka Undangan
            </span>
          )}
        </div>
      </div>

      <div className="wave">
        {/* <Logo fill="black" width={64} /> */}
        <Wave fill="#ffffff" />
      </div>
    </section>
  );
}
