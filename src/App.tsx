import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Bookings, Main, SignIn, SignUp, Trip } from "./pages";
import { Footer, Header } from "./components";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "./store/store";
import { toggleAuth } from "./store/authorization-slice/authorization-slice";

export default function App() {

  let {auth, fullName} = useAppSelector(state => state.authorization)
  const dispatch = useAppDispatch();
      
   useEffect(() => {
    if(!localStorage.getItem('access_token')) {
      dispatch(toggleAuth(false))
    } else {
      dispatch(toggleAuth(true))
    }
   }, [])

  const token = localStorage.getItem('access_token');
  if(token) auth = true;
  const tempFullName = localStorage.getItem('fullName__bookingService');
  if(tempFullName) fullName = tempFullName

  return (
    <>
      <Header fullName={fullName} isAuth={auth} />
         <Routes>
        <Route path="*" element={auth ? <Main /> : <SignIn/>} />
        <Route path="/sign-in" element={auth ? <Navigate to="/" /> : <SignIn/>} />
        <Route path="/sign-up" element={auth ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/trip/:tripId" element={auth ? <Trip /> : <Navigate to="/" />} />
        <Route path="/bookings" element={auth ? <Bookings /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}
