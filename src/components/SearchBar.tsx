import React, { useState, useEffect } from "react";
import { TripItemType } from "../types/trip";

interface SearchBarProps {
  trips: TripItemType[] | [];
  setFilteredTrips: React.Dispatch<React.SetStateAction<[] | TripItemType[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ trips, setFilteredTrips }) => {
  const allTrips = trips;
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue((prev) => e.target.value);
    const serachTrips = trips.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredTrips(serachTrips);
  };

  useEffect(() => {
    if (!searchValue) {
      setFilteredTrips(allTrips);
    }
  }, [searchValue, allTrips, setFilteredTrips]);

  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <label className="trips-filter__search input">
          <span className="visually-hidden">Search by name</span>
          <input
            name="search"
            type="search"
            placeholder="search by title"
            value={searchValue}
            onChange={handleSearchValue}
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select name="duration">
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select name="level">
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};
export default SearchBar;
