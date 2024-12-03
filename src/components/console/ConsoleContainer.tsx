import React, { useEffect } from "react";
import ConsoleInput from "./ConsoleInput";
import ConsoleMenu from "./ConsoleMenu";
import ConsoleMenuMobile from "./ConsoleMenuMobile";
import { useDidMountEffect } from "../../utils/reactUtils";
import { loadTheme } from "../../state/slices/themeSlice";
import store from "../../state/store";
import { loadLanguage } from "../../i18n";
import { CommandName } from "../../commands/commands";
import { useScrollEvent } from "../../utils/scroll";

type ConsoleContainerProps = React.PropsWithChildren<{
  visible: boolean;
  activePage?: CommandName;
  activeTheme?: CommandName;
  onCommand?: (command: CommandName | null) => void;
  location?: string;
}>;

export const ConsoleContainer: React.FC<ConsoleContainerProps> = ({
  visible,
  activePage = "home",
  activeTheme = "dark",
  location,
  onCommand,
  children,
}) => {
  const content = React.useRef<HTMLDivElement>(null);
  const [inputVisible, setInputVisible] = React.useState(visible);
  const [menuVisible, setMenuVisible] = React.useState(visible);
  const [inset, setInset] = React.useState(0);

  useDidMountEffect(() => {
    loadLanguage();

    store.dispatch(loadTheme);
  }, []);

  React.useEffect(() => {
    setInputVisible(visible);
    setMenuVisible(visible);
  }, [visible]);

  const menuItems: Array<CommandName> = [
    "projects",
    "about",
    "contact",
    activeTheme === "dark" ? "light" : "dark",
    "home",
  ];

  const updateInset = React.useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight || 0;
    const scrollTop = window.scrollY || 0;
    const offsetHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    );
    if (scrollHeight > offsetHeight) {
      const scrollDiff = scrollHeight - offsetHeight - scrollTop;
      setInset(scrollDiff);
    } else {
      setInset(0);
    }
  }, []);

  useEffect(() => window.scrollTo(0, 0), [activePage, activeTheme, location]);
  useScrollEvent(updateInset, [activePage, activeTheme, location]);

  return (
    <div className="console-view">
      <div
        className="console-view-content"
        style={{ clipPath: `inset(0 0 ${inset}px 0)` }}
        ref={content}
      >
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
