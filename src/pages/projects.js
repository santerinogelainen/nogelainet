
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import ProjectsView from "../components/views/ProjectsView";
import { viewActions } from "../state/slices/viewSlice";
import { HeadLayout } from "../layout";

const ProjectsPage = () => {
    const data = useSelector(x => x.data);
    const dispatch = useDispatch();

    return (
        <ProjectsView 
            projects={data.projects} 
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />
    )
}

export const Head = () => {
    const { t } = useTranslation();

    return <HeadLayout title={t("projects")} />
}

export default ProjectsPage;