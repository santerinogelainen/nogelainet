import React from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
import Language from "../Language";

const KiltaCardRegistry: React.FC<ProjectItemProps> = (props) => {
  const employer = "Kehätieto";

  return (
    <>
      <Language lang="en">
        <ProjectItem {...props} name="Card registry" employer={employer}>
          <p>
            Kilta Card registry allows organizations to keep track of their
            issued cards and qualifications. It consists of the base registry,
            course management module, online exam module and the mobile app for
            cards.
          </p>
          <p>
            What I worked on:
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
          </p>
        </ProjectItem>
      </Language>

      <Language lang="fi">
        <ProjectItem {...props} name="Korttirekisteri" employer={employer}>
          <p>
            Kilta Korttirekisteri antaa organisaatioille mahdollisuuden
            hallinnoida heidän jakamia kortteja ja pätevyyksiä. Se koostuu perus
            rekisteristä, kurssien hallinnan moduulista, tenttien moduulista ja
            mobiilikortista.
          </p>
          <p>
            Mitä kehitin:
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
          </p>
        </ProjectItem>
      </Language>
    </>
  );
};

export default KiltaCardRegistry;
