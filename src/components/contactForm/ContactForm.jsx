import React from "react";

export const ContactForm = (props) => {
 
  return (
    <form onSubmit={props.handleSubmit}>
      {props.isDuplicate && <h3>Duplicate Name</h3>}
      <label htmlFor='name'>Name</label>
      <input className={props.isDuplicate ? "duplicate" : ""} type='text' id='name' name='name' value={props.name} onChange={props.handleChange} pattern='[a-zA-Z]+' />
      <label htmlFor='phone'>Phone</label>
      <input type='text' id='phone' name='phone' value={props.phone} onChange={props.handleChange} pattern='\d{3}-?\d{3}-?\d{4}' />
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' name='email' value={props.email} onChange={props.handleChange} pattern='.+@.+[.].+' />
      <input type="submit" value="submit" />
    </form>
  );
};
