import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'

export default function Todos() {
  const [input, setinput] = useState('')
  const [todo, settodo] = useState([])

  // Reading Data from Local Storage
  useEffect(() => {
    const savedData= localStorage.getItem('todos')
    if(savedData){
      settodo(JSON.parse(savedData))
    }
  }, [])

useEffect(() => {
  // Saving in Local Storage
  localStorage.setItem('todos', JSON.stringify(todo))
}, [todo])




  // Todo Add Function

  const addTodo = () => {
    if (input.length > 0 && input.length <= 40) {
      settodo([...todo, input]);
      console.log(todo)
      setinput('')
    }
    else {
      if (input.length === 0) {
        toast.error('Todo Cannot Be Empty')
      }
      else if (input.length > 40) {
        toast.error('Todo Must be Under 40 charcters Long!')
      }
    }
  }


  return (
    <>
      <div className="bg-gray-400 min-h-screen">
        {/* Input section */}
        <div className="flex justify-center items-center pt-10 pb-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Start Writing To Add Task"
            className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-3 rounded-tl-lg rounded-bl-lg text-black bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500 shadow-lg transition-all ease-in-out duration-300"
          />
          <button
            onClick={addTodo}
            className='bg-purple-600 py-3 px-5 rounded-tr-lg rounded-br-lg'>Add</button>
        </div>

        {/* Todo Listing section */}

        {
          todo.map((todo, index) => {
            return (
              <div key={index} className="flex flex-row items-center bg-gray-600 rounded-lg mx-10 mt-4 p-4 shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
              <h1 className="text-white font-mono text-lg">{todo}</h1>
            </div>
            
            )
          })
        }

      </div>




      <ToastContainer />
    </>
  )
}
