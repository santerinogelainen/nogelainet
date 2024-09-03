import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

import en from "./locales/en.json";
import fi from "./locales/fi.json";
import { Languages } from "./models/languages";

const resources = {
  en: {
    translation: en,
  },
  fi: {
    translation: fi,
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: Languages.En,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export const setLanguage = (lang: string) => {
  lang = lang || Languages.En;
  Cookies.set("lang", lang);
  i18n.changeLanguage(lang);
};

export const loadLanguage = () => {
  setLanguage(Cookies.get("lang"));
};

export default i18n;
