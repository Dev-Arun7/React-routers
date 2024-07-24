import { Link, Outlet } from "react-router-dom"

function Products() {
    return (
        <>
            <input type="search" placeholder="Search products" />
            <nav className="primary-nav">
                <Link to='featured' >Featured</Link>
                <Link to='new' > New Products</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products                                                         