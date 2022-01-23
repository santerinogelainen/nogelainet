import React from "react";
import LineAnimation from "./LineAnimation";
import { Anchor, AnchorSBArgs } from "../../models/anchor";
import { SBContentPlaceholder } from "../../utils/storybookUtils";

export default {
    title: "Animations/LineAnimation",
    component: LineAnimation,
    argTypes: {
        anchor1: AnchorSBArgs,
        anchor2: AnchorSBArgs
    }
}

const Template = (args) => {
    return (
        <LineAnimation {...args}>
            <SBContentPlaceholder size={200} />
        </LineAnimation>
    )
}

export const Default = Template.bind({});

Default.args = {
    visible: false,
    speed: 600,
    anchor1: Anchor.TopLeft,
    anchor2: Anchor.BottomRight
};
