import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";
import WrittenTextAnimation from "../../components/animations/WrittenTextAnimation";

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <h1 className="project-title">
          <WrittenTextAnimation text="Kilta fund raising module" />
        </h1>
        <p className="project-employer">@Kehätieto</p>
        <p>
          Kilta Fund raising is a module that can be installed on top of the
          Kilta registry to manage fund raising for a non profit organization.
        </p>
        <p>What I worked on:</p>
        <ul>
          <li>Designing and building the module</li>
          <li>Implementation of functionalities like:</li>
          <ul>
            <li>Managing donator's information</li>
            <li>Managing campaign's information</li>
            <li>Invoicing and billing</li>
            <li>Donation forms</li>
            <li>Automations</li>
          </ul>
        </ul>
      </Language>

      <Language lang="fi">
        <h1 className="project-title">
          <WrittenTextAnimation text="Kilta Varainhankinta" />
        </h1>
        <p className="project-employer">@Kehätieto</p>
        <p>
          Kilta Varainhankita on moduuli, jolla organisaatiot pystyvät
          hallinnoimaan esim. kampanjoita, lahjoittajia, viestintää ja
          laskutusta. Moduulin pystyy asentamaan Kilta-rekisterin päälle tai
          omaksi sovellukseksi.
        </p>
        <p>Mitä kehitin:</p>
        <ul>
          <li>Moduulin suunnittelu ja toteutus</li>
          <li>Seuraavien toimintojen toteutus:</li>
          <ul>
            <li>Lahjoittajien tietojen hallinnointi</li>
            <li>Kampanjan tietojen hallinnointi</li>
            <li>Lahjoittajien laskutus</li>
            <li>Lahjoituslomakkeet</li>
            <li>Automaatiot</li>
          </ul>
        </ul>
      </Language>
    </ProjectView>
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("fundRaising")} />;
};

export default Page;
