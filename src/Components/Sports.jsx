import SportsList from "./SportsList";
import SearchSports from "./SearchSports";
import { useState } from "react";
import { SportsContext } from "./SportsContext";

function Sports () {
  const [sports, setSports] = useState([]);

  return (
    <SportsContext.Provider value={{ sports, setSports }}>
      <SearchSports />
      <SportsList />
    </SportsContext.Provider>
  )
}

export default Sports;