import React from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
import Language from "../Language";

const KiltaEventManager: React.FC<ProjectItemProps> = (props) => {
  const employer = "Kehätieto";

  return (
    <>
      <Language lang="en">
        <ProjectItem {...props} name="Event manager" employer={employer}>
          <p>
            Event manager is a module that can be installed on top of the Kilta
            registry for organizations that needed to manage their events,
            courses etc.
          </p>
          <p>
            What I worked on:
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
          </p>
        </ProjectItem>
      </Language>

      <Language lang="fi">
        <ProjectItem {...props} name="Tapahtumahallinta" employer={employer}>
          <p>
            Kilta Tapahtumienhallinta on moduuli, jolla liitot, järjestöt ja
            yhdistykset pystyvät hallinoimaan tapahtumia, osallistujia, kursseja
            jne. Moduuli asennetaan Kilta-rekisterin päälle.
          </p>
          <p>
            Mitä kehitin:
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
          </p>
        </ProjectItem>
      </Language>
    </>
  );
};

export default KiltaEventManager;
