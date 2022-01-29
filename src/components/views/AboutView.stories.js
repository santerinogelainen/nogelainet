import React from "react";
import AboutView from "./AboutView"

export default {
    title: "Views/About",
    component: AboutView
}

const Template = (args) => {
    return (
        <AboutView {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    text: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    image: "https://picsum.photos/id/1003/1181/1772"
};