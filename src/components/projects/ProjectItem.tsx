import React, { useState } from "react";
import HighlightAnimation from "../animations/HighlightAnimation";
import BlockButton from "../BlockButton";
import { padStart } from "../../utils/stringUtils";

export type ProjectItemProps = {
  index: number;
  onComplete?: () => void;
};

type InternalProjectItemProps = React.PropsWithChildren<
  {
    name: string;
    href: string;
  } & ProjectItemProps
>;

const ProjectItem: React.FC<InternalProjectItemProps> = ({
  index,
  name,
  href,
  onComplete,
}) => {
  const speed = 250;
  const nr = padStart((index + 1).toString(), 2, "0");

  return (
    <>
      <div className="project-item">
        <div className="project-item-nr-mobile">{nr}</div>
        <div className="project-item-content">
          <HighlightAnimation
            start={true}
            delay={(index * speed) / 1.5}
            speed={speed}
            onComplete={onComplete}
          >
            <BlockButton href={href}>
              <span className="project-item-nr">{nr + " / "}</span>
              {name}
            </BlockButton>
          </HighlightAnimation>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
