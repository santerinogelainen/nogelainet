import React from "react";
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation";

type ConsoleMenuItemProps = {
  visible: boolean;
  delay?: number;
  speed?: number;
  name?: string;
  command?: string;
  active?: boolean;
  onClick?: (command: string, event: any) => void;
};

const ConsoleMenuItem: React.FC<ConsoleMenuItemProps> = ({
  visible = false,
  delay = 0,
  speed = 250,
  name = "",
  command = "",
  active = false,
  onClick,
}) => {
  let className = "console-menu-item noselect";

  if (active) className += " console-menu-item-active";

  return (
    <div className={className} onClick={(e) => onClick?.(command, e)}>
      <HighlightedWordAnimation
        word={name}
        start={visible}
        delay={delay}
        speed={speed}
      />
    </div>
  );
};

export default ConsoleMenuItem;
