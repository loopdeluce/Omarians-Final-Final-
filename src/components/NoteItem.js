import React from "react";
import{ MdDeleteForever } from "react-icons/md"

function NoteItem({ title, body, id, date, handleClick, handleDeleteNote }) {
  
  function onDeleteClick() {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    .then(handleDeleteNote(id))
  }
  return (
   
    <li onClick = {() => handleClick(id)}>
      <h2>{title}</h2>
      <p>{body.slice(0, 19)}...</p>
      <div className = "note-footer">
        <small>{date}</small>
        <MdDeleteForever className = "delete-button" size='1.3em'  onClick = {onDeleteClick} />
      </div>
    </li>
  );
}

export default NoteItem;

