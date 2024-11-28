import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: JSON.parse(localStorage.getItem("currency")) || false,
};
const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
      localStorage.setItem("currency", JSON.stringify(state.currency));

    },
    toggleCurrency: (state) => {
      state.currency = !state.currency;
      localStorage.setItem("currency", JSON.stringify(state.currency));

    },
  },
});
export const { setCurrency, toggleCurrency } = currencySlice.actions;

export default currencySlice.reducer;
