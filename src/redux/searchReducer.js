import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: ""
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchText = action.payload;
    }
  }
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
