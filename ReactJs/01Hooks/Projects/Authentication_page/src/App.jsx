import './App.css'
import { useState } from 'react'

function App() {

  const [form, setForm] = useState("login")

  return (
    <>
      {/* Parent Container */}

      <div className='h-screen w-full flex justify-center items-center bg-black'>

        {/* Container for forms */}

        <div className='h-[600px] w-[600px] bg-white '>
          <div className='grid grid-cols-2 gap-2 p-10'>
            <button onClick={() => setForm("login")}
              className={`h-[50px] text-[20px] border hover:cursor-pointer transition hover:bg-green-600 hover:text-white ${form === "login" ? "bg-green-600 text-white" : ""}`} >
              Login
            </button>
            <button onClick={() => setForm("register")}
              className={`h-[50px] text-[20px] border hover:cursor-pointer transition hover:bg-green-600 hover:text-white ${form === "register" ? "bg-green-600 text-white" : ""}`} >
              Register
            </button>
          </div>

          {/* Login Form Start */}

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

          {/* Login Form Complete */}

          {/* Register Form Start */}
          {form === "register" &&
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
          {/* Register Form Complete */}

        </div>
      </div >
    </>
  )
}

export default App
