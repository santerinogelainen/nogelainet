import React from "react";
import { Anchor } from "../models/anchor";
import MouseFollowingContainer from "./animations/MouseFollowingContainer";
import FadeAnimation from "./animations/FadeAnimation";
import { useTimeoutState } from "../utils/reactUtils";

type HiddenContainerProps = React.PropsWithChildren<{
  visible?: boolean;
  enabled?: boolean;
  rotate?: boolean;
  anchor?: string;
  onHide?: () => void;
  onShow?: () => void;
  speed?: number;
  zIndex?: number;
}>;

const HiddenContainer: React.FC<HiddenContainerProps> = ({
  visible = false,
  enabled = true,
  rotate = false,
  anchor = Anchor.Center,
  onHide = null,
  onShow = null,
  speed = 400,
  zIndex = -1,
  children,
}) => {
  const [following, setFollowing] = React.useState(visible);
  const { set, clear } = useTimeoutState();

  const start = React.useCallback(() => {
    clear();
    if (visible) {
      if (onShow) {
        onShow();
      }

      setFollowing(true);
    }
  }, [visible, onShow, clear]);

  const stop = React.useCallback(() => {
    if (!visible) {
      if (onHide) {
        onHide();
      }

      set(() => {
        setFollowing(false);
      }, speed);
    }
  }, [visible, onHide, set, speed]);

  return (
    <MouseFollowingContainer
      enabled={enabled && following}
      rotate={rotate}
      anchor={anchor}
      zIndex={zIndex}
    >
      <FadeAnimation
        visible={enabled && visible}
        speed={speed}
        before={start}
        after={stop}
      >
        {children}
      </FadeAnimation>
    </MouseFollowingContainer>
  );
};

export default HiddenContainer;
