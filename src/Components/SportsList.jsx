import { useEffect, useState, useContext } from "react";
// import { SportsContext } from "./SportsContext";

function SportsList () {
  const [data, setData] = useState([]);
  // const {searchKeyword} = useContext(SportsContext);

  // console.log(searchKeyword)

  
  useEffect(() => {
    requestSportsList();
  });
    
  async function requestSportsList() {
    const result = await fetch(`https://raw.githubusercontent.com/dariusk/corpora/master/data/sports/sports.json`);
    const {sports} = await result.json();
    setData(sports)
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