import React from "react";
import { Anchor } from "../models/anchor";
import MouseFollowingContainer from "./animations/MouseFollowingContainer";
import FadeAnimation from "./animations/FadeAnimation";
import { useTimeoutState } from "../utils/reactUtils";

const HiddenContainer = ({
  visible = false,
  enabled = true,
  rotate = false,
  anchor = Anchor.Center,
  onHide = null,
  onShow = null,
  speed = 400,
  zIndex = -1,
  ...props
}) => {
  const [following, setFollowing] = React.useState(visible);
  const {set, clear} = useTimeoutState();

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
        {props.children}
      </FadeAnimation>
    </MouseFollowingContainer>
  );
};

export default HiddenContainer;
