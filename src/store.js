import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "/src/features/cards/fetchingSlice";
import fontReducer from "/src/features/changeFont/fontSlice";
import themeReducer from "/src/features/themeSlice/themeSlice";
import currencyReducer from "/src/features/currency/currencySlice";
import savedReducer from "/src/features/saved/savedSlice";
import languageReducer from "/src/features/languageSlice/languageSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    font: fontReducer,
    darkMode: themeReducer,
    currency: currencyReducer,
    saved: savedReducer,
    language : languageReducer
  },
});

export default store;
