import React from "react";
import { useDidUpdateEffect } from "../../utils/reactUtils";
import WrittenTextAnimation, {
  useWrittenTextAnimationState,
  WrittenTextAnimationState,
} from "../animations/WrittenTextAnimation";

type ConsoleInputPlaceholderProps = {
  enabled?: boolean;
  delay?: number;
  helpTexts?: Array<string>;
  onComplete?: (index: number, text: string) => void;
};

const getInitialState = (enabled) =>
  enabled
    ? WrittenTextAnimationState.Enabled
    : WrittenTextAnimationState.DisabledHidden;

const ConsoleInputPlaceholder: React.FC<ConsoleInputPlaceholderProps> = ({
  enabled = true,
  delay = 6000,
  helpTexts = [],
  onComplete,
}) => {
  const [index, setIndex] = React.useState(0);
  const { state, enable, disable, setState } = useWrittenTextAnimationState(
    getInitialState(enabled),
  );

  useDidUpdateEffect(() => setIndex(0), [helpTexts]);

  useDidUpdateEffect(() => {
    setState(getInitialState(enabled));
  }, [enabled]);

  useDidUpdateEffect(() => {
    if (state !== WrittenTextAnimationState.DisabledVisible) {
      return;
    }
    const timeout = setTimeout(() => {
      let newIndex = index + 1;

      if (newIndex === helpTexts.length) {
        newIndex = 0;
      }

      setIndex(newIndex);
      enable();
    }, delay);
    return () => clearTimeout(timeout);
  }, [state, index, delay, helpTexts]);

  const getHelpText = React.useCallback(
    (i) => {
      return helpTexts[i] ?? "";
    },
    [helpTexts],
  );

  const endHandler = React.useCallback(() => {
    if (onComplete) {
      onComplete(index, getHelpText(index));
    }
    return disable(true);
  }, [onComplete, index, getHelpText, disable]);

  return (
    <div className="console-input-placeholder large-text noselect">
      <WrittenTextAnimation
        state={state}
        text={getHelpText(index)}
        onEnd={endHandler}
      />
    </div>
  );
};

export default ConsoleInputPlaceholder;
