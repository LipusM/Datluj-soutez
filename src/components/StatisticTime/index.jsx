const c = console.log.bind(document);

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import previousPage from "../../assets/arrow-back.svg"

import "./style.scss";

const StatisticTime = () => {
  const [theGames, setTheGames] = useState([]);

  useEffect(() => {
    const loadedGames = JSON.parse(localStorage.getItem("theGames"));

    /* if (loadedGames) { */
    setTheGames(loadedGames);
    /* } */
  }, []);

  return (
    <div id="stage">

      {/* Tabulka pro hru s časem 1 minuta */}
      <table>
        <tbody>
          <tr>
            <th colSpan={3}>
              Hra s časem 1 minuta
            </th>
          </tr>
          <tr>
            <th>Hráč</th>
            <th>Napsaná slova</th>
            <th>Počet chyb</th>
          </tr>
        </tbody>
        {theGames
          .filter((game) => game.selectedTime === 1) // Filtrujeme pouze hry s vybraným časem 1
          .map((game, index) => (
            <tbody key={index}>
              <tr>
                <td>{game.name}</td>
                <td>{game.writtenWords}</td>
                <td>{game.mistakes}</td>
              </tr>
            </tbody>
          ))}
      </table>

      <table>
        <tbody>
          <tr>
            <th colSpan={3}>
              Hra s časem 2 minuty
            </th>
          </tr>
          <tr>
            <th>Hráč</th>
            <th>Napsaná slova</th>
            <th>Počet chyb</th>
          </tr>
        </tbody>
        {theGames
          .filter((game) => game.selectedTime === 2) // Filtrujeme pouze hry s vybraným časem 2
          .map((game, index) => (
            <tbody key={index}>
              <tr>
                <td>{game.name}</td>
                <td>{game.writtenWords}</td>
                <td>{game.mistakes}</td>
              </tr>
            </tbody>
          ))}
      </table>

      <table>
        <tbody>
          <tr>
            <th colSpan={3}>
              Hra s časem 3 minuty
            </th>
          </tr>
          <tr>
            <th>Hráč</th>
            <th>Napsaná slova</th>
            <th>Počet chyb</th>
          </tr>
        </tbody>
        {theGames
          .filter((game) => game.selectedTime === 3) // Filtrujeme pouze hry s vybraným časem 3
          .map((game, index) => (
            <tbody key={index}>
              <tr>
                <td>{game.name}</td>
                <td>{game.writtenWords}</td>
                <td>{game.mistakes}</td>
              </tr>
            </tbody>
          ))}
      </table>

      <nav id="nav-panel">
        <NavLink className="navigation" to="/hra-na-cas">
          <img src={previousPage} alt="" />
        </NavLink>
      </nav>
    </div>
  );
};

export default StatisticTime;
