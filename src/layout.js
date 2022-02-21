import React from "react"
import {Provider} from "react-redux"
import store from "./state/store";
import ConsoleContainer from "./components/console/ConsoleContainer";
import { useLocation } from "@reach/router";
import { useSelector } from "react-redux";
import { mapPageToCommand } from "./commands/commandMapper";
import { runCommand } from "./commands/commandRunner";
import "./i18n";
import "./styles/global.scss";
import "./styles/theme-dark.scss";
import "./styles/theme-light.scss";
import "./styles/theme-pride.scss";
import "./styles/theme-powershell.scss";

export const RootElement = ({ element }) => {
    return (
        <Provider store={store}>
            {element}
        </Provider>
    );
}

const PageElementWithHooks = (props) => {
    
    const data = useSelector(x => x.data);
    const theme = useSelector(x => x.theme);
    const view = useSelector(x => x.view);
    const location = useLocation();

    return (
        <div className="app">
            <ConsoleContainer 
                visible={view.controlsVisible}
                commands={data.commands}
                activePage={mapPageToCommand(location.pathname)}
                activeTheme={theme}
                onCommand={runCommand}>
                {props.children}
            </ConsoleContainer>
        </div>
    )
}

export const PageElement = ({ element }) => {
    return (
        <PageElementWithHooks>
            {element}
        </PageElementWithHooks>
    )
}