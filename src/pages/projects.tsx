import React from "react";
import { useTranslation } from "react-i18next";
import ProjectsView from "../components/views/ProjectsView";
import { viewActions } from "../state/slices/viewSlice";
import { HeadLayout } from "../layout";
import { useAppDispatch, useAppSelector } from "../state/store";

const ProjectsPage = () => {
  const data = useAppSelector((x) => x.data);
  const dispatch = useAppDispatch();

  return (
    <ProjectsView
      projects={data.projects}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    />
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("projects")} />;
};

export default ProjectsPage;
