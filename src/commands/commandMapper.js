import { Commands } from "../models/commands";
import { Pages } from "../models/pages";
import { Themes } from "../models/themes";

export function mapToPage(command) {

    switch (command) {

        case Commands.Home:
            return Pages.Home;

        case Commands.About:
            return Pages.About;

        case Commands.Contact:
            return Pages.Contact;

        case Commands.Projects:
            return Pages.Projects;

        default:
            throw new Error("Could not map command to page: " + command);
    }

}

export function mapToTheme(command) {

    switch (command) {

        case Commands.Dark:
            return Themes.Dark;

        case Commands.Light:
            return Themes.Light;

        default:
            throw new Error("Could not map command to theme: " + command);
    }
}

export function mapPageToCommand(page) {
    
    if (page.startsWith(Pages.About)) {
        return Commands.About;
    }

    if (page.startsWith(Pages.Contact)) {
        return Commands.Contact;
    }

    if (page.startsWith(Pages.Projects)) {
        return Commands.Projects;
    }
    
    if (page.startsWith(Pages.Home)) {
        return Commands.Home;
    }

    throw new Error("Unkown page: " + page);
}

export function nextCommand(command) {

    switch (command) {

        case Commands.Home:
            return Commands.Projects;

        case Commands.Projects:
            return Commands.About;

        case Commands.About:
            return Commands.Contact;

        case Commands.Contact:
            return Commands.Home;

        default:
            throw new Error("Could not determine the next page for command: " + command);
    }

}