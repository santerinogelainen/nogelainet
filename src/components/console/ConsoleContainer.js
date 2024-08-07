import React from "react";
import ConsoleInput from "./ConsoleInput";
import ConsoleMenu from "./ConsoleMenu";
import ConsoleMenuMobile from "./ConsoleMenuMobile";
import { Commands } from "../../models/commands";
import { Themes } from "../../models/themes";
import { useDidMountEffect } from "../../utils/reactUtils";
import { loadTheme } from "../../state/slices/themeSlice";
import store from "../../state/store";
import Loader from "../Loader";
import { useTranslation } from "react-i18next";
import { loadLanguage } from "../../i18n";

export const ConsoleContainer = ({
  visible = false,
  activePage = Commands.Home,
  activeTheme = Themes.Dark,
  commands = {},
  onCommand = null,
  ...props
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

  const menuItems = [
    Commands.Projects,
    Commands.About,
    Commands.Contact,
    activeTheme === Themes.Dark ? Commands.Light : Commands.Dark,
    Commands.Home,
  ];

  const menuOnCommand = React.useCallback((command) => {
    onCommand(commands[command]);
  }, [onCommand, commands]);

  return (
    <div className="console-view">
      <div className="console-view-content" ref={content}>
        {props.children}
      </div>
      <div className="console-view-controls">
        <ConsoleInput
          visible={inputVisible}
          commands={commands}
          onCommand={onCommand}
        />
        <ConsoleMenu
          activeItem={activePage}
          items={menuItems}
          visible={menuVisible}
          onCommand={menuOnCommand}
        />
        <ConsoleMenuMobile
          activeItem={activePage}
          items={menuItems}
          visible={menuVisible}
          onCommand={menuOnCommand}
        />
      </div>
    </div>
  );
};

export default ConsoleContainer;
