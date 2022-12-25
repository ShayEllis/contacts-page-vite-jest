import React, { useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function Root() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('contacts');
    }, []);

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
                <Outlet />
            </main>
        </>
    )
}