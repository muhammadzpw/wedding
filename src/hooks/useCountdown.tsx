import dayjs from "dayjs";
import { useEffect, useState } from "react";

const getReturnValues = (countDown: any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds, countDown];
};

const useCountdown = (targetDate: any) => {
  const countDownDate = dayjs(targetDate).valueOf();

  const [countDown, setCountDown] = useState(
    countDownDate - dayjs(new Date()).valueOf()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - dayjs(new Date()).valueOf());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

export { useCountdown };