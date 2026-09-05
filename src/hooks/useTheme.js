import { useEffect, useState, useCallback } from "react";

export default function useTheme() {
  // Every fresh page load starts in dark mode
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, setTheme, toggle };
}