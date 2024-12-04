import { Pages } from "../models/pages";
import { Themes } from "../models/themes";
import { CommandName } from "./commands";

export function mapPageToCommand(page: string): CommandName {
  if (page.startsWith(Pages.About)) {
    return "about";
  }

  if (page.startsWith(Pages.Contact)) {
    return "contact";
  }

  if (page.startsWith(Pages.Projects.Index)) {
    return "projects";
  }

  if (page.startsWith(Pages.Home)) {
    return "home";
  }

  throw new Error("Unkown page: " + page);
}

export function mapThemeToCommand(theme: string): CommandName | undefined {
  const mapping: Record<string, CommandName> = {
    [Themes.Dark]: "dark",
    [Themes.Light]: "light",
    [Themes.Hacker]: "hacker",
    [Themes.Ball]: "ball",
    [Themes.Wireframe]: "wireframe",
    [Themes.PowerShell]: "powershell",
    [Themes.Pride]: "pride",
  };
  return mapping[theme];
}
