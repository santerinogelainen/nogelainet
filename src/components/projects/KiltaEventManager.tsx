import React from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
import Language from "../Language";

const KiltaEventManager: React.FC<ProjectItemProps> = (props) => {
  return (
    <>
      <Language lang="en">
        <ProjectItem
          {...props}
          name="Event manager"
          href="/projects/eventmanager"
        />
      </Language>

      <Language lang="fi">
        <ProjectItem
          {...props}
          name="Tapahtumahallinta"
          href="/projects/eventmanager"
        />
      </Language>
    </>
  );
};

export default KiltaEventManager;
