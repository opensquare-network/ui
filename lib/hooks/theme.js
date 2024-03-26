import { useContext } from "react";
import { ThemeContext } from "../context/themeMode";
import { usePreferredColorScheme } from "./usePreferredColorScheme";

/**
 * @typedef {'light' | 'dark'} ThemeMode
 * @typedef {ThemeMode | 'system'} Mode
 * @typedef {(mode: Mode) => void} SetMode
 *
 * @returns {[ThemeMode, SetMode, Mode]} ThemeMode is only `light` or `dark`, Mode can be `light`, `dark` or `system`
 */
export function useThemeMode() {
  const [mode, setMode] = useContext(ThemeContext);
  const preferredColorScheme = usePreferredColorScheme();
  const themeMode = mode === "system" ? preferredColorScheme : mode;

  /**
   * @param {Mode} mode
   */
  function set(mode) {
    setMode(mode);
  }

  return [themeMode, set, mode];
}

export function useIsDark() {
  return useThemeMode()[0] === "dark";
}
