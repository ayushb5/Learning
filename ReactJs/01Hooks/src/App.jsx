import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  const increment=()=>{
    if(counter<20){
      setCount(counter+1);
    }
  }

  const decrement=()=>{
    if(counter>0){
      setCount(counter-1);
    }
  }
  return (
    <>
      <h1>Hello Programmers</h1>
      <h2>Task is to click on Increment or Decrement to check value updation</h2>
      <p>Count is: {counter}</p>
      <button onClick={increment}>Increment Counter</button>
      <button onClick={decrement}>Decrement Counter</button>
    </>
  )
}

export default App
