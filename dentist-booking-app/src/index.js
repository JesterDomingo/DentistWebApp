import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Booking from "./pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);