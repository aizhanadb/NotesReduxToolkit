import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/notesReducer";

const Note = ({ id, text, date }) => {
  const dispatch = useDispatch();
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>

        <button onClick={() => dispatch(deleteNote(id))}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
