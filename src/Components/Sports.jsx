import SportsList from "./SportsList";
import SearchSports from "./SearchSports";
import { useState } from "react";
// import { SportsContext } from "./SportsContext";

function Sports () {
  // const [searchKeyword, SetSearchKeyword] = useState([]);

  return (
    // <SportsContext.Provider value={{ searchKeyword, SetSearchKeyword }}>
    <>
      <SearchSports />
      <SportsList />
    </>
    // </SportsContext.Provider>
  )
}

export default Sports;