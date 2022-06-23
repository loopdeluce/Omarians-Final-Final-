import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, handleClick, handleDeleteNote }) {

  const eachNote = notes.map(note => {
    return (
   <NoteItem key={note.id} date ={note.date} id = {note.id} title={note.title} body = {note.body} handleClick = {handleClick} handleDeleteNote = {handleDeleteNote}/>
    )
  })
  
  return (
    <ul>
      {eachNote}
    </ul>
  );
}

export default NoteList;
