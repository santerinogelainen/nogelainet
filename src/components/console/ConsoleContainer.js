
import React from "react"
import ConsoleInput from "./ConsoleInput";
import ConsoleMenu from "./ConsoleMenu";
import ConsoleMenuMobile from "./ConsoleMenuMobile";
import { Commands } from "../../models/commands";
import { Themes } from "../../models/themes";
import { useDidMountEffect } from "../../utils/reactUtils";
import { loadTheme } from "../../state/slices/themeSlice";
import { fetchData } from "../../state/slices/dataSlice";
import store from "../../state/store";
import Loader from "../Loader";

export const ConsoleContainer = ({
    visible = false,
    activePage = Commands.Home,
    activeTheme = Themes.Dark,
    commands = {},
    onCommand = null,
    ...props
}) => {

    const content = React.useRef(null);
    const [dataLoading, setDataLoading] = React.useState(true);
    const [inputVisible, setInputVisible] = React.useState(visible);
    const [menuVisible, setMenuVisible] = React.useState(visible);

    useDidMountEffect(() => {
        store.dispatch(fetchData).then(() => {
            setDataLoading(false);
        });
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
        activeTheme === Themes.Light ? 
            Commands.Dark : 
            Commands.Light,
        Commands.Home
    ];

    return (
        <div className="console-view">
            <div className="console-view-content" ref={content}>
                {dataLoading ? <Loader/> : props.children}
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