import { useCallback, useEffect, useRef } from "react";

export function useDebounce(
  fnToBeDebounced: () => void,
  time = 650,
  { stopOnUnmount = true } = {}
) {
  const timeout = useRef(null);
  const timeRef = useRef(time);

  useEffect(() => {
    if (stopOnUnmount) {
      return () => clearTimeout(timeout.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callback = useCallback(
    (...args) => {
      clearTimeout(timeout.current);
      return new Promise((resolve) => {
        timeout.current = setTimeout(
          () => resolve(fnToBeDebounced(...(args ?? []))),
          timeRef.current
        );
      });
    },
    [fnToBeDebounced]
  );

  return callback;
}
