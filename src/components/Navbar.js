import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="primary-nav">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about' >About</NavLink>
                <NavLink to='/products' >Products</NavLink>
            </nav>
        </>
    )
}

export default Navbar