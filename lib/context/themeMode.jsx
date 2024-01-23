import { createContext, useEffect, useState } from "react";
import { useIsDark } from "../hooks/theme";
import { noop } from "../utils";

/**
 * @type {React.Context<ReturnType<typeof useState>>}
 */
export const ThemeContext = createContext(["light", noop]);

export default function ThemeModeProvider({ children, mode: defaultMode }) {
  const [mode, setMode] = useState(defaultMode || "light");

  return (
    <ThemeContext.Provider value={[mode, setMode]}>
      <ThemeModeEffects>{children}</ThemeModeEffects>
    </ThemeContext.Provider>
  );
}

function ThemeModeEffects({ children }) {
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
