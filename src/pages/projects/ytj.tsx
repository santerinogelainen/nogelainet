import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.ytj")} />;
};

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      name="project.ytj"
      employer="Knowit"
      tags={["React", "JavaScript", "TypeScript", ".NET", "C#", "SQL Server"]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>
          The Business Information System (YTJ) is a trade register for finnish
          companies managed by the Finnish Patent and Registration Office (PRH).
          At Knowit I worked for PRH to modernize their online service for a
          registering a limited liability company.
        </p>
        <p>What I developed and worked on:</p>
        <ul>
          <li>
            Front-end and backend development for entering company address
            information
          </li>
          <li>Front-end development for entering shareholders</li>
          <li>Front-end development for entering accountants</li>
          <li>Front-end development for entering board of directors</li>
          <li>Front-end development for entering ceo/vp</li>
          <li>Front-end development for digital signing</li>
          <li>Front-end and backend development for payments</li>
        </ul>
      </Language>
      <Language lang="fi">
        <p>
          Yritystietojärjestelmä (YTJ) on yritysrekisteri, jota hallinnoi
          Patentti- ja rekisterihallitus (PRH). Knowitilla työskentelin PRH:lle
          osakeyhtiön perustamisen uudistusprojektin parissa.
        </p>
        <p>Kehitin mm. seuraavia toiminnallisuuksia:</p>
        <ul>
          <li>
            Front-end ja backend toteutus yrityksen osoitetietojen syöttämiselle
          </li>
          <li>Front-end toteutus osakkeenomistajien syöttämiselle</li>
          <li>Front-end toteutus tilintarkastajien syöttämiselle</li>
          <li>Front-end toteutus hallituksen jäsenten syöttämiselle</li>
          <li>
            Front-end toteutus toimitusjohtajan ja varatoimitusjohtajan
            syöttämiselle
          </li>
          <li>Front-end toteutus digitaaliselle allekirjoitukselle</li>
          <li>Front-end ja backend toteutus maksuprosessille</li>
        </ul>
      </Language>
    </ProjectView>
  );
};

export default Page;
