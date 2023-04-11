import { useContext } from "react";
import { SearchKeywordContext } from "../context/SearchKeywordContext";
import "./SearchSports.scss";

function SearchSports () {
  const { searchKeyword, setSearchKeyword } = useContext(SearchKeywordContext);

  return (
    <input 
    type="search"
    placeholder="Search Sports"
    onChange={(e) => setSearchKeyword(e.target.value)}
    className="search-input"
    />
  )
}

export default SearchSports;