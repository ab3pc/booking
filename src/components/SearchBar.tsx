import React, { useState, useEffect } from "react";
import { TripItemType } from "../types/trip";
import { fullSearch, initilStateTypes } from "../utils/searchLogic";

interface SearchBarProps {
  trips: TripItemType[] | [];
  filteredTrips: TripItemType[] | [];
  setFilteredTrips: React.Dispatch<React.SetStateAction<[] | TripItemType[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ trips, filteredTrips, setFilteredTrips }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectLevel, setSelectLevel] = useState<string>("");
  const [selectDuration, setSelectDuration] = useState<string>("");

  const initilState: initilStateTypes = {
    originalset: [...trips],
    duration: selectDuration,
    level: selectLevel,
    inputValue: searchValue,
  };

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue((prev) => e.target.value);

    let searchValues = {
      ...initilState,
      inputValue: e.target.value,
    };
    const filtered = fullSearch(searchValues);
    setFilteredTrips(filtered);
  };

  const handleDurationSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectDuration(e.target.value);

    let searchValues = {
      ...initilState,
      duration: e.target.value,
    };
    const filtered = fullSearch(searchValues);
    setFilteredTrips(filtered);
  };

  const handleLevelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectLevel(e.target.value);
    let searchValues = {
      ...initilState,
      level: e.target.value,
    };
    const filtered = fullSearch(searchValues);
    setFilteredTrips(filtered);
  };

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
            // value={searchValues.inputValue}
            onChange={handleSearchValue}
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select name="duration" onChange={handleDurationSelect}>
            <option value="0">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select name="level" onChange={handleLevelSelect}>
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
