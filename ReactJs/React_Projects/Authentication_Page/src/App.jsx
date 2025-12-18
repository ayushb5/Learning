import './App.css'
import Signup from './Auth/Signup.jsx'
import Login from './Auth/Login.jsx'
import ForgotPass from './Auth/forgotpass.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/signup" replace />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<ForgotPass />} />
      </Routes>
    </>
  )
}

export default App;