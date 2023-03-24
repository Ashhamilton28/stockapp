import Home from "./components/Home";
import About from "./components/About";
import Stock from "./components/Stock";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
           
  },
  {
    path:"/about",
    element: <About />
  },

  {
    path: "/stocks",
    element: <Dashboard />
  },
  {
    path: "/contact",
    element: <Contact />
  }





]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
