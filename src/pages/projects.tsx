import React from "react";
import { useTranslation } from "react-i18next";
import ProjectsView from "../components/views/ProjectsView";
import { viewActions } from "../state/slices/viewSlice";
import { HeadLayout } from "../layout";
import { useAppDispatch } from "../state/store";

const ProjectsPage = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectsView
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    />
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("projects")} />;
};

export default ProjectsPage;
