import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { LG_SIZE, MD_SIZE, SM_SIZE } from "../utils/consts";

/**
 * @description tailwind responsive screen size
 */
export function useScreenSize() {
  const { width } = useWindowSize();

  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);
  const [xl, setXl] = useState(false);

  useEffect(() => {
    setSm(width <= SM_SIZE);
    setMd(width <= MD_SIZE);
    setLg(width <= LG_SIZE);
    setXl(width > LG_SIZE);
  }, [width]);

  return {
    sm,
    md,
    lg,
    xl,
  };
}
