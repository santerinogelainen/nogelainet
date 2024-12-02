import React from "react";
import HighlightAnimation from "../animations/HighlightAnimation";
import { useTranslation } from "react-i18next";
import ConsoleMenuItem from "./ConsoleMenuItem";
import { CommandName } from "../../commands/commands";

type ConsoleMenuProps = {
  visible: boolean;
  items?: Array<CommandName>;
  activeItem?: CommandName;
  onCommand?: (command: CommandName) => void;
};

const ConsoleMenu: React.FC<ConsoleMenuProps> = ({
  visible = false,
  items = [],
  activeItem = "home",
  onCommand,
}) => {
  const speed = 200;
  const { t } = useTranslation();

  const runCommand = (command: CommandName) => {
    if (onCommand) {
      onCommand(command);
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
          <HighlightAnimation
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
