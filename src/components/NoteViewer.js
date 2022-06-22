import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";

function NoteViewer() {
  const [displayNote, setDisplayNote] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/notes/${id}`)
      .then((r) => r.json())
      .then((data) => setDisplayNote(data));
  }, [id]);

  const editNote = useHistory();
  const match = useRouteMatch();

  function editNotes() {
    editNote.push(`${match.url}/edit`);
  }

  return (
    <>
      <h2>{displayNote.title}</h2>
      <p>{displayNote.body}</p>
      <button onClick={editNotes}>Edit</button>
    </>
  );
}

export default NoteViewer;
