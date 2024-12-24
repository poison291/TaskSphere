import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <div className="flex flex-col  bg-gradient-to-t from-purple-500 via-indigo-600 to-purple-400 w-64 h-screen relative">

      <div className="flex justify-around items-center p-2">
        <HiOutlineBars3 className='text-xl mt-1' />
        <h1 className='text-black font-bold text-xl font-mono ml-2 mt-2'>Task Sphere</h1>
      </div>


      <SignedIn>
        <div className="flex flex-col space-y-5 ml-8 mt-8 text-white ">
          <Link 
          className=' hover:bg-teal-500 py-2 rounded-lg mr-5'
          to='/todo'>Todo</Link>
          <Link 
          className=' hover:bg-teal-500 py-2 rounded-lg mr-5'
          to='/notepad'>Notepad</Link>
          <Link>Another Link</Link>
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
          <SignInButton/>
        </div>
      </SignedOut>
    </div>
  );
}
