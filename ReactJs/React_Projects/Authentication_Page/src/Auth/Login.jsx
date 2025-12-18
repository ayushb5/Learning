import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import AuthLayout from "./AuthLayout";
import { NavLink } from "react-router-dom"

function Login() {
    return (
        <>
            <AuthLayout title="Welcome Back!">
                <form>
                    <div className='p-1 flex bg-gray-200 mb-4'>
                        <EnvelopeIcon className='h-6 w-8 mt-2 text-gray-500' />
                        <input type="email" className="bg-gray-200 w-full p-2 border-none outline-none"
                            placeholder="Email Id" required
                        />
                    </div>

                    <div className='p-1 flex bg-gray-200 mb-4'>
                        <LockClosedIcon className='h-6 w-8 mt-2 text-gray-500' />
                        <input type="password" className="bg-gray-200 w-full p-2 border-none outline-none"
                            placeholder="Password" required
                        />
                    </div>

                    <div className='p-1 mb-4'>
                        <NavLink to="/forgot"
                            className=" block text-right text-indigo-600 p-2 hover:underline"
                        >
                            Forgot Password ?
                        </NavLink>
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            type='submit'
                            className="text-center p-2 w-30 text-[18px] h-12 rounded-4xl bg-sky-400 text-black hover:bg-green-500 hover:text-white cursor-pointer transform">Login</button>
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}

export default Login;