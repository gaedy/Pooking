import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../features/themeSlice/themeSlice";

const useTheme = () => {
  const isDarkTheme = useSelector((state) => state.darkMode.darkMode);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  const handleSetTheme = (newValue) => {
    dispatch(setTheme(newValue));
  };

  return { isDarkTheme, handleToggleTheme, handleSetTheme };
};

export default useTheme;
