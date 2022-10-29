import "./styles.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/Notes/NotesList";
import { useSelector } from "react-redux";

export default function App() {
  const theme = useSelector((state) => state.darkMode.theme);
  console.log(1 + +"1");

  return (
    <div className={`${theme && "dark-mode"}`}>
      <div className="container">
        <Header />
        <Search />
        <NotesList />
      </div>
    </div>
  );
}
