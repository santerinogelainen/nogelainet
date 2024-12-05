import React, { useEffect, useRef, useState } from "react";
import ConsoleInput from "./ConsoleInput";
import ConsoleMenu from "./ConsoleMenu";
import ConsoleMenuMobile from "./ConsoleMenuMobile";
import ConsoleMenuBackground from "./ConsoleMenuBackground";
import { useDidMountEffect } from "../../utils/reactUtils";
import { loadTheme } from "../../state/slices/themeSlice";
import store from "../../state/store";
import { loadLanguage } from "../../i18n";
import { CommandName, commands } from "../../commands/commands";
import { useScrollEvent } from "../../utils/scroll";
import ConsoleScrollArrow from "./ConsoleScrollArrow";
import { useIsMobile } from "../../utils/window";

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
  const content = useRef<HTMLDivElement>(null);
  const [arrow, setArrow] = useState<"up" | "down" | "both" | null>(null);
  const [inputVisible, setInputVisible] = useState(visible);
  const [menuVisible, setMenuVisible] = useState(visible);
  const [inset, setInset] = useState(0);
  const isMobile = useIsMobile();

  useDidMountEffect(() => {
    loadLanguage();

    store.dispatch(loadTheme);
  }, []);

  useEffect(() => {
    setInputVisible(visible);
    setMenuVisible(visible);
  }, [visible]);

  const menuItems: Array<CommandName> = [
    "projects",
    "about",
    "contact",
    commands.sets.dark.has(activeTheme) ? "light" : "dark",
    "home",
  ];

  const updateInset = React.useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight || 0;
    const scrollTop = window.scrollY || 0;
    const offsetHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    );

    const fullColorThemes = [
      commands.sets.dark,
      commands.sets.light,
      commands.sets.cssColors,
      commands.sets.powershell,
    ];

    if (scrollHeight > offsetHeight && !isMobile) {
      const scrollDiff = scrollHeight - offsetHeight - scrollTop;

      // No need for inset if the theme is full color. Makes the pages less jittery.
      if (fullColorThemes.some((x) => x.has(activeTheme))) {
        setInset(0);
      } else {
        setInset(scrollDiff);
      }

      if (scrollDiff <= 0) {
        setArrow("up");
      } else if (scrollTop === 0) {
        setArrow("down");
      } else {
        setArrow("both");
      }
    } else {
      setInset(0);
      setArrow(null);
    }
  }, [isMobile, activeTheme]);

  useEffect(
    () => window.scrollTo({ top: 0, left: 0, behavior: "instant" }),
    [activePage, activeTheme, location],
  );
  useScrollEvent(updateInset, [activePage, activeTheme, location, isMobile]);

  return (
    <div className="console-view">
      <div
        className="console-view-content"
        style={{ clipPath: `inset(0 0 ${inset}px 0)` }}
        ref={content}
      >
        {children}
      </div>
      {!!arrow && <ConsoleMenuBackground />}
      <div className="console-view-controls">
        {!!arrow && arrow !== "down" && <ConsoleScrollArrow direction="up" />}
        {!!arrow && arrow !== "up" && <ConsoleScrollArrow direction="down" />}
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
