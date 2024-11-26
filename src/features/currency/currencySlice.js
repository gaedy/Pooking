import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: false,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    toggleCurrency: (state) => {
      state.currency = !state.currency;
    },
  },
});
export const { setCurrency, toggleCurrency } = currencySlice.actions;

export default currencySlice.reducer;
