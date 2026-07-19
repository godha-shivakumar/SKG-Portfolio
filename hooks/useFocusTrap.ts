import { useEffect } from "react";

export const useFocusTrap = (
  active: boolean,
  containerRef: React.RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const focusable = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])',
      ),
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (!first || !last) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const container = containerRef.current;
    container.addEventListener("keydown", handleKey);

    return () => {
      container.removeEventListener("keydown", handleKey);
    };
  }, [active, containerRef]);
};
