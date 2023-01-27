import { CSSProperties, useEffect, useState } from "react";

type Props = {
  time?: number;
};

export const useMotion = ({ time = 1 }: Props) => {
  const [show, setShow] = useState(false);

  const motionStyle: CSSProperties = {
    opacity: show ? 1 : 0,
    transition: `all ${time}s`,
  };

  useEffect(() => {
    setShow(true);

    return () => {
      setShow(false);
    };
  }, []);

  return motionStyle;
};
