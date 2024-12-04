import { useAppSelector, useAppDispatch } from "../state/store";
import { themeActions } from "../state/slices/themeSlice";
import { navigate } from "gatsby";
import { setLanguage } from "../i18n";
import { CommandName, commands } from "./commands";
import { Themes } from "../models/themes";
import { Pages } from "../models/pages";
import { Languages } from "../models/languages";
import { useCallback, useEffect, useMemo, useState } from "react";
import { viewActions } from "../state/slices/viewSlice";

type FoundCommands = {
  [command: string]: true;
};

type FoundCommandStats = {
  all: FoundCommands;
  unique: {
    found: number;
    total: number;
  };
  alias: {
    found: number;
    total: number;
  };
};

export const getLocalStorage = () =>
  typeof window !== "undefined" ? window.localStorage : undefined;

export const getFoundCommands = (): FoundCommands => {
  const stored = getLocalStorage()?.getItem("found-commands") || "";
  if (!stored) {
    return {};
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return {};
  }
};

export const saveFoundCommand = (command: CommandName) => {
  const found = getFoundCommands();
  found[command] = true;
  getLocalStorage()?.setItem("found-commands", JSON.stringify(found));
};

const uniqueAll = Object.values(commands.sets);
const uniqueTotal = uniqueAll.length;
const aliasTotal = commands.all.size;

export const useFoundCommandStats = (): FoundCommandStats => {
  const [found, setFound] = useState(getFoundCommands());
  const unique = uniqueAll.filter((value) =>
    value.keys?.()?.some((x) => found[x]),
  ).length;
  const alias = Object.keys(found).length;
  const prev = useAppSelector((x) => x.view.previousCommand);

  // If previous command changes, update counts
  useEffect(() => setFound(getFoundCommands()), [prev]);

  return useMemo(
    () => ({
      all: found,
      unique: { found: unique, total: uniqueTotal },
      alias: { found: alias, total: aliasTotal },
    }),
    [found],
  );
};

export const useCommandRunner = () => {
  const dispatch = useAppDispatch();

  return useCallback((command: CommandName | null) => {
    if (!command) {
      return;
    }

    const changeTheme = (theme: string) => {
      dispatch(themeActions.changeTheme(theme));
      dispatch(viewActions.setPreviousCommand(command));
      saveFoundCommand(command);
    };

    const changeLanguage = (lang: string) => {
      setLanguage(lang);
      dispatch(viewActions.setPreviousCommand(command));
      saveFoundCommand(command);
    };

    const changePage = (to: string) => {
      navigate(to);
      dispatch(viewActions.setPreviousCommand(command));
      saveFoundCommand(command);
    };

    // ----- NAVIGATION ------

    if (commands.sets.home.has(command)) {
      changePage(Pages.Home);
      return;
    }

    if (commands.sets.contact.has(command)) {
      changePage(Pages.Contact);
      return;
    }

    if (commands.sets.about.has(command)) {
      changePage(Pages.About);
      return;
    }

    if (commands.sets.projects.has(command)) {
      changePage(Pages.Projects.Index);
      return;
    }

    if (commands.sets.cardregistry.has(command)) {
      changePage(Pages.Projects.CardRegistry);
      return;
    }

    if (commands.sets.eventmanager.has(command)) {
      changePage(Pages.Projects.EventManager);
      return;
    }

    if (commands.sets.fundraising.has(command)) {
      changePage(Pages.Projects.FundRaising);
      return;
    }

    if (commands.sets.kiltaunions.has(command)) {
      changePage(Pages.Projects.KiltaUnions);
      return;
    }

    if (commands.sets.ktsms.has(command)) {
      changePage(Pages.Projects.KTSms);
      return;
    }

    if (commands.sets.ktvuecomponents.has(command)) {
      changePage(Pages.Projects.KTVueComponents);
      return;
    }

    if (commands.sets.mycats.has(command)) {
      changePage(Pages.Projects.MyCats);
      return;
    }

    if (commands.sets.nogelainet.has(command)) {
      changePage(Pages.Projects.Nogelainet);
      return;
    }

    if (commands.sets.samivaan.has(command)) {
      changePage(Pages.Projects.Samivaan);
      return;
    }

    if (commands.sets.ytj.has(command)) {
      changePage(Pages.Projects.YTJ);
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
  }, []);
};
