import React, { useRef } from "react";
import HighlightAnimation from "../animations/HighlightAnimation";
import { useElementVisible } from "../../utils/scroll";
import { useIsMobile } from "../../utils/window";

type ProjectImageProps = {
  src: string;
  alt?: string;
};

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const visible = useElementVisible(ref, {
    top: isMobile ? undefined : 0.2,
    bottom: isMobile ? undefined : 0.2,
  });
  return (
    <div className="project-image" ref={ref}>
      <HighlightAnimation start={visible}>
        <img src={src} alt={alt} />
      </HighlightAnimation>
    </div>
  );
};

export default ProjectImage;
