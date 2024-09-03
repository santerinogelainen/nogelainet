import { Commands } from "../models/commands";
import store from "../state/store";
import { themeActions } from "../state/slices/themeSlice";
import { navigate } from "gatsby";
import { mapToLanguage, mapToPage, mapToTheme } from "./commandMapper";
import { setLanguage } from "../i18n";
import { Command } from "../types";

export const runCommand = (command: Command | null) => {
  if (!command) {
    return;
  }

  function changeTheme(theme: string) {
    store.dispatch(themeActions.changeTheme(theme));
  }

  function changeLanguage(lang: string) {
    setLanguage(lang);
  }

  const commandType = command.type.toLowerCase();

  switch (commandType) {
    case Commands.Home:
    case Commands.Projects:
    case Commands.Contact:
    case Commands.About:
      navigate(mapToPage(commandType));
      break;

    case Commands.Dark:
    case Commands.Light:
    case Commands.Pride:
    case Commands.PowerShell:
    case Commands.Hacker:
    case Commands.CssColor:
      changeTheme(mapToTheme(command));
      break;

    case Commands.English:
    case Commands.Finnish:
      changeLanguage(mapToLanguage(commandType));
      break;

    default:
      console.error(command);
      throw new Error("No command processor for command " + command.name);
  }
};
