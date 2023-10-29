const c = console.log.bind(document)

import { NavLink } from "react-router-dom"

import refreshButton from "../../assets/refresh.svg"
import previousPage from "../../assets/arrow-back.svg"

import "./style.scss"

const TimeGameRules = () => {
    return (
        <div id="time-game-rules">
            <div id="game-rules">
            <nav id="nav-panel">
                    <NavLink to="/hra-na-cas">
                        <img className="navigation" src={previousPage} alt="" />
                    </NavLink>
                </nav>
                <h3>Pravidla hry s časovým omezením</h3>
                <div className="rules">
                    <ol>
                        <li>Zkontrolujte statisitiku, zda-li již neexistuje hráč se jménem, které si chcete na konci zvolit.
                            Pokud ano, hra nebude uložena.
                        </li>
                        <li>Vyberte časové omezení na 1, 2 nebo 3 minuty.</li>
                        <li>Po spuštění hry uvidíte odpočítávání.</li>
                        <li>V průběhu hry nelze zvolit jiný čas. Hru lze předčasně ukončit klikem na 
                            <img src={refreshButton}/> a hra bude ukončena.
                        </li>
                        <li>
                        Na konci hry se objeví okno pro jméno hráče. Minimální délka jména je 3 znaky. Klikem na odkstaz STATISTIKA uvidíte statistiku her.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TimeGameRules