import {useEffect, useState} from "react";

interface UseDebounce {
  value: string;
  delay: number;
}

export const useDebounce = (props: UseDebounce) => {
  const {value, delay} = props;
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const t = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(t);
      };
    },
    [value, delay]
  );
  return debouncedValue;
}
