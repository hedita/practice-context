import { useContext } from "react";
import { SearchKeywordContext } from "./SearchKeywordContext";

function SearchSports () {
  const { searchKeyword, setSearchKeyword } = useContext(SearchKeywordContext);

  return (
    <input 
    type="search"
    placeholder="Search Sports"
    onChange={(e) => setSearchKeyword(e.target.value)}
    />
  )
}

export default SearchSports;