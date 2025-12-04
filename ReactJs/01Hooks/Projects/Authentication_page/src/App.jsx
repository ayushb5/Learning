import './App.css'
import Login from './Auth/Login.jsx'
import Register from './Auth/Register.jsx'
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

          <Login form={form} />
          <Register form={form} />

        </div>
      </div >
    </>
  )
}

export default App
