import { EnvelopeIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"

function ForgotPass() {
    return (
        <>
            <div className='min-h-screen flex justify-center items-center bg-blue-600 px-4'>
                <div className="
                w-full 
                bg-white 
                max-w-sm
                sm:max-w-md
                md:max-w-lg
                p-6
                sm:p-8
                ">
                    <h1 className="text-center text-[22px] font-bold text-indigo-700 mb-5">
                        Reset Password
                    </h1>

                    <label className="block mb-3">Please enter your email to receive a password reset link</label>
                    <div className='p-1 flex bg-gray-200 mb-4'>
                        <EnvelopeIcon className='h-6 w-8 mt-2 text-gray-500' />
                        <input type="text" className="bg-gray-200 w-full p-2 border-none outline-none"
                            placeholder="Email Id"
                        />
                    </div>
                    <div className='p-1 mb-4 flex justify-end hover:underline'>
                        <NavLink to="/login"
                            className="flex text-indigo-600 p-2 "
                        >
                            <ArrowLeftCircleIcon className="h-8" />
                            <span className="mt-1">Back to Login</span>
                        </NavLink>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="text-center p-2 w-30 text-[18px] h-12 rounded-4xl bg-sky-400 text-black hover:bg-green-500 hover:text-white cursor-pointer transform">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass;