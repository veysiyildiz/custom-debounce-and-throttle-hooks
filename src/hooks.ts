import { useEffect, useState, useRef } from "react";

export const useDebounce = (value: string | number, delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useThrottle = <T extends any[]>(
  func: (...args: T) => void,
  delay: number = 1000,
) => {
  const timerRef = useRef<number | null>(null);

  return function (...args: T) {
    if (timerRef.current) return;

    timerRef.current = setTimeout(() => {
      func(...args);
      timerRef.current = null;
    }, delay);
  };
};
