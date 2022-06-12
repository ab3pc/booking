import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";

const Bookings = () => {
  return (
    <>
      <Header />
      <MainSection className="bookings-page">
        <ul className="bookings__list">
          <li className="booking">
            <h3 className="booking__title">Iceland</h3>
            <span className="booking__guests">2 guests</span>
            <span className="booking__date">13.07.2022</span>
            <span className="booking__total">14000 $</span>
            <button className="booking__cancel" title="Cancel booking">
              <span className="visually-hidden">Cancel booking</span>×
            </button>
          </li>
          <li className="booking">
            <h3 className="booking__title">Iceland</h3>
            <span className="booking__guests">2 guests</span>
            <span className="booking__date">30.09.2022</span>
            <span className="booking__total">14000 $</span>
            <button className="booking__cancel" title="Cancel booking">
              <span className="visually-hidden">Cancel booking</span>×
            </button>
          </li>
          <li className="booking">
            <h3 className="booking__title">Iceland</h3>
            <span className="booking__guests">2 guests</span>
            <span className="booking__date">10.11.2022</span>
            <span className="booking__total">14000 $</span>
            <button className="booking__cancel" title="Cancel booking">
              <span className="visually-hidden">Cancel booking</span>×
            </button>
          </li>
        </ul>
      </MainSection>

      <Footer />
    </>
  );
};

export default Bookings;
