import React, { useState } from "react";
import BlockButton from "../BlockButton";
import { padStart } from "../../utils/stringUtils";
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation";
import ProjectModal from "../ProjectModal";
import { useTranslation } from "react-i18next";
import { Languages } from "../../models/languages";
import { ActiveProject, Project } from "../../types";

type ProjectsViewProps = {
  projects: Array<Project>;
  onComplete?: () => void;
};

const ProjectsView: React.FC<ProjectsViewProps> = ({
  projects = [],
  onComplete,
}) => {
  const speed = 250;
  const { i18n } = useTranslation();
  const [activeProject, setActiveProject] = useState<ActiveProject>(null);
  const [activeRowKey, setActiveRowKey] = useState<string | null>(null);

  const selectProject = React.useCallback(
    (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      nr: string,
      project: Project,
    ) => {
      const pos = (event.target as HTMLElement).getBoundingClientRect();
      setActiveRowKey(project?.key);
      setActiveProject({
        nr: nr,
        project: project,
        pos: pos,
      });
    },
    [],
  );

  const items = projects.map((project, index) => {
    const nr = padStart((index + 1).toString(), 2, "0");
    const name =
      i18n.language === Languages.Fi
        ? project.name.fi || project.name.en
        : project.name.en;

    return (
      <div className="project-item" key={index}>
        <div className="project-item-nr-mobile">{nr}</div>
        <div
          className="project-item-content"
          style={{ opacity: activeRowKey === project.key ? 0 : 1 }}
        >
          <HighlightedWordAnimation
            start={true}
            delay={(index * speed) / 1.5}
            speed={speed}
            onComplete={index === projects.length - 1 ? onComplete : undefined}
          >
            <BlockButton onClick={(event) => selectProject(event, nr, project)}>
              <span className="project-item-nr">{nr + " / "}</span>
              {name}
            </BlockButton>
          </HighlightedWordAnimation>
        </div>
      </div>
    );
  });

  return (
    <div className="projects">
      {items}
      <ProjectModal
        project={activeProject}
        beforeHide={() => setActiveRowKey(null)}
        afterHide={() => setActiveProject(null)}
      />
    </div>
  );
};

export default ProjectsView;
