import { useState } from 'react'

import './App.css'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

function App() {

  const [msg, setMsg] = useState("")
  const [chat, setChat] = useState([])

  const sendMsg = () => {
    if (!msg.trim()) return;

    setChat(prev => [...prev, msg]);
    setMsg("");
  }
  return (
    <>
      <div className='h-screen bg-black flex justify-center items-center '>
        <div className="bg-sky-200 w-[500px] h-[600px] flex flex-col p-3">

          <h1 className='text-[30px] font-bold text-center'>Message</h1>

          <div className='flex flex-col items-end flex-1 overflow-y-auto px-2 space-y-2'>
            {chat.map((text, index) => (
              <div key={index} className='flex justify-end mb-2'>
                <p className="bg-green-500 text-white px-3 py-2 rounded-xl">
                  {text}
                </p>
              </div>
            ))}

          </div>

          <div className='flex items-center gap-2 p-3'>

            <input type="text" placeholder='Enter Message'
              className='bg-gray-300 h-10 p-3 flex-1 text-black border rounded'
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMsg();
                }
              }}

            />

            <button className='h-10 px-2 hover:cursor-pointer'
              onClick={sendMsg}
            >
              <PaperAirplaneIcon className="h-5 w-5 hover:text-blue-700 transition transform hover:scale-150" />
            </button>

          </div>

        </div>
      </div >
    </>
  )
}

export default App
