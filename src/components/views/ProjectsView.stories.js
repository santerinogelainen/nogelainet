import React from "react";
import ProjectsView from "./ProjectsView"

export default {
    title: "Views/Projects",
    component: ProjectsView
}

const Template = (args) => {
    return (
        <ProjectsView {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    projects: [
        {
            Name: "WWF"
        },
        {
            Name: "Porvoon Butchers"
        }
    ]
};