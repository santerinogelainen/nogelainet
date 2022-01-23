import React from "react";
import IndexView from "./IndexView"

export default {
    title: "Views/Index",
    component: IndexView
}

const Template = (args) => {
    return (
        <IndexView {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    name: "Santeri",
    title: "Software Developer",
    location: "Helsinki",
    images: [
        "https://picsum.photos/200"
    ]
};