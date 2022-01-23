import React from "react";
import ContactView from "./ContactView"

export default {
    title: "Views/Contact",
    component: ContactView
}

const Template = (args) => {
    return (
        <ContactView {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    email: "santeri.nogelainen@gmail.com",
    socials: [
        {
            rowKey: "instagram",
            name: "Instagram",
            url: "https://www.instagram.com/santerinogelainen/",
            username: "santerinogelainen"
        }
    ]
};