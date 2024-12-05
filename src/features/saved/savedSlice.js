import { createSlice } from "@reduxjs/toolkit";

// Load saved cards from localStorage on initialization
const loadSavedCards = () => {
  try {
    const savedCards = localStorage.getItem('savedCards');
    return savedCards ? JSON.parse(savedCards) : [];
  } catch (error) {
    console.error('Error loading saved cards from localStorage:', error);
    return [];
  }
};

const initialState = {
  savedCards: loadSavedCards(),
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    toggleSaveCard: (state, action) => {
      const cardIndex = state.savedCards.findIndex(
        (card) => card.id === action.payload.id
      );
      if (cardIndex === -1) {
        state.savedCards.push(action.payload);
      } else {
        state.savedCards.splice(cardIndex, 1);
      }
      // Save to localStorage whenever the state changes
      try {
        localStorage.setItem('savedCards', JSON.stringify(state.savedCards));
      } catch (error) {
        console.error('Error saving cards to localStorage:', error);
      }
    },
  },
});

export const { toggleSaveCard } = savedSlice.actions;
export const selectSavedCards = (state) => state.saved.savedCards;
export default savedSlice.reducer;
