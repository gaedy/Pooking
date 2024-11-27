import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function useLanguage() {
  const { i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("saveLang") || i18n.language;
  });

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    localStorage.setItem("saveLang", lang);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);
  return { currentLanguage, changeLanguage };
}

export default useLanguage;
