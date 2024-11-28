import { createSlice } from "@reduxjs/toolkit";

const initialCurrent = localStorage.getItem("font") || "font-fontEnglishInter";

const initialState = {
  font: initialCurrent,
};

const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    setFont: (state, action) => {
      state.font = action.payload;
      localStorage.setItem("font", state.font);
    },
  },
});

export const { setFont } = fontSlice.actions;

export default fontSlice.reducer;
