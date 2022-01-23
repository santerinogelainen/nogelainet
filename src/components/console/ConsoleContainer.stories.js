import React from "react";
import ConsoleContainer from "./ConsoleContainer"
import { SBContentPlaceholder } from "../../utils/storybookUtils";
import { Commands, CommandsSBArgs } from "../../models/commands"
import { Themes, ThemesSBArgs } from "../../models/themes"

export default {
    title: "Console/ConsoleContainer",
    component: ConsoleContainer,
    argTypes: {
        activeView: CommandsSBArgs,
        activeTheme: ThemesSBArgs
    }
}

const Template = (args) => {
    return (
        <ConsoleContainer {...args}>
            <SBContentPlaceholder size={200} />
        </ConsoleContainer>
    )
}

export const Default = Template.bind({});

Default.args = {
    visible: true,
    commands: {
        "home": null,
        "projects": null,
        "about": null
    },
    activeTheme: Themes.Dark,
    activeView: Commands.Home
};
