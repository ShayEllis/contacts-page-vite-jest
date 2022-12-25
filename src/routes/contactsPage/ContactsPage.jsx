import React, { useState } from "react";
import ContactForm from '../../components/contactForm/ContactForm';

export const ContactsPage = () => {
  // Two props - current list of contacts
  //           - callback function for adding new contact

  /*
  Define state variables for 
  contact info and duplicate check
  - these variables will hold what is entered into the form
  */
  const [name, setName] = useState([]); // Array of objects
  const [phone, setPhone] = useState([]); // Array of objects
  const [email, setEmail] = useState([]); // Array of objects

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
          name={name}
          phone={phone}
          email={email}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
