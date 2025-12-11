import { useState, useRef, useEffect } from 'react';
import './App.css'

//usecase2 for useRef- Allows direct access to DOM elements
function App() {
  const [length, setLength] = useState("");
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = () => {
    const value = inputRef.current.value
    setLength(value.length)
  }

  return (
    <>
      <input type='text' ref={inputRef}
        className='h-9 w-80 p-2 border'
        onChange={handleChange}
      />
      <h1 className='mt-3 text-[20px]'>Length: {length}</h1>
    </>
  )
}

export default App
