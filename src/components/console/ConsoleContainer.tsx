import React from "react";
import ConsoleInput from "./ConsoleInput";
import ConsoleMenu from "./ConsoleMenu";
import ConsoleMenuMobile from "./ConsoleMenuMobile";
import { useDidMountEffect } from "../../utils/reactUtils";
import { loadTheme } from "../../state/slices/themeSlice";
import store from "../../state/store";
import { loadLanguage } from "../../i18n";
import { CommandName } from "../../commands/commands";

type ConsoleContainerProps = React.PropsWithChildren<{
  visible: boolean;
  activePage?: CommandName;
  activeTheme?: CommandName;
  onCommand?: (command: CommandName | null) => void;
}>;

export const ConsoleContainer: React.FC<ConsoleContainerProps> = ({
  visible,
  activePage = "home",
  activeTheme = "dark",
  onCommand,
  children,
}) => {
  const content = React.useRef(null);
  const [inputVisible, setInputVisible] = React.useState(visible);
  const [menuVisible, setMenuVisible] = React.useState(visible);

  useDidMountEffect(() => {
    loadLanguage();

    store.dispatch(loadTheme);
  }, []);

  React.useEffect(() => {
    setInputVisible(visible);
    setMenuVisible(visible);
  }, [visible]);

  const menuItems: Array<CommandName> = [
    "about",
    "contact",
    activeTheme === "dark" ? "light" : "dark",
    "home",
  ];

  return (
    <div className="console-view">
      <div className="console-view-content" ref={content}>
        {children}
      </div>
      <div className="console-view-controls">
        <ConsoleInput visible={inputVisible} onCommand={onCommand} />
        <ConsoleMenu
          activeItem={activePage}
          items={menuItems}
          visible={menuVisible}
          onCommand={onCommand}
        />
        <ConsoleMenuMobile
          activeItem={activePage}
          items={menuItems}
          visible={menuVisible}
          onCommand={onCommand}
        />
      </div>
    </div>
  );
};

export default ConsoleContainer;
