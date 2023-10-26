const c = console.log.bind(document)

import "./style.scss"

import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <NavLink className={"header-link"} to="/"><h1>Datlování</h1></NavLink>
        </header>
    )
}

export default Header