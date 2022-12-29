import React, { useState, useEffect } from "react";
import { useOutletContext } from 'react-router-dom';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = () => {
  const { contactsProps: { contacts, addContact } } = useOutletContext(); // prop passed by outlet context

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    let nameState = name.toUpperCase().trim();
    if (!contacts) {
      return
    }
    for (let contact of contacts) {
      if (contact.name.toUpperCase().trim() === nameState) {
        setIsDuplicate(true);
        break
      } else {
        setIsDuplicate(false);
      }
     }
  },[name]);

  const handleChange = ({ currentTarget, target }) => {
    if (currentTarget.name === 'name') {
      setName(target.value)
    }
    if (currentTarget.name === 'phone') {
      setPhone(target.value)
    }
    if (currentTarget.name === 'email') {
      setEmail(target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          isDuplicate={isDuplicate}
          name={name}
          phone={phone}
          email={email}
          handleChange={handleChange}
          handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objArr={contacts} />
      </section>
    </div>
  );
};
