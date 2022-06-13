import React from "react";
import { MainSection, SearchBar, TripList } from "../../components";
import { fetchData } from "../../request/bookings";
import { TripItemType } from "../../types/trip";

const Main: React.FC = () => {
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
    <MainSection className="main">
      <SearchBar trips={trips} filteredTrips={filteredTrips} setFilteredTrips={setFilteredTrips} />
      <TripList trips={filteredTrips} />
    </MainSection>
  );
};
export default Main;
