import React from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
import Language from "../Language";

const MyCats: React.FC<ProjectItemProps> = (props) => {
  return (
    <>
      <Language lang="en">
        <ProjectItem {...props} name="MyCats" href="/projects/mycats" />
      </Language>

      <Language lang="fi">
        <ProjectItem {...props} name="MyCats" href="/projects/mycats" />
      </Language>
    </>
  );
};

export default MyCats;
