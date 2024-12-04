import React from "react";
import ProjectItem from "../projects/ProjectItem";
import { useTranslation } from "react-i18next";

type ProjectsViewProps = {
  onComplete?: () => void;
};

type Project = {
  name: string;
  href: string;
};

const projects: Project[] = [
  { name: "project.ytj", href: "/projects/ytj" },
  { name: "project.kiltaunions", href: "/projects/kiltaunions" },
  { name: "project.ktvuecomponents", href: "/projects/ktvuecomponents" },
  { name: "project.ktsms", href: "/projects/ktsms" },
  { name: "project.samivaan", href: "/projects/samivaan" },
  { name: "project.nogelainet", href: "/projects/nogelainet" },
  { name: "project.fundraising", href: "/projects/fundraising" },
  { name: "project.eventmanager", href: "/projects/eventmanager" },
  { name: "project.mycats", href: "/projects/mycats" },
];

const ProjectsView: React.FC<ProjectsViewProps> = ({ onComplete }) => {
  const { t } = useTranslation();

  const items = projects.map((project, index) => {
    const isLast = index === projects.length - 1;
    return (
      <ProjectItem
        index={index}
        key={project.name}
        name={t(project.name)}
        href={project.href}
        onComplete={isLast ? onComplete : undefined}
      />
    );
  });

  return <div className="projects">{items}</div>;
};

export default ProjectsView;
