import { useRef, useState, useEffect } from 'react'
import './App.css'
// UseCase 1- Create mutable variable without causing re-render
function App() {
  const [name, setName] = useState("");
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <input className='p-1 m-2 bg-white'
        onChange={e => { setName(e.target.value) }}
      />
      <br />
      <h1 className='text-white text-xl'>Name: {name}</h1>
      <span className='text-white text-xl'>Renders : {count.current} times</span>
    </div >
  )
}

export default App
