import { useRef, useLayoutEffect, useEffect } from 'react'
import './App.css'

function App() {
  const div1ref = useRef();//For useLayoutEffect
  const div2ref = useRef();//For useEffect

  //Runs before paint
  useLayoutEffect(() => {
    div1ref.current.style.backgroundColor = 'lightgreen'
  }, [])

  //Runs after paint
  useEffect(() => {
    div2ref.current.style.backgroundColor = 'black'
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div ref={div1ref}
        style={{ height: 500, width: 400, padding: 10, margin: 5, border: "3px solid black" }}>
        <h1 style={{ textAlign: 'center' }}>useLayoutEffect</h1>
      </div>

      <div ref={div2ref}
        style={{ height: 500, width: 400, padding: 10, margin: 5, border: "3px solid black", color: "white" }}>
        <h1 style={{ textAlign: 'center' }}>useEffect</h1>
      </div>

    </div>
  )
}

export default App
