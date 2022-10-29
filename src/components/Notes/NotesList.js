import { useState } from "react";

import Note from "./Note";
import AddNote from "./AddNote";
import { useSelector } from "react-redux";

const NotesList = () => {
  const notes = useSelector((state) => state.notesList.notes);
  const searchText = useSelector((state) => state.search.searchText);

  const filtered = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );

  return (
    <div className="notes-list">
      {filtered.map((note) => (
        <Note id={note.id} key={note.id} text={note.text} date={note.date} />
      ))}

      <AddNote />
    </div>
  );
};

export default NotesList;
