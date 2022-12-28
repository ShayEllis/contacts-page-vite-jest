import React from "react";

export const ContactForm = (props) => {
  // {
  //   name,
  //   phone, // this is what the defautl arguments were
  //   email,
  //   handleChange
  //   handleSubmit
  // }

  //add value to input fields
  return (
    <form onSubmit={props.handleSubmit}>
      {props.isDuplicate && <h3>Duplicate Name</h3>}
      <label htmlFor='name'>Name</label>
      <input className={props.isDuplicate ? "duplicate" : ""} type='text' id='name' name='name' value={props.name} onChange={props.handleChange} />
      <label htmlFor='phone'>Phone</label>
      <input type='text' id='phone' name='phone' value={props.phone} onChange={props.handleChange} />
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' name='email' value={props.email} onChange={props.handleChange} />
      <input type="submit" value="submit" />
    </form>
  );
};
