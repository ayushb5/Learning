import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-center p-1 bg-blue-300 gap-5'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
            <NavLink to="/user">User</NavLink>
        </nav>
    )
}

export default Navbar