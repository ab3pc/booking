import React from "react";
import { Loader, MainSection, SearchBar, TripList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllTrips } from "../../store/trips-slice/trips-slice";
import { TripItemType } from "../../types/trip";

const Main: React.FC = () => {

 
  const dispatch = useAppDispatch();

  const {fetchedTrips, error, loading} = useAppSelector(state => state.trips)
  const [filteredTrips, setFilteredTrips] = React.useState<TripItemType[] | []>(fetchedTrips);


  React.useEffect(() => {
    dispatch(getAllTrips())
  
  }, []);
  

  
  return (
     <MainSection className="main">
      {loading ? <Loader/>: <>
      <SearchBar trips={fetchedTrips} setFilteredTrips={setFilteredTrips} />
      <TripList trips={fetchedTrips} />
      </>}
      
    </MainSection>
  );
};
export default Main;
