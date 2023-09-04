import React from "react";
import "../App.css";

function ContactList({ contacts, handleEdit, handleDelete }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <div className="user-container">
          <li key={contact.id}>
            <div className="user-details">
              {contact.name} - {contact.email}
            </div>

            <button className="edit-btn" onClick={() => handleEdit(contact)}>
              Edit
            </button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        </div>
      ))}
    </ul>
  );
}

export default ContactList;
