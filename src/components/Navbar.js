import { NavLink} from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about' >About</NavLink>
            </nav>
        </>
    )
}

export default Navbar