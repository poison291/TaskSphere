import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Auth/Login';  
import Landing from '../Components/Landing';  
import Todos from '../Components/Todos';  
import Notepad from '../Components/Notepad';
import DashBoard from '../Components/DashBoard';

export default function Routing() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Landing />,  
            children: [
                {
                    path: 'todo',
                    element: <Todos />  
                },
                {
                  path: 'notepad',
                  element: <Notepad/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login />  
        },
        {
            path: '/test',
            element: <DashBoard/>
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}
