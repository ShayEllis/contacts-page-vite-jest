import React from "react";
// import { Switch, Route, Redirect, NavLink } from "react-router-dom"; // Old Code
// import { BrowserRouter as Router } from 'react-router-dom'; // Old Code
import { BrowserRouter, Routes, Route, useNavigate, Navigate, NavLink } from 'react-router-dom'; // New Code - May need to modify
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <BrowserRouter>
      <>
        <nav>
          <NavLink to={ROUTES.CONTACTS} className={(isActive) => isActive ? "active" : ""}>
            Contacts
          </NavLink>
          <NavLink to={ROUTES.APPOINTMENTS} className={(isActive) => isActive ? "active" : ""}>
            Appointments
          </NavLink>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to={ROUTES.CONTACTS} />} /> {/* is there a better way to redirect here??? */}
            <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
              {/* Add props to ContactsPage */}
            <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />} />
              {/* Add props to AppointmentsPage */}
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
