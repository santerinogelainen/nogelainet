import React from "react"
import {Provider} from "react-redux"
import store from "./state/store";
import ConsoleContainer from "./components/console/ConsoleContainer";
import { useLocation } from "@reach/router";
import { useSelector } from "react-redux";
import { mapPageToCommand } from "./commands/commandMapper";
import { runCommand } from "./commands/commandRunner";
import Helmet from "react-helmet"
import "./i18n";
import "./styles/global.scss";
import "./styles/theme-dark.scss";
import "./styles/theme-light.scss";
import "./styles/theme-pride.scss";
import "./styles/theme-powershell.scss";
import "./styles/theme-hacker.scss";

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
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="title" content="Santeri Nogelainen" />
                <meta name="description" content="Software Developer from Helsinki" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Santeri Nogelainen" />
                <meta property="og:description" content="Software Developer from Helsinki" />
                <meta property="og:url" content={location.href.toString()} />
                <meta property="og:image" content={"/seo.PNG"} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Santeri Nogelainen" />
                <meta property="twitter:description" content="Software Developer from Helsinki" />
                <meta property="twitter:url" content={location.href.toString()} />
                <meta property="twitter:image" content={"/seo.PNG"} />
            </Helmet>
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