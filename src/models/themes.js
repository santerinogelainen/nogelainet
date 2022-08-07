import { SBEnumControl } from "../utils/storybookUtils"

export const Themes = {
    Dark: "theme-dark",
    Light: "theme-light",
    Pride: "theme-pride",
    PowerShell: "theme-powershell",
    Hacker: "theme-hacker"
}

export const ThemesSBArgs = SBEnumControl(Themes);