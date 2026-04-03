import React,{useState} from "react";
import "../assets/styles/bookingPage.css";
import { FaSearch } from "react-icons/fa";
function SearchForm(props) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
     if (e.key === "Enter") {
      props.setQuery((prev) => ({ ...prev, keyword }));
    }
  };

  const handleClick = () => {
    props.setQuery((prev) => ({ ...prev, keyword }));
    // props.onSubmit(keyword);
  };

  return (
    <div className="search-form">
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="default input example"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
        <FaSearch className="search-icon" onClick={handleClick} />
    </div>
  );
}
export default SearchForm;
