import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { FcTodoList } from "react-icons/fc";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { useState } from 'react';

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse(!collapse);
    console.log(collapse);
  };

  return (
    <div className={`flex flex-col bg-[#171717] ${collapse ? 'w-16' : 'w-52'} h-screen relative select-none`}>
      <div className="flex justify-around items-center p-2">
        <HiOutlineBars3
          onClick={toggleCollapse}
          className="text-3xl mt-1 text-white cursor-pointer"
        />
        <h1 className="text-white font-bold text-xl font-mono ml-2 mt-2">{collapse ? '' : 'Vetra'}</h1>
      </div>

      <SignedIn>
        <div className="flex flex-col space-y-5 ml-4 mt-8 text-white">
          {/* Todo Icon Link */}
          <Link
            className="hover:bg-gray-500 py-2 rounded-lg flex items-center space-x-2"
            to="/todo"
          >
            <FcTodoList className="text-2xl" />
            {!collapse && <span>Todo</span>}
          </Link>

          {/* Notepad Icon Link */}
          <Link
            className="hover:bg-gray-500 py-2 rounded-lg flex items-center space-x-2"
            to="/notepad"
          >
            <LuNotepadText className="text-2xl" />
            {!collapse && <span>NotePad</span>}
          </Link>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex items-center justify-center">
            <UserButton />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col items-center justify-center mt-8 text-white">
          <p>Please sign in to access the content.</p>
          <SignInButton />
        </div>
      </SignedOut>
    </div>
  );
}
