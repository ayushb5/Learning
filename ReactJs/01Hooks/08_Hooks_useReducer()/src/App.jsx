import { useReducer } from 'react'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, InitialState)

  const incrementCount = () => {
    dispatch({ type: ACTION.INCREMENT })
  }

  const decrementCount = () => {
    dispatch({ type: ACTION.DECREMENT })
  }
  return (
    <>
      <h1>Count:{state.count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </>
  )
}

export default App

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

const InitialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 }
    case ACTION.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state;
  }
}
