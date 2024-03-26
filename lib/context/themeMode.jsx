import { createContext, useEffect, useState } from "react";
import { useIsDark } from "../hooks/theme";
import { noop } from "../utils";
import { CACHE_KEY, IS_CLIENT } from "../utils/consts";
import { setCookie } from "@osn/common";

/**
 * @type {React.Context<ReturnType<typeof useState>>}
 */
export const ThemeContext = createContext(["light", noop]);

export default function ThemeModeProvider({
  children,
  mode: defaultMode,
  persist,
}) {
  const [mode, setMode] = useState(defaultMode || "light");

  useEffect(() => {
    if (persist && IS_CLIENT) {
      setCookie(CACHE_KEY.themeMode, mode);
    }
  }, [mode, persist]);

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
