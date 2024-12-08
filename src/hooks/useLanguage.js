import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../features/languageSlice/languageSlice";

function useLanguage() {
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang));
  };

  return {
    currentLanguage,
    handleLanguageChange,
  };
}

export default useLanguage;
