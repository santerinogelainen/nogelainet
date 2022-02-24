
import { Commands } from "../models/commands";
import store from "../state/store"
import { themeActions } from "../state/slices/themeSlice";
import { navigate } from "gatsby"
import { mapToLanguage, mapToPage, mapToTheme } from "./commandMapper";
import { setLanguage } from "../i18n";

export const runCommand = (command) => {

    function changeTheme(theme) {
        store.dispatch(themeActions.changeTheme(theme));
    }

    function changeLanguage(lang) {
        setLanguage(lang);
    }

    switch (command.toLowerCase()) {

        case Commands.Home:
        case Commands.Projects:
        case Commands.Contact:
        case Commands.About:
            navigate(mapToPage(command.toLowerCase()));
            break;

        case Commands.Dark:
        case Commands.Light:
        case Commands.Pride:
        case Commands.PowerShell:
        case Commands.Hacker:
            changeTheme(mapToTheme(command.toLowerCase()));
            break;

        case Commands.English:
        case Commands.Finnish:
            changeLanguage(mapToLanguage(command.toLowerCase()));
            break;

        default:
            console.error(command);
            throw new Error("No command processor for command " + command);
    }

}