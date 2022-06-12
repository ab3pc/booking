import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TripList from "../../components/TripList";
import SearchBar from "../../components/SearchBar";
import { fetchData } from "../../request/bookings";
import { TripItemType } from "../../types/trip";

interface MainProps {
  isAuth: boolean;
}

const Main: React.FC<MainProps> = ({ isAuth }) => {
  const [trips, setTrips] = React.useState<TripItemType[] | []>([]);
  const [filteredTrips, setFilteredTrips] = React.useState<TripItemType[] | []>([]);

  React.useEffect(() => {
    (async () => {
      const resp = await fetchData("data/tripList.json");
      setTrips(resp);
      setFilteredTrips(resp);
    })();
  }, []);

  return (
    <div className="main">
      <Header isAuth={isAuth} />

      <main>
        <h1 className="visually-hidden">Travel App</h1>
        <SearchBar trips={trips} setFilteredTrips={setFilteredTrips} />
        <TripList trips={filteredTrips} />
      </main>
      <Footer />
    </div>
  );
};
export default Main;
