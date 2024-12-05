import React from "react";
import ProjectItem from "../projects/ProjectItem";
import { Pages } from "../../models/pages";
import { useTranslation } from "react-i18next";

type ProjectsViewProps = {
  onComplete?: () => void;
};

type Project = {
  name: string;
  href: string;
};

const projects: Project[] = [
  { name: "project.ytj", href: Pages.Projects.YTJ },
  { name: "project.kiltaunions", href: Pages.Projects.KiltaUnions },
  { name: "project.ktvuecomponents", href: Pages.Projects.KTVueComponents },
  { name: "project.ktsms", href: Pages.Projects.KTSms },
  { name: "project.samivaan", href: Pages.Projects.Samivaan },
  { name: "project.fundraising", href: Pages.Projects.FundRaising },
  { name: "project.eventmanager", href: Pages.Projects.EventManager },
  { name: "project.cardregistry", href: Pages.Projects.CardRegistry },
  { name: "project.mycats", href: Pages.Projects.MyCats },
  { name: "project.nogelainet", href: Pages.Projects.Nogelainet },
];

const ProjectsView: React.FC<ProjectsViewProps> = ({ onComplete }) => {
  const { t } = useTranslation();

  const items = projects.map((project, index) => {
    const isLast =
      projects.length >= 5 ? index === 3 : index === projects.length - 1;
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
