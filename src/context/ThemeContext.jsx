import React, { createContext, useContext, useState, useEffect } from "react";
import { classes as themeClasses } from "../utils/tailwindClasses";

const ThemeContext = createContext();

// This custom hook will be used to initialize the theme state
const useThemeState = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme;
  }
  // Default to user's system preference
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(useThemeState);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Persist theme changes to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = { theme, toggleTheme, classes: themeClasses[theme] };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
