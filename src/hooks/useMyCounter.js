import { useEffect, useState } from "react";

const useMyCounter = (paresh) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue((prev) => prev + paresh);
  }, [paresh]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const inc = () => {
    setValue((prev) => prev + paresh);
  };

  const dec = () => {
    setValue((prev) => prev - paresh);
  };

  return { value, inc, dec };
};

export default useMyCounter;
