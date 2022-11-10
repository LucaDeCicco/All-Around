import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './MainPage';
import Circuits from './circuit/Circuits';
import StickyFooter from './Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./NavBar";
import CircuitPage from "./circuit/CircuitPage";
import Resorts from "./resort/Resorts";
import ResortPage from "./resort/ResortPage";
import AddImage from "./AddImage";
import AddCircuit from "./circuit/AddCircuit";
import AddResort from "./resort/AddResort";
// import NewFooter from "./components/NewFooter";
import {newFooter} from "./components/NewFooter";
import Hotels from "./hotels/Hotels";
import HotelPage from "./hotels/HotelPage";
import AddHotel from "./hotels/AddHotel";
import Register from "./components/Register";
import Login from "./components/Login";



// document.body.style.backgroundColor = rgb(197, 235, 195);
document.body.style.backgroundColor='#CED4DA';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBar/>
      <div style={{minHeight: "70vh"}}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="circuits" element={<Circuits />}/>
            <Route path="/circuit/:id" element={<CircuitPage />}/>
          <Route path="resorts" element={<Resorts />}/>
            <Route path="/resort/:id" element={<ResortPage />}/>
          <Route path="hotels" element={<Hotels />}/>
            <Route path="/hotel/:id" element={<HotelPage />}/>
          <Route path="/addImage" element={<AddImage/>}/>
          <Route path="/addCircuit" element={<AddCircuit/>}/>
          <Route path="/AddResort" element={<AddResort/>}/>
          <Route path="/AddHotel" element={<AddHotel/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
        <StickyFooter />
        {/*{newFooter()}*/}
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
