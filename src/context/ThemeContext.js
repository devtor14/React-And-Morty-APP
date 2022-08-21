import React, { useState, useEffect } from "react";
import { darkTheme, setStyleTheme } from "../theme/Themes.js";

const ThemeContext = React.createContext(null);

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    theme ? setStyleTheme(darkTheme) : setStyleTheme("");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
