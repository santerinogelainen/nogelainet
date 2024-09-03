import React from "react";
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation";
import { useTranslation } from "react-i18next";
import { Commands } from "../../models/commands";
import ConsoleMenuItem from "./ConsoleMenuItem";

type ConsoleMenuProps = {
  visible: boolean;
  items?: Array<string>;
  activeItem?: string;
  onCommand?: (command: string, event: any) => void;
};

const ConsoleMenu: React.FC<ConsoleMenuProps> = ({
  visible = false,
  items = [],
  activeItem = Commands.Home,
  onCommand,
}) => {
  const speed = 200;
  const { t } = useTranslation();

  const runCommand = (command, event) => {
    if (onCommand) {
      onCommand(command, event);
    }
  };

  const menuItems = items.map((item, index) => {
    return (
      <ConsoleMenuItem
        key={index}
        visible={visible}
        delay={(index + 1) * speed}
        name={t(item).toLowerCase()}
        speed={speed}
        active={item === activeItem}
        command={item}
        onClick={runCommand}
      />
    );
  });

  return (
    <div className="console-menu-wrapper">
      <div className="console-menu">
        <div className="console-menu-help">
          <HighlightedWordAnimation
            word={t("tryTyping") + ":"}
            start={visible}
            speed={speed}
          />
        </div>
        {menuItems}
      </div>
    </div>
  );
};

export default ConsoleMenu;
