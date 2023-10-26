const c = console.log.bind(document)

import "./style.scss"
import { NavLink } from "react-router-dom"

const HomePage = () => {
    return(
        <section id="intro-choose">
            <NavLink className={"chosen-game"} to="/hra">Bez časového omezení</NavLink>
            
            <NavLink className={"chosen-game"} to="/hra-na-cas">S časovým omezením</NavLink>
        </section>
    )
}

export default HomePage