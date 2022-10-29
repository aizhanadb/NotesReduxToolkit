import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  notes: [
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2021"
    }
  ]
};

export const notesReducer = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: action.payload,
        date: date.toLocaleDateString()
      };
      state.notes.push(newNote);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    }
  }
});

export const { addNote, deleteNote } = notesReducer.actions;

export default notesReducer.reducer;

// const deleteNote = (id) => {
//   const newNotes = notes.filter((note) => note.id !== id);
//   setNotes(newNotes);
// };
