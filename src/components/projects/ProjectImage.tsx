import React, { useRef, useState } from "react";
import HighlightAnimation from "../animations/HighlightAnimation";
import { useElementVisible } from "../../utils/scroll";
import { useIsMobile } from "../../utils/window";

type ProjectImageProps = {
  src: string;
  alt?: string;
  enabled?: boolean;
};

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, enabled }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const start = useElementVisible(ref, {
    top: isMobile ? undefined : 0.35,
    bottom: isMobile ? undefined : 0.35,
  });

  return (
    <div className="project-image" ref={ref}>
      <HighlightAnimation
        start={enabled && (start || visible)}
        visible={visible}
        onComplete={() => setVisible(true)}
      >
        <img src={src} alt={alt} />
      </HighlightAnimation>
    </div>
  );
};

export default ProjectImage;
