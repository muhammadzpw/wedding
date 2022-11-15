import React from "react";
import { useCountdown } from "../hooks/useCountdown";
function formatNumber(x: number) {
  return (x < 10 ? "0" : "") + x;
}
const DateTimeDisplay = ({
  value,
  type,
  isDanger
}: {
  value: number;
  type: string;
  isDanger?: boolean;
}) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <div className="value">{formatNumber(value)}</div>
      <span>{type}</span>
    </div>
  );
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <h2>Acara telah selesai.</h2>
      <p>Jazakumullahu khayran atas do'a dan restunya.</p>
    </div>
  );
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div>
      <div className="show-counter">
        <DateTimeDisplay value={days} type={"Hari"} />
        :
        <DateTimeDisplay value={hours} type={"Jam"} />
        :
        <DateTimeDisplay value={minutes} type={"Menit"} />
        :
        <DateTimeDisplay value={seconds} type={"Detik"} />
      </div>
    </div>
  );
};

const CountDownTimer = ({
  targetDate,
  targetCloseDate
}: {
  targetDate: any;
  targetCloseDate: any;
}) => {
  const [days, hours, minutes, seconds, countdown] = useCountdown(targetDate);
  const [
    daysClose,
    hoursClose,
    minutesClose,
    secondsClose,
    countdownClose
  ] = useCountdown(targetCloseDate);

  if (countdown > 0) {
    return (
      <>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <br />
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Dhita+%26+Zha%27farudin&location=Teras+Bumbu+Waroeng+Jl.+Sulfat+No.4A%2C+Pandanwangi%2C+Kec.+Blimbing%2C+Kota+Malang%2C+Jawa+Timur&dates=20221231T010000Z%2F20221231T043000Z"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          ingatkan acara
        </a>
      </>
    );
  } else if (countdownClose > 0) {
    return (
      <>
        <h2>Acara sedang berlangsung...</h2>
        <ShowCounter
          days={daysClose}
          hours={hoursClose}
          minutes={minutesClose}
          seconds={secondsClose}
        />
      </>
    );
  } else {
    return <ExpiredNotice />;
  }
};

export default CountDownTimer;
