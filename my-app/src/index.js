import React, {useEffect, useState} from 'react';
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
import Hotels from "./hotels/Hotels";
import HotelPage from "./hotels/HotelPage";
import AddHotel from "./hotels/AddHotel";
import Register from "./components/Register";
import Login from "./components/Login";
import Info from "./components/Info";
import AdminPage from "./components/AdminPage";
import ProfilePage from "./components/ProfilePage";
import App from "./App";

// const [loading, setLoading] = useState(false);


// background: linear-gradient(
//     106.37deg,
//     #ffe1bc 29.63%,
//     #ffcfd1 51.55%,
//     #f3c6f1 90.85%
// );

// document.body.style.backgroundColor='#F7FFDD';
// document.body.style.background="linear-gradient(#e66465, #9198e5)";
// document.body.style.background="linear-gradient(#FCFDAF, #D0E3CC)";
document.body.style.background="linear-gradient(#D0E3CC, #FCFDAF)";

// document.body.style.backgroundColor='lightblue';
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//         <NavBar/>
//       <div style={{minHeight: "80vh"}}>
//         <Routes>
//           <Route index element={<MainPage />} />
//           <Route path="circuits" element={<Circuits />}/>
//             <Route path="/circuit/:id" element={<CircuitPage />}/>
//           <Route path="resorts" element={<Resorts />}/>
//             <Route path="/resort/:id" element={<ResortPage />}/>
//           <Route path="hotels" element={<Hotels />}/>
//             <Route path="/hotel/:id" element={<HotelPage />}/>
//           <Route path="/addImage" element={<AddImage/>}/>
//           <Route path="/addCircuit" element={<AddCircuit/>}/>
//           <Route path="/AddResort" element={<AddResort/>}/>
//           <Route path="/AddHotel" element={<AddHotel/>}/>
//           <Route path="/register" element={<Register/>}/>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/info" element={<Info/>}/>
//           <Route path="/admin" element={<AdminPage/>}/>
//           <Route path="/profile" element={<ProfilePage/>}/>
//         </Routes>
//       </div>
//         <StickyFooter />
//         {/*{newFooter()}*/}
//     </BrowserRouter>
//
//   </React.StrictMode>
// );

root.render(
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
