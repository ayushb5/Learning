import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <nav
            className="flex justify-center items-center gap-3 bg-orange-300 h-10 text-[18px]"
        >
            <NavLink
                className={({ isActive }) =>
                    `px-4 py-2 transition ${isActive
                        ? "text-white bg-red-600"
                        : "text-black hover:border-b-2 border-sky-600"
                    }`
                }
                to="/">Home</NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-4 py-2 transition ${isActive
                        ? "text-white bg-red-600"
                        : "text-black hover:border-b-2 border-sky-600"
                    }`
                }
                to="/about">About</NavLink>
            <NavLink
                className={({ isActive }) =>
                    `px-4 py-2 transition ${isActive
                        ? "text-white bg-red-600"
                        : "text-black hover:border-b-2 border-sky-600"
                    }`
                }
                to="/contact">Contact Us</NavLink>
        </nav >
    )
}
export default Navbar