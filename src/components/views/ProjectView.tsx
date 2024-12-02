import React from "react";
import { useDidMountEffect } from "../../utils/reactUtils";

type ProjectViewProps = React.PropsWithChildren<{
  onComplete?: () => void;
}>;

const ProjectView: React.FC<ProjectViewProps> = ({ onComplete, children }) => {
  useDidMountEffect(() => {
    onComplete?.();
  }, []);

  return <div className="project">{children}</div>;
};

export default ProjectView;
