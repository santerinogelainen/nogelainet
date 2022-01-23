import React from "react";
import HighlightedWordAnimation from "./HighlightedWordAnimation"

export default {
    title: "Animations/HighlightedWordAnimation",
    component: HighlightedWordAnimation
}

const Template = (args) => {
    return (
        <HighlightedWordAnimation {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    word: "Testi",
    start: false,
    visible: false,
    includeLines: false
};