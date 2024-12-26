import React from 'react';
import Sidebar from './Sidebar'; 
import { Outlet } from 'react-router-dom';
import Todos from './Todos'; 
import DashBoard from './DashBoard';

export default function Landing() {
  return (
    <>
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 overflow-auto ">
      <Outlet />
      </div>
    </div>
    </>
  );
}
