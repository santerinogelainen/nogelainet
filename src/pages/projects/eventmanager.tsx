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
      name="project.eventmanager"
      employer="Kehätieto"
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>
          Event manager is a module that can be installed on top of the Kilta
          registry for organizations that needed to manage their events, courses
          etc.
        </p>
        <p>What I worked on:</p>
        <ul>
          <li>Productization of Event manager</li>
          <li>Implementation of functionalities like:</li>
          <ul>
            <li>Event groups</li>
            <li>Event gatherings</li>
            <li>Event accommodations</li>
            <li>Event statistics and reports</li>
            <li>English and swedish support</li>
          </ul>
          <li>Paytrail integration</li>
          <li>Netvisor integration</li>
          <li>Moodle integration</li>
          <li>Priima integration</li>
          <li>REST API</li>
          <li>CI/CD pipelines</li>
          <li>...and much more.</li>
        </ul>
      </Language>

      <Language lang="fi">
        <p>
          Kilta Tapahtumienhallinta on moduuli, jolla liitot, järjestöt ja
          yhdistykset pystyvät hallinoimaan tapahtumia, osallistujia, kursseja
          jne. Moduuli asennetaan Kilta-rekisterin päälle.
        </p>
        <p>Mitä kehitin:</p>
        <ul>
          <li>Tapahtumahallinnan tuotteistusta</li>
          <li>Seuraavien toimintojen toteutusta:</li>
          <ul>
            <li>Tapahtumakokonaisuudet</li>
            <li>Tapahtumien kokoontumisten hallinta</li>
            <li>Tapahtumien majoituksen hallinta</li>
            <li>Tapahtumien tilastot ja raportit</li>
            <li>Englannin ja ruotsin kielen tuki</li>
          </ul>
          <li>Paytrail integraatio</li>
          <li>Netvisor integraatio</li>
          <li>Moodle integraatio</li>
          <li>Priima integraatio</li>
          <li>REST-rajapinta</li>
          <li>CI/CD-putket</li>
          <li>...ja paljon muuta.</li>
        </ul>
      </Language>
    </ProjectView>
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.eventmanager")} />;
};

export default Page;
