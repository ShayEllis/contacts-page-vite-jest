import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function Root() {
    const [contacts, setContacts] = useState([
        {
            name: 'shay',
            phone: '503-384-8355',
            email: 'shay.ellis815@gmail.com'
        },
        {
            name: 'sarah',
            phone: '503-484-7637',
            email: 'sellis815@outlook.com'
        },
        {
            name: 'bella',
            phone: '503-222-8345',
            email: 'bella@gmail.com'
        }
    ]); //An array of objects

    const addContact = (name, phone, email) => {
        const newContact = {
            name,
            phone,
            email
        };
        setContacts(pre => [newContact, ...pre]);
    }

    const [appointments, setAppointments] = useState([
        {
            title: "appointment 1",
            contact: 'dusty',
            date: 'date 1',
            time: 'time 1'
        },        
        {
            title: "appointment 2",
            contact: 'jeff',
            date: 'date 2',
            time: 'time 2'
        },        
        {
            title: "appointment 3",
            contact: 'bill',
            date: 'date 3',
            time: 'time 3'
        }
    ]); //An array of objects
    const addAppointment = (title, contact, date, time) => {
        const newAppointment = {
            title,
            contact,
            date,
            time
        }
        setAppointments(pre => [newAppointment, ...pre]);
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

    /* pass array of contacts and addContact callback function to the ContactsPage component */
    /* pass array of appointments and addAppointment callback funtion to the AppointmentsPage */
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