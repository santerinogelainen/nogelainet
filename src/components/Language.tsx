import React from "react";
import { LanguageType } from "../models/languages";
import { useTranslation } from "react-i18next";

type LanguageProps = React.PropsWithChildren<{
  lang: LanguageType;
}>;

const Language: React.FC<LanguageProps> = ({ lang, children }) => {
  const { i18n } = useTranslation();

  if (i18n.language !== lang) {
    return undefined;
  }

  return <>{children}</>;
};

export default Language;
