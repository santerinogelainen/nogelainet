import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      name="project.mycats"
      employer="Kehätieto"
      tags={[".NET", "C#", "SQL Server", "REST", "Azure Devops"]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>
          MyCats is a registry for FIFe cats, cat shows, cattery names, members,
          events and invoicing.
        </p>
        <p>What I worked on:</p>
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
      </Language>

      <Language lang="fi">
        <p>
          MyCats on rekisteri FIFe kissoille, näyttelyille, kasvattajanimille,
          jäsenille, tapahtumille ja laskutuksille.
        </p>
        <p>Mitä kehitin:</p>
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
      </Language>
    </ProjectView>
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.mycats")} />;
};

export default Page;
