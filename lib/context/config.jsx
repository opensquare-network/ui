import { createContext } from "react";
import ThemeModeProvider from "./themeMode";

const DEFAULT_CONFIG = {
  themeMode: "light",
  themeModePersist: true,
};

const Context = createContext(DEFAULT_CONFIG);

/**
 * @param {typeof DEFAULT_CONFIG} config
 */
export default function ConfigProvider({
  children,
  themeMode = DEFAULT_CONFIG.themeMode,
  themeModePersist = DEFAULT_CONFIG.themeModePersist,
}) {
  return (
    <Context.Provider value={{ themeMode }}>
      <ThemeModeProvider mode={themeMode} persist={themeModePersist}>
        {children}
      </ThemeModeProvider>
    </Context.Provider>
  );
}
