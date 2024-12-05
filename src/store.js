import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "/src/features/cards/fetchingSlice";
import fontReducer from "/src/features/changeFont/fontSlice";
import themeReducer from "/src/features/themeSlice/themeSlice";
import currencyReducer from "/src/features/currency/currencySlice";
import savedReducer from "/src/features/saved/savedSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    font: fontReducer,
    darkMode: themeReducer,
    currency: currencyReducer,
    saved: savedReducer,
  },
});

export default store;
