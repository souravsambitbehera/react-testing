import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { router } from './App';
import reportWebVitals from './reportWebVitals';
import TestOne from './components/TestOne';
import { RouterProvider } from 'react-router-dom';
import Three from './mui_components/Three';
import SecondTesting from './testing/SecondTesting';
import ForthTesting from './testing/ForthTesting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SecondTesting />
    {/* <ForthTesting /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
