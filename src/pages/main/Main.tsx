import React from "react";

import { ErrorMsg, Loader, MainSection, SearchBar, TripList } from "../../components";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllTrips } from "../../store/trips-slice/trips-slice";
import { TripItemType } from "../../types/trip";

const Main: React.FC = () => {

  const dispatch = useAppDispatch();
  const { error, loading} = useAppSelector(state => state.trips)
  const [filteredTrips, setFilteredTrips] = React.useState<TripItemType[] | []>([]);
  const [fetchedTrips, setFetchedTrips] = React.useState<TripItemType[] | []>([]);


  React.useEffect(() => {
    (async() => {
     const data = await dispatch(getAllTrips())
    setFilteredTrips(data.payload)
    setFetchedTrips(data.payload)
    })()
   }, []);
 
  return (
    <> {error ? <ErrorMsg {...error}/>: <MainSection className="main">
      {loading ? <Loader/>: <>
      <SearchBar trips={fetchedTrips} setFilteredTrips={setFilteredTrips} />
      <TripList trips={filteredTrips} />
          </>}
       </MainSection>}
    </>
   
  );
};
export default Main;
