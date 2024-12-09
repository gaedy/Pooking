import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "/src/utils/i18n/locals/en/enLang.json";
import arLang from "/src/utils/i18n/locals/ar/arLang.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  en: {
    translation: enLang,
  },
  ar: {
    translation: arLang,
  },
};
const isRTLLanguage = (lng) => ["ar", "he", "fa"].includes(lng);

const savedLanguage = localStorage.getItem("i18nextLng") || "en";
const savedRTLPreference = localStorage.getItem("appRTLPreference") === "true";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: savedLanguage, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
i18n.on("languageChanged", (lng) => {
  const isRTL = isRTLLanguage(lng);
  localStorage.setItem("i18nextLng", lng);
  localStorage.setItem("appRTLPreference", isRTL.toString());
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});
document.documentElement.dir = isRTLLanguage(savedLanguage) ? "rtl" : "ltr";

export default i18n;
