import React, { useState } from "react";

function EditContactForm({ contact, handleUpdate }) {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate({ ...contact, name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditContactForm;
