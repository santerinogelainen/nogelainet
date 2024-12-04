import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";
import { Link } from "gatsby";
import { Pages } from "../../models/pages";

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.kiltaunions")} />;
};

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      name="project.kiltaunions"
      employer="Kehätieto"
      tags={[
        ".NET",
        "C#",
        "Vue",
        "JavaScript",
        "TypeScript",
        "SQL Server",
        "Azure Devops",
      ]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>
          Kilta for Unions or "Union Kilta" is a membership registry for finnish
          Workers Unions, that I developed and maintained at Kehätieto.
        </p>
        <p>Features I implemented and worked on:</p>
        <ul>
          <li>Advanced selection (reporting tool)</li>
          <li>
            Introduction of the{" "}
            <Link to={Pages.Projects.KTVueComponents}>kt-vuecomponents</Link>{" "}
            component library to the code base
          </li>
          <li>Search for pages in quick search</li>
          <li>Search view for employers and workplaces in the registry</li>
          <li>Improved translation and localization functionality</li>
          <li>Static reports for customers</li>
          <li>Other user experience improvements</li>
          <li>Accessability improvements</li>
        </ul>
      </Language>
      <Language lang="fi">
        <p>
          Kilta Ammattiliitoille eli "Ammattiliitto Kilta" on suomalaisille
          ammattiliitoille tarkoitettu jäsenrekisteri, jota kehitin ja ylläpidin
          Kehätiedolla.
        </p>
        <p>Ominaisuudet, joita toteutin ja ylläpidin:</p>
        <ul>
          <li>Edistynyt poiminta (raportointityökalu)</li>
          <li>
            <Link to={Pages.Projects.KTVueComponents}>kt-vuecomponents</Link>{" "}
            komponenttikirjaston lisääminen koodikannan osaksi
          </li>
          <li>Sivujen haku pikahaku-toiminnolla</li>
          <li>Työnantajien ja työpaikkojen hakunäkymä rekisterissä</li>
          <li>Parannettu käännös- ja lokalisointitoiminnallisuus</li>
          <li>Staattiset raportit asiakkaille</li>
          <li>Muita käyttäjäkokemuksen parannuksia</li>
          <li>Saavutettavuusparannuksia</li>
        </ul>
      </Language>
    </ProjectView>
  );
};

export default Page;
