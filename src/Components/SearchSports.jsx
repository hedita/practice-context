import React, { useContext } from "react";
import { useState } from "react";
import { SportsContext } from "./SportsContext";

function SearchSports () {
  const [searchKeyword, setSearchKeyword] = useState(SportsContext);

  return (
    <input 
    type="search"
    placeholder="Search Sports"
    onChange={(e) => setSearchKeyword(e.target.value)}
    />
  )
}

export default SearchSports;