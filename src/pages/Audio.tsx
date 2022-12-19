import { useEffect, useRef, useState } from "react";
import SoundIcon from "../icons/Sound";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    const playOnReady = () => {
      audio.muted = false;
      audio.loop = true;
      audio.play();
      setPlay(true);
    };
    audio.addEventListener("canplay", playOnReady);
    return () => {
      audio.removeEventListener("canplay", playOnReady);
    };
  }, [audioRef]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    console.log(audio);
    if (play) {
      audio.pause();
    } else {
      console.log("play!");

      audio.play();
    }
    setPlay(!play);
  };

  return (
    <></>
    // <div id="sound" onClick={togglePlay} className={play ? "play" : ""}>
    //   <audio
    //     id="nasyid"
    //     ref={audioRef}
    //     src={`${process.env.PUBLIC_URL}/assets/nasyid.mp3`}
    //     loop
    //     autoPlay
    //     muted={true}
    //   />
    //   <SoundIcon active={play} />
    // </div>
  );
}
