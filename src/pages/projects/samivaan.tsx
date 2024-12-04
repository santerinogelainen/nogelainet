import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.samivaan")} />;
};

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      name="project.samivaan"
      employer="Freelance"
      tags={[
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Azure Static Web Apps",
      ]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en"></Language>
      <Language lang="fi"></Language>
    </ProjectView>
  );
};

export default Page;
