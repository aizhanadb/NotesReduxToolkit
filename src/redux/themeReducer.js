import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "darkMode",
  initialState: {
    theme: true
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.theme = !state.theme;
    }
  }
});

export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
