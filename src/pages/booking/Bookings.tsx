import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import { fetchData } from "../../request/bookings";
import { BookType } from "../../types/bookings";
import BookingsList from "./BookingsList";

const Bookings = () => {
  const [bookingList, setBookingList] = React.useState<BookType[]>([]);
  const handleRemoveItem = (id: string) => {
    const newList = bookingList.filter((item) => item.id !== id);
    setBookingList(newList);
  };

  React.useEffect(() => {
    (async () => {
      const resp = await fetchData("data/bookingList.json");
      resp.sort((a: BookType, b: BookType) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      setBookingList(resp);
    })();
  }, []);

  return (
    <>
      <Header />
      <MainSection className="bookings-page">
        <BookingsList bookingList={bookingList} setBookingList={handleRemoveItem} />
      </MainSection>

      <Footer />
    </>
  );
};

export default Bookings;
