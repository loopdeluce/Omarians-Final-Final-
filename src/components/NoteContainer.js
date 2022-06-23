import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useHistory } from "react-router-dom";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((r) => r.json())
      .then((data) => setNotes(data));
  }, []);

  const history = useHistory();

  function handleClick(noteId) {
    history.push(`/${noteId}`);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleAddNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function handleEditSubmit(editedNote) {
    const editedNotes = notes.map((note) => {
      if (note.id === editedNote.id) {
        return editedNote;
      } else {
        return note;
      }
    });
    setNotes(editedNotes);
    history.push(`/${editedNote.id}`);
  }

  function handleSort(sortBy) {
    setSortBy(sortBy);
  }

  function handleDeleteNote(id) {
    const undeletedNotes = notes.filter((note) => note.id !== id)
    setNotes(undeletedNotes);
  }
  

  const notesCopy = [...notes];
  const filteredNotes = notesCopy
    .filter((val) => {
      return val.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((notesCopy1, notesCopy2) => {
      if (sortBy === "aToZ") {
        return notesCopy1.title
          .toLowerCase()
          .localeCompare(notesCopy2.title.toLowerCase());
      } else if (sortBy === "zToA") {
        return notesCopy2.title
          .toLowerCase()
          .localeCompare(notesCopy1.title.toLowerCase());
      } else {
        return 0;
      }
    });



  return (
    <>
      <Search
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        handleSort={handleSort}
      />
      <div className="container">
        <Sidebar
          notes={filteredNotes}
          handleClick={handleClick}
          handleAddNote={handleAddNote}
          handleDeleteNote = {handleDeleteNote}
        />
        <Content handleEditSubmit={handleEditSubmit} />
      </div>
    </>
  );
}

export default NoteContainer;
