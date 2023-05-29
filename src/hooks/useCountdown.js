import { useEffect, useState } from "react";

const useCountdown = (targetTime) => {
  const [remainingTime, setRemainingTime] = useState(targetTime);

  useEffect(() => {
    // const timeout = setTimeout(() => {
    // setRemainingTime((prev) => prev - 1000);
    // }, 1000);
    setRemainingTime(targetTime);

    // if (remainingTime === 0) clearTimeout(timeout);

    // return () => clearTimeout(timeout);
  }, [targetTime]);

  const reset = () => {
    setRemainingTime(targetTime);
  };
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, reset };
};

export { useCountdown };
