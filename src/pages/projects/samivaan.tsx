import React from "react";
import { useTranslation } from "react-i18next";
import { viewActions } from "../../state/slices/viewSlice";
import { HeadLayout } from "../../layout";
import ProjectView from "../../components/views/ProjectView";
import Language from "../../components/Language";
import { useAppDispatch } from "../../state/store";
import ProjectImages from "../../components/projects/ProjectImages";

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("project.samivaan")} />;
};

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <ProjectView
      name="project.samivaan"
      employer="Freelance"
      tags={[
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Azure Static Web Apps",
      ]}
      images={[
        "/images/samivaan_frontpage.png",
        "/images/samivaan_butchers.png",
      ]}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    >
      <Language lang="en">
        <p>
          Samivaan.com is a portfolio website I developed for my friend Sami.
          While Sami designed the layout and visual aesthetics, I handled all
          aspects of the site's development and implementation.
        </p>
        <p>
          The website emphasizes smooth and satisfying animations. Our goal was
          to ensure the portfolio felt personal to Sami, incorporating fun,
          interactive features &mdash; such as emojis that appear when clicking
          on the background.
        </p>
        <p>
          Visit the site here:{" "}
          <a href="https://samivaan.com" target="_blank">
            samivaan.com
          </a>
        </p>
      </Language>
      <Language lang="fi">
        <p>
          Samivaan.com on portfolioverkkosivusto, jonka kehitin ystävälleni
          Samille. Sami suunnitteli sivuston ulkoasun ja visuaalisen tyylin, kun
          taas minä vastasin sivuston kehityksestä ja toteutuksesta.
        </p>
        <p>
          Tavoitteena oli tehdä portfoliosta Samille henkilökohtaisen tuntuinen
          lisäämällä hauskoja ja interaktiivisia ominaisuuksia, kuten taustaa
          klikkaamalla esiin tulevat emojit.
        </p>
        <p>
          Vieraile sivustolla:{" "}
          <a href="https://samivaan.com" target="_blank">
            samivaan.com
          </a>
        </p>
      </Language>
    </ProjectView>
  );
};

export default Page;
