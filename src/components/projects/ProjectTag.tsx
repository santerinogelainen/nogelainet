import React from "react";
import HighlightAnimation from "../animations/HighlightAnimation";

type ProjectTagProps = {
  index: number;
  text: string;
  start: boolean;
  onComplete?: () => void;
};

const ProjectTag: React.FC<ProjectTagProps> = ({
  index,
  text,
  start,
  onComplete,
}) => {
  return (
    <HighlightAnimation
      delay={index * 200}
      speed={400}
      start={start}
      onComplete={onComplete}
    >
      <div className="project-tag">{text}</div>
    </HighlightAnimation>
  );
};

export default ProjectTag;
