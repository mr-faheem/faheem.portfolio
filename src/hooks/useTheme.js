import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    root.style.colorScheme = theme;

    window.localStorage.setItem(STORAGE_KEY, theme);

    const themeMeta = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeMeta) {
      themeMeta.setAttribute(
        "content",
        isDark ? "#090d13" : "#f8fafc"
      );
    }
  }, [theme]);

  const toggle = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return {
    theme,
    toggle,
  };
}