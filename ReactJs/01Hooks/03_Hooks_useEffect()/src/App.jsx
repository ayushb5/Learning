import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [otherCount, setOtherCount] = useState(5)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  // variation 1- useEffect() without dependencies
  // useEffect(() => {
  //   document.title = `${count}`
  // })

  //output- It updates title because it runs on every render

  //variation 2- useEffect() with emtpy array

  // useEffect(() => {
  //   document.title = `${count}`;
  // }, [])

  //output- It will not update title because it run only once (when component loads)

  //variation 3- useEffect() with variable

  useEffect(() => {
    document.title = `${otherCount}`
  }, [otherCount])

  //output- this will update only other count i.e multiple of 5 in title but not update title with {count}


  return (
    <div>
      <h1>{count} times clicked</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br />
      <h1>Other Counter: {otherCount}</h1>
      <button onClick={() => { setOtherCount(otherCount + 5) }}>Increment by 5</button>
    </div>
  )
}

export default App
