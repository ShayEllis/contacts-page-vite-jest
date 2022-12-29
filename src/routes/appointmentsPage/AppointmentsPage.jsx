import React, { useState } from "react";
import { useOutletContext } from 'react-router-dom';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = () => {
  const { appointmentsProps: { appointments, addAppointment }, contactsProps: { contacts } } = useOutletContext();

  const [title, setTitle] = useState('');
  const [contact, setContaact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChange = ({ currentTarget, target }) => {
    if (currentTarget.name === 'title') {
      setTitle(target.value);
    }
    if (currentTarget.name === 'contacts') {
      setContaact(target.value);
    }
    if (currentTarget.name === 'date') {
      setDate(target.value);
    }
    if (currentTarget.name === 'time') {
      setTime(target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle('');
    setContaact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} contacts={contacts} contact={contact} date={date} time={time} handleChange={handleChange} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objArr={appointments} />
      </section>
    </div>
  );
};
