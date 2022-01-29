import React from "react";
import WrittenImage from "./WrittenImage";

export default {
    title: "Effects/WrittenImage",
    component: WrittenImage,
}

const Template = (args) => <WrittenImage {...args}/>

export const Default = Template.bind({});

Default.args = {
    src: "https://picsum.photos/id/1003/1181/1772",
    maxSize: 100,
    speed: 200
};

