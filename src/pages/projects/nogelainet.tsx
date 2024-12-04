import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.nogelainet")} />;
};

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      name="project.nogelainet"
      employer="Freetime"
      tags={[
        "React",
        "Gatsby",
        "JavaScript",
        "TypeScript",
        "Azure Static Web Apps",
      ]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>This website! Try some easter egg commands:</p>
        <ul>
          <li>powershell</li>
          <li>hacker</li>
          <li>pride</li>
          <li>ball</li>
          <li>wireframe</li>
          <li>
            red/green/blue or any other predefined css color name (my favourite
            is pink!)
          </li>
        </ul>
      </Language>
      <Language lang="fi">
        <p>Tämä sivu! Kokeile easter egg komentoja:</p>
        <ul>
          <li>powershell</li>
          <li>häkkeri</li>
          <li>pride</li>
          <li>pallo</li>
          <li>wireframe</li>
          <li>
            red/green/blue tai muu ennalta määritetty css värinimi (mun suosikki
            on pink!)
          </li>
        </ul>
      </Language>
    </ProjectView>
  );
};

export default Page;
