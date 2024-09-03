import { SBEnumControl } from "../utils/storybookUtils";

export const Commands = {
  Home: "home",
  Projects: "projects",
  About: "about",
  Contact: "contact",
  Light: "light",
  Dark: "dark",
  Pride: "pride",
  PowerShell: "powershell",
  Hacker: "hacker",
  Finnish: "finnish",
  English: "english",
  CssColor: "css-color",
};

export const CommandsSBArgs = SBEnumControl(Commands);
