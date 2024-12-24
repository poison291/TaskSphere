import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from 'react';

export default function Sidebar() {
const [collapse, setcollapse] = useState(false)

const toggleCollapse = () => {
  setcollapse(!collapse)
  console.log(collapse)
}

  return (
    <div className={`flex flex-col  bg-[#171717] ${collapse ? 'w-12' : 'w-64'}  h-screen relative select-none`}>

      <div className="flex justify-around items-center p-2">
        <HiOutlineBars3
        onClick={toggleCollapse}
        className='text-xl mt-1 text-white' />
        <h1 className='text-white font-bold text-xl font-mono ml-2 mt-2'>{collapse ? '' : 'Task Sphere'}</h1>
      </div>


      <SignedIn>
        <div className="flex flex-col space-y-5 ml-8 mt-8 text-white ">
          <Link 
          className=' hover:bg-teal-500 py-2 rounded-lg mr-5'
          to='/todo'>{collapse ? '' : 'Todo'}</Link>
          <Link 
          className=' hover:bg-teal-500 py-2 rounded-lg mr-5'
          to='/notepad'>{collapse ? '' : 'NotePad'}</Link>
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
