const c = console.log.bind(document);

import "./style.scss";
import { useState } from "react";

const PlayerName = ({ displaySubmission, inputValue }) => {

  return (
    <div id="player-name">
      <div id="player-values">
        <input value={inputValue} 
        onChange={e => inputValue = e.target.value} 
        type="text" placeholder="Vaše jméno" />
        <button onClick={() => displaySubmission(inputValue)}>Uložte jméno</button>
      </div>
    </div>
  )

}

export default PlayerName