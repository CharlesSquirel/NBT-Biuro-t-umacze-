import { useEffect } from "react";

export const useEscapeClick = (callback: () => void): void => {
  useEffect(() => {
    const handleEscapeClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscapeClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeClick);
    };
  }, [callback]);
};
