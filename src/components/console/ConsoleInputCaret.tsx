import React from "react";

type ConsoleInputCaretProps = {
  enabled?: boolean;
  speed?: number;
};

const ConsoleInputCaret: React.FC<ConsoleInputCaretProps> = ({
  enabled = true,
  speed = 600,
}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (enabled) {
      const interval = setInterval(toggle, speed);
      return () => clearInterval(interval);
    }
  });

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div
      className={
        visible
          ? "console-input-caret console-input-caret-visible"
          : "console-input-caret"
      }
    ></div>
  );
};

export default ConsoleInputCaret;
