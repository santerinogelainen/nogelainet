import React from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
import Language from "../Language";

const KiltaFundRaising: React.FC<ProjectItemProps> = (props) => {
  return (
    <>
      <Language lang="en">
        <ProjectItem
          {...props}
          name="Fund raising module"
          href="/projects/fundraising"
        />
      </Language>

      <Language lang="fi">
        <ProjectItem
          {...props}
          name="Varainhankinta"
          href="/projects/fundraising"
        />
      </Language>
    </>
  );
};

export default KiltaFundRaising;
