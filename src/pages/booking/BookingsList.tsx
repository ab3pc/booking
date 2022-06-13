import React from "react";
import { BookType } from "../../types/bookings";
import BookingsItem from "./BookingsItem";

interface BookingListProps {
  bookingList: BookType[];
  setBookingList: (id: string) => void;
}

const BookingsList: React.FC<BookingListProps> = ({ bookingList, setBookingList }) => {
  return (
    <ul className="bookings__list">
      {bookingList && bookingList.map((item) => <BookingsItem key={item.id} item={item} onRemove={setBookingList} />)}
    </ul>
  );
};

export default BookingsList;
