import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import AuthLayout from './AuthLayout'
import { useState } from 'react'

function Signup() {

    const [form, setForm] = useState({
        Name: "",
        Email: "",
        Password: ""
    })

    const handleForm = (e) => {
        e.preventDefault();
        alert(`Hello ${form.Name}, You have registered succesfully`)
        setForm({
            Name: "",
            Email: "",
            Password: ""
        })

    }

    return (
        <>
            <AuthLayout title="Create new Account">
                <form onSubmit={handleForm}>
                    <div className='p-1 flex bg-gray-200 mb-4'>
                        <UserIcon className='h-6 w-8 mt-2 text-gray-500' />
                        <input type="text" className="bg-gray-200 w-full p-2 border-none outline-none"
                            placeholder="Name" required
                            value={form.Name}
                            onChange={e => setForm({
                                ...form,
                                Name: e.target.value
                            })}
                        />
                    </div>

                    <div className='p-1 flex bg-gray-200 mb-4'>
                        <EnvelopeIcon className='h-6 w-8 mt-2 text-gray-500' />
                        <input type="text" className="bg-gray-200 w-full p-2 border-none outline-none"
                            placeholder="Email Id" required
                            value={form.Email}
                            onChange={e => setForm({
                                ...form,
                                Email: e.target.value
                            })}
                        />
                    </div>

                    <div className='p-1 flex bg-gray-200 mb-4'>
                        <LockClosedIcon className='h-6 w-8 mt-2 text-gray-500' />
                        <input type="password" className="bg-gray-200 w-full p-2 border-none outline-none"
                            placeholder="Password" required
                            value={form.Password}
                            onChange={e => setForm({
                                ...form,
                                Password: e.target.value
                            })}
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            type='submit'
                            className="text-center p-2 w-35 text-[18px] h-12 rounded-4xl bg-sky-400 text-black hover:bg-green-500 hover:text-white cursor-pointer transform"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}
export default Signup;