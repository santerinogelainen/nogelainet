import React from "react";
import ConsoleInputCaret from "./ConsoleInputCaret";

export default {
    title: "Console/ConsoleInputCaret",
    component: ConsoleInputCaret
}

const Template = (args) => <ConsoleInputCaret {...args}/>

export const Default = Template.bind({});

Default.args = {
    enabled: true,
    speed: 600
};
