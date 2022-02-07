import React from "react";
import Loader from "./Loader"

export default {
    title: "Components/Loader",
    component: Loader
}

const Template = (args) => {
    return (
        <Loader {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    speed: 180
};