import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [isDark, theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Daar light mode" : "Daar dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-cyan hover:text-navy focus:outline-none focus:ring-4 focus:ring-cyan/25"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
