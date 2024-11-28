import { createSlice } from "@reduxjs/toolkit";

const initialCurrent = localStorage.getItem("theme") === "dark";

const initialState = {
  darkMode: initialCurrent,
};

const themeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");
    },
    setTheme: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem("theme", action.payload ? "dark" : "light");
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
