import * as React from "react";
import HiddenImage from "../HiddenImage";
import WrittenTextAnimation, {
  WrittenTextAnimationProps,
  WrittenTextAnimationState,
} from "../animations/WrittenTextAnimation";
import HighlightAnimation from "../animations/HighlightAnimation";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useRef, useState } from "react";

type IndexViewProps = {
  name: string;
  images: Array<string>;
  initialPosition?: number;
  onComplete?: () => void;
};

const IndexPosition = {
  Hello: 0,
  MyNameIs: 10,
  Name: 20,
  Title: 30,
  Location: 40,
  Finish: 999,
};

const IndexView: React.FC<IndexViewProps> = ({
  name,
  images,
  initialPosition = IndexPosition.Hello,
  onComplete,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [imageVisible, setImageVisible] = useState(false);
  const nameContainer = useRef<HTMLSpanElement | null>(null);
  const { t } = useTranslation();

  const showImage = useCallback(() => setImageVisible(true), []);
  const hideImage = useCallback(() => setImageVisible(false), []);

  const finishAnimations = useCallback(() => {
    setPosition(IndexPosition.Finish);

    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    const currentName = nameContainer.current;

    // name animations
    currentName?.addEventListener("mouseenter", showImage);
    currentName?.addEventListener("mouseleave", hideImage);

    // skip animations on click
    if (position < IndexPosition.Finish) {
      document.addEventListener("click", finishAnimations);
    }

    return () => {
      currentName?.removeEventListener("mouseenter", showImage);
      currentName?.removeEventListener("mouseleave", hideImage);

      if (position < IndexPosition.Finish) {
        document.removeEventListener("click", finishAnimations);
      }
    };
  }, [showImage, hideImage, finishAnimations, position]);

  const nextPosition = React.useCallback(() => {
    if (position >= IndexPosition.Finish) {
      return;
    }

    const futurePositions = Object.values(IndexPosition).filter(
      (x) => x > position,
    );
    const nextPosition = Math.min(...futurePositions);
    setPosition(nextPosition ?? IndexPosition.Finish);
  }, [position]);

  const writtenText = React.useCallback(
    (animPosition: number, text: string, onEnd?: () => void) => {
      const txt = text + "\u00A0";
      const speed = 35;
      let state: WrittenTextAnimationProps["state"] =
        WrittenTextAnimationState.DisabledHidden;

      if (position === animPosition) {
        state = WrittenTextAnimationState.Enabled;
      }

      if (position > animPosition) {
        state = WrittenTextAnimationState.DisabledVisible;
      }

      return (
        <WrittenTextAnimation
          state={state}
          speed={speed}
          onEnd={onEnd || nextPosition}
          text={txt}
        />
      );
    },
    [nextPosition, position],
  );

  return (
    <div className="home">
      <div className="large-text noselect">
        <span className="break-lg home-line home-line-1">
          {writtenText(IndexPosition.Hello, t("hello"))}
          {writtenText(IndexPosition.MyNameIs, t("myNameIs"))}
          <HighlightAnimation
            start={position === IndexPosition.Name}
            visible={position > IndexPosition.Name}
            speed={400}
            onComplete={nextPosition}
          >
            <span className="name" ref={nameContainer}>
              {name}
            </span>
          </HighlightAnimation>
        </span>
        <span className="break-lg home-line home-line-2">
          {writtenText(IndexPosition.Title, t("imA"))}
          <span className="height-placeholder">&nbsp;</span>
        </span>
        <span className="break-lg home-line home-line-3">
          {writtenText(IndexPosition.Location, t("basedIn") + ".", onComplete)}
          <span className="height-placeholder">&nbsp;</span>
        </span>
      </div>
      <HiddenImage
        enabled={position > IndexPosition.Name}
        visible={imageVisible}
        images={images}
      />
    </div>
  );
};

export default IndexView;
