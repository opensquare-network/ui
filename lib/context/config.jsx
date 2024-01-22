import { createContext } from "react";
import ThemeModeProvider from "./themeMode";

const DEFAULT_CONFIG = {
  themeMode: "light",
};

const Context = createContext(DEFAULT_CONFIG);

/**
 * @param {typeof DEFAULT_CONFIG} config
 */
export default function ConfigProvider({
  children,
  themeMode = DEFAULT_CONFIG.themeMode,
}) {
  return (
    <Context.Provider value={{ themeMode }}>
      <ThemeModeProvider mode={themeMode}>{children}</ThemeModeProvider>
    </Context.Provider>
  );
}
