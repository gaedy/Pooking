import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "/src/features/cards/cardsFetchSlice";


const store = configureStore({
    reducer: {
      cards: cardsReducer,
    },
});

export default store;