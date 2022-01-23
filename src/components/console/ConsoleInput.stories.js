import React from "react";
import ConsoleInput from "./ConsoleInput";

export default {
    title: "Console/ConsoleInput",
    component: ConsoleInput
}

const Template = (args) => <ConsoleInput {...args}/>

export const Default = Template.bind({});

Default.args = {
    commands: {
        "home": null,
        "projects": null,
        "about": null,
        "contact": null
    }
};
