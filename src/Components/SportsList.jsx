import { useEffect, useState, useContext } from "react";
import { SearchKeywordContext } from "./SearchKeywordContext";

function SportsList () {
  const [data , setData] = useState([]);
  const {searchKeyword} = useContext(SearchKeywordContext);
  
  useEffect(() => {
    requestSportsList();
  });
    
  async function requestSportsList() {
    const result = await fetch(`https://raw.githubusercontent.com/dariusk/corpora/master/data/sports/sports.json`);
    const {sports} = await result.json();

    if (searchKeyword == "") {
      setData(sports.slice(0, 20));
    } else if (searchKeyword.length >= 3) {
      const results = sports.filter((sport) => {
        return (
          sport.toLowerCase().startsWith(searchKeyword.toLowerCase())
        );
      });
      setData(results); 
    };
  }

  return (
    <ul>
      {data.map((sport, id) => (
        <li key={id}>{sport}</li>
      ))}
    </ul>
  );
}

export default SportsList;