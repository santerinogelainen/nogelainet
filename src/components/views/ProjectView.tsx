import React, { useEffect } from "react";
import WrittenTextAnimation, {
  WrittenTextAnimationState,
} from "../animations/WrittenTextAnimation";
import FadeAnimation from "../animations/FadeAnimation";
import { useTranslation } from "react-i18next";
import ProjectTag from "../projects/ProjectTag";
import ProjectImages from "../projects/ProjectImages";

type ProjectViewProps = React.PropsWithChildren<{
  onComplete?: () => void;
  name?: string;
  employer?: string;
  tags?: string[];
  images?: string[];
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
  images,
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

    if (animationStep < ProjectViewAnimationStep.Finished) {
      document.addEventListener("click", onContentFinished);
      return () => document.removeEventListener("click", onContentFinished);
    }
  }, [animationStep, onComplete]);

  return (
    <div className="project">
      <h1 className="project-title">
        <WrittenTextAnimation
          state={
            animationStep > ProjectViewAnimationStep.Title
              ? WrittenTextAnimationState.DisabledVisible
              : WrittenTextAnimationState.Enabled
          }
          text={name ? t(name) + " @ " + employer : "-"}
          onEnd={onTitleFinished}
        />
      </h1>
      <div className="project-tags">
        {tags?.map((x, i) => {
          return (
            <ProjectTag
              key={x}
              text={x}
              start={animationStep >= ProjectViewAnimationStep.TagsAndContent}
            />
          );
        })}
      </div>
      <div className="project-content">
        <FadeAnimation
          visible={animationStep >= ProjectViewAnimationStep.TagsAndContent}
          after={onContentFinished}
        >
          {children}
          {!!images && images.length && (
            <ProjectImages
              visible={animationStep >= ProjectViewAnimationStep.TagsAndContent}
              images={images}
            />
          )}
        </FadeAnimation>
      </div>
    </div>
  );
};

export default ProjectView;
