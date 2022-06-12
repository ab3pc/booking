import "./styles.css";
import { useState } from "react";
import Main from "./pages/main/Main";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import Trip from "./pages/trip/Trip";
import Bookings from "./pages/booking/Bookings";

import { Routes, Route } from "react-router-dom";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <Main /> : <SignIn formSubmit={setIsAuth} />}
      />
      <Route path="sing-up" element={<SignUp formSubmit={setIsAuth} />} />
      <Route path="sing-in" element={<SignIn formSubmit={setIsAuth} />} />
      <Route path="trip/:tripId" element={<Trip />} />
      <Route path="bookings" element={<Bookings />} />
    </Routes>
  );
}
