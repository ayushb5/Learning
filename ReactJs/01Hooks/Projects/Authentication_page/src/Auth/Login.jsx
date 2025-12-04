function Login({ form }) {
    return (
        <>
            {form === "login" &&
                <div className='flex flex-col'>
                    <h1 className='text-[30px] font-bold text-center'>
                        Login with Registered account
                    </h1>

                    <div className='grid grid-cols-[150px_1fr] p-5'>
                        <label className='text-[25px] font-bold'>Email</label>
                        <input type="text" placeholder='Enter your registered Email'
                            className='w-full border p-2 rounded shadow-lg' />
                    </div>

                    <div className='grid grid-cols-[150px_1fr] p-5'>
                        <label className='text-[25px] font-bold'>Password</label>
                        <input type="pass" placeholder='Enter your Password'
                            className='w-full border p-2 rounded shadow-lg' />
                    </div>

                    <button className='w-[450px] h-[45px] text-[20px] text-white mx-auto bg-blue-500 hover:cursor-pointer transition hover:bg-green-600 hover:border'>
                        Login
                    </button>
                </div>
            }
        </>
    )
}

export default Login