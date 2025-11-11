import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? "#fff" : "#121212";
    document.body.style.color = mode === "light" ? "#000" : "#fff";
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
