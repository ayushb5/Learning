import { useState, useCallback } from 'react'
import './App.css'
import PrintTable from './PrintTable';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const calculateTable = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4, number * 5]
  }, [number])

  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }

  return (
    <>
      <div style={cssStyle}>
        <h1>Table</h1>
        <input type='number' step={1}
          onChange={e => setNumber(Number(e.target.value))}
          style={{ height: 30, width: 280, border: '2px solid black', fontSize: 20 }} />
        <br />
        <br />
        <PrintTable calculateTable={calculateTable} />
        <button
          style={{ height: 40, width: 80 }}
          onClick={() => setDark(!dark)}
        >Toggle</button>
      </div>
    </>
  )
}

export default App