import React, { useState } from "react";
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation";
import BlockButton from "../BlockButton";
import { padStart } from "../../utils/stringUtils";
import ProjectItemModal from "./ProjectItemModal";
import { Localized } from "../../types";
import { useTranslation } from "react-i18next";
import { Languages } from "../../models/languages";

export type ProjectItemProps = {
  index: number;
  onComplete?: () => void;
};

type InternalProjectItemProps = React.PropsWithChildren<
  {
    name: string;
    employer: string;
  } & ProjectItemProps
>;

const ProjectItem: React.FC<InternalProjectItemProps> = ({
  index,
  name,
  employer,
  children,
  onComplete,
}) => {
  const speed = 250;
  const nr = padStart((index + 1).toString(), 2, "0");
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <div className="project-item">
        <div className="project-item-nr-mobile">{nr}</div>
        <div
          className="project-item-content"
          style={{ opacity: active ? 0 : 1 }}
        >
          <HighlightedWordAnimation
            start={true}
            delay={(index * speed) / 1.5}
            speed={speed}
            onComplete={onComplete}
          >
            <BlockButton onClick={() => setActive(true)}>
              <span className="project-item-nr">{nr + " / "}</span>
              {name}
            </BlockButton>
          </HighlightedWordAnimation>
        </div>
      </div>
      <ProjectItemModal
        name={name}
        employer={employer}
        visible={active}
        onHide={() => setActive(false)}
      >
        {children}
      </ProjectItemModal>
    </>
  );
};

export default ProjectItem;
