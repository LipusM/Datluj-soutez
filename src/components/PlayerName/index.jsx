const c = console.log.bind(document);

import "./style.scss";
import { useState, useEffect } from "react";

const PlayerName = ({ selectName }) => {

  const [inputValue, setInputValue] = useState("")

  //Stav určující 
  const [buttonActive, setButtonActive] = useState(true)

  const submissionName = (name) => {

    setInputValue(name)

    if(name.length > 2){
      setButtonActive(false)
      /* displaySubmission(name) */
    } else {
      setButtonActive(true)
    }
  }

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
        /* onChange={e => inputValue = e.target.value}  */
        onChange={e => submissionName(e.target.value)} 
        type="text" placeholder="Vaše jméno" />
        {/* <button disabled={buttonActive} onClick={() => selectName(inputValue)}>Uložte jméno</button> */}
        <button disabled={buttonActive} onClick={handleButtonClick}>Uložte jméno</button>
      </div>
    </div>
  )

}

export default PlayerName