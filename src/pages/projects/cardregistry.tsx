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
          <WrittenTextAnimation text="Kilta Card Registry" />
        </h1>
        <p className="project-employer">@Kehätieto</p>
        <p>
          Kilta Card registry allows organizations to keep track of their issued
          cards and qualifications. It consists of the base registry, course
          management module, online exam module and the mobile app for cards.
        </p>
        <p>What I worked on:</p>
        <ul>
          <li>Course management module</li>
          <li>Course exam module</li>
          <li>Mobile card app (PWA)</li>
          <li>Billing and invoicing</li>
          <li>Netvisor integration</li>
          <li>E-taika integration</li>
          <li>Data transfers</li>
          <li>CI/CD pipelines</li>
        </ul>
      </Language>

      <Language lang="fi">
        <h1 className="project-title">
          <WrittenTextAnimation text="Kilta Korttirekisteri" />
        </h1>
        <p className="project-employer">@Kehätieto</p>
        <p>
          Kilta Korttirekisteri antaa organisaatioille mahdollisuuden
          hallinnoida heidän jakamia kortteja ja pätevyyksiä. Se koostuu perus
          rekisteristä, kurssien hallinnan moduulista, tenttien moduulista ja
          mobiilikortista.
        </p>
        <p>Mitä kehitin:</p>
        <ul>
          <li>Kurssien hallinnan moduuli</li>
          <li>Tenttien moduuli</li>
          <li>Mobiilikortti (PWA)</li>
          <li>Laskutus</li>
          <li>Netvisor integraatio</li>
          <li>E-taika integraatio</li>
          <li>Tiedonsiirto</li>
          <li>CI/CD-putket</li>
        </ul>
      </Language>
    </ProjectView>
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("cardRegistry")} />;
};

export default Page;
