// src/components/ThemeToggle.tsx
"use client";
import { useTheme } from "@/app/context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle light and dark theme"
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};
