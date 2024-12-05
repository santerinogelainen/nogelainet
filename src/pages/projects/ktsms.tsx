import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.ktsms")} />;
};

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      name="project.ktsms"
      employer="Kehätieto"
      tags={[".NET", "C#", "Azure Static Web Apps", "Docfx"]}
      images={["/images/kt-sms_intro.png"]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>
          KT.SMS is a set of .NET tools for sending SMS messages I designed and
          developed at Kehätieto.
        </p>
        <p>
          The goal of the project was to replace an old SMS operator with a
          completely new SMS operator and modernize the code at the same time.
          This was done with three implementations:
        </p>
        <ul>
          <li>
            a generic, documented, easy to use library that can be used to send
            messages though any SMS operator
          </li>
          <li>
            a REST service replacing the old way of sending single messages by
            mimicking the old operator endpoint
          </li>
          <li>
            a worker service replacing the old way of sending bulk messages from
            a database in the background
          </li>
        </ul>
      </Language>
      <Language lang="fi">
        <p>
          KT.SMS on .NET-työkalusarja tekstiviestien lähettämiseen, jota
          suunnittelin ja kehitin Kehätiedolla.
        </p>
        <p>
          Projektin tavoitteena oli korvata vanha tekstiviestioperaattori
          kokonaan uudella operaattorilla ja samalla modernisoida koodia. Tämä
          toteutettiin kolmella eri tavalla:
        </p>
        <ul>
          <li>
            yleinen, dokumentoitu ja helppokäyttöinen kirjasto, jota voidaan
            käyttää viestien lähettämiseen minkä tahansa
            tekstiviestioperaattorin kautta
          </li>
          <li>
            REST-palvelu, joka korvasi vanhan yksittäisten viestien
            lähettämistavan jäljittelemällä vanhan operaattorin rajapintaa
          </li>
          <li>
            taustalla toimiva worker-palvelu, joka korvasi vanhan tavan lähettää
            massaviestejä tietokannasta
          </li>
        </ul>
      </Language>
    </ProjectView>
  );
};

export default Page;
