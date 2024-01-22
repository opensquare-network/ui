import { createContext, useEffect, useState } from "react";
import { useIsDark } from "../hooks/theme";

/**
 * @type {React.Context<ReturnType<typeof useState>>}
 */
export const ThemeContext = createContext([]);

export default function ThemeModeProvider({ children, mode: defaultMode }) {
  const [mode, setMode] = useState(defaultMode);

  return (
    <ThemeContext.Provider value={[mode, setMode]}>
      <ThemeModeImpl>{children}</ThemeModeImpl>
    </ThemeContext.Provider>
  );
}

function ThemeModeImpl({ children }) {
  const isDark = useIsDark();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return children;
}
