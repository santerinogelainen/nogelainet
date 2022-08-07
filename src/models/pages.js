import { SBEnumControl } from "../utils/storybookUtils"

export const Pages = {
    Home: "/",
    About: "/about",
    Projects: "/projects",
    Contact: "/contact",
}

export const PagesSBArgs = SBEnumControl(Pages);