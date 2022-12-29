import React from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = (props) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='title'>Title</label>
      <input id='title' name='title' type='text' value={props.title} onChange={props.handleChange} />
      <ContactPicker handleChange={props.handleChange} contacts={props.contacts}/>
      <label htmlFor='date'>Date</label>
      <input id='date' name='date' type='date' min={getTodayString()} value={props.date} onChange={props.handleChange} />
      <label htmlFor='time'>Time</label>
      <input id='time' name='time' type='time' value={props.time} onChange={props.handleChange} />
      <input type='submit' value='submit'/>
    </form>
  );
};
