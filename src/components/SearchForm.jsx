import React from "react";
import "../assets/styles/bookingPage.css";
import { FaSearch } from "react-icons/fa";
function SearchForm() {
  return (
    <div className="search-form">
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="default input example"
      ></input>
        <FaSearch className="search-icon" />
    </div>
  );
}
export default SearchForm;
