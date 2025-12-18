import { NavLink } from 'react-router-dom'
function Authtabs() {
    return (
        <div className='flex justify-between gap-4 mt-2 mb-5'>
            <NavLink to="/signup" className={({ isActive }) =>
                `text-center pt-2 text-[18px] w-full h-12 border-b
                ${isActive ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"}`
            }
            >Sign Up
            </NavLink>
            <NavLink to="/login" className={({ isActive }) =>
                `text-center pt-2 text-[18px] w-full h-12 border-b
                ${isActive ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"}`
            }
            >Login
            </NavLink>
        </div >
    )
}

export default Authtabs;