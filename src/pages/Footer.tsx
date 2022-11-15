import { useSearchParams } from "react-router-dom";
import Logo from "../Logo";
import Ring from "../icons/Ring";
import CircleDecor from "../icons/CircleDecor";
import Wave from "../icons/Wave";

export default function Acara() {
  return (
    <>
      <section className="footer page" id="footer">
        <div style={{ padding: "4em 0 4em" }}>
          <Logo fill="black" width={100} />
          {/* Crafted with love by {" "}
        <a href="https://instagram.com/muhammad_zpw">@muhammad_zpw</a> */}
        </div>
      </section>
    </>
  );
}
