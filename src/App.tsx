import "./styles.css";
import { useState } from "react";
import React from "react";
import Main from "./pages/main/Main";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import Trip from "./pages/trip/Trip";
import Bookings from "./pages/booking/Bookings";

import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={isAuth ? <Main isAuth={isAuth} /> : <SignIn isAuth={isAuth} formSubmit={setIsAuth} />}
        />
        <Route
          path="/sign-in"
          element={isAuth ? <Main isAuth={isAuth} /> : <SignIn isAuth={isAuth} formSubmit={setIsAuth} />}
        />
        <Route
          path="/sign-up"
          element={isAuth ? <Main isAuth={isAuth} /> : <SignUp isAuth={isAuth} formSubmit={setIsAuth} />}
        />
        <Route path="/trip/:tripId" element={isAuth ? <Trip /> : <Navigate to="/" />} />
        <Route path="/bookings" element={isAuth ? <Bookings /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}
