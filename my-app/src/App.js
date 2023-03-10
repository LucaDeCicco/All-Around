import React, {useEffect, useState, useCallback} from "react";
import {Route, Routes, Link} from "react-router-dom";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import CircuitPage from "./circuit/CircuitPage";
import Resorts from "./resort/Resorts";
import ResortPage from "./resort/ResortPage";
import Hotels from "./hotels/Hotels";
import HotelPage from "./hotels/HotelPage";
import AddImage from "./AddImage";
import AddCircuit from "./circuit/AddCircuit";
import AddResort from "./resort/AddResort";
import AddHotel from "./hotels/AddHotel";
import Register from "./components/Register";
import Info from "./components/Info";
import AdminPage from "./components/AdminPage";
import ProfilePage from "./components/ProfilePage";
import StickyFooter from "./Footer";
import ForgotPassword from "./components/forgotPassword";
import ChangeForgotPassword from "./components/ChangeForgotPassword";
import Login2 from "./components/Login2";
import SearchResult from "./components/SearchResult";
import CircuitsPage from "./circuit/CircuitsPage";
import HolidaysPage from "./allProducts/HolidaysPage";
import SuccessPayment from "./payment/SuccessPayment";
import FailedPayment from "./payment/FailedPaayment";

function    App() {

      const parseJwt = (token) => {
            try {
                  return JSON.parse(atob(token.split(".")[1]));
            } catch (e) {
                  return null;
            }
      };

      useEffect(() => {
            const fetcher = async () => {
                  const user = JSON.parse(localStorage.getItem('user'));
                  if (user) {
                        const decodedJwt = parseJwt(user.token);
                        if (decodedJwt.exp * 1000 < Date.now()) {
                              localStorage.removeItem("user");
                              window.location.replace("/login");
                        }
                  }
            };
            fetcher();
      }, )

  return (
      <>
            <NavBar/>
            <div style={{minHeight: "80vh"}}>
                  <Routes>
                        <Route index element={<MainPage />} />
                        <Route path="holidays" element={<HolidaysPage />}/>
                        <Route path="holidays/:page" element={<HolidaysPage />}/>
                        <Route path="circuits" element={<CircuitsPage />}/>
                        <Route path="circuits/:page" element={<CircuitsPage />}/>
                        <Route path="circuits/:page/:country" element={<CircuitsPage />}/>
                        <Route path="/circuit/:id" element={<CircuitPage />}/>
                        <Route path="resorts" element={<Resorts />}/>
                        <Route path="resorts/:page" element={<Resorts />}/>
                        <Route path="/resort/:id" element={<ResortPage />}/>
                        <Route path="hotels" element={<Hotels />}/>
                        <Route path="hotels/:page" element={<Hotels />}/>
                        <Route path="/hotel/:id" element={<HotelPage />}/>
                        <Route path="/addImage" element={<AddImage/>}/>
                        <Route path="/addCircuit" element={<AddCircuit/>}/>
                        <Route path="/AddResort" element={<AddResort/>}/>
                        <Route path="/AddHotel" element={<AddHotel/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login2/>}/>
                        <Route path="/info" element={<Info/>}/>
                        <Route path="/admin" element={<AdminPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                        <Route path="/changeForgotPassword" element={<ChangeForgotPassword/>}/>
                        <Route path="/search/:toSearch" element={<SearchResult />}/>
                        <Route path="/search/:toSearch/:page" element={<SearchResult />}/>
                        <Route path="/plata/efectuata" element={<SuccessPayment/>}/>
                        <Route path="/plata/neefectuata" element={<FailedPayment/>}/>

                  </Routes>
            </div>
            <StickyFooter />
      </>
  );
}

export default App;