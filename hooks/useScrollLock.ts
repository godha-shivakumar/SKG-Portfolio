import { useEffect } from "react";

export const useScrollLock = (active: boolean) => {
  useEffect(() => {
    if (!active) return;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [active]);
};
