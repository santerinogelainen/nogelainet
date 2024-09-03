import React, { useEffect } from "react";
import { Direction } from "../../models/direction";
import gsap, { Power3 } from "gsap";
import { useDidUpdateEffect } from "../../utils/reactUtils";

type SlideAnimationProps = React.PropsWithChildren<{
  open?: boolean;
  speed?: number;
  from?: string;
  to?: string;
  before?: () => void;
  after?: () => void;
}>;

const insetOpen = "inset(0% 0% 0% 0%)";
const getInset = (direction) => {
  switch (direction) {
    case Direction.Top:
      return "inset(0% 0% 100% 0%)";

    case Direction.Left:
      return "inset(0% 100% 0% 0%)";

    case Direction.Bottom:
      return "inset(100% 0% 0% 0%)";

    case Direction.Right:
    default:
      return "inset(0% 0% 0% 100%)";
  }
};

const SlideAnimation: React.FC<SlideAnimationProps> = ({
  open = false,
  speed = 400,
  from = Direction.Left,
  to = Direction.Right,
  before,
  after,
  children,
}) => {
  const bg = React.useRef<HTMLSpanElement>(null);
  const container = React.useRef<HTMLSpanElement>(null);
  const openByDefault = React.useRef(open);
  const beforeRef = React.useRef(before);
  const afterRef = React.useRef(after);
  const timeline = React.useRef(gsap.timeline({ delay: 0 }));

  useEffect(() => {
    afterRef.current = after;
  }, [after]);
  useEffect(() => {
    beforeRef.current = before;
  }, [before]);

  useDidUpdateEffect(() => {
    if (bg.current) {
      beforeRef.current?.();
      const options = {
        duration: speed / 1000,
        ease: Power3.easeInOut,
        clipPath: open ? insetOpen : getInset(to),
        onComplete: () => {
          if (!open && !timeline.current?.isActive()) {
            timeline.current.clear();
          }
          afterRef.current?.();
        },
      };
      if (open && timeline.current?.isActive()) {
        timeline.current.clear();
        timeline.current.to(bg.current, options);
      } else {
        timeline.current.fromTo(
          bg.current,
          { clipPath: open ? getInset(from) : insetOpen },
          options,
        );
      }
    }
  }, [open, speed, from, to]);

  return (
    <span ref={container} className="slide-animation-container">
      <span
        ref={bg}
        className="slide-animation-bg"
        style={{
          zIndex: 1,
          clipPath: openByDefault.current ? insetOpen : getInset(from),
        }}
      >
        {children}
      </span>
      <span className="slide-animation-content" style={{ zIndex: 0 }}>
        {children}
      </span>
    </span>
  );
};

export default SlideAnimation;
