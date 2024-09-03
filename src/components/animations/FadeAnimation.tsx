import React from "react";
import gsap, { Power2 } from "gsap";
import { useDidUpdateEffect } from "../../utils/reactUtils";

type FadeAnimationProps = React.PropsWithChildren<{
  speed?: number;
  visible?: boolean;
  before?: () => void;
  after?: () => void;
}>;

const FadeAnimation: React.FC<FadeAnimationProps> = ({
  speed = 400,
  visible = false,
  before,
  after,
  children,
}) => {
  const container = React.useRef<HTMLSpanElement>(null);
  const visibleByDefault = React.useRef(visible);

  useDidUpdateEffect(() => {
    if (before) {
      before();
    }

    const options = {
      duration: speed / 1000,
      opacity: visible ? 1 : 0,
      ease: Power2.easeInOut,
      onComplete: after,
    };

    const tween = gsap.to(container.current, options);

    return () => {
      tween.kill();
    };
  }, [visible]);

  return (
    <span
      ref={container}
      style={{ opacity: visibleByDefault.current ? 1 : 0 }}
      className="fade-animation-container"
    >
      {children}
    </span>
  );
};

export default FadeAnimation;
