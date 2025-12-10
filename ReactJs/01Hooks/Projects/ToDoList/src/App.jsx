import { useState } from 'react'
import './App.css'
import { ArrowPathIcon, CheckIcon, TrashIcon } from "@heroicons/react/24/outline";


function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [inprogress, setInprogress] = useState([])
  const [completed, setCompleted] = useState([])

  const addTasks = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task])
      setTask("")
    }
  }

  const addInProgress = (item) => {
    setInprogress([...inprogress, item])
  }

  const addCompleted = (item) => {
    setCompleted([...completed, item])
  }

  const removeTask = (item, index, from) => {
    if (from === "tasks") {
      setTasks((prev) => prev.filter((_, i) => i !== index))
    }
    if (from === "inprogress") {
      setInprogress(prev => prev.filter(t => t !== item));
    }
  }

  return (
    <>
      <div className='columns-2 m-5'>
        <div className='Todo border p-2 bg-teal-500 flex flex-col items-center break-inside-avoid'>
          <h1 className='text-white font-bold text-center text-[40px]'>ToDo List</h1>
          <div className='flex justify-center gap-2'>
            <input type="text" placeholder='Enter tasks here..'
              className='border p-2 bg-white w-[500px]'
              value={task}
              onChange={(e) => (
                setTask(e.target.value)
              )}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  addTasks();
                }
              }}
            >
            </input>

            <button className='p-2 border bg-white hover:cursor-pointer transform hover:bg-blue-500 hover:text-white'
              onClick={addTasks}
            >
              Add
            </button>
            <button className='p-2 border bg-white hover:cursor-pointer transform hover:bg-blue-500 hover:text-white'
              onClick={() => {
                setTasks([]);
                setInprogress([]);
                setCompleted([]);
              }}
            >
              Reset
            </button>
          </div>

          <div className='m-5 bg-white w-[600px] p-2 h-130 overflow-y-auto'>
            <h1 className='text-[25px] font-bold pb-5'>Task List</h1>
            <ul className='list-disc pl-5'>
              {tasks.map((item, index) => (
                <li key={index} className='p-1 mb-1 pr-20 justify-between relative'>
                  <span className='wrap-break-word'>{item}</span>
                  <div className='absolute right-2 top-1 flex gap-1'>
                    <button
                      onClick={() => { addInProgress(item), removeTask(item, index, "tasks") }}
                    ><ArrowPathIcon className='h-5 w-5 hover:cursor-pointer text-blue-700' /></button>
                    <button
                      onClick={() => { addCompleted(item), removeTask(item, index, "tasks") }}
                    ><CheckIcon className='h-5 w-5 hover:cursor-pointer text-green-600' /></button>
                    <button
                      onClick={() => { removeTask(item, index, "tasks") }}
                    ><TrashIcon className='h-5 w-5 hover:cursor-pointer' /></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div >

        <div className='columns-2 p-2 flex gap-2 justify-center'>
          <div className='border p-1 h-160 w-[300px] overflow-y-auto bg-white break-inside-avoid'>
            <h1 className='text-center bg-amber-400 font-bold text-[18px] flex items-center justify-center'>
              InProgres
              <ArrowPathIcon className='inline m-2 h-5 w-5 text-blue-700' />
            </h1>
            <span>
              <ul className='list-disc pl-4'>
                {inprogress.map((item, index) => (
                  <li key={index} className='p-1 pr-8 m-1 relative'>
                    <span className='wrap-break-word'>{item}</span>
                    <div className='absolute right-2 top-1 flex gap-1'>
                      <button
                        onClick={() => { addCompleted(item), removeTask(item, index, "inprogress") }}
                      >
                        <CheckIcon className='h-5 w-5 hover:cursor-pointer text-green-600' />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </span>
          </div>

          <div className='border p-1 h-160 w-[300px] overflow-y-auto bg-white break-inside-avoid'>
            <h1 className='text-center bg-amber-400 font-bold text-[18px] flex items-center justify-center'>
              Completed
              <CheckIcon className='inline m-2 h-5 w-5 text-blue-700' />
            </h1>

            <span>
              <ul className='list-disc pl-4'>
                {completed.map((item, index) => (
                  <li key={index} className='p-1 pr-5 m-1'>
                    <span className='wrap-break-word'>{item}</span>
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
