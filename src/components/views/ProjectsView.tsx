import React from "react";
import KiltaFundRaising from "../projects/KiltaFundRaising";
import KiltaCardRegistry from "../projects/KiltaCardRegistry";
import KiltaEventManager from "../projects/KiltaEventManager";
import MyCats from "../projects/MyCats";

type ProjectsViewProps = {
  onComplete?: () => void;
};

const ProjectsView: React.FC<ProjectsViewProps> = ({ onComplete }) => {
  const projects = [
    KiltaFundRaising,
    KiltaEventManager,
    KiltaCardRegistry,
    MyCats,
  ];

  const items = projects.map((Project, index) => {
    const isLast = index === projects.length - 1;
    return (
      <Project index={index} onComplete={isLast ? onComplete : undefined} />
    );
  });

  return <div className="projects">{items}</div>;
};

export default ProjectsView;
