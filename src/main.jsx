import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/root';
import { ContactsPage } from "./routes/contactsPage/ContactsPage";
import { AppointmentsPage } from "./routes/appointmentsPage/AppointmentsPage";
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'contacts',
                element: <ContactsPage />
            },
            {
                path: 'appointments',
                element: <AppointmentsPage />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
