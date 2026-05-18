import React,{useState} from "react";
import "../assets/styles/bookingPage.css";
import { FaSearch } from "react-icons/fa";
function SearchForm(props) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (typeof props.setQuery === "function") {
      props.setQuery((prev) => ({ ...prev, keyword }));
    }

    if (typeof props.onSubmit === "function") {
      props.onSubmit(keyword);
    }
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
     if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClick = () => {
    handleSearch();
  };

  return (
    <div className="search-form">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="default input example"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
        <FaSearch className="search-icon" onClick={handleClick} />
    </div>
  );
}
export default SearchForm;
