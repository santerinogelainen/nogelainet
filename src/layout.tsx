import React from "react";
import { Provider } from "react-redux";
import store, { useAppSelector } from "./state/store";
import ConsoleContainer from "./components/console/ConsoleContainer";
import { useLocation } from "@reach/router";
import { mapPageToCommand } from "./commands/commandMapper";
import { runCommand } from "./commands/commandRunner";
import "./i18n";
import "./styles/global.scss";
import "./styles/theme-dark.scss";
import "./styles/theme-light.scss";
import "./styles/theme-pride.scss";
import "./styles/theme-powershell.scss";
import "./styles/theme-hacker.scss";
import "./styles/theme-css-color.scss";
import { settings } from "./constants";

export const RootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

export const HeadLayout = (props) => {
  const title = `${props.title} | ${settings.full_name()}`;

  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="title" content="Santeri Nogelainen" />
      <meta name="description" content="Software Developer from Helsinki" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Santeri Nogelainen" />
      <meta
        property="og:description"
        content="Software Developer from Helsinki"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fi_FI" />
      <meta property="og:url" content="https://nogelai.net/" />
      <meta property="og:image" content="https://nogelai.net/seo.PNG" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Santeri Nogelainen" />
      <meta
        property="twitter:description"
        content="Software Developer from Helsinki"
      />
      <meta property="twitter:url" content="https://nogelai.net/" />
      <meta property="twitter:image" content="https://nogelai.net/seo.PNG" />
    </>
  );
};

const PageElementWithHooks = (props) => {
  const data = useAppSelector((x) => x.data);
  const theme = useAppSelector((x) => x.theme);
  const view = useAppSelector((x) => x.view);
  const location = useLocation();

  return (
    <div className="app">
      <ConsoleContainer
        visible={view.controlsVisible}
        commands={data.commands}
        activePage={mapPageToCommand(location.pathname)}
        activeTheme={theme}
        onCommand={runCommand}
      >
        {props.children}
      </ConsoleContainer>
    </div>
  );
};

export const PageElement = ({ element }) => {
  return <PageElementWithHooks>{element}</PageElementWithHooks>;
};