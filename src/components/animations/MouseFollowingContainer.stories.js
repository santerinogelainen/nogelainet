import React from "react";
import MouseFollowingContainer from "./MouseFollowingContainer"
import { Anchor, AnchorSBArgs } from "../../models/anchor";
import { SBContentPlaceholder } from "../../utils/storybookUtils";

export default {
    title: "Animations/MouseFollowingContainer",
    component: MouseFollowingContainer,
    argTypes: {
        anchor: AnchorSBArgs
    }
}

const Template = (args) => {
    return (
        <MouseFollowingContainer {...args}>
            <SBContentPlaceholder size={200} />
        </MouseFollowingContainer>
    )
}

export const Default = Template.bind({});

Default.args = {
    enabled: true,
    rotate: true,
    anchor: Anchor.Center
};
