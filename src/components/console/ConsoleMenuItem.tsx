import React from "react";
import HighlightAnimation from "../animations/HighlightAnimation";
import { CommandName } from "../../commands/commands";

type ConsoleMenuItemProps = {
  visible: boolean;
  delay?: number;
  speed?: number;
  name?: string;
  active?: boolean;
  command: CommandName;
  onClick?: (command: CommandName) => void;
};

const ConsoleMenuItem: React.FC<ConsoleMenuItemProps> = ({
  visible = false,
  delay = 0,
  speed = 250,
  name = "",
  command,
  active = false,
  onClick,
}) => {
  let className = "console-menu-item noselect";

  if (active) className += " console-menu-item-active";

  return (
    <div className={className} onClick={(e) => onClick?.(command)}>
      <HighlightAnimation
        word={name}
        start={visible}
        delay={delay}
        speed={speed}
      />
    </div>
  );
};

export default ConsoleMenuItem;
