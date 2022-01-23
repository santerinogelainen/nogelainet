import React from "react";
import HiddenContainer from "./HiddenContainer"
import { SBContentPlaceholder } from "../utils/storybookUtils";
import { Anchor } from "../models/anchor";

export default {
    title: "Components/HiddenContainer",
    component: HiddenContainer
}

const Template = (args) => {
    return (
        <HiddenContainer {...args}>
            <SBContentPlaceholder />
        </HiddenContainer>
    )
}

export const Default = Template.bind({});

Default.args = {
    visible: false,
    anchor: Anchor.Center
};