import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";
import { useFoundCommandStats } from "../../commands/commandRunner";

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.nogelainet")} />;
};

const Page = () => {
  const dispatch = useAppDispatch();
  const { unique, alias } = useFoundCommandStats();

  return (
    <ProjectView
      name="project.nogelainet"
      employer="Freetime"
      tags={[
        "React",
        "Gatsby",
        "JavaScript",
        "TypeScript",
        "Storybook",
        "Azure Static Web Apps",
      ]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>This website you are on right now!</p>
        <p>Try some easter eggs:</p>
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
        <p>Your stats:</p>
        <ul>
          <li>
            You have found {unique.found}/{unique.total} unique commands!
          </li>
          <li>
            You have found {alias.found}/{alias.total} alias commands!
          </li>
        </ul>
      </Language>
      <Language lang="fi">
        <p>Tämä sivusto millä olet juuri nyt!</p>
        <p>Kokeile esim. komentoja:</p>
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
        <p>Tilastot:</p>
        <ul>
          <li>
            Olet löytänyt {unique.found}/{unique.total} uniikkia komentoa!
          </li>
          <li>
            Olet löytänyt {alias.found}/{alias.total} alias komentoa!
          </li>
        </ul>
      </Language>
    </ProjectView>
  );
};

export default Page;
