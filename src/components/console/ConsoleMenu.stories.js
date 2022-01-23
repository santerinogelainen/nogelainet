import React from "react";
import ConsoleMenu from "./ConsoleMenu";
import { Commands, CommandsSBArgs } from "../../models/commands"
import { Themes, ThemesSBArgs } from "../../models/themes"

export default {
    title: "Console/ConsoleMenu",
    component: ConsoleMenu,
    argTypes: {
        activeView: CommandsSBArgs,
        activeTheme: ThemesSBArgs
    }
}

const Template = (args) => <ConsoleMenu {...args}/>

export const Default = Template.bind({});

Default.args = {
    visible: false,
    activeView: Commands.Home,
    activeTheme: Themes.Dark,
};
