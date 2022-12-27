import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function Root() {
    const [contacts, setContacts] = useState([]); //An array of objects
    const addContact = (name, phone, email) => {
        const newContact = {
            name: name,
            phone: phone,
            email: email
        };
        setContacts(pre => [newContact, ...pre]);
    }

    const [appointments, setAppointments] = useState([]); //An array of objects
    const addAppointment = (title, contact, date, time) => {
        const newAppointment = {
            title: title,
            contact: contact,
            date: date,
            time: time
        }
        setAppointments(pre => [newAppointment, ...pre]);
    }

    const pageProps = {
        contactsPageProps: {
            addContact,
            contacts
        },
        appointmentsPageProps: {
            addAppointment,
            appointments
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        navigate('contacts');
    }, []);

    /* pass array of contacts and addContact callback function to the ContactsPage component */
    /* pass array of appointments and addAppointment callback funtion to the AppointmentsPage */
    return (
        <>
            <nav>
                <NavLink to="contacts" className={(isActive) => isActive ? "active" : ""}>
                Contacts
                </NavLink>
                <NavLink to="appointments" className={(isActive) => isActive ? "active" : ""}>
                Appointments
                </NavLink>
            </nav>
            <main>
                <Outlet context={pageProps} />
            </main>
        </>
    )
}