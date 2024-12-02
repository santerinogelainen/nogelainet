import React from "react";
import HighlightAnimation from "../animations/HighlightAnimation";

type ProjectImageProps = {
  src: string;
};

const ProjectImage: React.FC<ProjectImageProps> = ({ src }) => {
  return (
    <HighlightAnimation>
      <img src={src} />
    </HighlightAnimation>
  );
};

export default ProjectImage;
