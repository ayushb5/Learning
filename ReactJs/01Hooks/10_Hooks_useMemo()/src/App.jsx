import { useState, useMemo } from 'react'
import './App.css'

function expensiveCalculation(num) {
  console.log("loop started..")
  for (let i = 0; i < 1000000000; i++) {
    //
  }
  return num;
}

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const calculation = expensiveCalculation(number)
  //before using memo we store the return into calculation which may take delay

  //useMemo() avoids running expensive calculations on every render by memoizing (remembering) 
  // the previous result and recalculating only when its dependencies change.
  const memoCalculation = useMemo(() => {
    return expensiveCalculation(number)
  }, [number])

  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }

  return (
    <>
      <div style={cssStyle}>
        <input type='number' step={1} style={{ margin: 10, width: 400, height: 30, fontSize: 25 }}
          onChange={e => { setNumber(Number(e.target.value)) }}
          value={number}
        />
        <br />
        <h1 >Calculation:{memoCalculation}</h1>
        <button
          style={{ border: '2px solid black', margin: 5, fontSize: 25, cursor: 'pointer' }}
          onClick={() => setDark(!dark)}
        >
          Toggle</button>
      </div >
    </>
  )
}

export default App
