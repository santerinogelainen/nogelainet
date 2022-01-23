import React from "react";
import SlideAnimation from "./SlideAnimation"
import { Direction, DirectionSBArgs } from "../../models/direction";
import { SBContentPlaceholder } from "../../utils/storybookUtils";

export default {
    title: "Animations/SlideAnimation",
    component: SlideAnimation,
    argTypes: {
        to: DirectionSBArgs,
        from: DirectionSBArgs
    }
}

const Template = (args) => {
    return (
        <SlideAnimation {...args}>
            <SBContentPlaceholder />
        </SlideAnimation>
    )
}

export const ClosedByDefault = Template.bind({});

ClosedByDefault.args = {
    open: false,
    speed: 400,
    from: Direction.Left,
    to: Direction.Right
};

export const OpenByDefault = Template.bind({});

OpenByDefault.args = {
    open: true,
    speed: 400,
    from: Direction.Left,
    to: Direction.Right
};
