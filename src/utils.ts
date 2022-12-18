import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollToPlugin);

export const scrollTo = (target: string) => {
  gsap.to(window, {
    duration: 2,
    scrollTo: target,
    ease: "power3.out",
  });
};

export const enableScroll = (enable: boolean) => {
  document.body.style.overflow = enable ? "auto" : "hidden";
};

export const displayMenu = (enable: boolean) => {
  const topMenu: HTMLDivElement | null = document.querySelector(
    ".menu-wrapper .top-menu"
  );
  if (enable && topMenu) {
    topMenu.style.transform = "translateY(0)";
  }
};

type HTMLElementExtended = HTMLElement & {
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
};

export const displayFullscreen = (enable: boolean) => {
  if (!enable) {
    return;
  }
  const elem: HTMLElementExtended = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
};

imagesLoaded(
  document.querySelectorAll("body, .page"),
  { background: true },
  () => {
    console.log("Image Done");
    document.body.classList.remove("loading");
    scrollTo("body");
  }
);
