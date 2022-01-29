import React from "react"
import {Provider} from "react-redux"
import store from "./src/state/store";
import ConsoleContainer from "./src/components/console/ConsoleContainer";
import { useLocation } from "@reach/router";
import { useSelector } from "react-redux";
import { mapPageToCommand } from "./src/commands/commandMapper";
import { runCommand } from "./src/commands/commandRunner";
import "./src/i18n";
import "./src/styles/global.scss";
import "./src/styles/theme-dark.scss";
import "./src/styles/theme-light.scss";
import { fetchData } from "./src/state/slices/dataSlice";

store.dispatch(fetchData);

const RootElement = ({ element }) => {
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

const PageElement = ({ element }) => {
    return (
        <PageElementWithHooks>
            {element}
        </PageElementWithHooks>
    )
}

export const wrapRootElement = RootElement;
export const wrapPageElement = PageElement;