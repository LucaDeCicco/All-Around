import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";


document.body.style.background="linear-gradient(#D0E3CC, #FCFDAF)";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
