import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Searchbar from "./Components/SearchBar/Searchbar";
import Table from "./Components/Table/Table";
import { data } from "./Data/data";
import Pagination from "./Components/Pagination/Pagination";

const App = () => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(""); // State to hold the selected filter value
  const recordsPerPage = 5; // Set the number of records to display per page (configurable)

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1); // Reset the current page to 1 when the search term or selected filter changes
  };

  // Filter the data based on the search term and selected filter
  const filteredData = data.filter((item) => {
    if (filter.length > 0) {
      return filter.some((f) =>
        item[f.value].toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return columns.some((column) =>
        item[column].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  // Calculate the total number of pages based on the filtered data
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  // Calculate the index of the first and last record of the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  return (
    <Router>
      <div className="app">
        <Searchbar
          onSearch={handleSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <Table data={currentRecords} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Router>
  );
};

export default App;
