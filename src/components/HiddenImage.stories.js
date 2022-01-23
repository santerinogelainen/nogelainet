import React from "react";
import HiddenImage from "./HiddenImage"

export default {
    title: "Components/HiddenImage",
    component: HiddenImage
}

const Template = (args) => {
    return (
        <HiddenImage {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    visible: false,
    images: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
    ]
};