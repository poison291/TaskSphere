import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
import { db } from "../Firebase/firebase";
import { addDoc, collection, getDocs, deleteDoc, doc, query, where  } from "firebase/firestore";

export default function Todos() {
  const [input, setinput] = useState("");
  const [todo, settodo] = useState([]);

  const {user} = useUser()
  const userId = user?.id
  console.log(userId)

  // Reading Data from Local Storage

  // Todo Add Function

  const addTodo = async () => {
    if (input.length > 0 && input.length <= 40) {
      try {
        const todoCollection = collection(db, "todos");

        await addDoc(todoCollection, {
          userId,
          title: input,
          time: Date.now(),
          completed: false,
        });

        settodo([...todo, {userId,  title: input, time: Date.now(), completed: false }]);
        setinput("");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      if (input.length === 0) {
        toast.error("Todo Cannot Be Empty");
      } else if (input.length > 40) {
        toast.error("Todo Must be Under 40 charcters Long!");
      }
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const todoquery = query(collection(db, "todos"), where("userId", "==", userId));
      const querySnapshot = await getDocs(todoquery);
      const todos = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      settodo(todos);
    };
    fetchTodos();
  });
  

  const deleteTodo = async(id) => {
      try {
        await deleteDoc(doc(db, "todos", id));
        settodo(todo.filter((item) => item.id !== id));
      } catch (error) {
        console.log(error.message)
      }
  };

  return (
    <>
      <div className="bg-[#212121] min-h-screen">
        {/* Input section */}
        <div className="flex justify-center items-center pt-10 pb-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Start Writing To Add Task"
            className="w-2/3 select-none sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-3 rounded-tl-lg rounded-bl-lg text-black bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500 shadow-lg transition-all ease-in-out duration-300"
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 py-4 px-5 rounded-tr-lg rounded-br-lg"
          >
            Add
          </button>
        </div>

        {/* Todo Listing section */}

        {todo.map((todo, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center bg-teal-600 rounded-lg mt-4 p-4 shadow-lg hover:bg-teal-800 transition duration-300 ease-in-out mx-64"
            >
              <h1 className="text-white font-mono text-lg flex-grow">
                {todo.title}
              </h1>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
              >
                <FaTrash />
              </button>
            </div>
          );
        })}
      </div>

      <ToastContainer />
    </>
  );
}
