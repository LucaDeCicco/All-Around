import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './MainPage';
import Circuits from './circuit/Circuits';
import StickyFooter from './Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./NavBar";
// import CircuitCarousel from "./circuit/CircuitCarousel";
import CircuitPage from "./circuit/CircuitPage";
import Resorts from "./resort/Resorts";
import ResortPage from "./resort/ResortPage";
import AddImage from "./AddImage";
import AddCircuit from "./circuit/AddCircuit";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="circuits" element={<Circuits />}/>
          <Route path="/circuit/:id" element={<CircuitPage />}/>
        <Route path="resorts" element={<Resorts />}/>
          <Route path="/resort/:id" element={<ResortPage />}/>
        <Route path="/addImage" element={<AddImage/>}/>
        <Route path="/addCircuit" element={<AddCircuit/>}/>
      </Routes>
    </BrowserRouter>
    <StickyFooter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
