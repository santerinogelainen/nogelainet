import React from "react";
import FadeAnimation from "./FadeAnimation"
import { SBContentPlaceholder } from "../../utils/storybookUtils";

export default {
    title: "Animations/FadeAnimation",
    component: FadeAnimation
}

const Template = (args) => {
    return (
        <FadeAnimation {...args}>
            <SBContentPlaceholder />
        </FadeAnimation>
    )
}

export const Default = Template.bind({});

Default.args = {
    visible: false,
    speed: 400
};