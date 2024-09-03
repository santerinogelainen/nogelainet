import React, { useEffect } from "react";
import { setLanguage } from "../../i18n";
import { navigate } from "gatsby";

type LanguageViewProps = {
  lang: string;
};

const LanguageView: React.FC<LanguageViewProps> = ({ lang = "" }) => {
  useEffect(() => {
    setLanguage(lang);
    navigate("/");
  });

  return null;
};

export default LanguageView;
