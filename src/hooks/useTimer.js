import { useEffect, useState } from "react";

const useTimer = (startTime) => {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { time };
};

export default useTimer;
