import React from "react";
import { BookType } from "../../types/bookings";
import { withoutdashes } from "../../utils/convertDate";

interface BookingsItemProps {
  item: BookType;
  onRemove: (id: string) => void;
}

const BookingsItem: React.FC<BookingsItemProps> = ({ item, onRemove }) => {
  const handleOnRemove = () => onRemove(item.id);

  return (
    <>
      <li className="booking">
        <h3 className="booking__title">{item.trip.title}</h3>
        <span className="booking__guests">{item.guests} quests</span>
        <span className="booking__date">{withoutdashes(item.date)} </span>
        <span className="booking__total">{item.trip.price} $ </span>
        <button className="booking__cancel" title="Cancel booking" onClick={handleOnRemove}>
          <span className="visually-hidden">Cancel booking</span>×
        </button>
      </li>
    </>
  );
};

export default BookingsItem;
