import store from "../state/store";
import { themeActions } from "../state/slices/themeSlice";
import { navigate } from "gatsby";
import { setLanguage } from "../i18n";
import { CommandName, commands } from "./commands";
import { Themes } from "../models/themes";
import { Pages } from "../models/pages";
import { Languages } from "../models/languages";

export const runCommand = (command: CommandName | null) => {
  if (!command) {
    return;
  }

  const changeTheme = (theme: string) => {
    store.dispatch(themeActions.changeTheme(theme));
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  // ----- NAVIGATION ------

  if (commands.sets.home.has(command)) {
    navigate(Pages.Home);
    return;
  }

  if (commands.sets.contact.has(command)) {
    navigate(Pages.Contact);
    return;
  }

  if (commands.sets.about.has(command)) {
    navigate(Pages.About);
    return;
  }

  if (commands.sets.projects.has(command)) {
    navigate(Pages.Projects.Index);
    return;
  }

  if (commands.sets.cardregistry.has(command)) {
    navigate(Pages.Projects.CardRegistry);
    return;
  }

  if (commands.sets.eventmanager.has(command)) {
    navigate(Pages.Projects.EventManager);
    return;
  }

  if (commands.sets.fundraising.has(command)) {
    navigate(Pages.Projects.FundRaising);
    return;
  }

  if (commands.sets.kiltaunions.has(command)) {
    navigate(Pages.Projects.KiltaUnions);
    return;
  }

  if (commands.sets.ktsms.has(command)) {
    navigate(Pages.Projects.KTSms);
    return;
  }

  if (commands.sets.ktvuecomponents.has(command)) {
    navigate(Pages.Projects.KTVueComponents);
    return;
  }

  if (commands.sets.mycats.has(command)) {
    navigate(Pages.Projects.MyCats);
    return;
  }

  if (commands.sets.nogelainet.has(command)) {
    navigate(Pages.Projects.Nogelainet);
    return;
  }

  if (commands.sets.samivaan.has(command)) {
    navigate(Pages.Projects.Samivaan);
    return;
  }

  if (commands.sets.ytj.has(command)) {
    navigate(Pages.Projects.YTJ);
    return;
  }

  // ----- LANGUAGES ------

  if (commands.sets.english.has(command)) {
    changeLanguage(Languages.En);
    return;
  }

  if (commands.sets.finnish.has(command)) {
    changeLanguage(Languages.Fi);
    return;
  }

  // ----- THEMES ------

  if (commands.sets.dark.has(command)) {
    changeTheme(Themes.Dark);
    return;
  }

  if (commands.sets.light.has(command)) {
    changeTheme(Themes.Light);
    return;
  }

  if (commands.sets.hacker.has(command)) {
    changeTheme(Themes.Hacker);
    return;
  }

  if (commands.sets.pride.has(command)) {
    changeTheme(Themes.Pride);
    return;
  }

  if (commands.sets.powershell.has(command)) {
    changeTheme(Themes.PowerShell);
    return;
  }

  if (commands.sets.ball.has(command)) {
    changeTheme(Themes.Ball);
    return;
  }

  if (commands.sets.wireframe.has(command)) {
    changeTheme(Themes.Wireframe);
    return;
  }

  if (commands.sets.cssColors.has(command)) {
    changeTheme(`${Themes.CssColor}-${command}`);
    return;
  }

  console.error(command);
  throw new Error("No command processor for command " + command);
};
