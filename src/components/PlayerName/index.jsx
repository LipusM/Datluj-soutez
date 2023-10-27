const c = console.log.bind(document);

import "./style.scss";
import { useState, useEffect } from "react";

const PlayerName = ({ selectName }) => {

  //Stav aktualizující hodnotu inputu, aby selectName měl pouze aktuální hodnotu
  const [inputValue, setInputValue] = useState("")

  //Stav určující zdali je tlačítko neaktivní či aktivní 
  const [buttonActive, setButtonActive] = useState(true)

  //Fce určujcí jeli tlačítko aktivní/neaktivní. Také aktualizuje stav inputu pro pozdější předání do rodi. komponenty.
  const submissionName = (name) => {
    setInputValue(name)

    if(name.length > 2){
      setButtonActive(false)
    } else {
      setButtonActive(true)
    }
  }

  //Fce posílající aktuální hodnotu inputu zpět do rodičovské komponenty StageTime
  const handleButtonClick = () => {
    selectName(inputValue)
  }

  return (
    <div id="player-name">
      <div>
        <p>Minimálně tři znaky</p>
      </div>
      <div id="player-values">
        <input value={inputValue} 
        onChange={e => submissionName(e.target.value)} 
        type="text" placeholder="Vaše jméno" />
        <button disabled={buttonActive} onClick={handleButtonClick}>Uložte jméno</button>
      </div>
    </div>
  )

}

export default PlayerName