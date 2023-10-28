const c = console.log.bind(document)

import { NavLink } from "react-router-dom"

import "./style.scss"

const StatisticTime = () => {

    return (
        <div id="stage">
            statistika!

            <nav id="nav-panel">
                <NavLink className="navigation" to="/hra-na-cas">Zpět</NavLink>
            </nav>
        </div>
    )

}

export default StatisticTime