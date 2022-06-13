import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Bookings, Main, SignIn, SignUp, Trip } from "./pages";
import { Footer, Header } from "./components";
import "./styles.css";

export default function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <>
      <Header isAuth={isAuth} />
      <Routes>
        <Route path="*" element={isAuth ? <Main /> : <SignIn formSubmit={setIsAuth} />} />
        <Route path="/sign-in" element={isAuth ? <Navigate to="/" /> : <SignIn formSubmit={setIsAuth} />} />
        <Route path="/sign-up" element={isAuth ? <Navigate to="/" /> : <SignUp formSubmit={setIsAuth} />} />
        <Route path="/trip/:tripId" element={isAuth ? <Trip /> : <Navigate to="/" />} />
        <Route path="/bookings" element={isAuth ? <Bookings /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}
