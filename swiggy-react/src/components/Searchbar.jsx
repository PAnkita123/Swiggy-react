import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function SearchBar() {
  const [searchData, setSearchData] = useState("");
  const router = useNavigate();
  console.log(searchData, "searchData");

  function handleChange(e) {
    setSearchData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchData) {
      router(`/search/${searchData}`);
    }
  }

  return (
    <div id="searchbox1">
    <form onSubmit={handleSubmit}>
      <input
        id ="inputfield1"
        type="text"
        placeholder="search for products"
        onChange={handleChange}
        
      />
      <button id="searchsubmit1" type="submit">Search</button>
    </form>
    
    </div>
    
  );
}

export default SearchBar;
