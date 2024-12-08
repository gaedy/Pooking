import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../utils/i18n";

const initialState = {
  currentLanguage: i18n.language,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      const lang = action.payload;
      state.currentLanguage = lang;

      i18n.changeLanguage(lang);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
