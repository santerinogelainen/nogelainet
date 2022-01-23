import { getTableClient } from "./tableClient"


export class DataContext {

    get commands() {
        return getTableClient("Command");
    }

    get socials() {
        return getTableClient("SocialMedia");
    }

    get employers() {
        return getTableClient("Employer");
    }

    get projects() {
        return getTableClient("Project");
    }

    get settings() {
        return getTableClient("Setting");
    }

    get images() {
        return getTableClient("Image");
    }

}