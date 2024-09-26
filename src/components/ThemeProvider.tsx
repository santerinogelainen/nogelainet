import React, { useEffect } from "react";
import HackerBackground from "./backgrounds/HackerBackground";
import { Themes } from "../models/themes";
import WireframeBackground, {
  wireframeBall,
  wireframeWave,
} from "./backgrounds/WireframeBackground";

type ThemeProviderProps = React.PropsWithChildren<{
  theme?: string;
}>;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  useEffect(() => {
    const body = document.body;
    body.className = `theme ${theme}`;
  }, [theme]);

  return (
    <>
      {children}
      {theme === Themes.Hacker && <HackerBackground />}
      {theme === Themes.Ball && (
        <WireframeBackground transform={wireframeBall} />
      )}
      {theme === Themes.Wireframe && (
        <WireframeBackground transform={wireframeWave} />
      )}
    </>
  );
};

export default ThemeProvider;
