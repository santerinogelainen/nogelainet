import React, { useRef } from "react";
import HighlightAnimation from "../animations/HighlightAnimation";
import { useElementVisible } from "../../utils/scroll";
import { useIsMobile } from "../../utils/window";

type ProjectImageProps = {
  src: string;
};

const ProjectImage: React.FC<ProjectImageProps> = ({ src }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const visible = useElementVisible(ref, {
    top: isMobile ? undefined : 0.2,
    bottom: isMobile ? undefined : 0.2,
  });
  return (
    <div className="project-image" ref={ref}>
      <HighlightAnimation start={visible}>
        <img src={src} />
      </HighlightAnimation>
    </div>
  );
};

export default ProjectImage;
