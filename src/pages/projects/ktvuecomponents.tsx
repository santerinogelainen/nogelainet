import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.ktvuecomponents")} />;
};

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      name="project.ktvuecomponents"
      employer="Kehätieto"
      tags={[
        "Vue",
        "JavaScript",
        "TypeScript",
        "Accessibility",
        "Storybook",
        "Azure Static Web Apps",
      ]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>
          KT.VueComponents is a UI component library I designed and developed at
          Kehätieto.
        </p>
        <p>
          Our goal was to create reusable, documented, easy to use and
          accessible UI components based on the visual style of kilta registry.
          We spent a lot of time focused on developer experience (DX). For
          example:
        </p>
        <ul>
          <li>We wanted the components to have full intellisense support.</li>
          <li>
            Components needed work in expected ways, even without reading the
            documentation.
          </li>
          <li>
            Components and their properties should be named with industry
            standards, or in logical ways.
          </li>
          <li>Components should be flexible and support many situations.</li>
          <li>Everything should have code examples for copy and pasting.</li>
        </ul>
        <p>
          We used other libraries like vuetify, shadcn-vue, radix-vue and
          bootstrap as benchmarks when designing new components.
        </p>
        <p>
          Visit the documentation:{" "}
          <a href="https://kt-vuecomponents.kehatieto.dev/" target="_blank">
            kt-vuecomponents.kehatieto.dev
          </a>
        </p>
      </Language>
      <Language lang="fi">
        <p>
          KT.VueComponents on käyttöliittymäkomponenttikirjasto, jota
          suunnittelin ja kehitin Kehätiedolla.
        </p>
        <p>
          Tavoitteenamme oli luoda uudelleenkäytettäviä, dokumentoituja,
          helppokäyttöisiä ja saavutettavia käyttöliittymäkomponentteja, jotka
          perustuvat Kilta-rekisterin visuaaliseen tyyliin. Panostimme paljon
          kehittäjäkokemukseen (DX). Esimerkiksi:
        </p>
        <ul>
          <li>Halusimme, että komponenteilla on täysi intellisense-tuki.</li>
          <li>
            Komponenttien tuli toimia odotetulla tavalla, vaikka dokumentaatiota
            ei olisi luettu.
          </li>
          <li>
            Komponenttien ja niiden ominaisuuksien nimet tuli valita alan
            standardien mukaan tai loogisesti.
          </li>
          <li>
            Komponenttien tuli olla joustavia ja toimia monissa eri tilanteissa.
          </li>
          <li>Kaikelle tulisi olla kopioitavia koodiesimerkkejä.</li>
        </ul>
        <p>
          Käytimme vertailukohtina muita kirjastoja, kuten vuetify, shadcn-vue,
          radix-vue ja bootstrap.
        </p>
        <p>
          Tutustu dokumentaatioon:{" "}
          <a href="https://kt-vuecomponents.kehatieto.dev/" target="_blank">
            kt-vuecomponents.kehatieto.dev
          </a>
        </p>
      </Language>
    </ProjectView>
  );
};

export default Page;
