import { useContext } from "react";
import { SportsContext } from "./SportsContext";

function SearchSports () {
  const { sports, setSports } = useContext(SportsContext);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword == "") {
      setSports(sports);
    } else {
      const results = sports.filter((sport) => {
        return (
          sport.toLowerCase().startsWith(keyword.toLowerCase())
        );
      });
      setSports(results);
    }
  };

  return (
    <input 
    type="search"
    placeholder="Search Sports"
    onChange={filter}
    />
  )
}

export default SearchSports;