import React from "react";

function ContactList({ contacts, handleEdit, handleDelete }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.email}
          <button onClick={() => handleEdit(contact)}>Edit</button>
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
