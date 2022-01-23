import React from "react";
import BlockButton from "./BlockButton";

export default {
    title: "Components/BlockButton",
    component: BlockButton
}

const Template = (args) => <BlockButton {...args}/>

export const Default = Template.bind({});

Default.args = {
    text: "Tekstiä tähän."
};

