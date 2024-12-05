import React from "react";
import FadeAnimation from "../animations/FadeAnimation";
import { useTranslation } from "react-i18next";
import { useDidMountEffect } from "../../utils/reactUtils";
import { Languages } from "../../models/languages";

type AboutViewProps = {
  onComplete?: () => void;
};

const AboutView: React.FC<AboutViewProps> = ({ onComplete }) => {
  const [visible, setVisible] = React.useState(false);
  const { i18n } = useTranslation();

  useDidMountEffect(() => {
    if (!visible) {
      setVisible(true);
    }
  }, [visible]);

  const english = (
    <>
      <p>
        With over <b>6 years of professional experience</b>, I bring a strong
        foundation of expertise for software development. I have worked on a
        diverse range of systems, including full-stack applications, APIs, and
        system integrations. My work has involved handling large datasets,
        migrating data from legacy systems to modern platforms, and transforming
        custom-built solutions into scalable, productized software offerings.
      </p>
      <p>
        In terms of technology, I am most proficient in <b>C#</b>,{" "}
        <b>JavaScript</b> and
        <b>TypeScript</b>. In recent years, I have focused on front-end
        development, working with modern libraries such as <b>Vue</b> and{" "}
        <b>React</b> to create intuitive and responsive user interfaces. This
        area of development allows me to channel both my technical expertise and
        my creative mindset. I have a strong interest in accessibility and
        strive to create inclusive, user-friendly software.
      </p>
    </>
  );

  const finnish = (
    <>
      <p>
        Yli <b>6 vuoden ammattikokemuksella</b> tuon vahvan osaamisen pohjan
        ohjelmistokehitykseen. Olen työskennellyt monenlaisten järjestelmien
        parissa, mukaan lukien full-stack-sovellukset, rajapinnat (API:t) ja
        järjestelmäintegraatiot. Työhöni on kuulunut suurten tietomäärien
        käsittely, tietojen siirtäminen vanhoista järjestelmistä moderneille
        alustoille sekä räätälöityjen ratkaisujen muuntaminen skaalautuviksi,
        tuotteistetuiksi ohjelmistoratkaisuiksi.
      </p>
      <p>
        Teknologian osalta olen taitavin <b>C#</b>:ssä, <b>JavaScript</b>:issä
        ja <b>TypeScript</b>:issä. Viime vuosina olen keskittynyt
        front-end-kehitykseen ja työskennellyt nykyaikaisten kirjastojen, kuten{" "}
        <b>Vue</b> ja <b>React</b>, parissa luodakseni intuitiivisia ja
        responsiivisia käyttöliittymiä. Tämä kehityksen osa-alue mahdollistaa
        sekä teknisen osaamiseni että luovan ajatteluni hyödyntämisen. Olen
        erityisen kiinnostunut saavutettavuudesta ja pyrin luomaan
        käyttäjäystävällisiä ohjelmistoja.
      </p>
    </>
  );

  const text = i18n.language === Languages.Fi ? finnish : english;

  return (
    <div className="about">
      <div className="about-text-container">
        <FadeAnimation visible={visible} speed={400} after={onComplete}>
          <div className="about-text">{text}</div>
        </FadeAnimation>
      </div>
    </div>
  );
};

export default AboutView;
