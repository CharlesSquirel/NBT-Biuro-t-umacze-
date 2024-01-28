import { useEffect, useRef } from "react";

export const useModalFocus = () => {
  const refToFocus = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && refToFocus.current) {
        e.preventDefault();
        refToFocus.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return refToFocus;
};
