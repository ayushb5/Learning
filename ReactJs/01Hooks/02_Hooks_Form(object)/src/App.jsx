import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    studName: "John",
    studRoll: 1,
    stud_Current_yr: "Second Year"
  })

  return (
    <>
      <div className='p-5'>
        <label>Student Name :-
          <input type='text'
            value={form.studName}
            className='border p-1 m-2'
            onChange={e => {
              setForm({
                ...form,
                studName: e.target.value
              })
            }}
          />
        </label>
        <br />
        <label>Student Roll Number :
          <input type="number"
            value={form.studRoll}
            className='border p-1 m-2'
            onChange={e => {
              setForm({
                ...form,
                studRoll: e.target.value
              })
            }}
          />
        </label>
        <br />
        <label>Currently studying in :-
          <input type="text"
            value={form.stud_Current_yr}
            className='border p-1 m-2'
            onChange={e => {
              setForm({
                ...form,
                stud_Current_yr: e.target.value
              })
            }}
          />
        </label>
        <br />
        <br />
        <p>
          {form.studName}{''}<br />
          {form.studRoll}{''}<br />
          {(form.stud_Current_yr)}
        </p>
      </div>
    </>
  )
}

export default App
