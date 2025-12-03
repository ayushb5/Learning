import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Question from './Interview_que/question.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Question />
  </StrictMode>,
)
