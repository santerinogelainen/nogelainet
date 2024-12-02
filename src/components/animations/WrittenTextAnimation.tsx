import React from "react";
import { useDidUpdateEffect } from "../../utils/reactUtils";

export const WrittenTextAnimationState = {
  Enabled: "enabled",
  DisabledHidden: "disabled-hidden",
  DisabledVisible: "disabled-visible",
} as const;

export type WrittenTextAnimationProps = {
  state?: (typeof WrittenTextAnimationState)[keyof typeof WrittenTextAnimationState];
  loop?: boolean;
  speed?: number;
  text?: string;
  onEnd?: () => void;
};

const createState = (visible, hidden) => ({
  visible,
  hidden,
});

const getInitialState = (state, text) => {
  const states = {
    [WrittenTextAnimationState.Enabled]: createState("", text),
    [WrittenTextAnimationState.DisabledHidden]: createState("", text),
    [WrittenTextAnimationState.DisabledVisible]: createState(text, ""),
  };
  return states[state];
};

export const useWrittenTextAnimationState = (initialState) => {
  const [state, setState] = React.useState(initialState);
  const enable = React.useCallback(() => {
    setState(WrittenTextAnimationState.Enabled);
  }, []);
  const disable = React.useCallback((visible = false) => {
    if (visible) {
      setState(WrittenTextAnimationState.DisabledVisible);
    } else {
      setState(WrittenTextAnimationState.DisabledHidden);
    }
  }, []);
  return {
    state,
    enable,
    disable,
    setState,
  };
};

const WrittenTextAnimation: React.FC<WrittenTextAnimationProps> = ({
  state = WrittenTextAnimationState.Enabled,
  loop = false,
  speed = 30,
  text = "",
  onEnd,
}) => {
  const [{ visible, hidden }, setState] = React.useState(
    getInitialState(state, text),
  );

  useDidUpdateEffect(
    () => setState(getInitialState(state, text)),
    [state, text],
  );

  React.useEffect(() => {
    if (state !== WrittenTextAnimationState.Enabled) {
      return;
    }

    const finished = visible === text;

    if (finished) {
      if (loop) {
        setState({
          visible: "",
          hidden: text,
        });
      }
      return;
    }

    const timeout = setTimeout(() => {
      const newText = visible + hidden.substring(0, 1);

      if (newText === text && onEnd) {
        onEnd();
      }

      setState({
        visible: newText,
        hidden: hidden.substring(1),
      });
    }, speed);

    return () => clearTimeout(timeout);
  }, [visible, hidden, state, speed, text, onEnd, loop]);

  return (
    <span className="written-text-container">
      <span className="written-text-visible">{visible}</span>
      <span className="written-text-hidden noselect">{hidden}</span>
    </span>
  );
};

export default WrittenTextAnimation;
