import React, { useEffect } from "react";
import WrittenTextAnimation from "../animations/WrittenTextAnimation";
import FadeAnimation from "../animations/FadeAnimation";
import { useTranslation } from "react-i18next";

type ProjectViewProps = React.PropsWithChildren<{
  onComplete?: () => void;
  name?: string;
  employer?: string;
}>;

const ProjectView: React.FC<ProjectViewProps> = ({
  name,
  employer,
  onComplete,
  children,
}) => {
  const [finished, setFinished] = React.useState(false);
  const onFinished = React.useCallback(() => setFinished(true), []);
  const { t } = useTranslation();

  useEffect(() => {
    if (finished) {
      onComplete?.();
    }
  }, [finished, onComplete]);

  return (
    <div className="project">
      <h1 className="project-title">
        <WrittenTextAnimation
          text={name ? t(name) + " @ " + employer : "-"}
          onEnd={onFinished}
        />
      </h1>
      <FadeAnimation visible={finished}>{children}</FadeAnimation>
    </div>
  );
};

export default ProjectView;
