import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function NoteEditor({ handleEditSubmit }) {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/notes/${id}`)
      .then((r) => r.json())
      .then((data) => setFormData(data));
  }, [id]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => handleEditSubmit(data));
  }

  function handleCancelClick() {
    history.push(`/${id}`);
  }

  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea name="body" value={formData.body} onChange={handleChange} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteEditor;
