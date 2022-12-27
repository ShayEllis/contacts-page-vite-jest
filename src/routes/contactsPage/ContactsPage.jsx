import React, { useState, useEffect } from "react";
import { useOutletContext } from 'react-router-dom';
import { ContactForm } from '../../components/contactForm/ContactForm';

/*
ContactsPage Requirements:

-Receive two props:
  -The current list of contacts
  -A callback function for adding a new contact
-Keep track of three local state values: the current name, phone, and email entered into the form
-Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
-Only add a new contact on form submission if it does not duplicate an existing contact’s name
-A successful submission should clear the form
-In the Add Contact section, render a ContactForm with the following passed via props:
  -local state variables
  -local state variable setter functions
  -handleSubmit callback function
-In the Contacts section, render a TileList with the contact array passed via props
*/

export const ContactsPage = () => {
  const { contactsPageProps: { contacts, addContact } } = useOutletContext(); // prop passed by outlet context
  // can use contacts and addContact now


  // Two props - current list of contacts
  //           - callback function for adding new contact

  /*
  Define state variables for 
  contact info and duplicate check
  - these variables will hold what is entered into the form
  */
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);

  const contact = {
    name: name,
    phone: phone,
    email: email
  }

  //check for duplicate name whenever name changes in the form

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          constact={contact}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
