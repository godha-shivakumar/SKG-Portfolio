import { useEffect, useState } from "react";

export const useScrollSpy = (links: { url: string }[]) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const sections = links
        .map((l) => document.getElementById(l.url.replace("#", "")))
        .filter((el): el is HTMLElement => Boolean(el));

      if (!sections.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(`#${entry.target.id}`);
            }
          });
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0.2,
        },
      );

      sections.forEach((s) => observer.observe(s));
      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [links]);

  return active;
};
