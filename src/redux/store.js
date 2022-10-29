import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesReducer";
import searchSlice from "./searchReducer";
import themeSlice from "./themeReducer";

export const store = configureStore({
  reducer: {
    darkMode: themeSlice,
    search: searchSlice,
    notesList: notesReducer
  }
});
