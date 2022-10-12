import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './MainPage';
import Circuits from './Circuits';
import StickyFooter from './Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="circuits" element={<Circuits />} />
      </Routes>
    </BrowserRouter>
    

    {/* <MainPage /> */}
    <StickyFooter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
