import React from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
import Language from "../Language";

const MyCats: React.FC<ProjectItemProps> = (props) => {
  const employer = "Kehätieto";

  return (
    <>
      <Language lang="en">
        <ProjectItem {...props} name="MyCats" employer={employer}>
          <p>
            MyCats is a registry for FIFe cats, cat shows, cattery names,
            members, events and invoicing.
          </p>
          <p>
            What I worked on:
            <ul>
              <li>Productization of MyCats</li>
              <li>Implementation of functionalities like:</li>
              <ul>
                <li>Improved cat's health information</li>
                <li>Improved litter registration</li>
                <li>Improved EMS Code management</li>
                <li>Improved membership registration process</li>
                <li>Optimization of the show registry</li>
                <li>Danish, Latvian and Dutch support</li>
                <li>Mollie integration</li>
                <li>E-boekhouden integration</li>
                <li>REST API</li>
                <li>Data transfers</li>
                <li>CI/CD pipelines</li>
              </ul>
            </ul>
          </p>
        </ProjectItem>
      </Language>

      <Language lang="fi">
        <ProjectItem {...props} name="MyCats" employer={employer}>
          <p>
            MyCats on rekisteri FIFe kissoille, näyttelyille, kasvattajanimille,
            jäsenille, tapahtumille ja laskutuksille.
          </p>
          <p>
            Mitä kehitin:
            <ul>
              <li>MyCatsin tuotteistus</li>
              <li>Paranneltu kissan terveystietojen hallinnointi</li>
              <li>Paranneltu pentueen rekisteröinti</li>
              <li>Paranneltu EMS-koodien hallinta</li>
              <li>Paranneltu jäseneksi rekisteröitymisen prosessi</li>
              <li>Näyttelyrekisterin optimointi</li>
              <li>Tanskan, latvian ja hollannin kielen tuki</li>
              <li>Mollie integraatio (maksupalvelu)</li>
              <li>E-boekhouden integraatio (taloushallinto)</li>
              <li>REST-rajapinta</li>
              <li>Tiedonsiirtoja</li>
              <li>CI/CD-putket</li>
            </ul>
          </p>
        </ProjectItem>
      </Language>
    </>
  );
};

export default MyCats;
