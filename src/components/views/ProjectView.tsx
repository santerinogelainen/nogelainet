import React, { useEffect } from "react";
import WrittenTextAnimation from "../animations/WrittenTextAnimation";
import FadeAnimation from "../animations/FadeAnimation";
import { useTranslation } from "react-i18next";
import ProjectTag from "../projects/ProjectTag";

type ProjectViewProps = React.PropsWithChildren<{
  onComplete?: () => void;
  name?: string;
  employer?: string;
  tags?: string[];
}>;

enum ProjectViewAnimationStep {
  Title = 0,
  TagsAndContent = 10,
  Finished = 100,
}

const ProjectView: React.FC<ProjectViewProps> = ({
  name,
  employer,
  tags,
  onComplete,
  children,
}) => {
  const [animationStep, setAnimationStep] = React.useState(
    ProjectViewAnimationStep.Title,
  );
  const onTitleFinished = React.useCallback(
    () => setAnimationStep(ProjectViewAnimationStep.TagsAndContent),
    [],
  );
  const onContentFinished = React.useCallback(
    () => setAnimationStep(ProjectViewAnimationStep.Finished),
    [],
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (animationStep === ProjectViewAnimationStep.Finished) {
      onComplete?.();
    }
  }, [animationStep, onComplete]);

  return (
    <div className="project">
      <h1 className="project-title">
        <WrittenTextAnimation
          text={name ? t(name) + " @ " + employer : "-"}
          onEnd={onTitleFinished}
        />
      </h1>
      <div className="project-tags">
        {tags?.map((x, i) => {
          const start =
            animationStep >= ProjectViewAnimationStep.TagsAndContent;
          return <ProjectTag text={x} index={i} start={start} />;
        })}
      </div>
      <FadeAnimation
        visible={animationStep >= ProjectViewAnimationStep.TagsAndContent}
        after={onContentFinished}
      >
        {children}
      </FadeAnimation>
    </div>
  );
};

export default ProjectView;
