import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>Users List</h1>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default App
