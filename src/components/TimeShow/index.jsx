const c = console.log.bind(document)

import "./style.scss"
import { useState } from "react"

import refreshButton from "../../assets/refresh.svg"

const TimeShow = ({timeLeft, restartTime}) => {
    const [rotating, setRotating] = useState(false);

    const handleRotateButtonClick = () => {
        if (!rotating) {
          setRotating(true);
        } else {
            setRotating(false)
        }
      };

    return (
        <div id="time-show">
            <p id="time-text">
                Zbývající čas: {timeLeft}
            </p>
            <div id="restart-button" onClick={handleRotateButtonClick} className={!rotating ? "not-rotate" : ""}>
                <img onClick={restartTime} src={refreshButton} /> 
            </div>
        </div>
    )
}

export default TimeShow