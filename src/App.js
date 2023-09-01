import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import EditContactForm from "./components/EditContactForm";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleAddContact = async (newContact) => {
    try {
      // Simulate adding a contact by updating the state
      newContact.id = contacts.length + 1; // Assign a temporary ID
      setContacts([...contacts, newContact]);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
  };

  const handleUpdateContact = async (updatedContact) => {
    try {
      // Simulate updating a contact by updating the state
      const updatedContacts = contacts.map((c) =>
        c.id === updatedContact.id ? updatedContact : c
      );
      setContacts(updatedContacts);
      setEditingContact(null);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const handleDeleteContact = async (contactId) => {
    try {
      // Simulate deleting a contact by updating the state
      const updatedContacts = contacts.filter(
        (contact) => contact.id !== contactId
      );
      setContacts(updatedContacts);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="container">
      <h1>Contact List App</h1>
      <ContactList
        contacts={contacts}
        handleEdit={handleEditContact}
        handleDelete={handleDeleteContact}
      />
      {editingContact ? (
        <EditContactForm
          contact={editingContact}
          handleUpdate={handleUpdateContact}
        />
      ) : (
        <AddContactForm handleAdd={handleAddContact} />
      )}
    </div>
  );
}

export default App;
