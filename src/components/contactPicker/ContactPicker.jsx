import React from "react";

export const ContactPicker = (props) => {

  return (
    <>
      <label htmlFor='contacts'>Select a contact</label>
      <select name='contacts' id='contacts' onChange={props.handleChange}>
        <option value='' hidden>Select a Contact</option>
                {props.contacts ? props.contacts.map(contact => <option key={contact.name} value={contact.name}>{contact.name}</option>) : ''}
      </select>
    </>
  );
};
