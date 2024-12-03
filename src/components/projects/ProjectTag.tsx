import React from "react";
import HighlightAnimation from "../animations/HighlightAnimation";

type ProjectTagProps = {
  index: number;
  text: string;
  start: boolean;
  visible?: boolean;
  onComplete?: () => void;
};

const speed = 200;

const ProjectTag: React.FC<ProjectTagProps> = ({
  index,
  text,
  start,
  visible,
  onComplete,
}) => {
  return (
    <HighlightAnimation
      delay={index * speed}
      speed={speed}
      start={start}
      visible={visible}
      onComplete={onComplete}
    >
      <div className="project-tag">{text}</div>
    </HighlightAnimation>
  );
};

export default ProjectTag;
