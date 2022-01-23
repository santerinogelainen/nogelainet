import React from "react";
import WrittenTextAnimation from "./WrittenTextAnimation"

export default {
    title: "Animations/WrittenTextAnimation",
    component: WrittenTextAnimation
}

const Template = (args) => {
    return (
        <WrittenTextAnimation {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    text: "Testi testi testi testi testi...",
    enabled: true,
    loop: true,
    delay: 300
};