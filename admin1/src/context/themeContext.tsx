"use client";

import { createContext, useContextSelector } from "use-context-selector";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, ThemeType } from "@/styles/styled/theme";

interface ThemeContextProps {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");

    const theme = isDark ? darkTheme : lightTheme;

    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, isDark, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContextSelector(ThemeContext, (c) => c);
  if (!ctx) throw new Error("useTheme must be used inside ThemeContextProvider");
  return ctx;
};

export const useIsDark = () => useContextSelector(ThemeContext, (c) => c?.isDark);
export const useToggleTheme = () => useContextSelector(ThemeContext, (c) => c?.toggleTheme);
export const useThemeObject = () => useContextSelector(ThemeContext, (c) => c?.theme);
