import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const Timer = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)

    return () => {
      clearInterval(Timer)
      //Cleanup runs before the effect runs again
      // AND
      // when the component unmounts.
    }
  }, [])
  return (
    <>
      <h1>{time} in seconds</h1>
    </>
  )
}

export default App
