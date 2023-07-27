import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.scss";
import Select from "react-select";

function Searchbar({ onSearch, setFilter, filter }) {
  const options = [
    { value: "Name", label: "Name" },
    { value: "Position", label: "Position" },
    { value: "Office", label: "Office" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Calling the onSearch callback with the entered search term
  };
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#2b2b2b",
      border: "none",
    }),
  };

  return (
    <div className="search-bar-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
      <div className="filter">
        <Select
          styles={colorStyles}
          className="filter"
          options={options}
          defaultValue={filter}
          placeholder="Filter"
          onChange={setFilter}
          isMulti
        />
      </div>
    </div>
  );
}

export default Searchbar;
