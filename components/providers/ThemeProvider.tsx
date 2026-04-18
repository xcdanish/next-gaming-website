"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{
    theme: Theme;
    mounted: boolean;
  }>({
    theme: "dark",
    mounted: false,
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    // Apply to DOM immediately for visual consistency
    document.documentElement.setAttribute("data-theme", initialTheme);

    // Defer state update to avoid 'cascading renders' warning
    // This moves the update to the next tick, making it non-synchronous
    requestAnimationFrame(() => {
      setState({
        theme: initialTheme,
        mounted: true,
      });
    });
  }, []);

  const setTheme = (newTheme: Theme) => {
    setState((prev) => ({ ...prev, theme: newTheme }));
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: state.theme, setTheme, toggleTheme }}
    >
      <div style={{ visibility: state.mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
