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
        Aloitin urani ohjelmoinnin parissa 16 vuotiaana opettelemalla HTML:n
        blogini teemaa varten. Pidin ohjelmoinnin luovuudesta ja
        ongelmanratkaisun puolista, joten päätin mennä opiskelemaan
        ohjelmistokehittäjäksi. Valmistuin tieto- ja viestintätekniikan
        perustutkinnon opinnoistani vuonna 2018 ja sain ensimmäisen työni
        alalla.
      </p>

      <p>
        Siitä lähtien olen ollut tekemisissä erilaisten järjestelmien kanssa;
        full stack sovelluksista, rajapintoihin sekä integraatioihin. Data
        puolelta olen työskennellyt suurien aineistojen kanssa, ja tehnyt usean
        tiedonsiirron vanhoista sovelluksista uusiin. Tuotekehitys on myös
        tuttua ja olen ollut mukana tuotteistamassa useita sovelluksia.
      </p>

      <p>
        Teknologioista tutuimmat ovat <b>C#</b>, <b>JS/TS/React/Vue</b> ja{" "}
        <b>relaatio tietokannat</b>. Sen lisäksi minulla on{" "}
        <b>Microsoftin sertifikaatti Azuresta</b>. Olen myös työskennellyt
        Pythonin ja NoSQL tietokantojen kanssa vapaa-ajan projektien ja
        koulutuksen kautta. Haluan aina oppia uutta, ja sen takia ohjelmoin myös
        paljon vapaa-ajalla.
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
