
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import ProjectsView from "../components/views/ProjectsView";
import { viewActions } from "../state/slices/viewSlice";
import { useTitle } from "../utils/reactUtils";

const ProjectsPage = () => {

    const data = useSelector(x => x.data);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useTitle(t("projects"));

    return (
        <ProjectsView 
            projects={data.projects} 
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />
    )

}

export default ProjectsPage;