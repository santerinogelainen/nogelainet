
import { Commands } from "../models/commands";
import store from "../state/store"
import { themeActions } from "../state/slices/themeSlice";
import { navigate } from "gatsby"
import { mapToPage, mapToTheme } from "./commandMapper";

export const runCommand = (command) => {

    function changeTheme(theme) {
        store.dispatch(themeActions.changeTheme(theme));
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
            changeTheme(mapToTheme(command.toLowerCase()));
            break;

        default:
            console.error(command);
            throw new Error("No command processor for command " + command);
    }

}