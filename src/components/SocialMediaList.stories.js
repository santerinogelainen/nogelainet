import React from "react";
import SocialMediaList from "./SocialMediaList"

export default {
    title: "Components/SocialMediaList",
    component: SocialMediaList
}

const Template = (args) => {
    return (
        <SocialMediaList {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    socials: [
        {
            rowKey: "instagram",
            Name: "Instagram",
            Url: "https://www.instagram.com/santerinogelainen/",
            Username: "santerinogelainen"
        }
    ]
};