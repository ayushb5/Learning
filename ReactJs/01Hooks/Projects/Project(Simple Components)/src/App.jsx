import { useState } from 'react'
import './App.css'

function App() {

  let [color, setColor] = useState("Red");

  const changeColor = (clr) => {
    setColor(clr)
  }


  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => changeColor("Red")} className='outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-lg' >Red</button>
            <button onClick={() => changeColor("Green")} className='outline-none px-4 py-1 rounded-full bg-green-600 text-white shadow-lg'>Green</button>
            <button onClick={() => changeColor("Blue")} className='outline-none px-4 py-1 rounded-full bg-blue-700 text-white shadow-lg'>Blue</button>
            <button onClick={() => changeColor("White")} className='outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg'>White</button>
            <button onClick={() => changeColor("Black")} className='outline-none px-4 py-1 rounded-full bg-black text-white shadow-lg'>Black</button>
            <button onClick={() => changeColor("Orange")} className='outline-none px-4 py-1 rounded-full bg-orange-300 text-black shadow-lg'>Orange</button>
          </div>

        </div>
      </div >

    </>
  )
}
export default App
