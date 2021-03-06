import React from "react";
import AsciiImage, { AsciiImageRamp, AsciiImageRampSBArgs } from "./AsciiImage";

export default {
    title: "Effects/AsciiImage",
    component: AsciiImage,
    argTypes: {
        ramp: AsciiImageRampSBArgs
    }
}

const Template = (args) => <AsciiImage {...args}/>

export const Default = Template.bind({});

Default.args = {
    src: "https://picsum.photos/id/1003/1181/1772",
    maxSize: 100,
    ramp: AsciiImageRamp.Default,
    animate: false,
    speed: 5
};

