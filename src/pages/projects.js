
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectsView from "../components/views/ProjectsView";
import { viewActions } from "../state/slices/viewSlice";

const ProjectsPage = () => {

    const data = useSelector(x => x.data);
    const dispatch = useDispatch();

    return (
        <ProjectsView 
            projects={data.projects} 
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />
    )

}

export default ProjectsPage;