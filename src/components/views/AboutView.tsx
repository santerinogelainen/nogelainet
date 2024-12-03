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
        I started my coding journey at age 16 when I learned HTML so I could
        create a theme for my back then blog. I fell in love with the creativity
        and problem solving aspects and it lead to me studying software
        development. In 2018 I graduated from my studies and landed my first job
        in the field.
      </p>
      <p>
        Since then, I've worked on many different types of systems; from full
        stack applications, to API:s and integrations. I have tackled large data
        sets and done data transfers from legacy systems to new software. I've
        also worked on productization of many previously custom software.
      </p>
      <p>
        Tech-wise I am most familiar with <b>C#</b>, <b>JS/React/Vue</b> and{" "}
        <b>relational databases</b>. I have a{" "}
        <b>Microsoft certification on Azure</b>. I've also worked with Python
        and NoSQL databases through personal projects and education. But I
        always want to learn more. That is why I do a lot of coding during my
        free time.
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
        Teknologioista tutuimmat ovat <b>C#</b>, <b>JS/React/Vue</b> ja{" "}
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
