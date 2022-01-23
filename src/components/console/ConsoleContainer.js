
import React from "react"
import ConsoleInput from "./ConsoleInput";
import ConsoleMenu from "./ConsoleMenu";
import ConsoleMenuMobile from "./ConsoleMenuMobile";
import { Commands } from "../../models/commands";
import { Themes } from "../../models/themes";
import { nextCommand } from "../../commands/commandMapper";

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

    const nextPageEvent = React.useCallback((event) => {
        onCommand(nextCommand(activePage));
    }, [activePage]);

    React.useEffect(() => {

        if (visible) {
            document.addEventListener("wheel", nextPageEvent);
            return () => document.removeEventListener("wheel", nextPageEvent);
        }

    }, [visible, nextPageEvent]);

    React.useEffect(() => {

        setInputVisible(visible);
        setMenuVisible(visible);

    }, [visible]);

    const menuItems = [
        Commands.Projects,
        Commands.About,
        Commands.Contact,
        activeTheme == Themes.Light ? 
            Commands.Dark : 
            Commands.Light,
        Commands.Home
    ];

    return (
        <div className="console-view">
            <div className="console-view-content" ref={content}>
                {props.children}
            </div>
            <div className="console-view-controls">
                <ConsoleInput visible={inputVisible} commands={commands} onCommand={onCommand} />
                <ConsoleMenu activeItem={activePage} items={menuItems} visible={menuVisible} onCommand={onCommand} />
                <ConsoleMenuMobile activeItem={activePage} items={menuItems} visible={menuVisible} onCommand={onCommand} />
            </div>
        </div>
    );

}

export default ConsoleContainer;