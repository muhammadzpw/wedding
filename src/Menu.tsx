import clsx from "clsx";
import React, { useState, useEffect } from "react";
import HumIcon from "./icons/HumIcon";
import Logo from "./Logo";

import { enableScroll, scrollTo as scrollToId } from "./utils";

const Menu: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    enableScroll(!open);
  }, [open]);

  const links = [
    {
      display: "sampul",
      target: "#sampul",
    },
    {
      display: "muqaddimah",
      target: "#muqaddimah",
    },
    {
      display: "profil",
      target: "#profil",
    },
    {
      display: "acara",
      target: "#acara",
    },
    {
      display: "prokes",
      target: "#prokes",
    },
    {
      display: "doa",
      target: "#doa",
    },

    {
      display: "pesan",
      target: "#ucapan",
    },
  ];
  return (
    <div className={clsx("menu-wrapper", open ? "open" : "closed")}>
      <div
        className="top-menu"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        <span>menu</span>
        <HumIcon fill={clsx(open ? "white" : "black")} />
      </div>
      <div className="logo">
        <Logo fill="white" width={146} />
      </div>
      <div className="links">
        {links &&
          links.map((link, id) => {
            return (
              <a
                key={`menulink-${id}`}
                href={link.target}
                className="link-item"
                onClick={(e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    setOpen(false);
                    scrollToId(link.target);
                  }, 300);
                }}
              >
                {link.display}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
