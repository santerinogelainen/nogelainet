import React from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
import Language from "../Language";

const KiltaCardRegistry: React.FC<ProjectItemProps> = (props) => {
  return (
    <>
      <Language lang="en">
        <ProjectItem
          {...props}
          name="Card registry"
          href="/projects/cardregistry"
        />
      </Language>

      <Language lang="fi">
        <ProjectItem
          {...props}
          name="Korttirekisteri"
          href="/projects/cardregistry"
        />
      </Language>
    </>
  );
};

export default KiltaCardRegistry;
