import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

//languages
import english from "./lang/en.json";
import frensh from "./lang/fr.json";

import i18n from "i18next";


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: english,
      },
      fr: {
        translation: frensh,
      },
    },
    fallbackLng: "fr",
    detection: {
      order: ["localStorage", "cookie", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
