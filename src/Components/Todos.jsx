import React, { useState } from "react";
import { useEffect } from "react";

export default function Todos() {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    const saveTodos = localStorage.getItem("todos");
    if (saveTodos) {
      settodos(JSON.parse(saveTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.length > 0 && input.length <= 40) {
      settodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setinput("");
    } else {
      if (input.length === 0) {
        alert("Todo cannot be empty!");
      } else if (input.length > 40) {
        alert("Todo is too long! Please keep it under 40 characters.");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start py-10 px-4">
        <h1 className="text-center text-4xl font-bold text-teal-400 mb-8">
          TaskSphere
        </h1>

        <div className="flex items-center justify-center space-x-4">
          <input
            type="text"
            value={input}
            className="w-[360px] py-3 px-4 bg-gray-800 text-white border-2 border-teal-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-700 placeholder-gray-400 transition-all duration-300 ease-in-out"
            placeholder="Enter your todo"
            onChange={(e) => setinput(e.target.value)}
          />

          <button
            onClick={addTodo}
            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
          >
            Add
          </button>
        </div>

        {todos.length === 0 ? (
          <p className="text-center text-gray-500 text-xl mt-5">
            No Todo Yet. Add your first task!
          </p>
        ) : (
          <ul className="mt-8 w-full max-w-md space-y-4">
            {todos.map((todoList) => (
              <li
                key={todoList.id}
                className="flex items-center justify-between bg-gray-800 border border-teal-600 rounded-lg py-3 px-4 shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todoList.completed}
                    onChange={() =>
                      settodos(
                        todos.map((t) =>
                          t.id === todoList.id
                            ? { ...t, completed: !t.completed }
                            : t
                        )
                      )
                    }
                  />
                  <span
                    className={`${
                      todoList.completed
                        ? "line-through text-gray-500"
                        : "text-white"
                    }`}
                  >
                    {todoList.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <p className="text-red-500 absolute bottom-0">
          (Made By Poison <br />
          Under Construction)
        </p>
      </div>
    </>
  );
}
