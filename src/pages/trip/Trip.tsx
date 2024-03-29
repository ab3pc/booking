import React from "react";
import { useParams } from "react-router-dom";
import { Button, ErrorMsg, Loader, MainSection, ModalBookTrip } from "../../components";
import { TripItemType } from "../../types/trip";
import TripsRequests from "../../request/trips/trips"
import AuthRequests from "../../request/auth/auth"
import { useAppDispatch, useAppSelector } from "../../store/store";
import { bookAtrip } from "../../store/bookings-slice/bookings-slice";
import { BookTripBodyType } from "../../request/bookings/types";
import { getTrip } from "../../store/trips-slice/trips-slice";

const Trip = () => {

  let { tripId } = useParams();
  const [tripItem, setTripItem] = React.useState<TripItemType | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [userID, setuserID] = React.useState<string>('');
  const dispath = useAppDispatch();
  const {loading, error} = useAppSelector(state => state.trips)
  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);
  const handleHideModal = React.useCallback(() => {
    setShowModal(false);
  }, []);
 
  React.useEffect(() => {
    (async () => {
      //const data = await TripsRequests.getTripByID(tripId!)
      const data = await dispath(getTrip(tripId!))
      setTripItem(data.payload)
      const userID = await AuthRequests.getUserId();
      setuserID(userID.data.id)
   })()
   
 }, []);

  const handleOnSubmit = async (date:string, guests:number) => {
      const body:BookTripBodyType = {
      tripId: tripId!,
      guests: guests,
      date: date,
      userId:userID
    }
    const data = await dispath(bookAtrip(body));
    if(data.payload.id) {
      handleHideModal();
    }  
  }


  return (
    <> {error ? <ErrorMsg {...error}/>:  <MainSection className="trip-page">
    {loading ? <Loader/>:<div className="trip">
      {tripItem && <img src={tripItem.image} className="trip__img" alt={`trip`} />}

      <div className="trip__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{tripItem && tripItem.title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration">
              <strong>{tripItem && tripItem.duration}</strong> days
            </span>
            <span className="trip-info__level">{tripItem && tripItem.level}</span>
          </div>
        </div>
        <div className="trip__description">{tripItem && tripItem.description}</div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value"> {tripItem && tripItem.price}$</strong>
        </div>
        <Button title="Book a trip" styles="trip__button" onClick={handleShowModal} type="button" />
      </div>
    </div>}
   
  </MainSection>}
     
      {showModal && tripItem && (<ModalBookTrip
          title={tripItem.title}
          price={tripItem.price}
          duration={tripItem.duration}
          level={tripItem.level}
          onClose={handleHideModal}
          formSubmit = {handleOnSubmit}
          />
       
      )}
    </>
  );
};
export default Trip;
