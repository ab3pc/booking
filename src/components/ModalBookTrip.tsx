import React from "react";
import { getDate } from "../utils/getActualDate";
import Button from "./Button";

interface MadalTripProps {
  title: string;
  price: number;
  duration: number;
  level: string;
  onClose: () => void;
}

const ModalBookTrip: React.FC<MadalTripProps> = ({ title, price, duration, level, onClose }) => {
  const initialDate = getDate();

  const [date, setDate] = React.useState<string>(initialDate);
  const [numOfQuests, setNumOfQuests] = React.useState<string>("1");

  const handleDateOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumOfQuests(e.target.value);
  };

  return (
    <div>
      <div className="modal">
        <div className="trip-popup">
          <button className="trip-popup__close" onClick={onClose}>
            ×
          </button>
          <form className="trip-popup__form" autoComplete="off">
            <div className="trip-info">
              <h3 className="trip-info__title">{title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration">
                  <strong>{duration}</strong> days
                </span>
                <span className="trip-info__level">{level}</span>
              </div>
            </div>
            <label className="trip-popup__input input">
              <span className="input__heading">Date</span>
              <input name="date" type="date" required min={date} />
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Number of guests</span>
              <input
                name="guests"
                type="number"
                min="1"
                max="10"
                value={numOfQuests}
                required
                onChange={handleDateOnChange}
              />
            </label>
            <span className="trip-popup__total">
              Total: <output className="trip-popup__total-value">{price * Number(numOfQuests)} $</output>
            </span>
            <Button title="Book a trip" type="button" onClick={onClose} />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ModalBookTrip;
