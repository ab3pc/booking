import React from "react";
import TripCard from "./TripCard";
import { TripItemType } from "../types/trip";

interface TripListType {
  trips: TripItemType[] | [];
}

const TripList: React.FC<TripListType> = ({ trips }) => {
  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        {trips &&
          trips.map((item) => (
            <TripCard
              key={item.id}
              id={item.id}
              title={item.title}
              duration={item.duration}
              price={item.price}
              description={item.description}
              level={item.level}
              image={item.image}
              createdAt={item.createdAt}
            />
          ))}
      </ul>
    </section>
  );
};
export default TripList;
