import React from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
import Language from "../Language";
import WrittenTextAnimation from "../animations/WrittenTextAnimation";

const KiltaFundRaising: React.FC<ProjectItemProps> = (props) => {
  const employer = "Kehätieto";

  return (
    <>
      <Language lang="en">
        <ProjectItem {...props} name="Fund raising module" employer={employer}>
          <p>
            Kilta Fund raising is a module that can be installed on top of the
            Kilta registry to manage fund raising for a non profit organization.
          </p>
          <p>
            What I worked on:
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
          </p>
        </ProjectItem>
      </Language>

      <Language lang="fi">
        <ProjectItem {...props} name="Varainhankinta" employer={employer}>
          <p>
            Kilta Varainhankita on moduuli, jolla organisaatiot pystyvät
            hallinnoimaan esim. kampanjoita, lahjoittajia, viestintää ja
            laskutusta. Moduulin pystyy asentamaan Kilta-rekisterin päälle tai
            omaksi sovellukseksi.
          </p>
          <p>
            Mitä kehitin:
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
          </p>
        </ProjectItem>
      </Language>
    </>
  );
};

export default KiltaFundRaising;
