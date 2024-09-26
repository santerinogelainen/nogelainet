import { SBEnumControl } from "../utils/storybookUtils";

export const Themes = {
  Dark: "theme-dark",
  Light: "theme-light",
  Pride: "theme-pride",
  PowerShell: "theme-powershell",
  Hacker: "theme-hacker",
  CssColor: "theme-css-color",
  Ball: "theme-ball",
  Wireframe: "theme-wireframe",
};

export const ThemesSBArgs = SBEnumControl(Themes);
