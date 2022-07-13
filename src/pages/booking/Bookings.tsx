import React from "react";
import { ErrorMsg, Loader } from "../../components";
import MainSection from "../../components/MainSection";
import { deleteBookings, deleteBookingsItem, getAllTrips } from "../../store/bookings-slice/bookings-slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import BookingsList from "./BookingsList";

const Bookings = () => {
 // const [bookingList, setBookingList] = React.useState<BookType[]>([]);
  const handleRemoveItem = (id: string) => {
   dispatch(deleteBookings(id));
   dispatch(deleteBookingsItem(id));
  };

  const dispatch = useAppDispatch();
  const {bookings, loading , error} = useAppSelector(state=> state.bookings);
  React.useEffect(() => {
    dispatch(getAllTrips());
  }, []);

  return (
    <>
    {error ? <ErrorMsg {...error}/>: <MainSection className="bookings-page">
        {loading ? <Loader/>:  <BookingsList bookingList={bookings} setBookingList={handleRemoveItem} />}
      </MainSection>}
      
    </>
  );
};

export default Bookings;
