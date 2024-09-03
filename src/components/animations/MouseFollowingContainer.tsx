import React from "react";
import { Position } from "../../models/position";
import gsap, { Back } from "gsap";
import { Anchor } from "../../models/anchor";
import { useCallbackRef } from "../../utils/reactUtils";
import { useQuickTo } from "../../utils/animationUtils";

type MouseFollowingContainerProps = React.PropsWithChildren<{
  enabled?: boolean;
  rotate?: boolean;
  anchor?: string;
  zIndex?: number;
  duration?: number;
}>;

const MouseFollowingContainer: React.FC<MouseFollowingContainerProps> = ({
  enabled = true,
  rotate = false,
  anchor = Anchor.Center,
  zIndex = 0,
  duration = 0.5,
  children,
}) => {
  const tweenVars = {
    duration,
    ease: Back.easeOut.config(1.25),
  };
  const { initialize, quickTo } = useQuickTo({
    left: tweenVars,
    top: tweenVars,
    rotationX: tweenVars,
    rotationY: tweenVars,
  });
  const ref = useCallbackRef(initialize);

  const getPosition = React.useCallback(
    (e) => {
      const pos = new Position(e.x, e.y);

      if (!ref.current) {
        return pos;
      }

      switch (anchor) {
        case Anchor.TopRight:
          pos.x -= ref.current.offsetWidth;
          break;

        case Anchor.BottomLeft:
          pos.y -= ref.current.offsetHeight;
          break;

        case Anchor.BottomRight:
          pos.x -= ref.current.offsetWidth;
          pos.y -= ref.current.offsetHeight;
          break;

        default:
        case Anchor.Center:
          pos.x -= ref.current.offsetWidth / 2;
          pos.y -= ref.current.offsetHeight / 2;
          break;
      }

      return pos;
    },
    [anchor],
  );

  const getRotation = React.useCallback(
    (pos) => {
      const rot = new Position();

      if (!rotate) {
        return rot;
      }

      rot.x =
        ((pos.y - ref.current?.offsetTop) / (ref.current?.offsetWidth ?? 1)) *
        100;
      rot.y =
        ((pos.x - ref.current?.offsetLeft) / (ref.current?.offsetHeight ?? 1)) *
        100;

      if (rot.x < 0) {
        rot.y = -rot.y;
      }

      return rot;
    },
    [rotate],
  );

  React.useEffect(() => {
    if (!enabled) {
      return;
    }
    let initialized = false;
    const move = (e) => {
      if (!ref.current) {
        return;
      }
      if (initialized) {
        const pos = getPosition(e);
        const rot = getRotation(pos);
        quickTo({
          top: pos.y,
          left: pos.x,
          rotationX: rot.x,
          rotationY: rot.y,
        });
      } else {
        const pos = getPosition(e);
        const rot = getRotation(pos);
        gsap.set(ref.current, {
          top: pos.y,
          left: pos.x,
          rotateX: rot.x,
          rotateY: rot.y,
          onComplete: () => {
            initialized = true;
          },
        });
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [quickTo, ref, enabled, getRotation, getPosition]);

  return (
    <div
      ref={ref}
      className="mouse-following-container"
      style={{
        zIndex: zIndex,
      }}
    >
      {children}
    </div>
  );
};

export default MouseFollowingContainer;
