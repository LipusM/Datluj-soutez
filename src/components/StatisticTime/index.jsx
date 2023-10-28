const c = console.log.bind(document);

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import "./style.scss";

const StatisticTime = () => {
  const [theGames, setTheGames] = useState([]);

  useEffect(() => {
    const theGames = JSON.parse(localStorage.getItem("theGames"));

    if (theGames) {
      setTheGames(oldGames => [...oldGames, theGames]);
    }
  }, [theGames]);

  return (
    <div id="stage">

      {/* {theGames.map((game, index) => (
        <div key={index}>
          <p>Name: {game.name}</p>
          <p>Mistakes: {game.mistakes}</p>
          <p>Written Words: {game.writtenWords}</p>
          <p>Selected Time: {game.selectedTime}</p>
        </div>
      ))} */}
          {theGames
      .filter(game => game.name && game.name.length > 2)
      .map((game, index) => (
        <div key={index}>
          <p>Name: {game.name}</p>
          <p>Mistakes: {game.mistakes}</p>
          <p>Written Words: {game.writtenWords}</p>
          <p>Selected Time: {game.selectedTime}</p>
        </div>
      ))}

      <nav id="nav-panel">
        <NavLink className="navigation" to="/hra-na-cas">
          Zpět
        </NavLink>
      </nav>
    </div>
  );
};

export default StatisticTime;
