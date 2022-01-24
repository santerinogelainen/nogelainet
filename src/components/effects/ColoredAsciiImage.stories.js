import React from "react";
import { AsciiImageRamp, AsciiImageRampSBArgs } from "./AsciiImage";
import ColoredAsciiImage from "./ColoredAsciiImage";

export default {
    title: "Effects/ColoredAsciiImage",
    component: ColoredAsciiImage,
    argTypes: {
        ramp: AsciiImageRampSBArgs
    }
}

const Template = (args) => <ColoredAsciiImage {...args}/>

export const Default = Template.bind({});

Default.args = {
    href: "https://picsum.photos/id/1003/1181/1772",
    maxSize: 250,
    fontSize: 10,
    ramp: AsciiImageRamp.Default
};

