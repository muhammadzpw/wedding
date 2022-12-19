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
import { m } from "framer-motion";
import { fadeLeftVariant } from "../motions";

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

      <m.div
        variants={fadeLeftVariant}
        initial="hidden"
        whileInView="visible"
        transition={{
          easings: ["easeInOut"],
          duration: 0.8,
        }}
        className="content"
      >
        <div className="logo">
          <m.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            style={{ marginBottom: "1.5em" }}
          >
            <Bismillah fill="black" />
          </m.div>

          <m.h3
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.6,
              duration: 1,
            }}
          >
            {" "}
            Undangan Pernikahan
          </m.h3>
          <m.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.8,
              duration: 1,
            }}
          >
            <Logo fill="black" />
          </m.div>
        </div>
        <m.div
          variants={fadeLeftVariant}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="weddingDay"
        >
          Sabtu, 31 Desember 2022
        </m.div>
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
            <m.span
              className="btn"
              onClick={() => {
                setOpenned(true);
                scrollToId("#muqaddimah");
              }}
              whileHover={{ scale: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Buka Undangan
            </m.span>
          )}
        </div>
      </m.div>

      <div className="wave">
        {/* <Logo fill="black" width={64} /> */}
        <Wave fill="#ffffff" />
      </div>
    </section>
  );
}
