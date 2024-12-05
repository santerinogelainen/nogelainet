import React from "react";
import HighlightAnimation from "../animations/HighlightAnimation";

type ProjectTagProps = {
  text: string;
  start: boolean;
  visible?: boolean;
  onComplete?: () => void;
};

const ProjectTag: React.FC<ProjectTagProps> = ({
  text,
  start,
  visible,
  onComplete,
}) => {
  return (
    <HighlightAnimation start={start} visible={visible} onComplete={onComplete}>
      <div className="project-tag">{text}</div>
    </HighlightAnimation>
  );
};

export default ProjectTag;
