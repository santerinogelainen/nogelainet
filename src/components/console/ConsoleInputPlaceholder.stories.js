import React from "react";
import ConsoleInputPlaceholder from "./ConsoleInputPlaceholder";

export default {
    title: "Console/ConsoleInputPlaceholder",
    component: ConsoleInputPlaceholder
}

const Template = (args) => <ConsoleInputPlaceholder {...args}/>

export const Default = Template.bind({});

Default.args = {
    enabled: true,
    delay: 6000,
    helpTexts: [
        "Help1 Help1 Help1 Help1 Help1 Help1 Help1 Help1",
        "Help2 Help2 Help2 Help2 Help2 Help2 Help2 Help2",
        "Help3 Help3 Help3 Help3 Help3 Help3 Help3 Help3",
    ]
};
