import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function Root() {
    const [contacts, setContacts] = useState();

    const addContact = (name, phone, email) => {
        const newContact = {
            name,
            phone,
            email
        };
        setContacts(pre => {
            if (!pre) {
                return [newContact];
            }
            return [newContact, ...pre];
        });
    }

    const [appointments, setAppointments] = useState([]);
    const addAppointment = (title, contact, date, time) => {
        const newAppointment = {
            title,
            contact,
            date,
            time
        }
        setAppointments(pre => {
            if (!pre) {
                return [newAppointment];
            }
            return [newAppointment, ...pre];
        });
    }

    const pageProps = {
        contactsProps: {
            addContact,
            contacts
        },
        appointmentsProps: {
            addAppointment,
            appointments
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        navigate('contacts');
    }, []);

    return (
        <>
            <nav>
                <NavLink to="contacts" className={({ isActive }) => isActive ? "active" : ""}>
                Contacts
                </NavLink>
                <NavLink to="appointments" className={({ isActive }) => isActive ? "active" : ""}>
                Appointments
                </NavLink>
            </nav>
            <main>
                <Outlet context={pageProps} />
            </main>
        </>
    )
}