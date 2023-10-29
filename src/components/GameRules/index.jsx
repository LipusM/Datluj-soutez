const c = console.log.bind(document)

import { NavLink } from "react-router-dom"
import previousPage from "../../assets/arrow-back.svg"

import "./style.scss"

const GameRules = () => {
    return (
        <div className="no-time-game-rules">
            <div className="rules">
            <nav className="nav-panel">
                    <NavLink to="/hra">
                        <img className="navigation" src={previousPage} alt="" />
                    </NavLink>
                </nav>
                <h3>Pravidla hry bez časového omezení</h3>
                <div className="rules">
                    <ol>
                        <li>Stačí začít psát na klávesnici a hra se aktivuje.
                        </li>
                        <li>Při chybně napsaném písmenku slova je slovo červeně zvýrazněno.</li>
                        <li>Na obrazovce lze vidět počet napsaných slov a chyb.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default GameRules