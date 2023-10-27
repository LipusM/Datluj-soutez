const c = console.log.bind(document)

import "./style.scss"
import classnames from "classnames"

const TimeButtons = ({theTime, setYourTime, makeActive, chooseTime}) => {
    
    return (
        <div className="stage__time">
            {
                theTime.map(time => <button disabled={!makeActive} 
                    className={classnames("stage-time-selection", makeActive ? "active-button" : "non-active-button")} 
                key={time.realTime} onClick={() => setYourTime(time.realTime) }>
                    {time.textTime}
                    </button>)
            }
            <div></div>
        </div>
    )
}

export default TimeButtons

