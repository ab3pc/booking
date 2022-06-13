import React from "react";
import { useParams } from "react-router-dom";
import { Button, MainSection, ModalBookTrip } from "../../components";
import { fetchData } from "../../request/bookings";
import { TripItemType } from "../../types/trip";

const Trip = () => {
  let { tripId } = useParams();
  const [tripItem, setTripItem] = React.useState<TripItemType | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);
  const handleHideModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  React.useEffect(() => {
    (async () => {
      const resp = await fetchData("data/tripList.json");
      const trip = resp.filter((item: TripItemType) => item.id === tripId);
      setTripItem(trip[0]);
    })();
  }, []);

  return (
    <>
      <MainSection className="trip-page">
        <div className="trip">
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
        </div>
      </MainSection>
      {showModal && tripItem && (
        <ModalBookTrip
          title={tripItem.title}
          price={tripItem.price}
          duration={tripItem.duration}
          level={tripItem.level}
          onClose={handleHideModal}
        />
      )}
    </>
  );
};
export default Trip;
