import { useEffect, useState, useContext } from "react";
import { SportsContext } from "./SportsContext";

function SportsList () {
  const {sports, setSports} = useContext(SportsContext);
  
  useEffect(() => {
    requestSportsList();
  });
    
  async function requestSportsList() {
    const result = await fetch(`https://raw.githubusercontent.com/dariusk/corpora/master/data/sports/sports.json`);
    const {sports} = await result.json();
    setSports(sports)
  }

  return (
    <ul>
      {sports.map((sport, id) => (
        <li key={id}>{sport}</li>
      ))}
    </ul>
  );
}

export default SportsList;