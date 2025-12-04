function Register({ form }) {
    return (
        <>
            {
                form === "register" &&
                <div className='flex flex-col'>
                    <h1 className='text-[30px] font-bold text-center'>
                        Create an Account
                    </h1>

                    <div className='grid grid-cols-[150px_1fr] p-5'>
                        <label className='text-[25px] font-bold'>Username</label>
                        <input type="text" placeholder="Enter your Username"
                            className='border w-full p-2 rounded shadow-lg' />
                    </div>

                    <div className='grid grid-cols-[150px_1fr] p-5'>
                        <label className='text-[25px] font-bold'>Email</label>
                        <input type="text" placeholder="Enter your Email"
                            className='border w-full p-2 rounded shadow-lg' />
                    </div>

                    <div className='grid grid-cols-[150px_1fr] p-5'>
                        <label className='text-[25px] font-bold'>Password</label>
                        <input type="password" placeholder="Enter your Password"
                            className='border w-full p-2 rounded shadow-lg' />
                    </div>

                    <button className='w-[450px] h-[45px] text-[20px] text-white mx-auto bg-blue-500 hover:cursor-pointer transition hover:bg-green-600 hover:border'>
                        Register
                    </button>

                </div>
            }

        </>
    )
}

export default Register