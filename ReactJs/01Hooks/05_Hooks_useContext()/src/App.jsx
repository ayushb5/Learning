import UserContext from "./context/usercontext.jsx"
import Parent from './Parent.jsx'
import './App.css'
function App() {

  return (
    <UserContext.Provider value={"John"}>
      <Parent />
    </UserContext.Provider>
  )
}

export default App
