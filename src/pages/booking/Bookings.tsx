import React from "react";
import MainSection from "../../components/MainSection";
import { getAllTrips } from "../../store/bookings-slice/bookings-slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { BookType } from "../../types/bookings";
import BookingsList from "./BookingsList";

const Bookings = () => {
  const [bookingList, setBookingList] = React.useState<BookType[]>([]);
  const handleRemoveItem = (id: string) => {
    const newList = bookingList.filter((item) => item.id !== id);
    setBookingList(newList);
  };
  const dispatch = useAppDispatch();
  const {bookings, loading , error} = useAppSelector(state=> state.bookings)
  React.useEffect(() => {
    // (async () => {
    //   const resp = await fetchData("data/bookingList.json");
    //   resp.sort((a: BookType, b: BookType) => {
    //     return new Date(a.date).getTime() - new Date(b.date).getTime();
    //   });
    //   setBookingList(resp);
    // })();
    dispatch(getAllTrips());

  }, []);
  console.log(bookings)
  return (
    <>
      <MainSection className="bookings-page">
        <BookingsList bookingList={bookingList} setBookingList={handleRemoveItem} />
      </MainSection>
    </>
  );
};

export default Bookings;
